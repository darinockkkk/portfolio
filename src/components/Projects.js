"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import profileData from "@/data/profileData.json";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 xl:px-24" ref={ref}>
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profileData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-zinc-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-teal-500/20 overflow-hidden">
                {/* Placeholder for project image */}
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  {index === 0 ? "🤝" : index === 1 ? "🎉" : "💰"}
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button
                    onClick={() => window.open(project.link, "_blank")}
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={() => window.open(project.link, "_blank")}
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-purple-400 transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-5 py-2.5 text-xs font-medium bg-zinc-800/50 text-teal-300 rounded-lg border border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Animated Border Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-teal-500/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

