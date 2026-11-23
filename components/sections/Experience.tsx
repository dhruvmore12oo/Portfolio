"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Building2 } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Backend & Web3 Developer (Hackathons)",
    organization: "ByteSquad / Hackathon Teams",
    type: "Hackathons & Competitions",
    icon: Briefcase,
    bullets: [
      "Designed and implemented smart contracts, relational databases, and RESTful APIs across competitive hackathons (Arbitrum Builder Pods, HackArena 2026, Odoo Hackathon).",
      "Built on-chain escrow logic, oracle data feed integrations, and backend payout pipelines with team ByteSquad, securing multiple 1st Runner-Up podium finishes.",
      "Collaborated closely with frontend developers and smart contract engineers to integrate complex Web3/Web2 architectures under tight hackathon deadlines."
    ]
  },
  {
    role: "Junior Coordinator",
    organization: "Training and Placement (TNP) Cell, The Maharaja Sayajirao University of Baroda",
    type: "Leadership & Coordination",
    icon: Building2,
    bullets: [
      "Contributed to placement-related activities, campus recruitment drives, and company coordination as an active member of the TNP Cell.",
      "Assisted in organizing and coordinating student-focused placement sessions, workshops, and interview logistics."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-card/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground">
              Experience & Leadership
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto pt-4 text-lg">
              Practical backend engineering roles in collaborative hackathon teams and organizational leadership positions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {EXPERIENCES.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Card className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 shadow-sm">
                    <CardContent className="p-8 space-y-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20 flex-shrink-0 mt-1">
                            <Icon size={24} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold font-poppins text-foreground">
                              {exp.role}
                            </h3>
                            <p className="text-primary font-medium text-base mt-0.5">
                              {exp.organization}
                            </p>
                          </div>
                        </div>
                        <Badge variant="outline" className="w-fit border-primary/30 text-primary bg-primary/5 px-3 py-1 text-xs">
                          {exp.type}
                        </Badge>
                      </div>

                      <ul className="space-y-3 pl-4 list-disc marker:text-primary text-muted-foreground leading-relaxed text-base">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>
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
