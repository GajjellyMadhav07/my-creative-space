import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  // { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 200;
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(l.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="glass rounded-full px-2 py-2 flex items-center gap-1 shadow-card">
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={`relative px-4 sm:px-5 py-2 text-sm rounded-full transition-colors ${
              active === l.id
                ? "text-primary-foreground bg-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
