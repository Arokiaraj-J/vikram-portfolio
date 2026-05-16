"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const titles = [
  "Backend Developer",
  "Node.js Expert",
  "API Architect",
  "Database Designer",
];

export function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentTitle.length) {
            setDisplayText(currentTitle.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-primary font-mono text-sm tracking-wider">
            {"// Hello World, I'm"}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance"
        >
          <span className="text-foreground">Vikram</span>{" "}
          <span className="text-primary text-glow-blue">Aathithayan</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl sm:text-3xl md:text-4xl font-light text-muted-foreground mb-8 h-12"
        >
          <span className="text-accent text-glow-purple">{displayText}</span>
          <span className="animate-pulse">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty"
        >
          Crafting robust, scalable backend solutions that power modern
          applications. Specialized in building high-performance APIs and
          database architectures.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="https://github.com/vikram-aathithayan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full border-glow hover:glow-blue transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-6 h-6 text-foreground" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/vikram-aathithayan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full border-glow hover:glow-blue transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-6 h-6 text-foreground" />
          </motion.a>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          onClick={scrollToAbout}
          className="animate-bounce"
        >
          <ArrowDown className="w-8 h-8 text-primary" />
        </motion.button>
      </div>
    </section>
  );
}
