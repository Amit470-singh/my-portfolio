"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/config/portfolio";

export default function SkillsToolbox() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  const skills = SITE_CONFIG.skills;

  const filteredSkills =
    activeFilter === "ALL"
      ? skills
      : skills.filter((s) => s.category.toUpperCase() === activeFilter);

  const filterOptions = ["ALL", "FRONTEND", "BACKEND", "TOOLS"];

  return (
    <section id="skills" className="py-20 md:py-28 border-t-2 border-[var(--border-color)] bg-[var(--bg-main)] relative transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--card-bg)] text-[var(--text-primary)] border-2 border-[var(--border-color)] shadow-[2px_2px_0px_var(--shadow-color)] font-mono-code text-xs font-black tracking-widest uppercase mb-4 transition-colors duration-250">
              <span>{"// TECH STACK"}</span>
            </div>

            <h2 className="font-display-heading text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-[var(--text-primary)] uppercase">
              SKILLS &amp; TECHNOLOGIES.
            </h2>
            <p className="font-sans text-[var(--text-secondary)] text-base sm:text-lg mt-2 max-w-xl font-medium">
              Core technologies and tools I utilize to engineer reliable, fast, and scalable digital solutions.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 font-mono-code text-xs font-bold uppercase tracking-wider border-2 border-[var(--border-color)] transition-all duration-250 ease-out cursor-pointer ${
                  activeFilter === filter
                    ? "bg-[var(--border-color)] text-[var(--bg-main)] dark:bg-white dark:text-black shadow-[3px_3px_0px_#FFE500] translate-y-[-1px]"
                    : "bg-[var(--card-bg)] text-[var(--text-primary)] shadow-[2px_2px_0px_var(--shadow-color)] hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] hover:-translate-y-[2px] hover:shadow-[4px_4px_0px_var(--shadow-color)]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 01–09 Indexed Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="p-6 bg-[var(--card-bg)] border-2 border-[var(--border-color)] shadow-[4px_4px_0px_var(--shadow-color)] hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:-translate-y-[3px] hover:shadow-[7px_7px_0px_var(--shadow-color)] transition-all duration-250 ease-out flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Header Row: Numbered format: 01 / HTML */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-code text-sm font-black text-black bg-[#FFE500] px-2.5 py-1 border-2 border-[var(--border-color)] shadow-[2px_2px_0px_var(--shadow-color)] group-hover:bg-white group-hover:text-black transition-colors duration-250">
                    {skill.index} / {skill.name}
                  </span>

                  <span className="px-2.5 py-0.5 bg-[var(--card-bg-subtle)] border border-[var(--border-color)] font-mono-code text-[10px] font-bold uppercase text-[var(--text-primary)] tracking-wider group-hover:bg-black group-hover:text-white group-hover:border-black transition-colors duration-250">
                    {skill.category}
                  </span>
                </div>

                {/* Skill Name in Bold Modern Display */}
                <h3 className="font-display-heading text-2xl font-black text-[var(--text-primary)] group-hover:text-white transition-colors duration-250 mb-2 tracking-tight uppercase">
                  {skill.name}
                </h3>

                {/* Skill Description */}
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] group-hover:text-white/95 transition-colors duration-250 font-sans leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Bottom Badge Bar */}
              <div className="mt-5 pt-3 border-t border-[var(--border-subtle)] group-hover:border-white/30 transition-colors duration-250 flex items-center justify-between font-mono-code text-[11px]">
                <span className="text-[var(--text-secondary)] group-hover:text-white/80 transition-colors duration-250 font-bold uppercase">FOCUS AREA</span>
                <span className="px-2 py-0.5 bg-[var(--badge-bg)] text-[var(--badge-text)] group-hover:bg-white group-hover:text-black transition-colors duration-250 border border-[var(--border-color)] font-black">
                  {skill.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Breakdown by Category Section (Editorial Banner) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="mt-12 p-6 bg-[var(--card-bg)] border-2 border-[var(--border-color)] shadow-[5px_5px_0px_#FFE500] grid grid-cols-1 md:grid-cols-3 gap-6 transition-colors duration-250"
        >
          <div className="p-4 bg-[var(--card-bg-subtle)] border border-[var(--border-subtle)] hover:bg-[var(--card-bg-hover)] hover:border-[var(--border-color)] hover:-translate-y-1 hover:shadow-[3px_3px_0px_var(--shadow-color)] transition-all duration-250 cursor-default">
            <span className="font-mono-code text-xs font-black uppercase text-[var(--accent)] block mb-1">
              FRONTEND
            </span>
            <div className="font-display-heading text-lg font-bold text-[var(--text-primary)] uppercase">
              HTML • CSS • JavaScript • React • Next.js
            </div>
            <p className="font-sans text-xs text-[var(--text-secondary)] mt-1">
              Building dynamic, highly responsive and accessible user experiences.
            </p>
          </div>

          <div className="p-4 bg-[var(--card-bg-subtle)] border border-[var(--border-subtle)] hover:bg-[var(--card-bg-hover)] hover:border-[var(--border-color)] hover:-translate-y-1 hover:shadow-[3px_3px_0px_var(--shadow-color)] transition-all duration-250 cursor-default">
            <span className="font-mono-code text-xs font-black uppercase text-[var(--accent)] block mb-1">
              BACKEND
            </span>
            <div className="font-display-heading text-lg font-bold text-[var(--text-primary)] uppercase">
              Node.js • Java
            </div>
            <p className="font-sans text-xs text-[var(--text-secondary)] mt-1">
              Constructing robust APIs, backend services, and clean object-oriented architecture.
            </p>
          </div>

          <div className="p-4 bg-[var(--card-bg-subtle)] border border-[var(--border-subtle)] hover:bg-[var(--card-bg-hover)] hover:border-[var(--border-color)] hover:-translate-y-1 hover:shadow-[3px_3px_0px_var(--shadow-color)] transition-all duration-250 cursor-default">
            <span className="font-mono-code text-xs font-black uppercase text-[var(--accent)] block mb-1">
              TOOLS
            </span>
            <div className="font-display-heading text-lg font-bold text-[var(--text-primary)] uppercase">
              Git • GitHub
            </div>
            <p className="font-sans text-xs text-[var(--text-secondary)] mt-1">
              Atomic version control, pull requests, collaboration and continuous delivery.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
