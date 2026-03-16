"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Code2, ExternalLink } from "lucide-react";

const PROFILES = [
  {
    platform: "GitHub",
    username: "@dhruvmore12oo",
    url: "https://github.com/dhruvmore12oo",
    icon: Github,
    color: "group-hover:text-[#ffffff]",
    bgColor: "group-hover:bg-[#24292e]",
  },
  {
    platform: "LinkedIn",
    username: "dhruv-more-662934372",
    url: "https://www.linkedin.com/in/dhruv-more-662934372/",
    icon: Linkedin,
    color: "group-hover:text-[#0a66c2]",
    bgColor: "group-hover:bg-[#f3f9ff]",
  },
  {
    platform: "LeetCode",
    username: "Dhruv12oo",
    url: "https://leetcode.com/u/Dhruv12oo/",
    icon: Code2,
    color: "group-hover:text-[#ffa116]",
    bgColor: "group-hover:bg-[#fff9f0]",
  },
];

export function Profiles() {
  return (
    <section id="profiles" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground">
              Coding Profiles
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto pt-4 text-lg">
              Connect with me professionally or check out my code contributions and problem-solving solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PROFILES.map((profile, index) => {
              const Icon = profile.icon;
              return (
                <motion.div
                  key={profile.platform}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                >
                  <a href={profile.url} target="_blank" rel="noopener noreferrer" className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl">
                    <Card className={`h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden ${profile.bgColor}`}>
                      <CardContent className="p-8 flex flex-col items-center justify-center text-center space-y-4 h-full">
                        <div className={`p-4 rounded-full bg-background/50 border border-border transition-colors duration-300 ${profile.color}`}>
                          <Icon size={32} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold font-poppins text-foreground">
                            {profile.platform}
                          </h3>
                          <p className="text-muted-foreground text-sm font-medium mt-1">
                            {profile.username}
                          </p>
                        </div>
                        <ExternalLink size={16} className="text-muted-foreground/50 group-hover:text-foreground/80 transition-colors mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300" />
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
