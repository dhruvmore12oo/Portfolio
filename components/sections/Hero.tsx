"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code2, Download, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { CodeforcesIcon } from "@/components/icons/CodeforcesIcon";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 container mx-auto px-4 md:px-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Side: Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <MapPin className="w-4 h-4" />
              Vadodara, Gujarat, India
            </div>
            <h2 className="text-primary font-medium tracking-wide text-lg">
              Hi, I am
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold font-poppins text-foreground">
              Dhruv Sandeep More
            </h1>
            <h3 className="text-xl md:text-2xl font-semibold text-muted-foreground">
              Software Engineer <span className="text-primary">|</span> Computer Science Undergraduate
            </h3>
          </div>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Computer Science undergraduate passionate about building scalable backends, full-stack web applications, and solving complex algorithmic challenges.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
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

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border/50">
            <a
              href="mailto:dhruvmoreutk@gmail.com"
              className="p-2.5 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="Email"
              title="dhruvmoreutk@gmail.com"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+919726515461"
              className="p-2.5 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="Phone"
              title="+91 97265 15461"
            >
              <Phone size={20} />
            </a>
            <a
              href="https://github.com/dhruvmore12oo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/dhruv-more-662934372/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://leetcode.com/u/Dhruv12oo/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="LeetCode"
              title="LeetCode"
            >
              <Code2 size={20} />
            </a>
            <a
              href="https://codeforces.com/profile/dhruvmoreutk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all flex items-center justify-center"
              aria-label="Codeforces"
              title="Codeforces"
            >
              <CodeforcesIcon size={20} />
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
                alt="Dhruv Sandeep More" 
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

