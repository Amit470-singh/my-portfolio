import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/config/portfolio";
import { ThemeProvider } from "@/context/ThemeContext";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Amit Singh — Software Developer",
  description:
    "Personal portfolio of Amit Singh, a software developer and B.Tech student from Chandigarh.",
  keywords: [
    "Amit Singh",
    "Software Developer",
    "Chandigarh India",
    "B.Tech Student",
    "CampusHub",
    "React",
    "Next.js",
    "Node.js",
    "Java",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.contact.linkedin }],
  openGraph: {
    title: "Amit Singh — Software Developer",
    description:
      "Personal portfolio of Amit Singh, a software developer and B.Tech student from Chandigarh.",
    type: "website",
    locale: "en_US",
    siteName: "Amit Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amit Singh — Software Developer",
    description:
      "Personal portfolio of Amit Singh, a software developer and B.Tech student from Chandigarh.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${displayFont.variable} ${monoFont.variable} ${sansFont.variable} scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] antialiased transition-colors duration-280">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
