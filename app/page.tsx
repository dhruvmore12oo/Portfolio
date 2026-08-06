import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Languages } from "@/components/sections/Languages";
import { Profiles } from "@/components/sections/Profiles";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col pt-16">
      <Navbar />
      
      <div className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Experience />
        <Education />
        <Languages />
        <Profiles />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}

