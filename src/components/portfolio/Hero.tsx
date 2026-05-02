import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 glow-bg pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(270_95%_65%/0.1),transparent_50%)]" />
      <div className="container relative z-10 text-center px-4 animate-fade-up">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.95] mb-6">
          Hey, I'm <span className="gradient-text">Madhav</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Blending AI and Full-Stack to create intelligent, scalable web apps.
          Turning data and code into real-world impact.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" className="rounded-full px-8 h-12 group">
            <a href="#projects">
              Get Started
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-12 border-border bg-transparent hover:bg-secondary">
            <a
              href="https://drive.google.com/drive/folders/1z-S2vbJ6FtsvrwI4oyLZWEuxKRQaxSwz?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
              <Download className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float text-muted-foreground">
        <ArrowDown className="h-5 w-5" />
      </div>
    </section>
  );
};

export default Hero;
