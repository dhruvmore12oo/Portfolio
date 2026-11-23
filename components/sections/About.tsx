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
              I am a Computer Science & Engineering undergraduate at The Maharaja Sayajirao University of Baroda, passionate about building robust backend platforms, Web3 decentralized protocols, deep learning architectures, and solving complex algorithmic challenges.
            </p>
            <p>
              With a strong academic foundation (GPA 8.81 / 10 | JEE Percentile 93.75%), my core technical stack includes Java enterprise backend systems (Spring Boot, Spring Security, Spring Data JPA, JWT), Python deep learning frameworks (PyTorch, CNN architectures, Streamlit), and Web3 smart contract engineering (Solidity, Arbitrum Sepolia).
            </p>
            <p>
              An active competitive programmer and hackathon builder, I have solved 300+ DSA problems across LeetCode & Codeforces, secured 1st Runner-Up at the Arbitrum Builder Pods Showcase (Lampros DAO) with ChainGuard, 1st Runner-Up at HackArena 2026 with SplitX, ranked in the Top 10% of the Odoo Hackathon, and achieved Rank 1300 in the ACPC Regional Contest.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

