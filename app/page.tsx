import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Products from "@/components/sections/Products";
import NPMSection from "@/components/sections/NPMSection";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <Experience />
      <Projects />
      <Products />
      <NPMSection />
      <Skills />
      <Contact />
    </main>
  );
}
