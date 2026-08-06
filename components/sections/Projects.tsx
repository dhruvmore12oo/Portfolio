"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ShieldCheck, Compass } from "lucide-react";

const PROJECTS = [
  {
    title: "Crime Analytics & Investigation Management Platform",
    description: "A comprehensive backend enterprise platform designed for law enforcement agencies to track criminal cases, manage digital evidence, and facilitate automated investigation workflows.",
    technologies: ["Spring Boot", "Spring Security", "JWT", "Spring Data JPA", "MySQL"],
    highlights: [
      "Developed a comprehensive backend platform to manage FIRs, cases, investigations, suspects, evidence, witnesses, and automated notifications.",
      "Designed a relational database structure modeling complex relationships across cases, officers, and evidence.",
      "Built REST APIs using Spring Boot and Spring Data JPA for end-to-end data processing.",
      "Implemented secure authentication and fine-grained role-based access control (Admin, Officer, Investigator) using JWT and Spring Security."
    ],
    githubUrl: "https://github.com/dhruvmore12oo/Portfolio",
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
    githubUrl: "https://github.com/dhruvmore12oo/Portfolio",
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
              Highlighting major software engineering projects demonstrating scalable backend design and modern full-stack development.
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

                    <CardFooter className="pt-4 border-t border-border/50 bg-background/50">
                      <Button variant="ghost" size="sm" onClick={() => window.open(project.githubUrl, "_blank")} className="gap-2 group-hover:text-primary transition-colors">
                        <Github className="w-4 h-4" /> 
                        Code Repository
                      </Button>
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

