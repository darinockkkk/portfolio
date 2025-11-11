"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Cloud, Wrench, Brain } from "lucide-react";
import profileData from "@/data/profileData.json";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-6 h-6" />,
      skills: profileData.skills.languages,
      color: "from-pink-500 to-pink-500",
    },
    {
      title: "Frameworks",
      icon: <Code className="w-6 h-6" />,
      skills: profileData.skills.frameworks,
      color: "from-lime-500 to-cyan-500",
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: profileData.skills.databases,
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: profileData.skills.cloud,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: profileData.skills.tools,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "AI & ML",
      icon: <Brain className="w-6 h-6" />,
      skills: profileData.skills.ai,
      color: "from-violet-500 to-pink-500",
    },
  ];

  return (
    <section id="skills" className="py-12 2xl:py-16 relative">
      <div className="max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12" ref={ref}>
        {/* Section Title */}
        <motion.div
          className="text-center mb-12 2xl:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-lime-500 mx-auto rounded-full mt-4 mb-4" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 2xl:gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-6 border border-zinc-800 hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-lime-500/0 group-hover:from-pink-500/5 group-hover:to-lime-500/5 rounded-2xl transition-all duration-300" />

              <div className="relative z-10">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-3 bg-gradient-to-br ${category.color} bg-opacity-20 rounded-xl`}
                  >
                    <div className="text-white">{category.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-100">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + skillIndex * 0.05,
                      }}
                      className="px-2.5 py-1 text-xs font-medium bg-zinc-800/70 text-zinc-300 rounded-full border border-zinc-700 hover:border-pink-500/50 hover:text-pink-300 transition-all duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  background: `linear-gradient(45deg, transparent 0%, rgba(168, 85, 247, 0.1) 50%, transparent 100%)`,
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

