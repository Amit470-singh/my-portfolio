"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  RotateCcw,
  Bot,
  User,
  Copy,
  Check,
  ArrowDown,
  Terminal,
  AlertCircle,
} from "lucide-react";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: string;
}

const INITIAL_GREETING: ChatMessage = {
  id: "greeting-0",
  role: "assistant",
  content:
    "Hello! I am **Amit Singh's AI Assistant** 👋\n\nI can answer questions about Amit's skills (Next.js, React, Node.js, Java), his featured **CampusHub** project, background, or how to get in touch with him.\n\nWhat would you like to know?",
  timestamp: "Just now",
};

const SUGGESTED_QUESTIONS = [
  "What are Amit's core technical skills?",
  "Tell me about the CampusHub project",
  "How can I contact or hire Amit?",
  "What is Amit's education and journey?",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_GREETING]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [hasUnread, setHasUnread] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
      // Auto-focus input on open
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen, messages]);

  // Copy message text helper
  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Reset chat history
  const handleReset = () => {
    setMessages([
      {
        ...INITIAL_GREETING,
        id: `greeting-${Date.now()}`,
        timestamp: "Just now",
      },
    ]);
    setErrorMessage(null);
  };

  // Send message and stream real-time response
  const handleSendMessage = async (textToSend?: string) => {
    const messageContent = (textToSend || inputMessage).trim();
    if (!messageContent || isLoading) return;

    setErrorMessage(null);
    setInputMessage("");

    const now = new Date();
    const timeString = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: messageContent,
      timestamp: timeString,
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setIsLoading(true);

    const assistantMessageId = `assistant-${Date.now()}`;
    // Temporary placeholder assistant message for streaming
    setMessages((prev) => [
      ...prev,
      {
        id: assistantMessageId,
        role: "assistant",
        content: "",
        timestamp: timeString,
      },
    ]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      if (!response.body) {
        throw new Error("No response body returned from server");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let accumulatedText = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        accumulatedText += chunk;

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMessageId
              ? { ...msg, content: accumulatedText }
              : msg
          )
        );
      }

      if (!isOpen) {
        setHasUnread(true);
      }
    } catch (err: unknown) {
      console.error("Chat error:", err);
      const errorText =
        err instanceof Error ? err.message : "Failed to receive response";
      setErrorMessage("Network or server connection issue. Please retry.");
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantMessageId
            ? {
                ...msg,
                content:
                  "I encountered a temporary connection issue. Please check your internet or retry sending your message.",
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Simple Markdown renderer for chat responses
  const renderFormattedContent = (content: string) => {
    const lines = content.split("\n");
    return lines.map((line, idx) => {
      // Empty line
      if (!line.trim()) {
        return <div key={idx} className="h-2" />;
      }

      // Heading 3 ###
      if (line.startsWith("### ")) {
        return (
          <h4
            key={idx}
            className="font-display-heading font-black text-sm uppercase tracking-wider text-[var(--accent)] mt-2 mb-1"
          >
            {line.replace("### ", "")}
          </h4>
        );
      }

      // Bullet points
      if (line.startsWith("* ") || line.startsWith("- ") || line.startsWith("• ")) {
        const bulletText = line.replace(/^(\*|-|•)\s*/, "");
        return (
          <div key={idx} className="flex items-start gap-1.5 my-1 text-xs">
            <span className="text-[var(--accent)] font-bold mt-0.5">•</span>
            <span>{renderInlineStyles(bulletText)}</span>
          </div>
        );
      }

      // Regular line
      return (
        <p key={idx} className="text-xs leading-relaxed my-1">
          {renderInlineStyles(line)}
        </p>
      );
    });
  };

  // Helper for **bold** and [links](url)
  const renderInlineStyles = (text: string) => {
    // Regex splits by bold and markdown links
    const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-bold text-[var(--text-primary)]">
            {part.slice(2, -2)}
          </strong>
        );
      }
      const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
      if (linkMatch) {
        return (
          <a
            key={i}
            href={linkMatch[2]}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--accent)] underline font-bold hover:text-black dark:hover:text-white transition-colors"
          >
            {linkMatch[1]}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <>
      {/* Floating Trigger Button in Bottom-Right Corner */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              {/* Unread indicator pulse badge */}
              {hasUnread && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 z-10">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border border-black" />
                </span>
              )}

              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2.5 px-4 py-3 bg-[#FFE500] text-black border-2 border-[var(--border-color)] shadow-[4px_4px_0px_var(--shadow-color)] hover:bg-[var(--accent)] hover:text-white hover:-translate-y-1 hover:shadow-[6px_6px_0px_var(--shadow-color)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_var(--shadow-color)] transition-all duration-200 cursor-pointer font-mono-code font-black text-xs uppercase tracking-wider group"
                aria-label="Open AI Chatbot"
                title="Chat with Amit's AI Assistant"
              >
                <div className="relative">
                  <Bot className="w-5 h-5 text-black group-hover:text-white transition-colors" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-emerald-500 rounded-full border border-black animate-pulse" />
                </div>
                <span className="hidden sm:inline">ASK AMIT AI</span>
                <span className="px-1.5 py-0.2 bg-black text-[#FFE500] text-[9px] font-black border border-black group-hover:bg-white group-hover:text-black transition-colors">
                  LIVE
                </span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expandable Chat Window */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="w-[92vw] sm:w-[420px] h-[550px] max-h-[85vh] bg-[var(--card-bg)] border-2 border-[var(--border-color)] shadow-[8px_8px_0px_var(--shadow-color)] flex flex-col overflow-hidden transition-colors duration-250"
            >
              {/* Window Header */}
              <div className="bg-[#FFE500] text-black border-b-2 border-[var(--border-color)] px-4 py-3 flex items-center justify-between select-none">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-black text-[#FFE500] border border-black flex items-center justify-center font-mono-code font-black text-xs">
                    AS
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-display-heading font-black text-sm uppercase tracking-tight text-black">
                        Amit AI Assistant
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse border border-black" />
                    </div>
                    <div className="font-mono-code text-[10px] text-neutral-800 font-bold uppercase tracking-wider">
                      Next.js • React • Node.js • Java
                    </div>
                  </div>
                </div>

                {/* Header Actions */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleReset}
                    className="p-1.5 hover:bg-black hover:text-[#FFE500] border border-black/40 text-black transition-colors cursor-pointer"
                    title="Clear Chat History"
                    aria-label="Clear Chat History"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 hover:bg-black hover:text-[#FFE500] border border-black/40 text-black transition-colors cursor-pointer"
                    title="Close Chat"
                    aria-label="Close Chat"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Chat Sub-Banner */}
              <div className="px-3.5 py-1.5 bg-[var(--card-bg-subtle)] border-b border-[var(--border-subtle)] flex items-center justify-between font-mono-code text-[10px] text-[var(--text-secondary)]">
                <span className="flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-[var(--accent)]" />
                  <span>Interactive Portfolio Agent</span>
                </span>
                <span className="text-[var(--text-primary)] font-bold">
                  Chandigarh, IN
                </span>
              </div>

              {/* Messages Container */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[var(--bg-main)]">
                {messages.map((msg) => {
                  const isUser = msg.role === "user";
                  return (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${
                        isUser ? "items-end" : "items-start"
                      }`}
                    >
                      {/* Sender Tag & Timestamp */}
                      <div className="flex items-center gap-1.5 mb-1 px-1 font-mono-code text-[10px] text-[var(--text-secondary)]">
                        {isUser ? (
                          <>
                            <span>{msg.timestamp}</span>
                            <span className="font-bold text-[var(--text-primary)]">
                              YOU
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="font-bold text-[var(--accent)]">
                              AMIT AI
                            </span>
                            <span>{msg.timestamp}</span>
                          </>
                        )}
                      </div>

                      {/* Message Bubble */}
                      <div
                        className={`relative max-w-[88%] p-3.5 border-2 border-[var(--border-color)] text-xs font-sans ${
                          isUser
                            ? "bg-[#FFE500] text-black shadow-[3px_3px_0px_var(--shadow-color)]"
                            : "bg-[var(--card-bg)] text-[var(--text-primary)] shadow-[3px_3px_0px_var(--shadow-color)]"
                        }`}
                      >
                        {isUser ? (
                          <p className="leading-relaxed whitespace-pre-wrap font-medium">
                            {msg.content}
                          </p>
                        ) : (
                          <div>
                            {msg.content ? (
                              renderFormattedContent(msg.content)
                            ) : (
                              <div className="flex items-center gap-1.5 py-1 text-[var(--text-secondary)] font-mono-code">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-bounce" />
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-bounce [animation-delay:0.15s]" />
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-bounce [animation-delay:0.3s]" />
                                <span className="text-[11px] ml-1">
                                  Thinking...
                                </span>
                              </div>
                            )}

                            {/* Copy button for assistant responses */}
                            {msg.content && (
                              <div className="mt-2 pt-2 border-t border-[var(--border-subtle)] flex justify-end">
                                <button
                                  onClick={() => handleCopy(msg.content, msg.id)}
                                  className="inline-flex items-center gap-1 text-[10px] font-mono-code font-bold text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors cursor-pointer"
                                  title="Copy response"
                                >
                                  {copiedId === msg.id ? (
                                    <>
                                      <Check className="w-3 h-3 text-emerald-500" />
                                      <span>COPIED</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-3 h-3" />
                                      <span>COPY</span>
                                    </>
                                  )}
                                </button>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}

                {/* Error Banner if any */}
                {errorMessage && (
                  <div className="p-2.5 bg-red-100 dark:bg-red-950/40 border-2 border-red-500 text-red-700 dark:text-red-300 font-mono-code text-xs flex items-center justify-between gap-2 shadow-[2px_2px_0px_rgba(239,68,68,1)]">
                    <div className="flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                    <button
                      onClick={() => handleSendMessage(messages[messages.length - 2]?.content)}
                      className="px-2 py-0.5 bg-red-500 text-white font-bold uppercase hover:bg-red-600 transition-colors cursor-pointer text-[10px]"
                    >
                      RETRY
                    </button>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Prompt Chips */}
              <div className="p-2 bg-[var(--card-bg-subtle)] border-t border-[var(--border-subtle)] overflow-x-auto">
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  {SUGGESTED_QUESTIONS.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(q)}
                      disabled={isLoading}
                      className="px-2.5 py-1 bg-[var(--card-bg)] text-[var(--text-primary)] border border-[var(--border-color)] font-mono-code text-[10px] font-bold uppercase tracking-wider hover:bg-[#FFE500] hover:text-black transition-colors cursor-pointer disabled:opacity-50 shrink-0"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Input Bar */}
              <div className="p-3 bg-[var(--card-bg)] border-t-2 border-[var(--border-color)]">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about skills, projects, contact..."
                    disabled={isLoading}
                    className="flex-1 px-3 py-2.5 bg-[var(--bg-main)] text-[var(--text-primary)] border-2 border-[var(--border-color)] font-sans text-xs focus:outline-none focus:border-[var(--accent)] focus:shadow-[2px_2px_0px_var(--shadow-color)] transition-all"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !inputMessage.trim()}
                    className="px-3.5 py-2.5 bg-[#FFE500] text-black border-2 border-[var(--border-color)] font-mono-code font-bold text-xs uppercase shadow-[2px_2px_0px_var(--shadow-color)] hover:bg-[var(--accent)] hover:text-white hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_var(--shadow-color)] active:translate-x-0.5 active:translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer flex items-center justify-center gap-1"
                    aria-label="Send message"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
                <div className="mt-1 flex items-center justify-between font-mono-code text-[9px] text-[var(--text-secondary)] px-0.5">
                  <span>Enter to send</span>
                  <span>Gemini AI Engine</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

