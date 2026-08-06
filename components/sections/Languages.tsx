"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const LANGUAGES = [
  { name: "English", level: "Professional Working Proficiency" },
  { name: "Hindi", level: "Full Professional / Native Proficiency" },
  { name: "Gujarati", level: "Native / Mother Tongue" },
  { name: "Marathi", level: "Native / Conversational Proficiency" },
];

export function Languages() {
  return (
    <section id="languages" className="py-16 bg-card/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                <Globe size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-poppins text-foreground flex items-center gap-2">
                  Languages Spoken
                </h3>
                <p className="text-muted-foreground text-sm">
                  Multilingual communication capabilities across global & regional languages.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center md:justify-end">
              {LANGUAGES.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="px-4 py-2 rounded-xl bg-background/80 border border-border hover:border-primary/50 transition-colors flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="font-semibold text-foreground">{lang.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
