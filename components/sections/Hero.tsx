"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code2, Download, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 container mx-auto px-4 md:px-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-primary font-medium tracking-wide">
              Hi, I am
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold font-poppins text-foreground">
              Dhruv More
            </h1>
            <h3 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              Computer Science Student <br className="hidden md:block" />
              <span className="text-foreground">Java Developer & Problem Solver</span>
            </h3>
          </div>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            I specialize in backend development and algorithms. With a strong foundation in Data Structures and object-oriented programming, I love creating clean, efficient, and scalable technology solutions.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button onClick={() => window.location.href="#projects"} size="lg" className="font-medium">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button onClick={() => window.location.href="#contact"} variant="secondary" size="lg" className="font-medium">
              Contact Me
            </Button>
            <Button onClick={() => window.open("/resume.pdf", "_blank")} variant="outline" size="lg" className="font-medium group">
              Download Resume <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          <div className="flex items-center space-x-6 pt-6">
            <a
              href="https://github.com/dhruvmore12oo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/dhruv-more-662934372/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://leetcode.com/u/Dhruv12oo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LeetCode"
            >
              <Code2 size={24} />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-border/50 bg-card shadow-xl">
              <Image 
                src="/profile.jpeg" 
                alt="Dhruv More" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
