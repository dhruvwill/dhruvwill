import Image from "next/image";
import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import Footer from "@/components/sections/Footer";
import Social from "@/components/sections/Social";
import Blogs from "@/components/sections/Blogs";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Extra from "@/components/sections/Extra";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden relative bg-[var(--primary)]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <Blogs /> */}
      <Extra />
      <Social />
      <Footer />
    </main>
  );
}
