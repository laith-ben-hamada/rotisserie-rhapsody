import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { MENU, PRICE_PLACEHOLDER, RESTAURANT } from "@/data/menu";
import signature from "@/assets/signature-chicken.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — North Rotisserie, La Marsa" },
      {
        name: "description",
        content:
          "Rotisserie chicken, burgers, sandwiches, sides, salads and drinks at North Rotisserie in La Marsa, Tunisia. Call +216 26 164 204.",
      },
      { property: "og:title", content: "Menu — North Rotisserie, La Marsa" },
      {
        property: "og:description",
        content: "Slow-roasted chicken, sandwiches, sides and salads in La Marsa, Tunisia.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/menu" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-sand px-5 pt-32 pb-16 md:px-8 md:pt-44 md:pb-24">
          <div className="mx-auto max-w-7xl">
            <p className="eyebrow text-ember">The Menu</p>
            <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] md:text-7xl">
              Roasted, grilled, and served fresh.
            </h1>
            <p className="mt-6 max-w-xl text-muted-foreground">
              A selection of what we cook. Prices are confirmed in the restaurant — call us any
              time on{" "}
              <a href={RESTAURANT.phoneHref} className="text-foreground underline underline-offset-4">
                {RESTAURANT.phone}
              </a>
              .
            </p>
          </div>
        </section>

        {/* NOTE: placeholder menu content — replace items and prices with the restaurant's real menu. */}
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <nav aria-label="Menu categories" className="mb-14 flex flex-wrap gap-2">
            {MENU.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:bg-secondary"
              >
                {c.title}
              </a>
            ))}
          </nav>

          {MENU.map((cat) => (
            <section key={cat.id} id={cat.id} className="mb-20 scroll-mt-28 md:mb-28">
              <Reveal>
                <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border pb-5">
                  <h2 className="text-3xl md:text-4xl">{cat.title}</h2>
                  <p className="text-sm text-muted-foreground">{cat.blurb}</p>
                </div>
              </Reveal>

              <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cat.items.map((item, i) => (
                  <Reveal as="li" key={item.name} delay={i * 80}>
                    <article className="group h-full overflow-hidden rounded-3xl bg-card">
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
                        <h3 className="text-2xl">{item.name}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                        <p className="mt-5 text-xs tracking-wide text-ember">
                          {PRICE_PLACEHOLDER}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </ul>
            </section>
          ))}

          <Reveal>
            <section className="overflow-hidden rounded-4xl bg-charcoal text-charcoal-foreground">
              <div className="grid md:grid-cols-2">
                <img
                  src={signature}
                  alt="Whole roasted North Chicken with lemon and herbs"
                  loading="lazy"
                  width={1408}
                  height={1056}
                  className="h-72 w-full object-cover md:h-full"
                />
                <div className="p-8 md:p-14">
                  <p className="eyebrow opacity-60">Signature</p>
                  <h2 className="mt-4 text-4xl md:text-5xl">The North Chicken</h2>
                  <p className="mt-5 text-sm leading-relaxed opacity-75">
                    Our whole rotisserie chicken, marinated and turned slowly over the fire until
                    the skin crisps and the meat stays juicy. Served with crispy potatoes, bread
                    and house sauce.
                  </p>
                  <p className="mt-6 text-xs tracking-wide opacity-60">{PRICE_PLACEHOLDER}</p>
                  <Link
                    to="/"
                    hash="location"
                    className="mt-8 inline-flex rounded-full bg-ember px-6 py-3 text-sm font-medium text-ember-foreground transition-transform duration-200 hover:scale-[1.03]"
                  >
                    Find us in La Marsa
                  </Link>
                </div>
              </div>
            </section>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
