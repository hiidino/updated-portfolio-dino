"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home",     href: "#hero",     disabled: false },
  { label: "About",    href: "#about",    disabled: false },
  { label: "Journey",  href: "#journey",  disabled: false },
  { label: "Services", href: "#services", disabled: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // highlight active section based on scroll position
  useEffect(() => {
    const ids = navLinks.filter((l) => !l.disabled).map((l) => l.href.slice(1));
    const onScroll = () => {
      const trigger = window.scrollY + window.innerHeight * 0.35;
      let current = ids[0];
      let closest = Infinity;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          const dist = trigger - top;
          if (dist >= 0 && dist < closest) {
            closest = dist;
            current = id;
          }
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={`flex items-center gap-1.5 rounded-2xl border border-white/15 px-4 py-2.5 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? "bg-black/60 shadow-xl shadow-black/30" : "bg-black/40"
        }`}
      >
        <span className="mr-3 text-sm font-bold text-white tracking-wide px-1 hidden sm:block">
          Dino Raj
        </span>
        <div className="h-4 w-px bg-white/20 mr-2 hidden sm:block" />
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.disabled ? undefined : link.href}
            onClick={link.disabled ? (e) => e.preventDefault() : (e) => handleClick(e, link.href)}
            className={`relative rounded-xl px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 ${
              link.disabled
                ? "text-white/25 cursor-not-allowed"
                : active === link.href.slice(1)
                ? "text-white bg-white/20 shadow-sm"
                : "text-white/60 hover:text-white hover:bg-white/10"
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
