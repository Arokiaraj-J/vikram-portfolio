"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, Rocket, Code, Building2 } from "lucide-react";

const experiences = [
  {
    title: "Backend Developer",
    company: "Evoltec Property Management System",
    period: "Mid 2024 – Present",
    icon: Building2,
    color: "primary",

    description:
      "Working as a Backend Developer on the Evoltec Enterprise Property Management & CRM System, responsible for developing scalable backend APIs, approval workflows, HRMS modules, payroll systems, leasing modules, ESS modules, and enterprise-level business logic implementation.",

    responsibilities: [
      "Enterprise backend API development",
      "Approval workflow implementation",
      "HRMS and payroll module development",
      "PostgreSQL database management",
      "Middleware and validation handling",
      "Performance optimization",
      "Production deployment and server support",
      "Debugging and feature enhancements",
    ],

    technologies: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "PM2",
      "Postman"
    ],
  },
  {
    title: "Junior Developer",
    company: "YouCanFly Project",
    period: "Feb 2024 – Mid 2024",
    icon: Rocket,
    color: "accent",
    description:
      "Joined as a Junior Developer and started working on real-time enterprise application development. Contributed to the YouCanFly Learning Management Platform by supporting backend API development, PostgreSQL integration, authentication modules, debugging, and REST API implementation.",
    responsibilities: [
      "Backend API development",
      "RESTful API integration",
      "Authentication & authorization",
      "PostgreSQL queries",
      "API testing using Postman",
      "Bug fixing and production support",
    ],
    technologies: ["Node.js", "Express.js", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Internship Trainee",
    company: "Appxperts",
    period: "2023 – 2023",
    icon: Code,
    color: "primary",
    description:
      "Started career as an Intern Trainee where learned frontend and programming fundamentals including HTML, CSS, Bootstrap, and JavaScript. Built basic web pages, improved UI understanding, and gained foundational knowledge of web development concepts and development workflows.",
    responsibilities: [
      "HTML5 & CSS3 fundamentals",
      "Bootstrap framework",
      "JavaScript basics",
      "Responsive design principles",
      "Web development workflows",
    ],
    technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
  },
];

export function ExperienceSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section id="experience" className="py-32 px-4 relative" ref={containerRef}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-mono text-sm tracking-wider mb-2 block">
            {"// Career Journey"}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Work <span className="text-accent text-glow-purple">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            2+ years of professional experience building enterprise applications
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-card-border transform md:-translate-x-1/2">
            <motion.div
              className="w-full bg-gradient-to-b from-primary via-accent to-primary"
              style={{ height: lineHeight }}
            />
          </div>

          {experiences.map((exp, index) => (
            <TimelineCard key={exp.title + exp.company} experience={exp} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  experience,
  index,
  isInView,
}: {
  experience: (typeof experiences)[0];
  index: number;
  isInView: boolean;
}) {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-50px" });
  const Icon = experience.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Timeline node with icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={cardInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: "spring" }}
        className="absolute left-8 md:left-1/2 top-0 transform -translate-x-1/2 z-10"
      >
        <div
          className={`w-16 h-16 rounded-2xl glass border-2 ${
            experience.color === "primary" ? "border-primary glow-blue" : "border-accent glow-purple"
          } flex items-center justify-center backdrop-blur-xl`}
        >
          <Icon
            className={`w-7 h-7 ${experience.color === "primary" ? "text-primary" : "text-accent"}`}
          />
        </div>
      </motion.div>

      {/* Content card */}
      <div className={`flex-1 pl-24 md:pl-0 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
        <motion.div
          className="glass rounded-3xl p-8 border border-card-border hover:border-primary/50 transition-all duration-500 group relative overflow-hidden"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          {/* Glow effect on hover */}
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
              experience.color === "primary"
                ? "bg-gradient-to-br from-primary/10 via-transparent to-transparent"
                : "bg-gradient-to-br from-accent/10 via-transparent to-transparent"
            }`}
          />

          {/* Header */}
          <div className={`flex items-center gap-3 mb-4 ${isEven ? "md:justify-end" : ""}`}>
            <Briefcase
              className={`w-5 h-5 ${experience.color === "primary" ? "text-primary" : "text-accent"}`}
            />
            <span
              className={`font-semibold ${
                experience.color === "primary" ? "text-primary" : "text-accent"
              }`}
            >
              {experience.company}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-3 relative z-10">{experience.title}</h3>

          <div
            className={`flex items-center gap-2 mb-5 text-muted-foreground text-sm ${
              isEven ? "md:justify-end" : ""
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span className="font-mono">{experience.period}</span>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
            {experience.description}
          </p>

          {/* Responsibilities */}
          <div className={`mb-6 ${isEven ? "md:text-right" : ""}`}>
            <h4
              className={`text-sm font-semibold mb-3 ${
                experience.color === "primary" ? "text-primary" : "text-accent"
              }`}
            >
              Key Responsibilities
            </h4>
            <ul className={`space-y-2 ${isEven ? "md:ml-auto" : ""}`}>
              {experience.responsibilities.slice(0, 4).map((resp) => (
                <li
                  key={resp}
                  className={`text-sm text-muted-foreground flex items-center gap-2 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      experience.color === "primary" ? "bg-primary" : "bg-accent"
                    }`}
                  />
                  {resp}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div className={`flex flex-wrap gap-2 relative z-10 ${isEven ? "md:justify-end" : ""}`}>
            {experience.technologies.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05 }}
                className={`px-4 py-1.5 text-xs font-mono rounded-full backdrop-blur-sm ${
                  experience.color === "primary"
                    ? "bg-primary/15 text-primary border border-primary/30"
                    : "bg-accent/15 text-accent border border-accent/30"
                }`}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}
