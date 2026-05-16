"use client";

import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-center md:text-left">
            <span className="text-primary font-bold text-lg">{"<VA />"}</span>
          </div>

          <p className="text-muted-foreground text-sm text-center">
            &copy; {currentYear} Vikram Aathithayan. All rights reserved.
          </p>

          <p className="text-muted-foreground text-sm font-mono">
            Built with{" "}
            <span className="text-primary">Next.js</span> &{" "}
            <span className="text-accent">Framer Motion</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
