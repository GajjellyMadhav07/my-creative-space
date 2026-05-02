import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "MCP.Playground",
    desc: "A comprehensive platform for testing and comparing different Model Context Protocol implementations with real-time metrics and analytics.",
    tags: ["React", "Node.js", "MCP", "Supabase"],
    demo: "https://mcpplayground.netlify.app/",
    code: "https://github.com/Bhuvansai-16/MCP",
  },
  {
    title: "Automatic Grammar Checker",
    desc: "An AI-powered grammar correction tool that detects and fixes grammatical errors in English text, with side-by-side comparison.",
    tags: ["React", "Python", "LLM", "FastAPI", "NLP"],
    code: "https://github.com/Bhuvansai-16/Grammar_Checker.git",
  },
  {
    title: "Automated Book Publisher",
    desc: "A web app that automates book publishing — formatting, distribution, and intelligent workflow control for creators and educators.",
    tags: ["Python", "Streamlit", "Gemini API", "ChromaDB", "NLP"],
    demo: "https://automatedbookpublisher-5ygieavx9nppc6x9zlwdep.streamlit.app/",
    code: "https://github.com/Bhuvansai-16/Automated_Book_Publisher.git",
  },
  {
    title: "Heart Disease Prediction",
    desc: "Predict heart disease risk, register patients, store results, and download PDF reports — designed for clinical admins.",
    tags: ["Python", "Pandas", "SQLite", "Streamlit", "ML"],
    demo: "https://heart-disease-predicter-dfwa4lfqwfccvpyd3h6s.streamlit.app/",
    code: "https://github.com/Bhuvansai-16/HeartDiseaseprediction.git",
  },
  {
    title: "Board Vision Detection",
    desc: "Real-time sign-board detection using a CNN trained on 43 different traffic-sign classes.",
    tags: ["OpenCV", "CNN", "TensorFlow", "Deep Learning"],
    code: "https://github.com/Bhuvansai-16/Board_Vision_Detection.git",
  },
  {
    title: "Smart Medical Bot",
    desc: "Intelligent chatbot for medical analysis — upload prescriptions and run contextual Q&A with RAG.",
    tags: ["LangChain", "FAISS", "Gemini API", "FastAPI", "RAG"],
    code: "https://github.com/Bhuvansai-16/HealthBot.git",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container px-4 max-w-6xl">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">03 — Projects</p>
          <h2 className="text-4xl md:text-6xl font-bold">Featured <span className="gradient-text">Work</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="glass rounded-3xl p-8 group hover:border-accent/40 transition-all duration-500 flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3 group-hover:gradient-text transition-all">
                  {p.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 pt-4 border-t border-border">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                )}
                {p.code && (
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
                  >
                    <Github className="h-4 w-4" /> Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/gajjellymadhav"
            target="_blank"
            rel="noreferrer"
            className="text-lg font-semibold text-foreground underline underline-offset-8 decoration-accent/60 hover:decoration-accent hover:text-accent transition-colors"
          >
            View more projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
