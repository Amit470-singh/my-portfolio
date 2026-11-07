import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsToolbox from "@/components/SkillsToolbox";
import JourneySection from "@/components/JourneySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-main)] text-[var(--text-primary)] transition-colors duration-250">
      {/* Sticky Navigation Bar */}
      <Navbar />

      <main className="flex-grow">
        {/* Editorial Hero Section */}
        <Hero />

        {/* Neo-Brutalist Marquee Ticker */}
        <div className="border-y-2 border-[var(--border-color)] bg-[#FFE500] py-2.5 overflow-hidden select-none">
          <div className="flex whitespace-nowrap animate-marquee font-mono-code text-xs font-black uppercase tracking-widest text-[#0A0A0A]">
            <span className="mx-4">★ AMIT SINGH</span>
            <span className="mx-4">• SOFTWARE DEVELOPER</span>
            <span className="mx-4">★ 3RD YEAR B.TECH</span>
            <span className="mx-4">• CHANDIGARH, INDIA</span>
            <span className="mx-4">★ CAMPUSHUB PROJECT #01</span>
            <span className="mx-4">• NEXT.JS &amp; REACT</span>
            <span className="mx-4">★ JAVA DSA</span>
            <span className="mx-4">• READY TO SHIP</span>
            <span className="mx-4">★ AMIT SINGH</span>
            <span className="mx-4">• SOFTWARE DEVELOPER</span>
            <span className="mx-4">★ 3RD YEAR B.TECH</span>
            <span className="mx-4">• CHANDIGARH, INDIA</span>
          </div>
        </div>

        {/* 01 / About Section */}
        <AboutSection />

        {/* 02 / Selected Work (Featured CampusHub + More Projects Coming Soon) */}
        <ProjectsSection />

        {/* 03 / Tech Stack (Skills Toolbox) */}
        <SkillsToolbox />

        {/* 04 / My Journey (Timeline 2024 to Current) */}
        <JourneySection />

        {/* 05 / Contact Section */}
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Interactive AI Chatbot Widget */}
      <Chatbot />
    </div>
  );
}
