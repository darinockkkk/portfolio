"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const differentiators = [
  {
    emoji: "💼",
    title: "From Finance to Tech — Logic vs People",
    description:
      "Before becoming a developer, I earned a Finance degree and started in tech business operations. That background helps me understand products from the lens of strategy, value, and user impact—while collaborating naturally with people, not just code.",
  },
  {
    emoji: "🚀",
    title: "I Built and Sold My Own Product",
    description:
      "I turned an idea into an AI-powered restaurant app that onboarded 1K+ early users. I also mentored a team of 10, guiding them through product development. I later sold the IP in the UK and Canada, where it’s now being implemented."
  },
  {
    emoji: "🤝",
    title: "Trusted Collaborator (Even by Clients)",
    description:
      "At Kilona, a client personally requested me to continue leading their project because of the clarity and speed of delivery. I thrive in Agile teams, communicate transparently, and build trust quickly—especially when timelines are tight.",
  },
  {
    emoji: "🎨",
    title: "Design-Driven Perfectionist",
    description:
      "I’m meticulous about design and structure, obsessing over every detail from layout to interaction. I craft interfaces that are both aesthetically polished and user-friendly, ensuring consistency, clarity, and an intuitive experience at every step."
  },
];

const microFacts = [
  { emoji: "🎓", text: "#1 BSc in Finance, #2 BSc in CompSci → fluent in both business and code" },
  { emoji: "💡", text: "Built & sold an app (IP live in 🇬🇧 + 🇨🇦), mentoring a team of 10 along the way" },
  { emoji: "🧠", text: "Agile-obsessed and highly structured — Google Calendar is my second brain" },
  { emoji: "🤝", text: "Client-favorite developer at Kilona — I make an impact wherever I go" },
  { emoji: "🎨", text: "Always thinking one step ahead for the next iteration (Ai, automation, design)" },
  { emoji: "👩‍💻", text: "Quick to learn new technologies — from React Native to Django, Java, and beyond" },
];

export default function ExampleDraft() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="differentiators" className="py-12 2xl:py-16 relative">
      <div
        className="max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12"
        ref={ref}
      >
        <motion.div
          className="text-center mb-12 2xl:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What Makes Me Different
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-lime-500 mx-auto rounded-full mt-4 mb-4" />
          <p className="mt-6 text-zinc-400 text-lg md:text-xl text-center flex justify-center">
            Here’s a snapshot of how my journey shapes the way I build and ship products:
          </p>
        </motion.div>

        {/* Differentiator Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-8 backdrop-blur-md hover:border-pink-500/40 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + index * 0.1 }}
            >
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed text-justify">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Micro Facts */}
        <motion.div
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {microFacts.map((fact, index) => (
            <motion.div
              key={fact.text}
              className="bg-zinc-900/40 border border-zinc-800 rounded-2xl px-5 py-4 flex items-start gap-3 hover:border-pink-500/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.45 + index * 0.07 }}
            >
              <span className="text-2xl">{fact.emoji}</span>
              <p className="text-sm text-zinc-300 leading-relaxed">{fact.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}