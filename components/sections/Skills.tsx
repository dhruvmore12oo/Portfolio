"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Technologies",
    skills: ["JDBC", "MySQL"],
  },
  {
    title: "Concepts",
    skills: ["Data Structures", "Algorithms", "Problem Solving"],
  },
  {
    title: "Soft Skills",
    skills: ["Leadership", "Adaptability", "Multitasking"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto pt-4 text-lg">
              A comprehensive overview of my technical expertise and professional capabilities.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {SKILL_CATEGORIES.map((category) => (
              <motion.div key={category.title} variants={itemVariants}>
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold font-poppins text-foreground mb-6 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <ul className="space-y-3">
                      {category.skills.map((skill) => (
                        <li key={skill} className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mr-3"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
