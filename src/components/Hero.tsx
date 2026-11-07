"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/config/portfolio";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  MapPin,
  GraduationCap,
} from "lucide-react";

function HandArrow({ className = "w-12 h-12 text-[#FF5722]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 22C18 12 36 10 48 24C52 28 54 36 48 44C44 50 34 52 26 48C20 44 18 36 24 30C32 22 46 26 54 34"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M44 38L55 35L52 46"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StampBadge({ text = "VERIFIED BUILDER", color = "yellow" }: { text?: string; color?: "yellow" | "orange" | "cream" }) {
  const bgClass =
    color === "orange"
      ? "bg-[#FF5722] text-white border-black"
      : color === "cream"
      ? "bg-[#FAF7EE] text-[#0A0A0A] border-black"
      : "bg-[#FFE500] text-[#0A0A0A] border-black";

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-1 font-mono-code text-[11px] font-bold uppercase tracking-wider border-2 ${bgClass} shadow-[2px_2px_0px_#0A0A0A] rotate-[-2deg] select-none`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping" />
      <span>{text}</span>
    </div>
  );
}

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"preview" | "manga" | "code">("preview");
  const [mangaViewMode, setMangaViewMode] = useState<"manga" | "original">("manga");
  const { hero } = SITE_CONFIG;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-grid-pattern">
      {/* Decorative Stamp in Corner */}
      <div className="absolute top-4 right-4 sm:right-12 hidden lg:block pointer-events-none">
        <StampBadge text="AMIT SINGH • DEV 2026" color="yellow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Metadata Badges Strip */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FFE500] text-black border-2 border-[var(--border-color)] shadow-[3px_3px_0px_var(--shadow-color)] font-mono-code text-xs font-black tracking-wider uppercase rotate-[-1deg] hover:bg-[var(--accent)] hover:text-white hover:-translate-y-0.5 transition-all duration-250 cursor-default">
            <span className="w-2 h-2 rounded-full bg-black inline-block animate-ping" />
            <span>{hero.metadata[2]}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[var(--card-bg)] text-[var(--text-primary)] border-2 border-[var(--border-color)] shadow-[2px_2px_0px_var(--shadow-color)] font-mono-code text-xs font-bold uppercase hover:bg-[var(--card-bg-hover)] hover:-translate-y-0.5 transition-all duration-250 cursor-default">
            <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>{hero.metadata[0]}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[var(--card-bg)] text-[var(--text-primary)] border-2 border-[var(--border-color)] shadow-[2px_2px_0px_var(--shadow-color)] font-mono-code text-xs font-bold uppercase hover:bg-[var(--card-bg-hover)] hover:-translate-y-0.5 transition-all duration-250 cursor-default">
            <GraduationCap className="w-3.5 h-3.5 text-[var(--text-primary)]" />
            <span>{hero.metadata[1]}</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Huge Oversized Typography & Intro (7 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start z-10"
          >
            {/* Huge Headline: HELLO, I'M AMIT. SOFTWARE DEVELOPER. */}
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="font-display-heading text-5xl sm:text-7xl lg:text-8xl xl:text-[5.75rem] font-black leading-[0.92] tracking-tighter uppercase text-[var(--text-primary)]">
                <span className="block">{hero.line1}</span>
                <span className="block">{hero.line2}</span>
                <span className="block mt-2 relative inline-block">
                  <span className="relative z-10">{hero.line3}</span>
                  <span className="absolute left-0 bottom-1 sm:bottom-2 w-full h-3 sm:h-5 bg-[#FFE500] dark:bg-[#FF8C00]/40 -z-0 -rotate-1" />
                </span>
                <span className="block text-[var(--accent)]">{hero.line4}</span>
              </h1>
            </motion.div>

            {/* Short Introduction Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-[var(--text-secondary)] font-sans leading-relaxed max-w-2xl mb-8 font-medium"
            >
              {hero.intro}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--border-color)] text-[var(--bg-main)] dark:bg-white dark:text-[#0A0A0A] font-mono-code text-sm font-bold uppercase tracking-wider border-2 border-[var(--border-color)] shadow-[5px_5px_0px_#FFE500] hover:bg-[var(--accent)] hover:text-white dark:hover:bg-[var(--accent)] dark:hover:text-white hover:-translate-y-[3px] hover:shadow-[7px_7px_0px_var(--shadow-color)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_#FFE500] transition-all duration-250 ease-out group"
              >
                <span>{hero.ctaWork}</span>
                <ArrowRight className="w-4 h-4 text-[#FFE500] dark:text-[#FF8C00] group-hover:text-white group-hover:translate-x-1 transition-all duration-250" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--card-bg)] text-[var(--text-primary)] font-mono-code text-sm font-bold uppercase tracking-wider border-2 border-[var(--border-color)] shadow-[4px_4px_0px_var(--shadow-color)] hover:bg-[#FFE500] hover:text-[#0A0A0A] hover:-translate-y-[3px] hover:shadow-[6px_6px_0px_var(--shadow-color)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_var(--shadow-color)] transition-all duration-250 ease-out group"
              >
                <span>{hero.ctaConnect}</span>
                <ArrowUpRight className="w-4 h-4 text-[var(--accent)] group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-250" />
              </a>
            </motion.div>

            {/* Creative Arrow Callout */}
            <motion.div
              variants={itemVariants}
              className="hidden sm:flex items-center gap-2 mt-8 text-[var(--text-secondary)] font-mono-code text-xs"
            >
              <HandArrow className="w-8 h-8 text-[var(--accent)] -rotate-12" />
              <span className="font-semibold tracking-wide bg-[var(--card-bg)] text-[var(--text-primary)] px-3 py-1.5 border border-[var(--border-color)] shadow-[1px_1px_0px_var(--shadow-color)]">
                Featured project:{" "}
                <strong className="text-[var(--text-primary)] underline decoration-[var(--accent)] decoration-2">
                  CampusHub
                </strong>{" "}
                detailed below
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: Creative Visual Element (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Playful background offset decorative card */}
            <div className="absolute inset-0 bg-[#FFE500] dark:bg-[var(--accent)]/40 border-2 border-[var(--border-color)] translate-x-3 translate-y-3 lg:translate-x-4 lg:translate-y-4 -z-10 transition-colors duration-250" />

            {/* Main Framed Window */}
            <div className="relative bg-[var(--card-bg)] border-2 border-[var(--border-color)] shadow-[8px_8px_0px_var(--shadow-color)] overflow-hidden transition-all duration-250">
              {/* Window Titlebar */}
              <div className="bg-[var(--card-bg-subtle)] border-b-2 border-[var(--border-color)] px-4 py-3 flex items-center justify-between transition-colors duration-250">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5722] border border-black/40" />
                  <span className="w-3 h-3 rounded-full bg-[#FFE500] border border-black/40" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400 border border-black/40" />
                  <span className="ml-2 font-mono-code text-[11px] font-bold text-[var(--text-primary)] uppercase tracking-wider">
                    amit-singh.dev
                  </span>
                </div>

                {/* View Switcher Pills */}
                <div className="flex border border-[var(--border-color)] bg-[var(--card-bg)]">
                  <button
                    onClick={() => setActiveTab("preview")}
                    className={`px-2.5 sm:px-3 py-1 font-mono-code text-[10px] font-bold uppercase transition-colors duration-200 cursor-pointer ${
                      activeTab === "preview"
                        ? "bg-[var(--border-color)] text-[var(--bg-main)] dark:bg-white dark:text-black"
                        : "text-[var(--text-primary)] hover:bg-[#FFE500] hover:text-black"
                    }`}
                  >
                    PROFILE
                  </button>
                  <button
                    onClick={() => setActiveTab("manga")}
                    className={`px-2.5 sm:px-3 py-1 font-mono-code text-[10px] font-bold uppercase transition-colors duration-200 border-l border-[var(--border-color)] cursor-pointer flex items-center gap-1.5 ${
                      activeTab === "manga"
                        ? "bg-[#FFE500] text-black dark:bg-[#FFE500] dark:text-black"
                        : "text-[var(--text-primary)] hover:bg-[#FFE500] hover:text-black"
                    }`}
                  >
                    <span>MANGA ART</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] inline-block animate-pulse" />
                  </button>
                  <button
                    onClick={() => setActiveTab("code")}
                    className={`px-2.5 sm:px-3 py-1 font-mono-code text-[10px] font-bold uppercase transition-colors duration-200 border-l border-[var(--border-color)] cursor-pointer ${
                      activeTab === "code"
                        ? "bg-[var(--border-color)] text-[var(--bg-main)] dark:bg-white dark:text-black"
                        : "text-[var(--text-primary)] hover:bg-[#FFE500] hover:text-black"
                    }`}
                  >
                    CODE
                  </button>
                </div>
              </div>

              {/* Window Body */}
              <div className="p-5 sm:p-6 bg-[var(--card-bg)] min-h-[410px] flex flex-col justify-between transition-colors duration-250">
                {activeTab === "preview" ? (
                  <div className="space-y-4">
                    {/* Developer Identity Card with Manga Avatar */}
                    <div className="p-3.5 sm:p-4 bg-[var(--card-bg-subtle)] border-2 border-[var(--border-color)] hover:bg-[var(--card-bg-hover)] hover:-translate-y-[2px] hover:shadow-[4px_4px_0px_var(--shadow-color)] transition-all duration-250 cursor-default">
                      <div className="flex items-start gap-3 sm:gap-4">
                        {/* Manga Avatar Frame */}
                        <div
                          onClick={() => setActiveTab("manga")}
                          className="relative shrink-0 cursor-pointer group/avatar"
                          title="Click to view full Manga Art poster"
                        >
                          <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-[var(--border-color)] bg-black overflow-hidden shadow-[3px_3px_0px_var(--shadow-color)] group-hover/avatar:scale-105 group-hover/avatar:-rotate-2 transition-all duration-250 relative">
                            <img
                              src={SITE_CONFIG.mangaAvatar}
                              alt={`${SITE_CONFIG.name} Manga Style Avatar`}
                              className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute bottom-0 inset-x-0 bg-[#FFE500] text-black text-[8px] sm:text-[9px] font-mono-code font-black text-center border-t border-[var(--border-color)] py-0.5 tracking-wider uppercase">
                              MANGA ED.
                            </div>
                          </div>
                          <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border border-black animate-ping" />
                          <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border border-black" />
                        </div>

                        {/* Identity Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1 mb-1">
                            <span className="font-mono-code text-xs font-black text-[var(--text-primary)] truncate">
                              {SITE_CONFIG.name}
                            </span>
                            <span className="px-2 py-0.5 bg-[#FFE500] text-black border border-[var(--border-color)] font-mono-code text-[10px] font-black uppercase shrink-0">
                              3RD YEAR
                            </span>
                          </div>
                          <div className="font-display-heading text-lg sm:text-xl font-bold text-[var(--text-primary)] uppercase tracking-tight truncate">
                            Software Developer
                          </div>
                          <div className="font-mono-code text-[11px] text-[var(--text-secondary)] mt-0.5 truncate">
                            Chandigarh, India • B.Tech (2024–2028)
                          </div>
                          <button
                            type="button"
                            onClick={() => setActiveTab("manga")}
                            className="mt-2 inline-flex items-center gap-1 font-mono-code text-[10px] font-bold text-[var(--accent)] hover:underline cursor-pointer"
                          >
                            <span>⚡ VIEW MANGA POSTER</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Featured Project Teaser Pill */}
                    <a
                      href="#work"
                      className="block p-3.5 bg-[var(--card-bg-subtle)] border-2 border-[var(--border-color)] shadow-[3px_3px_0px_var(--shadow-color)] hover:bg-[var(--accent)] hover:text-white hover:-translate-y-[2px] hover:shadow-[5px_5px_0px_var(--shadow-color)] transition-all duration-250 group cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono-code text-[10px] font-black uppercase text-[var(--accent)] group-hover:text-white transition-colors duration-250">
                          PROJECT #01 • FEATURED
                        </span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                      <div className="font-display-heading font-black text-lg text-[var(--text-primary)] group-hover:text-white transition-colors duration-250 uppercase">
                        CAMPUSHUB
                      </div>
                      <div className="text-xs text-[var(--text-secondary)] group-hover:text-white/90 transition-colors duration-250 font-sans mt-0.5">
                        A student-focused platform connecting campus communities &amp; opportunities.
                      </div>
                    </a>

                    {/* Core Skills Chips */}
                    <div>
                      <div className="font-mono-code text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                        CORE STACK:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "HTML",
                          "CSS",
                          "JAVASCRIPT",
                          "REACT",
                          "NEXT.JS",
                          "NODE.JS",
                          "JAVA",
                          "GIT",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 bg-[var(--card-bg-subtle)] text-[var(--text-primary)] border border-[var(--border-color)] font-mono-code text-[10px] font-bold shadow-[1px_1px_0px_var(--shadow-color)] hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] hover:-translate-y-0.5 transition-all duration-250 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : activeTab === "manga" ? (
                  <div className="space-y-3">
                    {/* Manga View Header Bar & Mode Toggle */}
                    <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)]">
                      <div className="flex items-center gap-1.5">
                        <span className="px-2 py-0.5 bg-[#FF5722] text-white font-mono-code text-[10px] font-black uppercase border border-black shadow-[1px_1px_0px_#0A0A0A]">
                          MANGA EDITION
                        </span>
                        <span className="hidden sm:inline font-mono-code text-[11px] text-[var(--text-secondary)]">
                          // 来る技術 • DEV
                        </span>
                      </div>

                      {/* Switch between Manga & Original */}
                      <div className="flex border border-[var(--border-color)] text-[10px] font-mono-code font-bold">
                        <button
                          type="button"
                          onClick={() => setMangaViewMode("manga")}
                          className={`px-2.5 py-0.5 cursor-pointer transition-colors ${
                            mangaViewMode === "manga"
                              ? "bg-[#FFE500] text-black font-black"
                              : "bg-[var(--card-bg)] text-[var(--text-secondary)] hover:text-black hover:bg-[#FFE500]/40"
                          }`}
                        >
                          MANGA
                        </button>
                        <button
                          type="button"
                          onClick={() => setMangaViewMode("original")}
                          className={`px-2.5 py-0.5 border-l border-[var(--border-color)] cursor-pointer transition-colors ${
                            mangaViewMode === "original"
                              ? "bg-[#FFE500] text-black font-black"
                              : "bg-[var(--card-bg)] text-[var(--text-secondary)] hover:text-black hover:bg-[#FFE500]/40"
                          }`}
                        >
                          ORIGINAL
                        </button>
                      </div>
                    </div>

                    {/* Poster Container */}
                    <div className="relative border-2 border-[var(--border-color)] bg-black overflow-hidden shadow-[4px_4px_0px_var(--shadow-color)] group/poster">
                      <div className="aspect-square sm:h-[250px] w-full overflow-hidden relative flex items-center justify-center">
                        <img
                          src={mangaViewMode === "manga" ? SITE_CONFIG.mangaAvatar : SITE_CONFIG.originalPhoto}
                          alt={mangaViewMode === "manga" ? "Amit Singh Manga Art" : "Amit Singh Original Photo"}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/poster:scale-105"
                        />

                        {/* Comic sound effect / Japanese text watermark */}
                        <div className="absolute top-2 left-2 bg-[#FFE500] text-black border border-black font-mono-code text-[10px] font-black px-2 py-0.5 shadow-[2px_2px_0px_#000] rotate-[-2deg]">
                          {mangaViewMode === "manga" ? "⚡ SHONEN DEV" : "📷 REAL PHOTO"}
                        </div>

                        {/* Bottom overlay badge */}
                        <div className="absolute bottom-2 right-2 bg-black/85 text-white backdrop-blur-sm border border-white/20 font-mono-code text-[10px] font-bold px-2 py-0.5 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>{mangaViewMode === "manga" ? "ANIME / MANGA STYLE" : "REFERENCE PHOTO"}</span>
                        </div>
                      </div>
                    </div>

                    {/* Comic dialogue caption */}
                    <div className="p-2.5 bg-[var(--card-bg-subtle)] border-2 border-[var(--border-color)] font-mono-code text-xs text-[var(--text-primary)] flex items-start gap-2 shadow-[2px_2px_0px_var(--shadow-color)]">
                      <span className="text-[#FF5722] font-black text-sm leading-none">&ldquo;</span>
                      <p className="leading-snug text-[11px] font-medium">
                        {mangaViewMode === "manga"
                          ? "Leveling up daily with Next.js, React & Java — building the future one commit at a time."
                          : "Amit Singh — 3rd-year engineering student & builder from Chandigarh, India."}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-[#0D0D0D] text-neutral-200 p-4 border border-[var(--border-color)] font-mono-code text-[11px] leading-relaxed overflow-x-auto rounded-none">
                    <div className="text-neutral-500">{"// Personal developer config"}</div>
                    <div className="text-[#FFE500]">const developer = &#123;</div>
                    <div className="pl-4">
                      name: <span className="text-emerald-400">&apos;Amit Singh&apos;</span>,
                    </div>
                    <div className="pl-4">
                      role: <span className="text-emerald-400">&apos;Software Developer&apos;</span>,
                    </div>
                    <div className="pl-4">
                      location: <span className="text-emerald-400">&apos;Chandigarh, India&apos;</span>,
                    </div>
                    <div className="pl-4">
                      education: <span className="text-emerald-400">&apos;B.Tech 2024–2028&apos;</span>,
                    </div>
                    <div className="pl-4">
                      avatar: <span className="text-amber-300">&apos;manga-style&apos;</span>,
                    </div>
                    <div className="pl-4">
                      status: <span className="text-amber-300">&apos;3rd Year Student&apos;</span>,
                    </div>
                    <div className="pl-4">
                      featuredProject: <span className="text-orange-400">&apos;CampusHub&apos;</span>,
                    </div>
                    <div className="pl-4">
                      skills: [<span className="text-amber-300">&apos;React&apos;</span>, <span className="text-amber-300">&apos;Next.js&apos;</span>, <span className="text-amber-300">&apos;Node.js&apos;</span>, <span className="text-amber-300">&apos;Java&apos;</span>],
                    </div>
                    <div className="text-[#FFE500]">&#125;;</div>
                    <div className="mt-3 text-neutral-400">
                      developer.buildUsefulProducts();
                    </div>
                  </div>
                )}

                {/* Footer bar inside frame */}
                <div className="pt-3 mt-4 border-t border-[var(--border-subtle)] flex items-center justify-between font-mono-code text-[11px] text-[var(--text-secondary)]">
                  <span className="flex items-center gap-1.5 font-bold text-[var(--text-primary)]">
                    <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" /> Open to Dev Roles
                  </span>
                  <span className="bg-[#FFE500] text-black px-2 py-0.5 border border-[var(--border-color)] font-bold">
                    AVAILABLE
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Tag */}
            <div className="absolute -bottom-4 -left-3 sm:-left-5 bg-[var(--card-bg)] text-[var(--text-primary)] border-2 border-[var(--border-color)] px-3.5 py-1.5 shadow-[3px_3px_0px_var(--shadow-color)] font-mono-code text-xs font-black rotate-[-2deg] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              <span>CHANDIGARH • READY TO BUILD</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
