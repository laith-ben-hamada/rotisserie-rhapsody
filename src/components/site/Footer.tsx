import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Phone } from "lucide-react";
import { RESTAURANT } from "@/data/menu";

const LINKS = [
  { label: "Home", to: "/", hash: undefined },
  { label: "Menu", to: "/menu", hash: undefined },
  { label: "About", to: "/", hash: "about" },
  { label: "Gallery", to: "/", hash: "gallery" },
  { label: "Location", to: "/", hash: "location" },
] as const;

export function Footer() {
  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3 md:px-8 md:py-20">
        <div>
          <p className="text-sm tracking-[0.22em] uppercase">North Rotisserie</p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed opacity-70">
            {RESTAURANT.street}, La Marsa
          </p>
          <a
            href={RESTAURANT.phoneHref}
            className="mt-2 inline-block text-sm opacity-70 transition-opacity hover:opacity-100"
          >
            {RESTAURANT.phone}
          </a>
        </div>

        <nav aria-label="Footer">
          <ul className="space-y-3">
            {LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  {...(l.hash ? { hash: l.hash } : {})}
                  className="text-sm opacity-70 transition-opacity hover:opacity-100"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow opacity-60">Follow</p>
          {/* Placeholder: no official social accounts confirmed yet. */}
          <div className="mt-4 flex gap-3">
            {[Instagram, Facebook].map((Icon, i) => (
              <span
                key={i}
                aria-label="Social link placeholder — to be added"
                title="Social link placeholder — to be added"
                className="inline-flex size-11 items-center justify-center rounded-full border border-charcoal-foreground/20 opacity-50"
              >
                <Icon className="size-4" aria-hidden="true" />
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-2 text-sm opacity-70">
            <a href={RESTAURANT.mapsHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
              <MapPin className="size-4" aria-hidden="true" /> Get directions
            </a>
            <a href={RESTAURANT.phoneHref} className="inline-flex items-center gap-2">
              <Phone className="size-4" aria-hidden="true" /> Call the restaurant
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-charcoal-foreground/10 px-5 py-6 text-center text-xs opacity-50 md:px-8">
        © {new Date().getFullYear()} North Rotisserie — La Marsa, Tunisia
      </div>
    </footer>
  );
}
