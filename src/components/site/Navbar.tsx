import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { RESTAURANT } from "@/data/menu";

const LINKS = [
  { label: "Home", to: "/", hash: undefined },
  { label: "Menu", to: "/menu", hash: undefined },
  { label: "About", to: "/", hash: "about" },
  { label: "Gallery", to: "/", hash: "gallery" },
  { label: "Location", to: "/", hash: "location" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-background/92 border-b border-border backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-8">
        <Link
          to="/"
          className={`min-w-0 truncate text-sm tracking-[0.22em] uppercase transition-colors ${
            scrolled || open ? "text-foreground" : "text-charcoal-foreground"
          }`}
        >
          North Rotisserie
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              {...(l.hash ? { hash: l.hash } : {})}
              className={`text-sm transition-opacity hover:opacity-60 ${
                scrolled ? "text-foreground" : "text-charcoal-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={RESTAURANT.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-sm font-medium text-ember-foreground transition-transform duration-200 hover:scale-[1.03] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            <Phone className="size-4" aria-hidden="true" />
            Order / Contact
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className={`inline-flex size-11 items-center justify-center rounded-full border border-border/60 md:hidden ${
            scrolled || open ? "text-foreground" : "text-charcoal-foreground"
          }`}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <nav aria-label="Mobile" className="flex flex-col px-5 py-4">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                {...(l.hash ? { hash: l.hash } : {})}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 font-display text-2xl text-foreground last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={RESTAURANT.phoneHref}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-ember px-6 py-3.5 text-sm font-medium text-ember-foreground"
            >
              <Phone className="size-4" aria-hidden="true" />
              Order / Contact
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
