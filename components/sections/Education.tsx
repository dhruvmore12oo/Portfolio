"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

export function Education() {
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
              My academic background and qualifications in computer science.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line (Hidden on Mobile) */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>

              {/* Education Item */}
              <div className="relative md:flex md:items-center md:justify-between w-full mb-8">
                {/* Timeline Dot */}
                <div className="absolute -left-10 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-background bg-primary z-10 shadow-sm"></div>

                {/* Left Side (Empty for this layout, or date on left) */}
                <div className="hidden md:block w-5/12 text-right pr-8">
                  <div className="inline-flex items-center text-primary font-medium bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
                    <Calendar size={16} className="mr-2" />
                    Expected Graduation: 2028
                  </div>
                </div>

                {/* Right Side (Content) */}
                <div className="w-full md:w-5/12 md:pl-8">
                  <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:border-primary/50 hover:shadow-md transition-all duration-300">
                    <div className="md:hidden inline-flex items-center text-primary font-medium bg-primary/10 px-3 py-1 rounded-full border border-primary/20 text-sm mb-4">
                      <Calendar size={14} className="mr-2" />
                      Expected 2028
                    </div>
                    
                    <h3 className="text-xl font-bold font-poppins text-foreground mb-1 flex items-start flex-col">
                      <GraduationCap className="w-6 h-6 text-primary mb-2" />
                      Bachelor of Technology
                    </h3>
                    <h4 className="text-muted-foreground font-medium mb-3">
                      Computer Science & Engineering
                    </h4>
                    
                    <p className="text-foreground font-medium mb-4">
                      The Maharaja Sayajirao University of Baroda
                    </p>
                    
                    <div className="flex items-center text-primary bg-primary/5 px-3 py-1.5 rounded-lg border border-primary/10 w-max">
                      <Award size={18} className="mr-2" />
                      <span className="font-semibold">GPA: 8.60</span>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
