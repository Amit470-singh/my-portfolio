"use client";

import React from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/config/portfolio";
import { MapPin, GraduationCap, Calendar, ArrowUpRight, Code } from "lucide-react";

export default function AboutSection() {
  const { about } = SITE_CONFIG;

  const infoBlocks = [
    {
      label: "LOCATION",
      value: "Chandigarh, India",
      subtext: "Based in Punjab / Chandigarh region",
      icon: <MapPin className="w-5 h-5 text-[var(--accent)]" />,
      badge: "01",
    },
    {
      label: "EDUCATION",
      value: "B.Tech — 2024–2028",
      subtext: "Undergraduate Engineering Degree",
      icon: <GraduationCap className="w-5 h-5 text-[var(--text-primary)]" />,
      badge: "02",
    },
    {
      label: "STATUS",
      value: "3rd Year Student",
      subtext: "Active Learner & Builder",
      icon: <Calendar className="w-5 h-5 text-[var(--accent)]" />,
      badge: "03",
    },
    {
      label: "FOCUS",
      value: "Software Development",
      subtext: "Full-Stack Web & Software Engineering",
      icon: <Code className="w-5 h-5 text-[var(--text-primary)]" />,
      badge: "04",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t-2 border-[var(--border-color)] bg-[var(--bg-main)] relative transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="flex flex-col items-start mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--card-bg)] text-[var(--text-primary)] border-2 border-[var(--border-color)] shadow-[2px_2px_0px_var(--shadow-color)] font-mono-code text-xs font-black tracking-widest uppercase mb-4 transition-colors duration-250">
            <span>{about.heading}</span>
          </div>

          <h2 className="font-display-heading text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[var(--text-primary)] max-w-4xl leading-[1.05] uppercase">
            &ldquo;{about.statement.split("BUILDING.")[0]}
            <span className="relative inline-block text-[var(--text-primary)]">
              <span className="relative z-10">BUILDING.&rdquo;</span>
              <span className="absolute left-0 bottom-1 sm:bottom-2 w-full h-3 sm:h-5 bg-[#FFE500] dark:bg-[var(--accent)]/40 -z-0 -rotate-1" />
            </span>
          </h2>
        </motion.div>

        {/* Narrative Intro & Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Exact Concise Personal Introduction with Manga Avatar */}
            <div className="bg-[var(--card-bg)] text-[var(--text-primary)] border-2 border-[var(--border-color)] p-6 sm:p-7 shadow-[5px_5px_0px_var(--shadow-color)] transition-colors duration-250">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
                {/* Manga Avatar Frame */}
                <div className="relative shrink-0 group/avatar">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 border-2 border-[var(--border-color)] bg-black overflow-hidden shadow-[4px_4px_0px_var(--shadow-color)] rotate-[-2deg] group-hover/avatar:rotate-0 group-hover/avatar:scale-105 transition-all duration-300 relative">
                    <img
                      src={SITE_CONFIG.mangaAvatar}
                      alt={`${SITE_CONFIG.name} Manga Style Avatar`}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-[#FFE500] text-black text-[9px] font-mono-code font-black text-center border-t border-[var(--border-color)] py-0.5 tracking-wider uppercase">
                      MANGA ED.
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-[#FF5722] text-white border border-black font-mono-code text-[9px] font-black px-1.5 py-0.5 shadow-[1px_1px_0px_#000] rotate-6">
                    DEV
                  </div>
                </div>

                {/* Narrative Text */}
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-lg sm:text-xl text-[var(--text-primary)] font-sans font-medium leading-relaxed">
                    &ldquo;{about.intro}&rdquo;
                  </p>
                  <div className="mt-3 flex items-center justify-center sm:justify-start gap-2 font-mono-code text-xs text-[var(--text-secondary)] font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>AMIT SINGH • CHANDIGARH, INDIA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Badges */}
            <div className="flex flex-wrap gap-2.5">
              {[
                "PRACTICAL EXECUTION",
                "CLEAN ARCHITECTURE",
                "CONTINUOUS IMPROVEMENT",
                "SOLVING REAL PROBLEMS",
              ].map((pill, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 bg-[var(--badge-bg)] text-[var(--badge-text)] border-2 border-[var(--border-color)] font-mono-code text-xs font-bold tracking-wider uppercase shadow-[2px_2px_0px_var(--shadow-color)] hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] hover:-translate-y-0.5 transition-all duration-250 cursor-default"
                >
                  ✓ {pill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Highlight Box / Developer Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 bg-[var(--card-bg)] border-2 border-[var(--border-color)] shadow-[6px_6px_0px_var(--shadow-color)] hover:shadow-[9px_9px_0px_var(--shadow-color)] hover:-translate-y-1 transition-all duration-300 p-6 sm:p-7 relative"
          >
            <div className="absolute -top-3.5 right-6 px-3 py-0.5 bg-[var(--accent)] text-white border-2 border-[var(--border-color)] font-mono-code text-[11px] font-black uppercase tracking-wider shadow-[2px_2px_0px_var(--shadow-color)]">
              MINDSET
            </div>

            <h3 className="font-display-heading text-2xl font-black mb-3 text-[var(--text-primary)] uppercase tracking-tight">
              TURNING IDEAS INTO SHIPPED SOFTWARE.
            </h3>

            <p className="font-sans text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">
              I believe hands-on building is the fastest road to mastery. Every project is an opportunity to write cleaner code, build intuitive interfaces, and engineer reliable digital tools.
            </p>

            <div className="p-4 bg-[var(--card-bg-subtle)] border-2 border-[var(--border-color)] hover:bg-[#FFE500] hover:text-black hover:-translate-y-1 hover:shadow-[4px_4px_0px_var(--shadow-color)] transition-all duration-250 group">
              <div className="font-mono-code text-[10px] font-bold text-[var(--text-secondary)] group-hover:text-black uppercase tracking-wider">
                FEATURED WORK
              </div>
              <div className="font-display-heading text-base font-black text-[var(--text-primary)] group-hover:text-black mt-1 uppercase">
                CampusHub Platform
              </div>
              <a
                href="#work"
                className="mt-3 inline-flex items-center gap-1.5 font-mono-code text-xs font-black text-[var(--accent)] group-hover:text-black hover:translate-x-1 transition-all duration-250"
              >
                <span>VIEW FEATURED PROJECT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* 4 Information Blocks with Exact Labels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoBlocks.map((block, idx) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="p-6 bg-[var(--card-bg)] text-[var(--text-primary)] border-2 border-[var(--border-color)] shadow-[4px_4px_0px_var(--shadow-color)] hover:bg-[#FFE500] hover:text-black hover:border-black hover:-translate-y-[3px] hover:shadow-[7px_7px_0px_var(--shadow-color)] transition-all duration-250 ease-out flex flex-col justify-between min-h-[175px] group cursor-default"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono-code text-xs font-black px-2 py-0.5 bg-[#FFE500] group-hover:bg-white text-black border border-[var(--border-color)] transition-colors duration-250">
                    [{block.badge}]
                  </span>
                  <div className="p-1.5 bg-[var(--card-bg-subtle)] group-hover:bg-white border border-[var(--border-color)] shadow-[1px_1px_0px_var(--shadow-color)] transition-colors duration-250">
                    {block.icon}
                  </div>
                </div>

                <div className="font-mono-code text-[11px] font-bold text-[var(--text-secondary)] group-hover:text-black uppercase tracking-wider transition-colors duration-250">
                  {block.label}
                </div>
                <div className="font-display-heading text-xl font-bold text-[var(--text-primary)] group-hover:text-black mt-1 tracking-tight transition-colors duration-250">
                  {block.value}
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-[var(--border-subtle)] group-hover:border-black/30 transition-colors duration-250 font-mono-code text-[11px] text-[var(--text-secondary)] group-hover:text-black">
                {block.subtext}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
