import { Github, Linkedin, Code2, Mail, Phone } from "lucide-react";
import { CodeforcesIcon } from "@/components/icons/CodeforcesIcon";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold font-poppins text-primary mb-1">
              Dhruv Sandeep More
            </h3>
            <p className="text-muted-foreground text-sm text-center md:text-left">
              Software Engineer | Computer Science Undergraduate
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <a
              href="mailto:dhruvmoreutk@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg bg-background/50 border border-border"
              aria-label="Email"
              title="dhruvmoreutk@gmail.com"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+919726515461"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg bg-background/50 border border-border"
              aria-label="Phone"
              title="+91 97265 15461"
            >
              <Phone size={20} />
            </a>
            <a
              href="https://github.com/dhruvmore12oo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg bg-background/50 border border-border"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/dhruv-more-662934372/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg bg-background/50 border border-border"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://leetcode.com/u/Dhruv12oo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg bg-background/50 border border-border"
              aria-label="LeetCode"
              title="LeetCode"
            >
              <Code2 size={20} />
            </a>
            <a
              href="https://codeforces.com/profile/dhruvmoreutk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg bg-background/50 border border-border flex items-center justify-center"
              aria-label="Codeforces"
              title="Codeforces"
            >
              <CodeforcesIcon size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            &copy; Dhruv Sandeep More. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

