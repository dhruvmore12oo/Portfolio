"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export function Education() {
  const educationData = [
    {
      title: "B.E. in Computer Science and Engineering",
      institution: "The Maharaja Sayajirao University of Baroda",
      location: "Vadodara, Gujarat, India",
      highlights: [
        { label: "GPA", value: "8.81 / 10" },
        { label: "JEE Percentile", value: "93.75%" }
      ],
      icon: GraduationCap,
    },
    {
      title: "Higher Secondary Education (GSEB Class 12)",
      institution: "Utkarsh Vidhyalaya",
      location: "Vadodara, Gujarat, India",
      highlights: [
        { label: "Overall Score", value: "82.2%" },
        { label: "Science Stream", value: "95.5%" }
      ],
      icon: BookOpen,
    },
    {
      title: "Secondary Education (GSEB Class 10)",
      institution: "Utkarsh Vidhyalaya",
      location: "Vadodara, Gujarat, India",
      highlights: [
        { label: "Board Score", value: "86.5%" }
      ],
      icon: BookOpen,
    }
  ];

  return (
    <section id="education" className="py-24 bg-card/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground">
              Education
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto pt-4 text-lg">
              Academic background, engineering qualifications, and board examinations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {educationData.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                  >
                    <div className="h-full bg-card border border-border p-6 rounded-2xl shadow-sm hover:border-primary/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6">
                      <div className="space-y-3">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20 w-fit">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold font-poppins text-foreground leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-primary font-medium text-sm">
                          {item.institution}
                        </p>
                        <p className="text-muted-foreground text-xs">
                          {item.location}
                        </p>
                      </div>

                      <div className="flex flex-col gap-2 pt-2 border-t border-border/50">
                        {item.highlights.map((highlight, hIndex) => (
                          <div key={hIndex} className="flex items-center text-foreground bg-primary/5 px-3 py-2 rounded-lg border border-primary/10 text-xs">
                            <Award size={14} className="mr-2 text-primary flex-shrink-0" />
                            <span className="font-medium text-muted-foreground mr-1">{highlight.label}:</span>
                            <span className="font-bold text-foreground">{highlight.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

