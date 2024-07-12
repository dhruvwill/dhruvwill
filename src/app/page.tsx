import About from "@/components/sections/About";
import Blogs from "@/components/sections/Blogs";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Work from "@/components/sections/Work";
export default function Home() {
  return (
    <main className="h-screen overflow-scroll">
      <Hero />
      <Work />
      <Projects />
      <Blogs />
      <About />
    </main>
  );
}
