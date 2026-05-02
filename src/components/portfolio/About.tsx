import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const categories: Record<string, string[]> = {
  "AI/ML": ["Python", "Scikit-learn", "TensorFlow", "Pandas", "NumPy", "OpenCV", "NLP", "Deep Learning"],
  GenAI: ["LangChain", "LangGraph", "LLM Orchestration", "Hugging Face", "Vector DBs", "RAG", "n8n"],
  Languages: ["Python", "TypeScript", "JavaScript", "Java", "SQL"],
  FullStack: ["React", "Next.js", "Node.js", "Express", "FastAPI", "HTML/CSS"],
  Databases: ["PostgreSQL", "MongoDB", "MySQL", "ChromaDB"],
  Cloud: ["AWS", "Docker", "Salesforce"],
};

const stack: Record<string, string[]> = {
  All: Array.from(new Set(Object.values(categories).flat())),
  ...categories,
};

const About = () => {
  const [active, setActive] = useState("All");
  return (
    <section id="about" className="py-32 relative">
      <div className="container px-4 max-w-5xl">
        <div className="mb-16">
          
          <h2 className="text-4xl md:text-6xl font-bold">About <span className="gradient-text">Me</span></h2>
        </div>

        <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed mb-16">
          <p>
            I'm an AI/ML and full-stack developer dedicated to building intelligent, scalable digital
            products that create meaningful impact. With a strong foundation in machine learning,
            generative AI, and modern web technologies, I enjoy tackling complex problems and
            transforming ideas into robust, user-friendly solutions.
          </p>
          <p>
            My work blends creativity with technical depth — from designing intelligent algorithms to
            crafting smooth, responsive interfaces. I believe in writing clean, maintainable code
            that scales as projects grow.
          </p>
          <p>
            Beyond coding, I contribute to open-source, mentor aspiring developers, and explore ideas
            that push the boundaries of what's possible with technology.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">Tech Stack</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.keys(stack).map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {stack[active].map((s) => (
              <Badge key={s} variant="outline" className="rounded-full px-4 py-1.5 text-sm border-border bg-card">
                {s}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
