import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Salad, MapPin, Phone, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { MENU, PRICE_PLACEHOLDER, RESTAURANT } from "@/data/menu";
import hero from "@/assets/hero-rotisserie.jpg";
import signature from "@/assets/signature-chicken.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryGrill from "@/assets/gallery-grill.jpg";
import gallerySandwich from "@/assets/gallery-sandwich.jpg";
import galleryExterior from "@/assets/gallery-exterior.jpg";
import galleryTable from "@/assets/gallery-table.jpg";

const DESCRIPTION =
  "North Rotisserie in La Marsa, Tunisia — slow-roasted rotisserie chicken, grilled sandwiches, sides and salads. 19 Rue Imam Abou Hanifa. Call +216 26 164 204.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "North Rotisserie — Rotisserie Chicken in La Marsa, Tunisia" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "North Rotisserie — La Marsa, Tunisia" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "restaurant" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: RESTAURANT.name,
          servesCuisine: ["Rotisserie", "Grilled chicken", "Mediterranean"],
          telephone: RESTAURANT.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: RESTAURANT.street,
            addressLocality: "La Marsa",
            postalCode: "2078",
            addressCountry: "TN",
          },
          hasMap: RESTAURANT.mapsHref,
        }),
      },
    ],
  }),
  component: Home,
});

const FEATURES = [
  {
    icon: Flame,
    title: "Slow Roasted",
    text: "Carefully cooked for deep flavor and tender meat.",
  },
  {
    icon: Salad,
    title: "Fresh & Generous",
    text: "Comfort food made to be satisfying.",
  },
  {
    icon: MapPin,
    title: "Made for La Marsa",
    text: "A casual place to eat, share, and come back to.",
  },
];

function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative flex min-h-[100svh] items-end overflow-hidden">
          <img
            src={hero}
            alt="Golden rotisserie chickens turning over glowing embers"
            width={1600}
            height={1200}
            fetchPriority="high"
            className="absolute inset-0 size-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-charcoal/55"
          />
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
            <p className="eyebrow inline-flex items-center gap-2 text-charcoal-foreground/80">
              <MapPin className="size-3.5" aria-hidden="true" /> La Marsa, Tunis
            </p>
            <h1 className="mt-5 max-w-4xl text-6xl leading-[0.95] text-charcoal-foreground sm:text-7xl md:text-8xl">
              Fire. Flavor. North.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal-foreground/80">
              Slow-roasted, freshly served, and made for good moments in La Marsa.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ember px-7 py-4 text-sm font-medium text-ember-foreground transition-transform duration-200 hover:scale-[1.03]"
              >
                Explore the Menu <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                to="/"
                hash="location"
                className="inline-flex items-center justify-center rounded-full border border-charcoal-foreground/40 px-7 py-4 text-sm font-medium text-charcoal-foreground transition-colors hover:bg-charcoal-foreground/10"
              >
                Find Us
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <ul className="grid gap-10 md:grid-cols-3 md:gap-14">
            {FEATURES.map((f, i) => (
              <Reveal as="li" key={f.title} delay={i * 100}>
                <f.icon className="size-6 text-ember" aria-hidden="true" strokeWidth={1.5} />
                <h2 className="mt-5 text-2xl">{f.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* SIGNATURE */}
        <section className="bg-sand px-5 py-20 md:px-8 md:py-28">
          <Reveal className="mx-auto max-w-7xl">
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
              <div className="overflow-hidden rounded-4xl">
                <img
                  src={signature}
                  alt="Whole roasted chicken with charred lemon and fresh thyme"
                  loading="lazy"
                  width={1408}
                  height={1056}
                  className="aspect-4/3 w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div>
                <p className="eyebrow text-ember">Signature</p>
                <h2 className="mt-4 text-5xl md:text-6xl">The North Chicken</h2>
                <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                  Marinated, then turned slowly over the fire until the skin crisps and the meat
                  stays juicy. Served with crispy potatoes, bread and house sauce — enough to
                  share, easy to take away.
                </p>
                <p className="mt-6 text-xs tracking-wide text-ember">{PRICE_PLACEHOLDER}</p>
                <Link
                  to="/menu"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:scale-[1.03]"
                >
                  See Full Menu <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </section>

        {/* MENU PREVIEW */}
        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="eyebrow text-ember">The Menu</p>
            <h2 className="mt-4 max-w-2xl text-4xl md:text-6xl">
              Five things we do, and do properly.
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MENU.map((cat, i) => {
              const item = cat.items[0]!;
              return (
                <Reveal as="li" key={cat.id} delay={i * 70}>
                  <Link
                    to="/menu"
                    hash={cat.id}
                    className="group block h-full overflow-hidden rounded-3xl bg-card transition-shadow duration-300 hover:shadow-lg"
                  >
                    <div className="aspect-4/3 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        loading="lazy"
                        width={800}
                        height={800}
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl">{cat.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {cat.blurb}
                      </p>
                      <p className="mt-5 text-xs tracking-wide text-ember">{PRICE_PLACEHOLDER}</p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-24 bg-charcoal px-5 py-24 text-charcoal-foreground md:px-8 md:py-36">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow opacity-60">About</p>
            <h2 className="mt-5 text-5xl leading-tight md:text-7xl">Simple food. Done properly.</h2>
            <p className="mt-8 leading-relaxed opacity-75">
              North Rotisserie is a rotisserie kitchen in La Marsa. We keep the cooking simple:
              good ingredients, chicken roasted slowly over heat until it&apos;s tender, and
              grilled dishes with a bit of char and plenty of flavor.
            </p>
            <p className="mt-4 leading-relaxed opacity-75">
              Portions are generous, the room is casual, and everything travels well if you&apos;d
              rather eat at home. Come in, order at the counter, and take a seat — or call ahead
              and pick it up on your way.
            </p>
          </Reveal>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="eyebrow text-ember">Gallery</p>
            <h2 className="mt-4 text-4xl md:text-6xl">A look inside.</h2>
          </Reveal>
          <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {[
              { src: galleryGrill, alt: "Chicken skewers grilling over flames", w: 900, h: 1200 },
              { src: galleryInterior, alt: "Warm dining room with wooden tables", w: 1200, h: 900 },
              { src: gallerySandwich, alt: "Chicken wrap served with fries", w: 1200, h: 900 },
              { src: galleryTable, alt: "Shared table with roast chicken and salads", w: 900, h: 1200 },
              { src: galleryExterior, alt: "Restaurant storefront at dusk", w: 1200, h: 900 },
              { src: signature, alt: "Whole roasted chicken with lemon", w: 1408, h: 1056 },
            ].map((img, i) => (
              <Reveal as="figure" key={i} delay={(i % 3) * 90} className="break-inside-avoid overflow-hidden rounded-3xl">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={img.w}
                  height={img.h}
                  className="w-full object-cover transition-transform duration-700 hover:scale-[1.06]"
                />
              </Reveal>
            ))}
          </div>
        </section>

        {/* LOCATION */}
        <section id="location" className="scroll-mt-24 bg-sand px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center md:gap-16">
            <Reveal>
              <p className="eyebrow text-ember">Location</p>
              <h2 className="mt-4 text-4xl md:text-6xl">Find us in La Marsa.</h2>
              <address className="mt-8 not-italic leading-relaxed text-muted-foreground">
                <strong className="block text-foreground">{RESTAURANT.name}</strong>
                {RESTAURANT.street}
                <br />
                Marsa 2078, Tunisia
                <br />
                <a href={RESTAURANT.phoneHref} className="mt-3 inline-block text-foreground underline underline-offset-4">
                  {RESTAURANT.phone}
                </a>
              </address>
              <p className="mt-6 text-sm text-muted-foreground">
                Opening hours to be confirmed by the restaurant.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={RESTAURANT.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ember px-7 py-4 text-sm font-medium text-ember-foreground transition-transform duration-200 hover:scale-[1.03]"
                >
                  <Phone className="size-4" aria-hidden="true" /> Call Now
                </a>
                <a
                  href={RESTAURANT.mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-4 text-sm font-medium transition-colors hover:bg-background"
                >
                  <MapPin className="size-4" aria-hidden="true" /> Get Directions
                </a>
              </div>
            </Reveal>

            <Reveal delay={120} className="overflow-hidden rounded-4xl border border-border">
              <iframe
                title="Map showing North Rotisserie, 19 Rue Imam Abou Hanifa, La Marsa"
                src="https://www.openstreetmap.org/export/embed.html?bbox=10.31%2C36.87%2C10.34%2C36.89&layer=mapnik"
                loading="lazy"
                className="h-80 w-full md:h-[26rem]"
              />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
