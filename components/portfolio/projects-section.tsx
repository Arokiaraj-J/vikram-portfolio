"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Layers, Server } from "lucide-react";

const projects = [
  {
    title: "YouCanFly LMS",
    description:
      "A comprehensive Learning Management System designed to deliver seamless educational experiences. Features include course management, user authentication, progress tracking, and interactive learning modules.",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "TypeScript", "REST API"],
    icon: Layers,
    color: "primary",
    features: [
      "User authentication & authorization",
      "Course creation & management",
      "Progress tracking dashboard",
      "RESTful API architecture",
    ],
  },
  {
    title: "Evoltec Property Management",
    description:
      "An enterprise-level Property Management and CRM platform designed to manage Leasing, Sales, HRMS, Payroll, Facility Management, ESS, and Approval Workflow operations for real estate businesses.",

    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "PM2",
      "Postman"
    ],

    icon: Server,
    color: "accent",

    features: [
      "CRM & leasing management",
      "HRMS & payroll modules",
      "Approval workflow system",
      "Enterprise business automation",
    ],
  }
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-4 relative" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider mb-2 block">
            {"// Featured Work"}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary text-glow-blue">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing some of the key projects I&apos;ve built
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              <motion.div
                className={`glass rounded-2xl p-8 h-full border-glow hover:${
                  project.color === "primary" ? "glow-blue" : "glow-purple"
                } transition-all duration-300`}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`p-4 rounded-xl ${
                      project.color === "primary"
                        ? "bg-primary/20"
                        : "bg-accent/20"
                    }`}
                  >
                    <project.icon
                      className={`w-8 h-8 ${
                        project.color === "primary"
                          ? "text-primary"
                          : "text-accent"
                      }`}
                    />
                  </div>
                  <div className="flex gap-3">
                    <motion.button
                      className="p-2 rounded-lg glass hover:bg-primary/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5 text-foreground" />
                    </motion.button>
                    <motion.button
                      className="p-2 rounded-lg glass hover:bg-primary/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5 text-foreground" />
                    </motion.button>
                  </div>
                </div>

                <h3
                  className={`text-2xl font-bold mb-3 ${
                    project.color === "primary" ? "text-primary" : "text-accent"
                  }`}
                >
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            project.color === "primary"
                              ? "bg-primary"
                              : "bg-accent"
                          }`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs font-mono rounded-full ${
                        project.color === "primary"
                          ? "bg-primary/20 text-primary border border-primary/30"
                          : "bg-accent/20 text-accent border border-accent/30"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
