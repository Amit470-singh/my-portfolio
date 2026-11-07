"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/config/portfolio";
import {
  ExternalLink,
  Users,
  Calendar,
  BookOpen,
  Sparkles,
  Flame,
  ArrowRight,
} from "lucide-react";
import { GithubIcon } from "./BrandIcons";

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"communities" | "events" | "resources">("communities");
  const [joinedCommunities, setJoinedCommunities] = useState<Record<string, boolean>>({
    "web-dev": true,
  });

  const toggleJoin = (id: string) => {
    setJoinedCommunities((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const project = SITE_CONFIG.featuredProject;

  return (
    <section id="work" className="py-20 md:py-28 border-t-2 border-[var(--border-color)] bg-[var(--bg-main)] relative transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag & Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="flex flex-col items-start mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="px-3.5 py-1 bg-[var(--card-bg)] text-[var(--text-primary)] border-2 border-[var(--border-color)] shadow-[2px_2px_0px_var(--shadow-color)] font-mono-code text-xs font-black tracking-widest uppercase transition-colors duration-250">
              {"// SELECTED WORK"}
            </div>
            <span className="px-2.5 py-0.5 bg-[#FFE500] text-black border-2 border-[var(--border-color)] font-mono-code text-[11px] font-black uppercase tracking-wider shadow-[1.5px_1.5px_0px_var(--shadow-color)]">
              FEATURED PROJECT
            </span>
          </div>

          <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="font-mono-code text-xs font-black tracking-wider uppercase text-[var(--accent)] mb-1">
                {project.projectNumber}
              </div>
              <h2 className="font-display-heading text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-[var(--text-primary)] leading-none mb-3 uppercase">
                {project.title}
              </h2>
              <p className="font-sans text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl font-medium">
                Student collaboration platform designed for campus ecosystems.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[var(--border-color)] text-[var(--bg-main)] dark:bg-white dark:text-[#0A0A0A] font-mono-code text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-[var(--border-color)] shadow-[4px_4px_0px_#FFE500] hover:bg-[var(--accent)] hover:text-white dark:hover:bg-[var(--accent)] dark:hover:text-white hover:-translate-y-[3px] hover:shadow-[6px_6px_0px_var(--shadow-color)] active:translate-x-[1px] active:translate-y-[1px] transition-all duration-250 ease-out group"
              >
                <span>VIEW PROJECT</span>
                <ExternalLink className="w-4 h-4 text-[#FFE500] dark:text-[#FF8C00] group-hover:text-white transition-colors duration-250" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[var(--card-bg)] text-[var(--text-primary)] font-mono-code text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-[var(--border-color)] shadow-[4px_4px_0px_var(--shadow-color)] hover:bg-[#FFE500] hover:text-black hover:-translate-y-[3px] hover:shadow-[6px_6px_0px_var(--shadow-color)] active:translate-x-[1px] active:translate-y-[1px] transition-all duration-250 ease-out"
              >
                <span>GITHUB</span>
                <GithubIcon className="w-4 h-4 text-[var(--text-primary)]" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Large Featured Project Card: CampusHub */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="bg-[var(--card-bg)] border-2 border-[var(--border-color)] shadow-[8px_8px_0px_var(--shadow-color)] hover:shadow-[11px_11px_0px_var(--shadow-color)] transition-all duration-300 overflow-hidden mb-16"
        >
          {/* Top Yellow Bar: Technology Tags */}
          <div className="bg-[#FFE500] border-b-2 border-[var(--border-color)] px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono-code text-xs font-black uppercase text-black tracking-widest mr-1">
                TECHNOLOGY:
              </span>
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white text-black border border-black font-mono-code text-xs font-black uppercase tracking-wider shadow-[1.5px_1.5px_0px_#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FFE500] hover:-translate-y-0.5 transition-all duration-250 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="font-mono-code text-xs font-bold text-black flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] border border-black inline-block animate-pulse" />
              <span>PRODUCTION-READY PROTOTYPE</span>
            </div>
          </div>

          {/* Card Middle: Description & Interactive Feature Console */}
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Deep Dive description */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="font-display-heading text-2xl sm:text-3xl font-black text-[var(--text-primary)] mb-3 uppercase tracking-tight">
                    Connecting Campus Life in One Hub
                  </h3>
                  <p className="text-[var(--text-secondary)] font-sans text-base sm:text-lg leading-relaxed font-medium">
                    &ldquo;{project.description}&rdquo;
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="font-mono-code text-xs font-black uppercase tracking-wider text-[var(--text-primary)] block">
                    MODULES &amp; CAPABILITIES:
                  </span>
                  <div className="space-y-2">
                    {project.features?.map((feat, i) => (
                      <div
                        key={feat}
                        className="flex items-center gap-3 p-2.5 bg-[var(--card-bg-subtle)] border border-[var(--border-color)] text-xs font-mono-code font-bold text-[var(--text-primary)] shadow-[1.5px_1.5px_0px_var(--shadow-color)] hover:bg-[var(--accent)] hover:text-white hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_var(--shadow-color)] transition-all duration-250 ease-out group cursor-default"
                      >
                        <span className="w-5 h-5 bg-[#FFE500] text-black group-hover:bg-white group-hover:text-black transition-colors duration-250 border border-[var(--border-color)] flex items-center justify-center text-[10px] font-black">
                          0{i + 1}
                        </span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-[var(--card-bg-subtle)] text-[var(--text-primary)] border-2 border-[var(--border-color)] font-mono-code text-xs hover:bg-[#FFE500] hover:text-black transition-colors duration-250">
                  <span className="font-bold">⚡ ARCHITECTURE HIGHLIGHT:</span> Built with React Server Components, responsive Tailwind CSS layouts, and modular Next.js routing for fast page transitions.
                </div>
              </div>

              {/* Right Column: Interactive App Preview Console */}
              <div className="lg:col-span-7 bg-[var(--bg-main)] border-2 border-[var(--border-color)] shadow-[5px_5px_0px_var(--shadow-color)] overflow-hidden transition-colors duration-250">
                {/* Simulated App Header */}
                <div className="bg-[var(--card-bg)] border-b-2 border-[var(--border-color)] p-4 flex flex-wrap items-center justify-between gap-3 transition-colors duration-250">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-[#0A0A0A] text-[#FFE500] font-mono-code font-black text-xs flex items-center justify-center border border-[var(--border-color)]">
                      CH
                    </div>
                    <span className="font-display-heading font-black text-base text-[var(--text-primary)] uppercase tracking-tight">
                      CampusHub UI Preview
                    </span>
                  </div>

                  {/* Sub-tabs inside preview */}
                  <div className="flex border border-[var(--border-color)] bg-[var(--card-bg)]">
                    <button
                      onClick={() => setActiveTab("communities")}
                      className={`px-3 py-1 font-mono-code text-[11px] font-bold uppercase transition-all duration-250 flex items-center gap-1.5 cursor-pointer ${
                        activeTab === "communities"
                          ? "bg-[var(--border-color)] text-[var(--bg-main)] dark:bg-white dark:text-black"
                          : "text-[var(--text-primary)] hover:bg-[var(--accent)] hover:text-white"
                      }`}
                    >
                      <Users className="w-3 h-3" />
                      <span>CLUBS</span>
                    </button>
                    <button
                      onClick={() => setActiveTab("events")}
                      className={`px-3 py-1 font-mono-code text-[11px] font-bold uppercase transition-all duration-250 border-l border-[var(--border-color)] flex items-center gap-1.5 cursor-pointer ${
                        activeTab === "events"
                          ? "bg-[var(--border-color)] text-[var(--bg-main)] dark:bg-white dark:text-black"
                          : "text-[var(--text-primary)] hover:bg-[var(--accent)] hover:text-white"
                      }`}
                    >
                      <Calendar className="w-3 h-3" />
                      <span>EVENTS</span>
                    </button>
                    <button
                      onClick={() => setActiveTab("resources")}
                      className={`px-3 py-1 font-mono-code text-[11px] font-bold uppercase transition-all duration-250 border-l border-[var(--border-color)] flex items-center gap-1.5 cursor-pointer ${
                        activeTab === "resources"
                          ? "bg-[var(--border-color)] text-[var(--bg-main)] dark:bg-white dark:text-black"
                          : "text-[var(--text-primary)] hover:bg-[var(--accent)] hover:text-white"
                      }`}
                    >
                      <BookOpen className="w-3 h-3" />
                      <span>RESOURCES</span>
                    </button>
                  </div>
                </div>

                {/* Sub-tab Content Showcase */}
                <div className="p-5 min-h-[300px]">
                  {activeTab === "communities" && (
                    <div className="space-y-3">
                      <div className="text-xs font-mono-code font-bold text-[var(--text-secondary)] uppercase flex items-center justify-between">
                        <span>STUDENT CLUBS &amp; COMMUNITIES</span>
                        <span className="text-[var(--accent)]">3 ACTIVE</span>
                      </div>

                      <div className="p-3.5 bg-[var(--card-bg)] text-[var(--text-primary)] border-2 border-[var(--border-color)] shadow-[2px_2px_0px_var(--shadow-color)] hover:bg-[var(--card-bg-hover)] hover:-translate-y-[2px] hover:shadow-[4px_4px_0px_var(--shadow-color)] transition-all duration-250 ease-out flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-display-heading font-bold text-sm text-[var(--text-primary)]">
                              Web Development Collective
                            </span>
                            <span className="px-1.5 py-0.5 bg-[#FFE500] text-black border border-[var(--border-color)] font-mono-code text-[9px] font-bold">
                              48 MEMBERS
                            </span>
                          </div>
                          <p className="text-xs text-[var(--text-secondary)] font-sans mt-0.5">
                            Frontend, React, Next.js peer code reviews &amp; project sprints.
                          </p>
                        </div>
                        <button
                          onClick={() => toggleJoin("web-dev")}
                          className={`px-3 py-1.5 font-mono-code text-xs font-bold border border-[var(--border-color)] transition-all duration-250 cursor-pointer ${
                            joinedCommunities["web-dev"]
                              ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-500"
                              : "bg-[var(--border-color)] text-[var(--bg-main)] dark:bg-white dark:text-black hover:bg-[var(--accent)] hover:text-white"
                          }`}
                        >
                          {joinedCommunities["web-dev"] ? "✓ JOINED" : "+ JOIN"}
                        </button>
                      </div>

                      <div className="p-3.5 bg-[var(--card-bg)] text-[var(--text-primary)] border-2 border-[var(--border-color)] shadow-[2px_2px_0px_var(--shadow-color)] hover:bg-[var(--card-bg-hover)] hover:-translate-y-[2px] hover:shadow-[4px_4px_0px_var(--shadow-color)] transition-all duration-250 ease-out flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-display-heading font-bold text-sm text-[var(--text-primary)]">
                              Algorithms &amp; Java Circle
                            </span>
                            <span className="px-1.5 py-0.5 bg-[var(--card-bg-subtle)] text-[var(--text-primary)] border border-[var(--border-color)] font-mono-code text-[9px] font-bold">
                              62 MEMBERS
                            </span>
                          </div>
                          <p className="text-xs text-[var(--text-secondary)] font-sans mt-0.5">
                            Weekly data structure problem solving and interview prep.
                          </p>
                        </div>
                        <button
                          onClick={() => toggleJoin("algo-circle")}
                          className={`px-3 py-1.5 font-mono-code text-xs font-bold border border-[var(--border-color)] transition-all duration-250 cursor-pointer ${
                            joinedCommunities["algo-circle"]
                              ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-500"
                              : "bg-[var(--border-color)] text-[var(--bg-main)] dark:bg-white dark:text-black hover:bg-[var(--accent)] hover:text-white"
                          }`}
                        >
                          {joinedCommunities["algo-circle"] ? "✓ JOINED" : "+ JOIN"}
                        </button>
                      </div>

                      <div className="p-3.5 bg-[var(--card-bg)] text-[var(--text-primary)] border-2 border-[var(--border-color)] shadow-[2px_2px_0px_var(--shadow-color)] hover:bg-[var(--card-bg-hover)] hover:-translate-y-[2px] hover:shadow-[4px_4px_0px_var(--shadow-color)] transition-all duration-250 ease-out flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-display-heading font-bold text-sm text-[var(--text-primary)]">
                              Hackathon Builders Club
                            </span>
                            <span className="px-1.5 py-0.5 bg-[var(--card-bg-subtle)] text-[var(--text-primary)] border border-[var(--border-color)] font-mono-code text-[9px] font-bold">
                              35 MEMBERS
                            </span>
                          </div>
                          <p className="text-xs text-[var(--text-secondary)] font-sans mt-0.5">
                            Find teammates for regional hackathons &amp; college competitions.
                          </p>
                        </div>
                        <button
                          onClick={() => toggleJoin("hackathon")}
                          className={`px-3 py-1.5 font-mono-code text-xs font-bold border border-[var(--border-color)] transition-all duration-250 cursor-pointer ${
                            joinedCommunities["hackathon"]
                              ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-500"
                              : "bg-[var(--border-color)] text-[var(--bg-main)] dark:bg-white dark:text-black hover:bg-[var(--accent)] hover:text-white"
                          }`}
                        >
                          {joinedCommunities["hackathon"] ? "✓ JOINED" : "+ JOIN"}
                        </button>
                      </div>
                    </div>
                  )}

                  {activeTab === "events" && (
                    <div className="space-y-3">
                      <div className="text-xs font-mono-code font-bold text-[var(--text-secondary)] uppercase flex items-center justify-between">
                        <span>CAMPUS WORKSHOPS &amp; MEETS</span>
                        <span className="text-[var(--accent)]">UPCOMING</span>
                      </div>

                      <div className="p-3.5 bg-[var(--card-bg)] border-2 border-[var(--border-color)] shadow-[2px_2px_0px_var(--shadow-color)] hover:bg-[var(--card-bg-hover)] hover:-translate-y-[2px] hover:shadow-[4px_4px_0px_var(--shadow-color)] transition-all duration-250 ease-out">
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-0.5 bg-[var(--accent)] text-white font-mono-code text-[10px] font-bold">
                            FRIDAY • 4:00 PM
                          </span>
                          <span className="font-mono-code text-xs text-[var(--text-secondary)] font-bold">CAMPUS AUDITORIUM</span>
                        </div>
                        <div className="font-display-heading font-bold text-sm text-[var(--text-primary)] mt-2">
                          Annual 24-Hour Campus Hackathon 2026
                        </div>
                        <p className="text-xs text-[var(--text-secondary)] font-sans mt-1">
                          Build real-world solutions across edtech, climate, and student workflows.
                        </p>
                      </div>

                      <div className="p-3.5 bg-[var(--card-bg)] border-2 border-[var(--border-color)] shadow-[2px_2px_0px_var(--shadow-color)] hover:bg-[var(--card-bg-hover)] hover:-translate-y-[2px] hover:shadow-[4px_4px_0px_var(--shadow-color)] transition-all duration-250 ease-out">
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-0.5 bg-[#FFE500] text-black border border-[var(--border-color)] font-mono-code text-[10px] font-bold">
                            SATURDAY • 11:00 AM
                          </span>
                          <span className="font-mono-code text-xs text-[var(--text-secondary)] font-bold">LAB 302</span>
                        </div>
                        <div className="font-display-heading font-bold text-sm text-[var(--text-primary)] mt-2">
                          Hands-on React &amp; Next.js Workshop
                        </div>
                        <p className="text-xs text-[var(--text-secondary)] font-sans mt-1">
                          Zero-to-deploy session building interactive full-stack applications.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === "resources" && (
                    <div className="space-y-3">
                      <div className="text-xs font-mono-code font-bold text-[var(--text-secondary)] uppercase flex items-center justify-between">
                        <span>COLLEGE STUDY MATERIAL &amp; SHEETS</span>
                        <span className="text-emerald-500 font-bold">VERIFIED</span>
                      </div>

                      <div className="p-3.5 bg-[var(--card-bg)] text-[var(--text-primary)] border-2 border-[var(--border-color)] shadow-[2px_2px_0px_var(--shadow-color)] hover:bg-[var(--card-bg-hover)] hover:-translate-y-[2px] hover:shadow-[4px_4px_0px_var(--shadow-color)] transition-all duration-250 ease-out flex items-center justify-between">
                        <div>
                          <div className="font-display-heading font-bold text-sm text-[var(--text-primary)]">
                            Semester Study Notes Repository
                          </div>
                          <p className="text-xs text-[var(--text-secondary)] font-sans mt-0.5">
                            Curated lecture notes, previous year question papers &amp; syllabus sheets.
                          </p>
                        </div>
                        <span className="px-2 py-1 bg-[var(--card-bg-subtle)] border border-[var(--border-color)] font-mono-code text-[10px] font-bold text-[var(--text-primary)]">
                          PDF • 120+ DOCS
                        </span>
                      </div>

                      <div className="p-3.5 bg-[var(--card-bg)] text-[var(--text-primary)] border-2 border-[var(--border-color)] shadow-[2px_2px_0px_var(--shadow-color)] hover:bg-[var(--card-bg-hover)] hover:-translate-y-[2px] hover:shadow-[4px_4px_0px_var(--shadow-color)] transition-all duration-250 ease-out flex items-center justify-between">
                        <div>
                          <div className="font-display-heading font-bold text-sm text-[var(--text-primary)]">
                            DSA in Java Practice Problem Set
                          </div>
                          <p className="text-xs text-[var(--text-secondary)] font-sans mt-0.5">
                            Essential 100 questions covering arrays, trees, dynamic programming.
                          </p>
                        </div>
                        <span className="px-2 py-1 bg-[var(--card-bg-subtle)] border border-[var(--border-color)] font-mono-code text-[10px] font-bold text-[var(--text-primary)]">
                          SHEET • 100 Qs
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Simulated footer bar */}
                <div className="bg-[var(--card-bg)] border-t-2 border-[var(--border-color)] px-4 py-2.5 flex items-center justify-between font-mono-code text-[11px] text-[var(--text-secondary)]">
                  <span className="flex items-center gap-1.5 font-bold text-[var(--text-primary)]">
                    <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" /> CampusHub Architecture
                  </span>
                  <span className="font-bold text-[var(--text-primary)]">
                    BY AMIT SINGH
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Clean, Intentional "MORE PROJECTS COMING SOON." Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-[var(--card-bg)] border-2 border-dashed border-[var(--border-color)] shadow-[6px_6px_0px_var(--shadow-color)] hover:bg-[var(--card-bg-subtle)] hover:-translate-y-1 hover:shadow-[9px_9px_0px_var(--shadow-color)] transition-all duration-300 p-8 sm:p-10 relative overflow-hidden"
        >
          {/* Top Label */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-[#0A0A0A] text-[#FFE500] font-mono-code text-xs font-black uppercase tracking-wider">
                [ IN PROGRESS ]
              </span>
              <span className="px-2.5 py-1 bg-[var(--card-bg-subtle)] border border-[var(--border-color)] font-mono-code text-xs font-bold text-[var(--text-primary)] uppercase">
                RESEARCH &amp; CODE
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono-code text-xs font-bold text-[var(--text-secondary)]">
              <Flame className="w-4 h-4 text-[var(--accent)] fill-[var(--accent)]" />
              <span>EXPANDING ENGINEERING HORIZONS</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-3">
              <h3 className="font-display-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--text-primary)] tracking-tight uppercase">
                MORE PROJECTS COMING SOON.
              </h3>
              <p className="font-sans text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
                I am actively architecting and building new software tools to sharpen my full-stack and backend competencies. Exploring distributed services, high-performance web systems, and creative interactive interfaces.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "NEXT.JS APPS",
                  "JAVA BACKENDS",
                  "RESTFUL SERVICES",
                  "SYSTEM ARCHITECTURE",
                  "OPEN SOURCE TOOLS",
                ].map((focus) => (
                  <span
                    key={focus}
                    className="px-3 py-1 bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--border-color)] font-mono-code text-[11px] font-bold uppercase shadow-[1px_1px_0px_var(--shadow-color)] hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] hover:-translate-y-0.5 transition-all duration-250 cursor-default"
                  >
                    ⚡ {focus}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-4 bg-[var(--card-bg-subtle)] border-2 border-[var(--border-color)] p-5 shadow-[3px_3px_0px_var(--shadow-color)] hover:bg-[var(--card-bg-hover)] hover:-translate-y-1 hover:shadow-[5px_5px_0px_var(--shadow-color)] transition-all duration-250">
              <div className="font-mono-code text-xs font-black uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                COLLABORATE OR SUGGEST
              </div>
              <div className="font-display-heading text-base font-bold text-[var(--text-primary)] mb-3">
                Have an exciting project idea or opportunity? Let&apos;s build it together.
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--border-color)] text-[var(--bg-main)] dark:bg-white dark:text-black font-mono-code text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#FFE500] hover:bg-[var(--accent)] hover:text-white dark:hover:bg-[var(--accent)] dark:hover:text-white hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_var(--shadow-color)] transition-all duration-250 group"
              >
                <span>LET&apos;S TALK</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFE500] dark:text-[#FF8C00] group-hover:text-white transition-colors duration-250" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
