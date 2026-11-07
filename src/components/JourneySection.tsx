"use client";

import React from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/config/portfolio";

export default function JourneySection() {
  const milestones = SITE_CONFIG.journey;

  return (
    <section id="journey" className="py-20 md:py-28 border-t-2 border-[var(--border-color)] bg-[var(--bg-main)] relative transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="flex flex-col items-start mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--card-bg)] text-[var(--text-primary)] border-2 border-[var(--border-color)] shadow-[2px_2px_0px_var(--shadow-color)] font-mono-code text-xs font-black tracking-widest uppercase mb-4 transition-colors duration-250">
            <span>{"// MY JOURNEY"}</span>
          </div>

          <h2 className="font-display-heading text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-[var(--text-primary)] max-w-3xl uppercase">
            PATH &amp; PROGRESSION.
          </h2>
          <p className="font-sans text-[var(--text-secondary)] text-base sm:text-lg mt-3 max-w-2xl font-medium">
            From stepping into engineering to building modern web applications and preparing for professional software developer roles.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[var(--border-color)] ml-4 sm:ml-8 pl-6 sm:pl-12 space-y-12">
          {milestones.map((milestone, idx) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative group"
            >
              {/* Timeline Marker Node */}
              <div
                className={`absolute -left-[35px] sm:-left-[59px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 border-2 border-[var(--border-color)] flex items-center justify-center font-mono-code text-xs font-black shadow-[2px_2px_0px_var(--shadow-color)] transition-all duration-250 group-hover:scale-110 group-hover:bg-[var(--accent)] group-hover:text-white group-hover:border-[var(--accent)] ${
                  milestone.current
                    ? "bg-[#FFE500] text-black"
                    : "bg-[var(--card-bg)] text-[var(--text-primary)]"
                }`}
              >
                {milestone.current ? (
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] group-hover:bg-white animate-ping" />
                ) : (
                  <span>0{idx + 1}</span>
                )}
              </div>

              {/* Milestone Card */}
              <div
                className={`p-6 sm:p-8 border-2 border-[var(--border-color)] transition-all duration-250 ease-out cursor-default ${
                  milestone.current
                    ? "shadow-[6px_6px_0px_var(--shadow-color)] bg-[var(--card-bg-hover)] hover:bg-[#FFE500] hover:text-black hover:-translate-y-[3px] hover:shadow-[8px_8px_0px_var(--shadow-color)]"
                    : "bg-[var(--card-bg)] shadow-[4px_4px_0px_var(--shadow-color)] hover:bg-[var(--card-bg-hover)] hover:-translate-y-[3px] hover:shadow-[7px_7px_0px_var(--shadow-color)]"
                }`}
              >
                {/* Year Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="px-3.5 py-1 bg-[var(--border-color)] text-[var(--bg-main)] dark:bg-white dark:text-black border border-[var(--border-color)] font-mono-code text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_#FFE500] group-hover:bg-[var(--accent)] group-hover:text-white transition-colors duration-250">
                      [ {milestone.year} ]
                    </span>
                    {milestone.current && (
                      <span className="px-2.5 py-0.5 bg-[var(--accent)] text-white font-mono-code text-[11px] font-black uppercase tracking-wider">
                        CURRENT STATUS
                      </span>
                    )}
                  </div>

                  <span className="font-mono-code text-xs font-bold text-[var(--text-secondary)]">
                    STAGE 0{idx + 1}
                  </span>
                </div>

                {/* Milestone Heading */}
                <h3 className="font-display-heading text-2xl sm:text-3xl font-black text-[var(--text-primary)] mb-2 uppercase tracking-tight">
                  {milestone.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl font-medium">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
