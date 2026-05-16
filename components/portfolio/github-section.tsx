"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GitBranch, GitCommit, GitPullRequest, Star, Users, Code2 } from "lucide-react";

const stats = [
  { icon: GitCommit, label: "Total Commits", value: "500+", color: "primary" },
  { icon: Star, label: "Stars Earned", value: "50+", color: "accent" },
  { icon: GitPullRequest, label: "Pull Requests", value: "100+", color: "primary" },
  { icon: Users, label: "Followers", value: "25+", color: "accent" },
  { icon: GitBranch, label: "Repositories", value: "30+", color: "primary" },
  { icon: Code2, label: "Languages Used", value: "8+", color: "accent" },
];

const contributionData = [
  [0, 1, 2, 3, 2, 1, 0, 2, 3, 4, 3, 2, 1],
  [1, 2, 3, 4, 3, 2, 1, 3, 4, 3, 2, 1, 2],
  [2, 3, 4, 3, 2, 3, 2, 4, 3, 2, 3, 2, 3],
  [3, 4, 3, 2, 1, 2, 3, 3, 2, 1, 2, 3, 4],
  [2, 3, 2, 1, 0, 1, 2, 2, 1, 2, 3, 4, 3],
  [1, 2, 1, 0, 1, 2, 1, 1, 2, 3, 4, 3, 2],
  [0, 1, 0, 1, 2, 1, 0, 0, 1, 2, 3, 2, 1],
];

const getContributionColor = (level: number) => {
  const colors = [
    "bg-muted",
    "bg-primary/30",
    "bg-primary/50",
    "bg-primary/70",
    "bg-primary",
  ];
  return colors[level] || colors[0];
};

export function GithubSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="github" className="py-32 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider mb-2 block">
            {"// Open Source"}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            GitHub <span className="text-accent text-glow-purple">Stats</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My contributions and activity on GitHub
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl p-4 text-center border-glow hover:glow-blue transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <stat.icon
                className={`w-6 h-6 mx-auto mb-2 ${
                  stat.color === "primary" ? "text-primary" : "text-accent"
                }`}
              />
              <div
                className={`text-2xl font-bold ${
                  stat.color === "primary" ? "text-primary" : "text-accent"
                }`}
              >
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass rounded-2xl p-6 border-glow"
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Contribution Activity
          </h3>
          <div className="overflow-x-auto">
            <div className="flex flex-col gap-1 min-w-max">
              {contributionData.map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-1">
                  {row.map((level, colIndex) => (
                    <motion.div
                      key={`${rowIndex}-${colIndex}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.2,
                        delay: 0.6 + (rowIndex * row.length + colIndex) * 0.01,
                      }}
                      className={`w-4 h-4 rounded-sm ${getContributionColor(
                        level
                      )} hover:ring-2 hover:ring-primary transition-all cursor-pointer`}
                      title={`${level} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
            <span>Less</span>
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className={`w-3 h-3 rounded-sm ${getContributionColor(level)}`}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </motion.div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-8"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full border-glow hover:glow-blue transition-all duration-300 text-foreground"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
