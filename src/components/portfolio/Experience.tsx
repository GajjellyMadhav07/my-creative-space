const experiences = [
  {
    role: "AI and Research Intern",
    company: "GEOnius AI",
    period: "Oct 2025 — Jan 2026",
    bullets: [
      "Built a GenAI-powered SEO automation platform analyzing brand visibility across AI search engines, reducing manual analysis effort by 60%.",
      "Developed a Website Assistant (Text-to-SQL Agent) that converts natural language queries into SQL to fetch live business metrics.",
      "Designed and orchestrated multi-agent AI workflows using LangChain and LangGraph for enterprise-scale analytics.",
      "Implemented prompt engineering strategies to improve response accuracy and reduce hallucinations.",
      "Collaborated with product and engineering teams to prototype and deploy systems to production.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="container px-4 max-w-5xl">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">02 — Experience</p>
          <h2 className="text-4xl md:text-6xl font-bold">Where I've <span className="gradient-text">Worked</span></h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="glass rounded-3xl p-8 md:p-10 hover:border-accent/40 transition-all duration-500 group"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-1">{exp.role}</h3>
                  <p className="text-accent font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground bg-secondary px-4 py-1.5 rounded-full">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-3">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-muted-foreground leading-relaxed">
                    <span className="text-accent mt-2 h-1 w-1 rounded-full bg-accent shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
