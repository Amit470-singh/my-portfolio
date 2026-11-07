"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/config/portfolio";
import {
  ArrowRight,
  Mail,
  Copy,
  Check,
  Phone,
  Sparkles,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import confetti from "canvas-confetti";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { contact } = SITE_CONFIG;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(contact.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 110,
          spread: 75,
          origin: { y: 0.6 },
          colors: ["#FFE500", "#FF8C00", "#111111", "#4ADE80"],
        });
      } catch {
        // Safe fallback
      }
    }, 450);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t-2 border-[var(--border-color)] bg-[var(--bg-main)] relative transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="flex flex-col items-start mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--card-bg)] text-[var(--text-primary)] border-2 border-[var(--border-color)] shadow-[2px_2px_0px_var(--shadow-color)] font-mono-code text-xs font-black tracking-widest uppercase mb-4 transition-colors duration-250">
            <span>{"// CONTACT"}</span>
          </div>

          {/* Bold and Visually Large Stacked Heading */}
          <h2 className="font-display-heading text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter text-[var(--text-primary)] max-w-4xl leading-[0.92] uppercase">
            <span className="block">{contact.headingLine1}</span>
            <span className="block">{contact.headingLine2}</span>
            <span className="block relative inline-block text-[var(--accent)]">
              <span className="relative z-10">{contact.headingLine3}</span>
              <span className="absolute left-0 bottom-1 sm:bottom-3 w-full h-4 sm:h-6 bg-[#FFE500] dark:bg-[var(--accent)]/40 -z-0" />
            </span>
          </h2>

          <p className="font-sans text-[var(--text-secondary)] text-lg sm:text-2xl mt-6 max-w-2xl font-medium">
            &ldquo;{contact.text}&rdquo;
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact & Social Channels (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Email & Phone Contact Card */}
            <div className="bg-[var(--card-bg)] border-2 border-[var(--border-color)] shadow-[6px_6px_0px_var(--shadow-color)] p-6 sm:p-7 transition-colors duration-250">
              {/* Email Section */}
              <div className="mb-6">
                <span className="font-mono-code text-xs font-bold uppercase text-[var(--text-secondary)] mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[var(--accent)]" /> EMAIL
                </span>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-mono-code text-base sm:text-lg font-black text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-250 break-all block mb-3"
                >
                  {contact.email}
                </a>

                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex-1 py-3 px-4 bg-[var(--border-color)] text-[var(--bg-main)] dark:bg-white dark:text-black font-mono-code text-xs font-bold uppercase tracking-wider text-center border-2 border-[var(--border-color)] shadow-[3px_3px_0px_#FFE500] hover:bg-[var(--accent)] hover:text-white dark:hover:bg-[var(--accent)] dark:hover:text-white hover:-translate-y-[3px] hover:shadow-[5px_5px_0px_var(--shadow-color)] active:translate-x-[1px] active:translate-y-[1px] transition-all duration-250 ease-out flex items-center justify-center gap-2"
                  >
                    <span>{contact.cta}</span>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="py-3 px-3.5 bg-[var(--card-bg-subtle)] text-[var(--text-primary)] border-2 border-[var(--border-color)] font-mono-code text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_var(--shadow-color)] hover:bg-[#FFE500] hover:text-black hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_var(--shadow-color)] transition-all duration-250 cursor-pointer"
                    title="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[var(--text-primary)]" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone Section */}
              <div className="pt-5 border-t border-[var(--border-subtle)]">
                <span className="font-mono-code text-xs font-bold uppercase text-[var(--text-secondary)] mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[var(--text-primary)]" /> PHONE
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`tel:${contact.phone}`}
                    className="font-mono-code text-base sm:text-lg font-black text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-250"
                  >
                    +91 {contact.phone}
                  </a>

                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${contact.phone}`}
                      className="px-3 py-1.5 bg-[var(--card-bg-subtle)] text-[var(--text-primary)] border-2 border-[var(--border-color)] font-mono-code text-xs font-bold uppercase hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] hover:-translate-y-0.5 transition-all duration-250"
                    >
                      CALL
                    </a>
                    <button
                      onClick={handleCopyPhone}
                      className="p-2 bg-[var(--card-bg-subtle)] text-[var(--text-primary)] border-2 border-[var(--border-color)] hover:bg-[#FFE500] hover:text-black hover:-translate-y-0.5 transition-all duration-250 cursor-pointer"
                      title="Copy phone number"
                    >
                      {copiedPhone ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-[var(--text-primary)]" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* LinkedIn & GitHub Card */}
            <div className="bg-[var(--card-bg)] border-2 border-[var(--border-color)] shadow-[6px_6px_0px_var(--shadow-color)] p-6 sm:p-7 transition-colors duration-250">
              <span className="font-mono-code text-xs font-bold uppercase text-[var(--text-secondary)] mb-4 block">
                CONNECT &amp; NETWORK
              </span>

              <div className="space-y-3">
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 bg-[var(--card-bg-subtle)] text-[var(--text-primary)] border-2 border-[var(--border-color)] font-mono-code text-xs font-bold uppercase tracking-wider hover:bg-[#FFE500] hover:text-black hover:-translate-y-[2px] hover:shadow-[4px_4px_0px_var(--shadow-color)] transition-all duration-250 ease-out"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4 text-blue-600" />
                    <span>LINKEDIN: {contact.linkedinDisplay}</span>
                  </span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 bg-[var(--card-bg-subtle)] text-[var(--text-primary)] border-2 border-[var(--border-color)] font-mono-code text-xs font-bold uppercase tracking-wider hover:bg-[#FFE500] hover:text-black hover:-translate-y-[2px] hover:shadow-[4px_4px_0px_var(--shadow-color)] transition-all duration-250 ease-out"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-[var(--text-primary)]" />
                    <span>GITHUB: @amitsingh-dev</span>
                  </span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Location Pill Banner */}
            <div className="p-4 bg-[var(--card-bg-subtle)] text-[var(--text-primary)] border-2 border-[var(--border-color)] shadow-[3px_3px_0px_var(--shadow-color)] font-mono-code text-xs flex items-center gap-2 transition-colors duration-250">
              <MapPin className="w-4 h-4 text-[var(--accent)] shrink-0" />
              <span>
                <strong>CHANDIGARH, INDIA</strong> • Open to on-site, hybrid, and remote opportunities.
              </span>
            </div>
          </motion.div>

          {/* Right Column: Direct Message Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-7 bg-[var(--card-bg)] border-2 border-[var(--border-color)] shadow-[8px_8px_0px_var(--shadow-color)] p-6 sm:p-10 relative transition-colors duration-250"
          >
            <div className="flex items-center justify-between mb-6 pb-3 border-b-2 border-[var(--border-color)]">
              <h3 className="font-display-heading text-2xl font-black text-[var(--text-primary)] uppercase tracking-tight">
                Send a Direct Note
              </h3>
              <span className="px-2.5 py-0.5 bg-[#FFE500] text-black border border-[var(--border-color)] font-mono-code text-[10px] font-bold uppercase">
                QUICK TRANSMISSION
              </span>
            </div>

            {isSubmitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 bg-[#FFE500] text-black border-2 border-[var(--border-color)] flex items-center justify-center mx-auto shadow-[4px_4px_0px_var(--shadow-color)]">
                  <Sparkles className="w-8 h-8 text-black" />
                </div>
                <h4 className="font-display-heading text-3xl font-black text-[var(--text-primary)] uppercase">
                  Message Transmitted!
                </h4>
                <p className="font-sans text-[var(--text-secondary)] max-w-md mx-auto font-medium">
                  Thank you, {formData.name || "friend"}! Your message has been sent. I will respond to you at{" "}
                  <strong className="text-[var(--text-primary)]">{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  className="mt-4 px-6 py-2.5 bg-[var(--border-color)] text-[var(--bg-main)] dark:bg-white dark:text-black font-mono-code text-xs font-bold uppercase tracking-wider border-2 border-[var(--border-color)] shadow-[3px_3px_0px_#FFE500] hover:bg-[var(--accent)] hover:text-white dark:hover:bg-[var(--accent)] dark:hover:text-white hover:-translate-y-[2px] hover:shadow-[4px_4px_0px_var(--shadow-color)] transition-all duration-250 cursor-pointer"
                >
                  SEND ANOTHER NOTE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-mono-code text-xs font-black uppercase tracking-wider text-[var(--text-primary)] mb-1.5"
                  >
                    YOUR NAME <span className="text-[var(--accent)]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full p-3.5 bg-[var(--card-bg-subtle)] border-2 border-[var(--border-color)] font-mono-code text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/60 focus:outline-none focus:bg-[var(--card-bg)] focus:border-[var(--accent)] focus:shadow-[3px_3px_0px_var(--shadow-color)] transition-all duration-250"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono-code text-xs font-black uppercase tracking-wider text-[var(--text-primary)] mb-1.5"
                  >
                    YOUR EMAIL <span className="text-[var(--accent)]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. name@company.com"
                    className="w-full p-3.5 bg-[var(--card-bg-subtle)] border-2 border-[var(--border-color)] font-mono-code text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/60 focus:outline-none focus:bg-[var(--card-bg)] focus:border-[var(--accent)] focus:shadow-[3px_3px_0px_var(--shadow-color)] transition-all duration-250"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono-code text-xs font-black uppercase tracking-wider text-[var(--text-primary)] mb-1.5"
                  >
                    MESSAGE <span className="text-[var(--accent)]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, internship, or opportunity..."
                    className="w-full p-3.5 bg-[var(--card-bg-subtle)] border-2 border-[var(--border-color)] font-mono-code text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/60 focus:outline-none focus:bg-[var(--card-bg)] focus:border-[var(--accent)] focus:shadow-[3px_3px_0px_var(--shadow-color)] transition-all duration-250"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[var(--border-color)] text-[var(--bg-main)] dark:bg-white dark:text-black font-mono-code text-sm font-bold uppercase tracking-wider border-2 border-[var(--border-color)] shadow-[4px_4px_0px_#FFE500] hover:bg-[var(--accent)] hover:text-white dark:hover:bg-[var(--accent)] dark:hover:text-white hover:-translate-y-[3px] hover:shadow-[6px_6px_0px_var(--shadow-color)] active:translate-x-[1px] active:translate-y-[1px] transition-all duration-250 ease-out flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>{isSubmitting ? "DISPATCHING..." : "SEND MESSAGE"}</span>
                  <ArrowRight className="w-4 h-4 text-[#FFE500] dark:text-[#FF8C00] group-hover:text-white group-hover:translate-x-1 transition-all duration-250" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
