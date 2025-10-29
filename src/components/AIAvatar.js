"use client";

import { motion } from "framer-motion";
import { Sparkles, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function AIAvatar({ onOpenChat }) {
  const [showSpeechBubble, setShowSpeechBubble] = useState(true);

  useEffect(() => {
    // Hide speech bubble after 10 seconds
    const timer = setTimeout(() => {
      setShowSpeechBubble(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="relative w-full max-w-sm"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: 2,
        type: "spring",
        stiffness: 150
      }}
    >
      {/* Speech Bubble */}
      {showSpeechBubble && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ delay: 2.5, duration: 0.4 }}
          className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-72 z-20"
        >
          <div className="bg-white text-zinc-900 px-5 py-4 rounded-2xl shadow-2xl relative">
            <p className="text-sm font-semibold text-center">
              Hi! 👋 Ask me anything about Daryna!
            </p>
            {/* Arrow */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45" />
          </div>
        </motion.div>
      )}

      {/* AI Avatar Card */}
      <motion.button
        onClick={onOpenChat}
        className="group relative w-full bg-gradient-to-br from-pink-900/40 to-lime-900/40 backdrop-blur-xl rounded-3xl p-14 border-2 border-pink-500/20 hover:border-pink-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/20 cursor-pointer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Pulsing Glow Effect */}
        <motion.div
          className="absolute -inset-2 bg-gradient-to-br from-pink-500/10 to-lime-500/10 rounded-3xl blur-2xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [0.98, 1.02, 0.98],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Avatar Container */}
          <div className="relative w-36 h-36 mb-6">
            {/* Animated Ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-lime-500 opacity-40"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Avatar Circle */}
            <div className="absolute inset-3 rounded-full bg-gradient-to-br from-pink-400 to-lime-400 p-[3px]">
              <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center overflow-hidden">
                {/* AI Avatar - Blonde Girl with Green Eyes */}
                <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
                  {/* Simple Avatar Representation */}
                  <div className="text-7xl">
                    <motion.span
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    >
                      👱‍♀️
                    </motion.span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sparkle Effect */}
            <motion.div
              className="absolute -top-1 -right-1 text-yellow-400 drop-shadow-lg"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.3, 1],
              }}
              transition={{
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <Sparkles className="w-7 h-7" />
            </motion.div>

            {/* Waving Hand */}
            <motion.div
              className="absolute -bottom-1 -right-1 text-3xl drop-shadow-lg"
              animate={{
                rotate: [0, 14, -8, 14, -4, 10, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              👋
            </motion.div>
          </div>

          {/* Text */}
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-lime-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            Chat with my AI Twin
          </h3>
          <p className="text-sm text-zinc-400 text-center mb-6 font-medium">
            Powered by AI • Always available
          </p>

          {/* CTA Button */}
          <div className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-pink-500 to-lime-500 text-white rounded-full text-base font-semibold group-hover:shadow-xl group-hover:shadow-pink-500/50 transition-all duration-300 group-hover:scale-105">
            <MessageCircle size={18} />
            <span>Start Chatting</span>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-2 mt-5">
            <motion.div
              className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-lg shadow-green-500/50"
              animate={{
                opacity: [1, 0.6, 1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <span className="text-xs text-zinc-400 font-medium">Online Now</span>
          </div>
        </div>

        {/* Floating Particles - Subtle */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-pink-400/30 rounded-full blur-[1px]"
            style={{
              left: `${15 + i * 14}%`,
              top: `${15 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-8, 8, -8],
              x: [-4, 4, -4],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.button>
    </motion.div>
  );
}

