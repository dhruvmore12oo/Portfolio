"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ShieldCheck, Compass, Activity, Coins, Split, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "SplitX – On-Chain Subscription Duration Trading Platform",
    description: "An on-chain subscription marketplace turning unused digital service durations into tradable entitlements that users can split, list, and resell seamlessly on Arbitrum.",
    technologies: ["Solidity", "Arbitrum Sepolia", "Smart Contracts", "Escrow", "Web3", "React"],
    highlights: [
      "Secured 1st Runner-Up at HackArena 2026 (Neuralize AI/ML & Dev Infinity clubs) with team ByteSquad.",
      "Engineered Solidity smart contracts deployed on Arbitrum Sepolia ensuring every split, escrow lock, transfer, and provider state update is strictly driven by on-chain logic.",
      "Enabled users to avoid paying for unused subscription days by splitting remaining time intervals into verifiable tradable assets.",
      "Built resilient backend architecture and escrow state machines for decentralized peer-to-peer settlement."
    ],
    githubUrl: "https://github.com/dhruvmore12oo",
    demoUrl: "https://lnkd.in/dQYS46Ri",
    icon: Split,
    badgeText: "Web3 (1st Runner-Up @ HackArena)"
  },
  {
    title: "ChainGuard – Parametric Disaster Micro-Insurance Platform",
    description: "A Web3 parametric insurance platform built with team ByteSquad, where emergency payouts trigger automatically from live disaster data with no manual claims or adjuster approval.",
    technologies: ["Solidity", "Arbitrum Sepolia", "Oracle Data Feeds", "Smart Contracts", "DeFi"],
    highlights: [
      "Wrote Solidity smart contracts that hold funds and issue policies on-chain, with escrow logic for policy state transitions and automated payouts deployed on Arbitrum Sepolia.",
      "Connected the system to live weather and environmental data feeds so payouts execute instantly without manual intervention.",
      "Built backend logic linking risk calculations to wallet payouts.",
      "Won 1st Runner-Up at the Arbitrum Builder Pods Showcase (Lampros DAO)."
    ],
    githubUrl: "https://github.com/dhruvmore12oo",
    demoUrl: "https://lnkd.in/dZenhZqK",
    icon: Coins,
    badgeText: "Web3 & DeFi (1st Runner-Up)"
  },
  {
    title: "MediFusion – AI-Assisted Chest X-ray Abnormality Classification",
    description: "A deep learning clinical workstation powered by MedCXRNet, a custom 391K-parameter CNN trained from scratch on NIH ChestX-ray14 for 14-class multi-label diagnosis.",
    technologies: ["Python", "PyTorch", "Streamlit", "PyTest", "CNN", "Weighted BCE"],
    highlights: [
      "Designed and trained MedCXRNet (391K params) from scratch on NIH ChestX-ray14 for 14-class multi-label classification of 224x224 grayscale chest X-rays.",
      "Mitigated severe class imbalance with per-class positive weights in Weighted BCE loss, and prevented data leakage using strict patient-level splits.",
      "Optimized per-class decision thresholds on validation F1 across a 0.05–0.95 grid, then froze them in JSON for test evaluation and inference.",
      "Built a deterministic inference engine and a Streamlit clinical workstation with probability visualizations and light/dark themes; validated with 48 PyTest unit and integration tests."
    ],
    githubUrl: "https://github.com/dhruvmore12oo",
    icon: Activity,
    badgeText: "AI / Deep Learning"
  },
  {
    title: "Crime Analytics & Investigation Management Platform",
    description: "A comprehensive backend enterprise platform designed for law enforcement agencies to track criminal cases, manage digital evidence, and facilitate automated investigation workflows.",
    technologies: ["Spring Boot", "Spring Security", "JWT", "Spring Data JPA", "MySQL"],
    highlights: [
      "Developed a backend platform to manage FIRs, cases, investigations, criminals, evidence, witnesses, and notifications.",
      "Designed a relational schema linking cases, investigations, officers, criminals, and evidence; built REST APIs with Spring Boot and Spring Data JPA.",
      "Implemented JWT authentication and role-based authorization with Spring Security for Admin, Officer, and Investigator roles."
    ],
    githubUrl: "https://github.com/dhruvmore12oo/Investigation-Tracking-Solution",
    icon: ShieldCheck,
    badgeText: "Enterprise Backend"
  },
  {
    title: "Traveloop - Personalized Travel Planning Platform",
    description: "A dynamic full-stack travel planning platform empowering travelers to design custom itineraries, track shared budgets, discover top destinations, and collaborate with companions.",
    technologies: ["React", "TypeScript", "PostgreSQL", "JWT"],
    highlights: [
      "Built a personalized travel planning web app to create and manage full trip itineraries, destinations, and activity schedules.",
      "Implemented secure user authentication using JWT access and refresh token mechanisms.",
      "Designed budget and expense tracking features to help users monitor travel spending in real time.",
      "Developed collaborative and community-sharing features for shared trip planning."
    ],
    githubUrl: "https://github.com/dhruvmore12oo/HackathonOdoo",
    icon: Compass,
    badgeText: "Full-Stack Web App"
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-card/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto pt-4 text-lg">
              Highlighting major engineering projects demonstrating scalable backend architecture, deep learning models, Web3 smart contracts, and full-stack development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {PROJECTS.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                >
                  <Card className="h-full flex flex-col bg-card/80 backdrop-blur-sm shadow-sm overflow-hidden border border-border/50 group hover:border-primary/50 transition-all duration-300">
                    <CardHeader className="space-y-4">
                      <div className="flex justify-between items-center">
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 flex items-center gap-1.5 px-3 py-1">
                          <Icon className="w-4 h-4" /> {project.badgeText}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl font-poppins text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </CardHeader>

                    <CardContent className="flex-1 space-y-6">
                      <div className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Key Highlights</p>
                        <ul className="text-sm text-foreground/80 space-y-2 list-disc pl-4 marker:text-primary">
                          {project.highlights.map((highlight, i) => (
                            <li key={i} className="leading-relaxed">{highlight}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="space-y-2 pt-2">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="border-border bg-background/50 text-foreground font-mono text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="pt-4 border-t border-border/50 bg-background/50 flex flex-wrap gap-3">
                      <Button variant="ghost" size="sm" onClick={() => window.open(project.githubUrl, "_blank")} className="gap-2 group-hover:text-primary transition-colors">
                        <Github className="w-4 h-4" /> 
                        Code Repository
                      </Button>
                      {project.demoUrl && (
                        <Button variant="outline" size="sm" onClick={() => window.open(project.demoUrl, "_blank")} className="gap-2 border-primary/30 text-primary hover:bg-primary/10 transition-colors">
                          <ExternalLink className="w-4 h-4" /> 
                          Live Demo
                        </Button>
                      )}
                    </CardFooter>
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

