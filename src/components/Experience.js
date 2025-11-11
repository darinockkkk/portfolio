"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";
import profileData from "@/data/profileData.json";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-12 relative">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 xl:px-24" ref={ref}>
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-lime-500 mx-auto rounded-full mt-4 mb-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 to-lime-500" />

          {/* Experience Cards */}
          <div className="space-y-0">
            {profileData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } ${index > 0 ? "mt-6 md:-mt-24" : ""}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-pink-500 rounded-full border-4 border-zinc-900 transform -translate-x-1/2 z-10" />

                {/* Card */}
                <div
                  className={`ml-20 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <div className="group relative bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-6 border border-zinc-800 hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-lime-500/0 group-hover:from-pink-500/5 group-hover:to-lime-500/5 rounded-2xl transition-all duration-300" />

                    <div className="relative z-10">
                      {/* Company Icon */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-gradient-to-br from-pink-500/20 to-lime-500/20 rounded-lg">
                          <Briefcase className="w-5 h-5 text-pink-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-zinc-100">
                            {exp.role}
                          </h3>
                          <p className="text-pink-400 font-semibold">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Period */}
                      <div className="flex items-center gap-2 text-sm text-zinc-400 mb-4">
                        <Calendar size={16} />
                        {exp.period}
                      </div>

                      {/* Description */}
                      <p className="text-zinc-300 mb-4 leading-relaxed text-justify">
                        {exp.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2.5 py-1 text-xs font-medium bg-zinc-800/50 text-pink-300 rounded-full border border-zinc-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

