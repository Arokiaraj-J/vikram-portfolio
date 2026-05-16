"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Server, Zap, Shield, Users } from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "Backend Architecture",
    description: "Building scalable server-side applications",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "PostgreSQL optimization & management",
  },
  {
    icon: Code2,
    title: "API Development",
    description: "Creating robust RESTful services",
  },
  {
    icon: Shield,
    title: "Authentication",
    description: "Secure auth & authorization systems",
  },
  {
    icon: Users,
    title: "HRMS & Payroll",
    description: "Enterprise module development",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimization & production support",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider mb-2 block">
            {"// About Me"}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Who I <span className="text-primary text-glow-blue">Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-3xl p-8 border-glow relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
              
              {/* Experience badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-primary font-mono text-sm">2+ Years Experience</span>
              </motion.div>

              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                Backend Developer with{" "}
                <span className="text-primary font-semibold">2+ years of experience</span> in
                developing scalable RESTful APIs and enterprise-level applications using{" "}
                <span className="text-accent">Node.js, Express.js, TypeScript</span>, and{" "}
                <span className="text-accent">PostgreSQL</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                Experienced in backend architecture, approval workflows, HRMS modules, payroll
                systems, authentication, database management, and production deployment support.
              </p>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                Passionate about building{" "}
                <span className="text-foreground font-medium">reliable backend systems</span> and
                solving real-world business problems with clean, maintainable code.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glass rounded-2xl p-6 border border-card-border hover:border-primary/50 transition-all duration-300 group"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-glow-blue transition-all" />
                </div>
                <h3 className="text-foreground font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
