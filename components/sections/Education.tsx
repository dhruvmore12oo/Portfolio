"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

export function Education() {
  const educationData = [
    {
      title: "Bachelor of Technology - Computer Science & Engineering",
      institution: "The Maharaja Sayajirao University of Baroda",
      location: "Vadodara, India",
      date: "Expected Graduation: 2028",
      highlights: [
        { label: "GPA", value: "8.60" }
      ],
      icon: GraduationCap,
    },
    {
      title: "12th Standard",
      institution: "Utkarsh Vidhyalaya, Vadodara",
      location: "Vadodara, India",
      date: "Completed",
      highlights: [
        { label: "Board Percentage", value: "95.6%" },
        { label: "Board Percentile", value: "98.6" },
        { label: "JEE Score", value: "93.75 Percentile" },
        { label: "GUJCET Score", value: "103 / 120" },
      ],
      icon: BookOpen,
    },
    {
      title: "10th Standard",
      institution: "Utkarsh Vidhyalaya, Vadodara",
      location: "Vadodara, India",
      date: "Completed",
      highlights: [
        { label: "Board Percentage", value: "86.5%" },
        { label: "Board Percentile", value: "96" },
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
              My academic background and qualifications.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line (Hidden on Mobile) */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>

              {educationData.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <div key={index} className={`relative md:flex md:items-center md:justify-between w-full mb-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Timeline Dot */}
                    <div className="absolute -left-10 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-background bg-primary z-10 shadow-sm top-6 md:top-auto"></div>

                    {/* Date Side */}
                    <div className={`hidden md:block w-5/12 ${isEven ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="inline-flex items-center text-primary font-medium bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
                        <Calendar size={16} className="mr-2" />
                        {item.date}
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full md:w-5/12">
                      <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:border-primary/50 hover:shadow-md transition-all duration-300">
                        <div className="md:hidden inline-flex items-center text-primary font-medium bg-primary/10 px-3 py-1 rounded-full border border-primary/20 text-sm mb-4">
                          <Calendar size={14} className="mr-2" />
                          {item.date}
                        </div>
                        
                        <h3 className="text-xl font-bold font-poppins text-foreground mb-1 flex items-start flex-col">
                          <Icon className="w-6 h-6 text-primary mb-2" />
                          {item.title}
                        </h3>
                        <p className="text-foreground font-medium mb-1">
                          {item.institution}
                        </p>
                        <p className="text-muted-foreground text-sm mb-4">
                          {item.location}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {item.highlights.map((highlight, hIndex) => (
                            <div key={hIndex} className="flex items-center text-primary bg-primary/5 px-3 py-1.5 rounded-lg border border-primary/10 w-max text-sm">
                              <Award size={16} className="mr-2" />
                              <span className="font-semibold">{highlight.label}: {highlight.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
