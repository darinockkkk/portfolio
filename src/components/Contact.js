"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import profileData from "@/data/profileData.json";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormState({ name: "", email: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: profileData.social.linkedin,
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: profileData.social.github,
      color: "hover:text-pink-400",
    },
    {
      name: "Email",
      icon: <Mail className="w-6 h-6" />,
      url: `mailto:${profileData.social.email}`,
      color: "hover:text-lime-400",
    },
  ];

  return (
    <section id="contact" className="py-12 2xl:py-16 relative">
      <div className="max-w-[90%] lg:max-w-[85%] xl:max-w-[75%] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12" ref={ref}>
        {/* Section Title */}
        <motion.div
          className="text-center mb-12 2xl:mb-16 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-lime-500 mx-auto rounded-full mt-4 mb-4" />
          <p className="text-zinc-400 text-lg text-center">
            Have a project in mind or want to chat? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 2xl:gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800 space-y-6"
            >
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-zinc-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl text-zinc-100 placeholder-zinc-500 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl text-zinc-100 placeholder-zinc-500 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-zinc-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl text-zinc-100 placeholder-zinc-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  isSubmitted
                    ? "bg-green-500 text-white"
                    : "bg-gradient-to-r from-pink-500 to-lime-500 text-white hover:shadow-lg hover:shadow-pink-500/50 hover:scale-[1.02]"
                } disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Info Card */}
            <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800">
              <h3 className="text-2xl font-bold text-zinc-100 mb-4">
                Get in Touch
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out!
              </p>

              {/* Email */}
              <div className="flex items-center gap-3 text-zinc-300 mb-4">
                <Mail className="w-5 h-5 text-pink-400" />
                <a
                  href={`mailto:${profileData.email}`}
                  className="hover:text-pink-400 transition-colors"
                >
                  {profileData.email}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800 relative">
              <motion.span
                className="absolute -top-6 -right-6 text-5xl"
                animate={{
                  rotate: [0, 14, -8, 14, -4, 10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                🤝
              </motion.span>
              <h3 className="text-2xl font-bold text-zinc-100 mb-8">
                Connect With Me
              </h3>
              <div className="flex gap-4 mt-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 bg-zinc-800/50 rounded-xl border border-zinc-700 text-zinc-400 ${social.color} transition-all duration-300 hover:border-pink-500/50`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

