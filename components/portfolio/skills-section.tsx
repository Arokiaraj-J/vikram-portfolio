"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    name: "Node.js",
    level: 95,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    level: 92,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "TypeScript",
    level: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "PostgreSQL",
    level: 88,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "REST APIs",
    level: 94,
    icon: null,
  },
  {
    name: "PM2",
    level: 85,
    icon: null,
  },
  {
    name: "Postman",
    level: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    name: "GitHub",
    level: 92,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-4 relative" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider mb-2 block">
            {"// Technical Skills"}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary text-glow-blue">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl p-6 border-glow hover:glow-blue transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-4">
                {skill.icon ? (
                  <div className="w-12 h-12 rounded-lg glass p-2 flex items-center justify-center">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-8 h-8 object-contain"
                      crossOrigin="anonymous"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-lg glass flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {skill.name.slice(0, 2)}
                    </span>
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-foreground font-semibold">
                    {skill.name}
                  </h3>
                  <span className="text-primary text-sm">{skill.level}%</span>
                </div>
              </div>

              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
