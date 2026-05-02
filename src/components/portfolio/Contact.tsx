import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 glow-bg pointer-events-none" />
      <div className="container relative z-10 px-4 max-w-4xl text-center">
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Let's <span className="gradient-text">Work Together</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          I'm always open to new opportunities and exciting projects. Reach out and let's create
          something amazing.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button asChild size="lg" className="rounded-full px-8 h-12">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=gajjellymadhav@gmail.com&su=Contact%20from%20Portfolio"
              target="_blank"
              rel="noreferrer"
            >
              <Mail className="mr-2 h-4 w-4" /> Get in Touch
            </a>
          </Button>
        </div>
        <div className="flex items-center justify-center gap-3">
          {[
            { icon: Github, href: "https://github.com/Bhuvansai-16", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            // { icon: Mail, href: "mailto:chbhuvansai522@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="h-12 w-12 rounded-full glass flex items-center justify-center hover:border-accent/50 hover:text-accent transition-all"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <p className="mt-20 text-sm text-muted-foreground">
          © 2026 Gajjelly Madhav · Built with care
        </p>
      </div>
    </section>
  );
};

export default Contact;
