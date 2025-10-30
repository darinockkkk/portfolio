"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import profileData from "@/data/profileData.json";
import AIAvatar from "./AIAvatar";

export default function Hero({ onOpenChat }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-lime-500/10 animate-gradient" />
      
      {/* Floating Particles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
          <div className="relative w-[90%] lg:w-[85%] xl:w-[80%] h-full">
            {[...Array(25)].map((_, i) => {
              const containerWidth = 1400; // max-w-7xl approximate width
              const containerHeight = 800; // approximate content height
              const randomX = Math.random() * containerWidth;
              const randomY = Math.random() * containerHeight;
              const randomTargetX = Math.random() * containerWidth;
              const randomTargetY = Math.random() * containerHeight;
              const size = Math.random() > 0.5 ? 'w-2 h-2' : 'w-1 h-1';
              const isPurple = Math.random() > 0.5;
              const color = isPurple ? 'bg-pink-400' : 'bg-lime-400';
              const shadowColor = isPurple ? 'shadow-pink-400/80' : 'shadow-lime-400/80';
              const delay = Math.random() * 3;
            
            return (
              <motion.div
                key={i}
                className={`absolute ${size} ${color} ${shadowColor} rounded-full`}
                style={{
                  boxShadow: isPurple 
                    ? '0 0 8px rgba(236, 72, 153, 0.8), 0 0 12px rgba(236, 72, 153, 0.4)'
                    : '0 0 8px rgba(132, 204, 22, 0.8), 0 0 12px rgba(132, 204, 22, 0.4)'
                }}
                initial={{
                  x: randomX,
                  y: randomY,
                  opacity: 0.6,
                }}
                animate={{
                  y: [null, randomTargetY],
                  x: [null, randomTargetX],
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  y: {
                    duration: Math.random() * 10 + 20,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  x: {
                    duration: Math.random() * 10 + 20,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  opacity: {
                    duration: Math.random() * 2 + 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay,
                  },
                  scale: {
                    duration: Math.random() * 2 + 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay,
                  },
                }}
              />
            );
          })}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-10 w-full mx-auto">
        <div className="max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 items-center py-8 lg:py-12">
          
          {/* Left Side - Main Content */}
          <div className="flex flex-col justify-center space-y-10 text-center lg:text-left">
            {/* Waving Hand + Greeting */}
            <motion.div
              className="flex items-center gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                className="text-4xl"
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2 }}
              >
                👋
              </motion.span>
              <span className="text-xl text-zinc-400 font-medium">Hi there!</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                I'm <span className="bg-gradient-to-r from-pink-400 to-lime-400 bg-clip-text text-transparent">
                  {profileData.name.split(" ")[0]}
                </span>
              </h1>
              
              {/* Subtitle */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-zinc-100">
                {profileData.title}
              </h2>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-lg sm:text-xl text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed py-2 text-justify"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {profileData.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-lime-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                View Projects
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>

              <button
                onClick={() => window.open("#", "_blank")}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-zinc-800/80 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-zinc-700 transition-all duration-300 hover:scale-105 border border-zinc-700 hover:border-zinc-600 w-full sm:w-auto"
              >
                <Download size={18} />
                Resume
              </button>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="flex items-center gap-6 justify-center lg:justify-start pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="text-zinc-400 hover:text-pink-400 transition-colors text-sm font-medium flex items-center gap-2"
              >
                <Mail size={16} />
                Get in touch
              </button>
              <span className="w-1 h-1 bg-zinc-700 rounded-full" />
              <button
                onClick={() => scrollToSection("about")}
                className="text-zinc-400 hover:text-lime-400 transition-colors text-sm font-medium"
              >
                Learn more about me
              </button>
            </motion.div>
          </div>

          {/* Right Side - AI Avatar */}
          <motion.div
            className="flex justify-center lg:justify-end items-center max-w-md lg:max-w-sm xl:max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <AIAvatar onOpenChat={onOpenChat} />
          </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-zinc-500 font-medium">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex items-start justify-center p-2">
                <motion.div
                  className="w-1.5 h-1.5 bg-pink-400 rounded-full"
                  animate={{ y: [0, 14, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

