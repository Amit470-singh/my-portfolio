"use client";

import React from "react";
import { SITE_CONFIG } from "@/config/portfolio";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t-2 border-[var(--border-color)] bg-[var(--bg-main)] py-14 transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Name, Role & Location */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-display-heading text-2xl font-black text-[var(--text-primary)] uppercase tracking-tight">
              {SITE_CONFIG.name}
            </span>
            <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--accent)] mt-0.5">
              {SITE_CONFIG.role}
            </span>
            <span className="font-mono-code text-xs text-[var(--text-secondary)] mt-0.5">
              {SITE_CONFIG.location}
            </span>
            <div className="font-mono-code text-xs text-[var(--text-secondary)] mt-2">
              &copy; 2026 Amit Singh. All rights reserved.
            </div>
          </div>

          {/* Center Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--card-bg)] text-[var(--text-primary)] border-2 border-[var(--border-color)] shadow-[3px_3px_0px_var(--shadow-color)] font-mono-code text-xs font-black uppercase tracking-wider hover:bg-[#FFE500] hover:text-black hover:border-black hover:-translate-y-0.5 transition-all duration-250 cursor-default">
            <span>[ BUILT WITH CODE + PASSION ]</span>
          </div>

          {/* Right: Social Links & Back to Top */}
          <div className="flex items-center gap-5 font-mono-code text-xs font-bold uppercase tracking-wider">
            <a
              href={SITE_CONFIG.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--text-primary)] hover:text-[var(--accent)] hover:-translate-y-0.5 transition-all duration-250 underline decoration-2 underline-offset-4"
            >
              LINKEDIN
            </a>
            <span className="text-[var(--text-secondary)]">•</span>
            <a
              href={SITE_CONFIG.contact.github}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--text-primary)] hover:text-[var(--accent)] hover:-translate-y-0.5 transition-all duration-250 underline decoration-2 underline-offset-4"
            >
              GITHUB
            </a>
            <span className="text-[var(--text-secondary)]">•</span>
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="text-[var(--text-primary)] hover:text-[var(--accent)] hover:-translate-y-0.5 transition-all duration-250 underline decoration-2 underline-offset-4"
            >
              EMAIL
            </a>
            <span className="text-[var(--text-secondary)]">•</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 bg-[var(--card-bg)] text-[var(--text-primary)] border-2 border-[var(--border-color)] shadow-[2px_2px_0px_var(--shadow-color)] hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] hover:-translate-y-[3px] hover:shadow-[4px_4px_0px_var(--shadow-color)] transition-all duration-250 flex items-center gap-1 cursor-pointer group"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-[var(--text-primary)] group-hover:text-white transition-colors duration-250" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
