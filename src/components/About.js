"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Code, Lightbulb } from "lucide-react";
import profileData from "@/data/profileData.json";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Building scalable web and mobile applications",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Product Strategy",
      description: "Bridging technical execution with business goals",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI Integration",
      description: "Creating intelligent, user-focused experiences",
    },
  ];

  return (
    <section id="about" className="py-12 2xl:py-16 relative">
      <div className="max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12" ref={ref}>
        {/* Section Title */}
        <motion.div
          className="text-center mb-12 2xl:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-lime-500 mx-auto rounded-full mt-4 mb-4" />
          <motion.p
            className="mt-6 text-zinc-400 text-lg md:text-xl text-center flex justify-center"
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I bridge design, business, and technology to build products that feel thoughtful—not just functional.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-12 xl:gap-14 items-start mx-auto max-w-5xl">
          {/* Profile Image/Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex md:h-full justify-center"
          >
            <div className="relative w-full max-w-[320px] md:h-full">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-lime-500/20 rounded-3xl blur-3xl" />

              {/* Avatar Card */}
              <div className="relative w-full h-full min-h-[280px] bg-zinc-900/50 backdrop-blur-xl rounded-3xl border border-zinc-800 overflow-hidden">
                <img
                  src="/about.jpg"
                  alt="Daryna Darii portrait"
                  className="w-full h-full object-cover object-[50%_35%]"
                />
              </div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.08 }}
                  className="flex items-start gap-3 bg-zinc-900/40 border border-zinc-800 rounded-2xl px-5 py-4 hover:border-pink-500/40 transition-colors"
                >
                  <div className="p-3 bg-gradient-to-br from-pink-500/20 to-lime-500/20 rounded-xl text-pink-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

