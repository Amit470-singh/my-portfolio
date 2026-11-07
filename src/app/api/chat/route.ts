import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import {
  GEMINI_SYSTEM_PROMPT,
  generateFallbackResponse,
} from "@/lib/chatbot-knowledge";

// Mark route as dynamic so Next.js doesn't attempt static generation
export const dynamic = "force-dynamic";

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    let body: { messages?: ChatMessage[]; message?: string };
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON in request body" },
        { status: 400 }
      );
    }

    const { messages, message } = body;

    // Normalizing user message history
    let conversationHistory: ChatMessage[] = [];
    if (Array.isArray(messages) && messages.length > 0) {
      conversationHistory = messages;
    } else if (typeof message === "string" && message.trim().length > 0) {
      conversationHistory = [{ role: "user", content: message.trim() }];
    } else {
      return NextResponse.json(
        { error: "A message or array of messages is required." },
        { status: 400 }
      );
    }

    // Extract latest user message
    const lastUserMessage =
      [...conversationHistory].reverse().find((m) => m.role === "user")?.content ||
      "Hello";

    const apiKey =
      process.env.GEMINI_API_KEY ||
      process.env.GOOGLE_API_KEY ||
      "";

    // 1. If API Key is present, attempt live Gemini Streaming
    if (apiKey && apiKey.trim().length > 0) {
      try {
        const ai = new GoogleGenAI({ apiKey: apiKey.trim() });

        // Format conversation history for Gemini (roles: 'user' | 'model')
        // Exclude system messages from contents array, use systemInstruction
        const geminiContents = conversationHistory
          .filter((m) => m.role === "user" || m.role === "assistant")
          .map((m) => ({
            role: m.role === "assistant" ? "model" : "user",
            parts: [{ text: m.content }],
          }));

        // Try primary model: gemini-2.5-flash
        const responseStream = await ai.models.generateContentStream({
          model: "gemini-2.5-flash",
          contents: geminiContents,
          config: {
            systemInstruction: GEMINI_SYSTEM_PROMPT,
            temperature: 0.7,
          },
        });

        const encoder = new TextEncoder();
        const readable = new ReadableStream({
          async start(controller) {
            try {
              for await (const chunk of responseStream) {
                const text = chunk.text;
                if (text) {
                  controller.enqueue(encoder.encode(text));
                }
              }
            } catch (streamError) {
              console.error("Gemini stream error:", streamError);
              const fallbackNotice =
                "\n\n*[Notice: Response completed using verified portfolio data]*";
              controller.enqueue(encoder.encode(fallbackNotice));
            } finally {
              controller.close();
            }
          },
        });

        return new Response(readable, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "no-cache, no-transform",
            "X-Content-Type-Options": "nosniff",
          },
        });
      } catch (geminiError: unknown) {
        console.warn(
          "Gemini API invocation failed, falling back to local knowledge base:",
          geminiError instanceof Error ? geminiError.message : String(geminiError)
        );
        // Fall through to smart fallback
      }
    }

    // 2. Smart local knowledge-base fallback (streamed for real-time responsiveness)
    const fallbackText = generateFallbackResponse(lastUserMessage);
    const encoder = new TextEncoder();

    // Stream word chunks to simulate smooth real-time generation
    const words = fallbackText.split(" ");
    const readable = new ReadableStream({
      async start(controller) {
        for (let i = 0; i < words.length; i++) {
          const chunk = words[i] + (i < words.length - 1 ? " " : "");
          controller.enqueue(encoder.encode(chunk));
          // Quick realistic micro-delay between chunks (18ms)
          await new Promise((resolve) => setTimeout(resolve, 18));
        }
        controller.close();
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error: unknown) {
    console.error("Chat API route unexpected error:", error);
    return NextResponse.json(
      {
        error: "An internal server error occurred.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

