import { Github, Linkedin, Code2 } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold font-poppins text-primary mb-2">
              Dhruv More
            </h3>
            <p className="text-muted-foreground text-sm text-center md:text-left">
              Computer Science & Engineering Student
            </p>
          </div>

          <div className="flex space-x-6">
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
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Dhruv More. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
