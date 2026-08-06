"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Code2, Award } from "lucide-react";

const ACHIEVEMENTS = [
  {
    title: "300+ DSA Problems Solved",
    description: "Across LeetCode and Codeforces platforms, mastering fundamental Data Structures, Algorithms, and Problem-Solving techniques.",
    stat: "300+",
    icon: Code2,
    badge: "Competitive Programming",
  },
  {
    title: "Rank 1300 in ACPC",
    description: "Secured Rank 1300 in the Arab Competitive Programming Contest (Regional Contest), competing against top algorithmic teams.",
    stat: "Rank 1300",
    icon: Trophy,
    badge: "Regional Contest",
  },
  {
    title: "Top 10% in Odoo Hackathon",
    description: "Ranked in the top 10% out of all developer teams in the nation-wide Odoo Hiring Hackathon with high-impact software design.",
    stat: "Top 10%",
    icon: Award,
    badge: "National Hackathon",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground">
              Achievements & Recognitions
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto pt-4 text-lg">
              Notable milestones from competitive programming contests and national hackathons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ACHIEVEMENTS.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                >
                  <Card className="h-full bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:bg-card transition-all duration-300 group overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-8 text-primary/5 group-hover:text-primary/10 transition-colors pointer-events-none">
                      <Icon size={120} />
                    </div>
                    <CardContent className="p-8 flex flex-col justify-between h-full space-y-6 relative z-10">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                            <Icon size={24} />
                          </div>
                          <span className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground">
                            {item.badge}
                          </span>
                        </div>
                        <h3 className="text-3xl font-extrabold font-poppins text-primary tracking-tight">
                          {item.stat}
                        </h3>
                        <h4 className="text-xl font-semibold font-poppins text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
