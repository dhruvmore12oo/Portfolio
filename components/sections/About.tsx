"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-card/50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed space-y-6 text-justify md:text-left text-lg">
            <p>
              I am a dedicated Computer Science & Engineering student at The Maharaja Sayajirao University of Baroda, with an expected graduation in 2028. Currently maintaining a GPA of 8.60, I balance rigorous academic achievements with active engagement in practical software development.
            </p>
            <p>
              My interest in programming evolved into a deep passion for problem-solving. I thrive on dissecting complex logical challenges, understanding algorithms, and implementing efficient data structures. This analytical mindset allows me to build robust backend systems that scale effectively under load.
            </p>
            <p>
              Beyond the classroom, I frequently participate in collaborative development environments, particularly hackathons. These high-pressure, fast-paced events have taught me the critical importance of effective communication, adaptability, and teamwork when turning conceptual ideas into functional, real-world applications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
