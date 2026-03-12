"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Trophy } from "lucide-react";

const PROJECTS = [
  {
    title: "Location-Based Attendance System",
    description: "A web-based attendance tracking system designed to prevent proxy attendance by verifying the real-time location of users.",
    technologies: ["Java", "MySQL", "JDBC"],
    contributions: [
      "Designed database schema",
      "Implemented backend logic",
      "Built during a university hackathon with a team of five developers",
    ],
    githubUrl: "#",
    isHackathon: true,
  },
  {
    title: "AI Assisted To-Do List",
    description: "A productivity-focused To-Do List application that helps users manage tasks efficiently. Along with standard task management features, the system includes an AI-based assistant that helps users organize and prioritize tasks.",
    technologies: ["JavaScript", "AI", "Task Management"],
    contributions: [
      "Add and delete tasks",
      "Mark tasks as completed",
      "AI-based task suggestions and prioritization assistance",
    ],
    githubUrl: "#",
    isHackathon: false,
  },
  {
    title: "Criminal Record Management System",
    description: "A desktop-based system developed to manage and maintain criminal records using a structured database system. The system allows administrators to store, update, and retrieve criminal data through a graphical interface.",
    technologies: ["Java", "Java Swing", "MySQL"],
    contributions: [
      "Criminal record storage and search functionality",
      "Database management",
      "GUI-based interface",
    ],
    githubUrl: "#",
    isHackathon: false,
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
              Showcasing some of the technical challenges I&apos;ve tackled and the solutions I&apos;ve built.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col bg-card/80 backdrop-blur-sm shadow-sm overflow-hidden border border-border/50 group hover:border-primary/50 transition-all duration-300">
                  <CardHeader className="space-y-4">
                    <div className="flex justify-between items-start">
                      {project.isHackathon ? (
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 flex items-center">
                          <Trophy className="w-3 h-3 mr-1" /> Hackathon Project
                        </Badge>
                      ) : (
                        <div />
                      )}
                      
                    </div>
                    <CardTitle className="text-2xl font-poppins text-foreground line-clamp-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-sm line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 space-y-6">
                    <ul className="text-sm text-foreground/80 space-y-2 list-disc pl-4 marker:text-primary">
                      {project.contributions.map((contribution, i) => (
                        <li key={i}>{contribution}</li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-border text-muted-foreground">
                          {tech}
                        </Badge>
                      ))}
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
