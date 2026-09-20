import { useEffect, useState, type ReactNode } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]:not(.is-visible)");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  return <div data-reveal className={className}>{children}</div>;
}

export function ThemeToggle() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const saved = window.localStorage.getItem("aj-theme");
    const next = saved !== "light";
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("aj-theme", next ? "dark" : "light");
  };
  return <Button variant="icon" size="icon" onClick={toggle} aria-label={`Switch to ${dark ? "light" : "dark"} mode`} data-cursor="interactive">{dark ? <Sun /> : <Moon />}</Button>;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [["WORK", "#work"], ["ABOUT", "#about"], ["PLAYGROUND", "#playground"]] as const;
  return <>
    <header className="site-nav">
      <a href="#top" className="brand" aria-label="Arpit Jain home">AJ<sup>°</sup></a>
      <nav className="desktop-links" aria-label="Main navigation">{links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
      <div className="nav-actions"><ThemeToggle /><Button asChild variant="primary" className="desktop-talk"><a href="mailto:ajarpit0705@gmail.com">LET'S TALK <span>→</span></a></Button><Button variant="icon" size="icon" className="menu-button" onClick={() => setOpen(true)} aria-label="Open menu"><Menu /></Button></div>
    </header>
    {open && <div className="mobile-overlay" role="dialog" aria-modal="true" aria-label="Navigation"><Button variant="icon" size="icon" onClick={() => setOpen(false)} aria-label="Close menu"><X /></Button>{links.map(([label, href], i) => <a key={label} href={href} onClick={() => setOpen(false)}><span>0{i + 1}</span>{label}</a>)}<a href="mailto:ajarpit0705@gmail.com">LET'S TALK →</a></div>}
  </>;
}

export function CustomCursor() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const cursor = document.querySelector<HTMLElement>(".custom-cursor");
    if (!cursor) return;
    const move = (event: MouseEvent) => { cursor.style.transform = `translate3d(${event.clientX}px,${event.clientY}px,0)`; };
    const over = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-cursor], a, button");
      cursor.dataset["label"] = target?.dataset["cursor"] === "video" ? "PLAY →" : target?.dataset["cursor"] === "view" ? "VIEW →" : target?.dataset["cursor"] === "external" ? "↗" : target ? "•" : "";
    };
    window.addEventListener("mousemove", move); window.addEventListener("mouseover", over);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); };
  }, []);
  return <div className="custom-cursor" aria-hidden="true" />;
}