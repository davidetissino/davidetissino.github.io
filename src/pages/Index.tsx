
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const Index = () => {
  return (
    <div className="bg-background/95 min-h-screen before:fixed before:inset-0 before:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] before:bg-[size:24px_24px] before:-z-10">
      <Navbar />
      <div className="relative">
        <Hero />
        <div className="section-divider" aria-hidden="true" />
        <div className="relative z-10">
          <About />
          <Skills />
          <Experience />
          <Projects />
        </div>
        {/* Decorative code-like elements */}
        <div className="fixed top-20 right-4 text-blue-500/20 font-mono text-xs pointer-events-none select-none">
          {`const portfolio = {`}<br/>
          {`  type: "developer",`}<br/>
          {`  status: "learning",`}<br/>
          {`};`}
        </div>
        <div className="fixed bottom-20 left-4 text-blue-500/20 font-mono text-xs pointer-events-none select-none">
          {`while (true) {`}<br/>
          {`  code();`}<br/>
          {`  learn();`}<br/>
          {`}`}
        </div>
      </div>
    </div>
  );
};

export default Index;
