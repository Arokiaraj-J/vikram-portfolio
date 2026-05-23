"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Github, Linkedin, Download, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Email",
    value: "vikram.aathithayan@gmail.com",
    href: null,
    color: "primary",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pondicherry, India",
    href: null,
    color: "accent",
  },
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/vikram-aathithayan",
    label: "GitHub",
    color: "from-gray-400 to-gray-600",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/vikram-aathithayan-0084b923a",
    label: "LinkedIn",
    color: "from-blue-400 to-blue-600",
  },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider mb-2 block">
            {"// Get In Touch"}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let&apos;s <span className="text-primary text-glow-blue">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        {/* Main Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-3xl p-8 md:p-12 border-glow relative overflow-hidden"
        >
          {/* Decorative gradient orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center gap-3 mb-10"
            >
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/30">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-green-400 font-medium text-sm md:text-base">
                  Available for Backend Development Opportunities
                </span>
              </div>
            </motion.div>

            {/* Contact Info Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-muted/30 border border-border hover:border-primary/30 transition-all duration-300 group"
                >
                  <div
                    className={`p-4 rounded-xl ${
                      item.color === "primary"
                        ? "bg-primary/20 group-hover:bg-primary/30"
                        : "bg-accent/20 group-hover:bg-accent/30"
                    } transition-colors duration-300`}
                  >
                    <item.icon
                      className={`w-6 h-6 ${
                        item.color === "primary" ? "text-primary" : "text-accent"
                      }`}
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">{item.label}</p>
                    <span className="text-foreground font-medium text-lg">{item.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="flex flex-col items-center gap-6 mb-10"
            >
              <h4 className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative p-5 glass rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group/social overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    {/* Glow effect on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover/social:opacity-20 transition-opacity duration-300`}
                    />
                    <social.icon className="w-7 h-7 text-foreground relative z-10 group-hover/social:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Resume Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="flex justify-center"
            >
              <a
                href="/resume.pdf"
                download="Vikram_Aathithayan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 relative overflow-hidden group/btn hover:scale-[1.02] active:scale-[0.98]"
              >
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-shimmer opacity-0 group-hover/btn:opacity-30" />
                <Download className="w-5 h-5 relative z-10 group-hover/btn:animate-bounce" />
                <span className="relative z-10">Download Resume</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
