"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import profileData from "@/data/profileData.json";

export default function Projects() {
  const ref = useRef(null);
  const scrollRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      
      // Calculate active index based on scroll position
      const cardWidth = 360; // Approximate card width + gap
      const currentIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(currentIndex);
    }
  };

  useEffect(() => {
    checkScroll();
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', checkScroll);
      
      // Auto-scroll hint on mount
      const timer = setTimeout(() => {
        if (scrollElement) {
          scrollElement.scrollBy({ left: 100, behavior: 'smooth' });
          setTimeout(() => {
            scrollElement.scrollBy({ left: -100, behavior: 'smooth' });
          }, 800);
        }
      }, 1000);

      return () => {
        scrollElement.removeEventListener('scroll', checkScroll);
        clearTimeout(timer);
      };
    }
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 360; // Width of one card + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-12 2xl:py-16 relative">
      <div className="max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12" ref={ref}>
        {/* Section Title */}
        <motion.div
          className="text-center mb-12 2xl:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-lime-500 mx-auto rounded-full mt-4 mb-4" />
          
          {/* Swipe Indicator */}
          <motion.div
            className="flex items-center justify-center gap-2 mt-6 text-zinc-500 text-sm lg:hidden"
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span>Swipe to explore</span>
            <span className="text-lg">→</span>
          </motion.div>
        </motion.div>

        {/* Projects Horizontal Scroll */}
        <div className="relative">
          {/* Left Scroll Button */}
          {canScrollLeft && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => scroll('left')}
              className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center bg-zinc-900/90 backdrop-blur-sm border border-zinc-700 rounded-full hover:bg-zinc-800 hover:border-pink-500/50 transition-all duration-300 shadow-xl"
            >
              <ChevronLeft className="w-6 h-6 text-zinc-300" />
            </motion.button>
          )}

          {/* Right Scroll Button with Pulse Animation */}
          {canScrollRight && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => scroll('right')}
              className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center bg-zinc-900/90 backdrop-blur-sm border border-zinc-700 rounded-full hover:bg-zinc-800 hover:border-pink-500/50 transition-all duration-300 shadow-xl"
            >
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronRight className="w-6 h-6 text-zinc-300" />
              </motion.div>
            </motion.button>
          )}

          {/* Gradient Fade Overlays */}
          {canScrollLeft && (
            <div className="hidden lg:block absolute left-0 top-0 bottom-8 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
          )}
          {canScrollRight && (
            <div className="hidden lg:block absolute right-0 top-0 bottom-8 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />
          )}

          <div ref={scrollRef} className="flex gap-6 lg:gap-8 2xl:gap-10 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-custom">
            {profileData.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-zinc-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-zinc-800 hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10 flex-shrink-0 w-[75vw] sm:w-[320px] lg:w-[340px] 2xl:w-[360px] snap-center"
              >
              {/* Project Image */}
              <div className="relative h-48 2xl:h-56 bg-gradient-to-br from-pink-500/20 to-lime-500/20 overflow-hidden">
                {/* Placeholder for project image */}
                <div className="w-full h-full flex items-center justify-center text-6xl 2xl:text-7xl">
                  {["🤝", "🍽️", "🎉", "💪", "💰"][index] || "🚀"}
                </div>
                
                {/* Overlay on hover - hide for FinanceBro and OutWithStrangers */}
                {project.name !== "FinanceBro" && project.name !== "OutWithStrangers" && (
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button
                      onClick={() => window.open(project.link, "_blank")}
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </button>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-pink-400 transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-zinc-400 text-sm leading-relaxed text-justify min-h-[6rem]">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-1 text-xs font-medium bg-zinc-800/50 text-lime-300 rounded-full border border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Animated Border Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-lime-500/20" />
              </div>
            </motion.div>
          ))}
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {profileData.projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollRef.current) {
                    const cardWidth = 360;
                    scrollRef.current.scrollTo({
                      left: cardWidth * index,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="group"
              >
                <div
                  className={`transition-all duration-300 rounded-full ${
                    index === activeIndex
                      ? 'w-8 h-2 bg-gradient-to-r from-pink-500 to-lime-500'
                      : 'w-2 h-2 bg-zinc-700 group-hover:bg-zinc-600'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

