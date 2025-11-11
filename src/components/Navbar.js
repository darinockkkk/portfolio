"use client";

import { useState, useEffect } from "react";
import { Rock_Salt } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const rockSalt = Rock_Salt({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "Why Me", id: "differentiators" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      setScrollProgress(scrollHeight > 0 ? scrolled / scrollHeight : 0);

      const sections = navItems.map((item) => item.id);
      let currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });

      if (!currentSection) {
        const pastSections = sections.filter((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 120;
          }
          return false;
        });
        if (pastSections.length > 0) {
          currentSection = pastSections[pastSections.length - 1];
        }
      }

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems, activeSection]);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-lime-500 z-50 origin-left"
        style={{
          scaleX: scrollProgress,
        }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.1 }}
      />

      {/* Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-zinc-900/80 backdrop-blur-xl border-b border-zinc-800 shadow-lg"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 xl:px-24 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection("hero")}
              className={`${rockSalt.className} text-[2rem] leading-tight bg-gradient-to-r from-pink-400 to-lime-400 bg-clip-text text-transparent tracking-tight px-1`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              DD
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-pink-400"
                      : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-lime-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-zinc-900/95 backdrop-blur-xl border-t border-zinc-800"
            >
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`block w-full text-left text-lg font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-pink-400"
                        : "text-zinc-400 hover:text-zinc-100"
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

