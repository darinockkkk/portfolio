"use client";

import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  const chatWidgetRef = useRef(null);

  const handleOpenChat = () => {
    chatWidgetRef.current?.openChat();
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero onOpenChat={handleOpenChat} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Floating Chat Widget */}
      <ChatWidget ref={chatWidgetRef} />

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 xl:px-24 text-center">
          <p className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} Daryna Darii. Built with Next.js,
            TailwindCSS & Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
}
