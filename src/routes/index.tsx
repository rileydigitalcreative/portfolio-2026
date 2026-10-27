import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, SectionHead } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import { ProjectCard } from "@/components/site/Work";
import { ContactLinks } from "@/routes/contact";
import { site, approach, featuredStudies } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Riley Hammond — Design, Code & Marketing Portfolio" },
      { name: "description", content: "Riley Hammond brings together design, coding, web experiences, emerging technology, and marketing to create thoughtful digital experiences." },
      { property: "og:title", content: "Riley Hammond — Portfolio" },
      { property: "og:description", content: site.positioning },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const [first, ...rest] = featuredStudies;
  return (
    <Page>
      <section className="site-container section-space-intro">
        <div className="rounded-lg bg-card px-4 py-16 text-center md:py-28">
          <h1 className="font-display animate-rise text-[11vw] uppercase md:text-[12vw] xl:text-[10rem]">Portfolio</h1>
          <p className="font-script animate-ink -mt-[0.35em] text-5xl md:text-8xl">{site.name}</p>
        </div>
        <div className="mt-10 flex flex-col items-center gap-8 text-center">
          <span className="h-px w-24 animate-draw bg-rose" />
          <p className="eyebrow text-muted-foreground">{site.descriptor}</p>
          <p className="font-display max-w-3xl text-3xl md:text-5xl text-balance animate-rise [animation-delay:.3s]">{site.positioning}</p>
          <p className="max-w-2xl text-lg text-charcoal text-balance animate-rise [animation-delay:.5s]">{site.intro}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/work" className="rounded-full bg-primary px-7 py-3 eyebrow text-primary-foreground transition-colors hover:bg-charcoal">Explore my work</Link>
            <Link to="/contact" className="rounded-full border border-foreground px-7 py-3 eyebrow transition-colors hover:bg-blush hover:border-blush">Get in touch</Link>
          </div>
        </div>
      </section>

      <section className="site-container section-space">
        <SectionHead n="01" title="Selected Work" />
        <div className="grid gap-x-6 gap-y-14 md:grid-cols-2">
          {first && <Reveal className="md:col-span-2"><ProjectCard p={first} index={0} ratio="aspect-[4/3] md:aspect-[21/9]" big /></Reveal>}
          {rest.map((p, i) => <Reveal key={p.slug}><ProjectCard p={p} index={i + 1} ratio="aspect-[4/3]" /></Reveal>)}
        </div>
        <Link to="/work" className="eyebrow link-underline mt-14 inline-block pb-1">View all projects →</Link>
      </section>

      <section className="site-container section-space">
        <SectionHead n="02" title="My Approach" script="ideas that look good & work well" />
        <div className="grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {approach.map((a, i) => (
            <Reveal key={a.k} className="bg-background p-8">
              <span className="eyebrow text-rose">{String(i + 1).padStart(2, "0")} · {a.k}</span>
              <h3 className="font-display mt-6 text-3xl">{a.t}</h3>
              <p className="mt-4 text-charcoal">{a.d}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-lg text-charcoal">I enjoy moving between all four — the best work happens when strategy, visuals, and technology inform each other.</p>
      </section>

      <section className="site-container section-space">
        <Reveal className="grid gap-10 border-t pt-12 md:grid-cols-[1fr_2fr]">
          <div>
            <span className="eyebrow text-rose">03</span>
            <p className="font-script mt-3 text-5xl">Hi, I’m Riley</p>
          </div>
          <div>
            <p className="text-2xl leading-snug text-balance">{site.aboutShort}</p>
            <Link to="/about" className="eyebrow link-underline mt-8 inline-block pb-1">More about me →</Link>
          </div>
        </Reveal>
      </section>

      <section className="site-container section-space-spacious">
        <div className="rounded-lg bg-card p-8 text-center md:p-16">
          <h2 className="font-display text-4xl uppercase sm:text-5xl md:text-8xl">Let’s connect</h2>
          <p className="font-script text-4xl text-charcoal">say hello</p>
          <div className="mt-10 flex justify-center"><ContactLinks /></div>
        </div>
      </section>
    </Page>
  );
}
