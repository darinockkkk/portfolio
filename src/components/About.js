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
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 xl:px-24" ref={ref}>
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image/Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-teal-500/20 rounded-3xl blur-3xl" />
              
              {/* Avatar Card */}
              <div className="relative w-full h-full bg-zinc-900/50 backdrop-blur-xl rounded-3xl border border-zinc-800 overflow-hidden">
                {/* Placeholder for profile image */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-teal-500/10">
                  <div className="text-9xl">👩‍💻</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg text-zinc-300 leading-relaxed mb-8 px-2">
              {profileData.about}
            </p>

            {/* Feature Cards */}
            <div className="space-y-4">
              {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-zinc-800 hover:border-purple-500/50 transition-colors"
              >
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-teal-500/20 rounded-lg text-purple-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-100 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
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

