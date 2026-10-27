import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { site } from "@/content/site";

const links = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-sm">
      <nav aria-label="Main" className="site-container flex items-center justify-between py-5">
        <Link to="/" className="font-display text-xl" aria-label={`${site.name} — home`}>{site.initials}</Link>
        <ul className="hidden gap-10 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} activeOptions={{ exact: l.to === "/" }} activeProps={{ className: "text-rose" }} className="eyebrow link-underline pb-1">{l.label}</Link>
            </li>
          ))}
        </ul>
        <button className="eyebrow md:hidden" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      {open && (
        <ul id="mobile-nav" className="flex flex-col gap-5 border-t px-6 py-6 md:hidden">
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} onClick={() => setOpen(false)} className="font-display text-3xl">{l.label}</Link>
            </li>
          ))}
        </ul>
      )}
      <div className="hairline" />
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-container pb-10">
      <div className="hairline mb-8" />
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <span className="font-script text-3xl">{site.name}</span>
        <span className="eyebrow text-muted-foreground">© {new Date().getFullYear()} {site.name}</span>
        <a href="#top" className="eyebrow link-underline pb-1">Back to top ↑</a>
      </div>
    </footer>
  );
}

export function Page({ children }: { children: React.ReactNode }) {
  return (
    <div id="top">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function SectionHead({ n, title, script }: { n: string; title: string; script?: string }) {
  return (
    <div className="mb-12">
      <span className="eyebrow text-rose">{n}</span>
      <h2 className="font-display mt-3 text-4xl sm:text-5xl md:text-7xl">{title}</h2>
      {script && <p className="font-script mt-1 text-3xl text-charcoal">{script}</p>}
    </div>
  );
}
