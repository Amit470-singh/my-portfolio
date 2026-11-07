"use client";

import React, { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/config/portfolio";
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <button
      onClick={(e) => toggleTheme(e)}
      suppressHydrationWarning
      className={`relative p-2.5 bg-[var(--card-bg)] text-[var(--text-primary)] border-2 border-[var(--border-color)] shadow-[2.5px_2.5px_0px_var(--shadow-color)] hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] hover:-translate-y-0.5 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all duration-250 cursor-pointer flex items-center justify-center group ${className}`}
      aria-label={mounted ? `Switch to ${theme === "light" ? "Dark" : "Light"} Mode` : "Toggle Theme"}
      title={mounted ? `Switch to ${theme === "light" ? "Dark" : "Light"} Mode` : "Toggle Theme"}
    >
      {!mounted ? (
        <span className="w-4 h-4 block" />
      ) : theme === "dark" ? (
        <Moon className="w-4 h-4 text-[#FF8C00] group-hover:text-white transition-all duration-250" />
      ) : (
        <Sun className="w-4 h-4 text-[#FF8C00] group-hover:text-white transition-all duration-250" />
      )}
    </button>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "WORK", href: "#work" },
    { name: "SKILLS", href: "#skills" },
    { name: "JOURNEY", href: "#journey" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-250 border-b-2 border-[var(--border-color)] bg-[var(--bg-main)] ${
        isScrolled ? "shadow-[0_4px_0_0_var(--shadow-color)]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand / Name on Left: AMIT SINGH */}
        <a
          href="#"
          className="group flex items-center gap-3 py-1 focus:outline-none"
        >
          <div className="w-10 h-10 bg-[#FFE500] border-2 border-[var(--border-color)] flex items-center justify-center font-mono-code font-black text-sm text-black shadow-[2px_2px_0px_var(--shadow-color)] group-hover:bg-[var(--accent)] group-hover:text-white group-hover:-translate-y-0.5 group-hover:shadow-[3px_3px_0px_var(--shadow-color)] transition-all duration-250 ease-out">
            {SITE_CONFIG.initials}
          </div>
          <div className="flex flex-col">
            <span className="font-display-heading text-lg sm:text-xl font-black tracking-tight uppercase text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-250 ease-out">
              {SITE_CONFIG.name}
            </span>
            <span className="hidden sm:flex items-center gap-1.5 font-mono-code text-[10px] text-[var(--text-secondary)] uppercase tracking-wider font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
              SOFTWARE DEVELOPER • CHANDIGARH
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono-code text-xs lg:text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] hover:text-[var(--accent)] hover:-translate-y-0.5 transition-all duration-250 ease-out relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--accent)] hover:after:w-full after:transition-all after:duration-250"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action: Theme Toggle + LET'S TALK */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          {/* Light/Dark Switcher */}
          <ThemeToggle />

          {/* Desktop CTA Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--border-color)] text-[var(--bg-main)] dark:bg-white dark:text-[#0A0A0A] font-mono-code text-xs font-bold uppercase tracking-wider border-2 border-[var(--border-color)] shadow-[3px_3px_0px_#FFE500] hover:bg-[var(--accent)] hover:text-white dark:hover:bg-[var(--accent)] dark:hover:text-white hover:-translate-y-[3px] hover:shadow-[5px_5px_0px_var(--shadow-color)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#FFE500] transition-all duration-250 ease-out group"
          >
            <span>LET&apos;S TALK</span>
            <ArrowRight className="w-4 h-4 text-[#FFE500] group-hover:text-white group-hover:translate-x-0.5 transition-all duration-250" />
          </a>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 bg-[var(--card-bg)] text-[var(--text-primary)] border-2 border-[var(--border-color)] shadow-[2px_2px_0px_var(--shadow-color)] hover:bg-[#FFE500] hover:text-black hover:-translate-y-0.5 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all duration-250 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-[var(--border-color)] bg-[var(--bg-main)] px-5 py-6 shadow-[0_8px_0_0_var(--shadow-color)] animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3.5">
            <div className="pb-2 border-b border-[var(--border-subtle)] flex items-center justify-between">
              <span className="font-mono-code text-xs font-bold text-[var(--text-secondary)] uppercase tracking-widest">
                NAVIGATION
              </span>
              <span className="inline-flex items-center gap-1 font-mono-code text-[11px] font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 border border-emerald-400 dark:border-emerald-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                AVAILABLE FOR ROLES
              </span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3.5 bg-[var(--card-bg)] text-[var(--text-primary)] border-2 border-[var(--border-color)] font-mono-code text-sm font-bold uppercase tracking-wider shadow-[2px_2px_0px_var(--shadow-color)] hover:bg-[var(--accent)] hover:text-white hover:translate-x-1 transition-all duration-250 ease-out group"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-250" />
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 py-3 bg-[var(--border-color)] text-[var(--bg-main)] dark:bg-white dark:text-black font-mono-code text-sm font-bold uppercase tracking-wider border-2 border-[var(--border-color)] shadow-[4px_4px_0px_#FFE500] hover:bg-[var(--accent)] hover:text-white transition-all duration-250"
            >
              <span>LET&apos;S TALK</span>
              <ArrowRight className="w-4 h-4 text-[#FFE500]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
