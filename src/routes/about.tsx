import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, SectionHead } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import { site, skillAreas, toolGroups, featuredTools, experience, education, certifications, mcaRecommendationLetterUrl } from "@/content/site";

const toolIcons = Object.fromEntries(
  Object.entries(import.meta.glob("@/assets/tools/*", { eager: true, query: "?url", import: "default" })).map(([p, u]) => [p.split("/").pop()!, u as string]),
);

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Riley Hammond" },
      { name: "description", content: "About Riley Hammond: skills across design, web experiences, coding, emerging technology, and marketing; MCA internship; Miami University." },
      { property: "og:title", content: "About Riley Hammond" },
      { property: "og:description", content: "Where creativity and technology meet." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Page>
      <section className="site-container section-space-intro">
        <div className="grid items-center gap-12 md:grid-cols-[5fr_7fr]">
          <div className="aspect-[2/3] w-5/6 overflow-hidden rounded-lg">
            {site.portrait ? (
              <img src={site.portrait} alt={`Portrait of ${site.name}`} className="h-full w-full object-contain" />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-3 border border-dashed border-rose p-8 text-center">
                <span className="font-display text-6xl text-blush">{site.initials}</span>
                <span className="eyebrow text-muted-foreground">Portrait placeholder</span>
              </div>
            )}
          </div>
          <div>
            <h1 className="font-display animate-rise text-6xl uppercase md:text-8xl">About me</h1>
            <p className="font-script mt-2 text-4xl text-charcoal">Hi there, I’m Riley</p>
            <div className="hairline my-8 w-24" />
            {site.aboutLong.map((t) => <p key={t} className="mb-5 max-w-xl text-lg leading-relaxed text-charcoal">{t}</p>)}
          </div>
        </div>
      </section>

      <section className="site-container section-space">
        <SectionHead n="01" title="What I bring" script="four areas, one way of working" />
        <div className="grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {skillAreas.map((g) => (
            <Reveal key={g.title} className="bg-background p-8">
              <p className="font-script text-2xl text-rose">{g.note}</p>
              <h3 className="eyebrow mt-3 mb-6">{g.title}</h3>
              <ul className="space-y-2.5">{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-lg text-charcoal">These areas work together: one project can move from audience research and campaign strategy to visual design, web implementation, and interactive technology.</p>
      </section>

      <section className="site-container section-space" aria-labelledby="tools-heading">
        <span className="eyebrow text-rose">02</span>
        <h2 id="tools-heading" className="font-display mt-3 text-5xl md:text-7xl">The Tools Behind My Work</h2>
        <p className="mt-6 max-w-2xl text-lg text-charcoal">From visual design and digital storytelling to code, app development, and marketing, I bring together the tools that help turn ideas into thoughtful digital experiences.</p>
        <ul className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
          {featuredTools.map((t) => (
            <li key={t.label} className="flex flex-col items-center text-center">
              <img src={toolIcons[t.icon]} alt={`${t.alt ?? t.label} logo`} width={72} height={72} loading="lazy" className="h-16 w-16 object-contain md:h-[72px] md:w-[72px]" />
              <span className="mt-4 text-[15px] text-charcoal">{t.label}</span>
            </li>
          ))}
        </ul>

        <div className="mt-20 border-t pt-10">
          <h3 className="eyebrow mb-8">More of My Toolkit</h3>
          <div className="grid gap-10 sm:grid-cols-3">
            {toolGroups.map((g) => (
              <div key={g.title}>
                <h4 className="eyebrow mb-4 text-rose">{g.title}</h4>
                <ul className="space-y-1.5 text-sm text-charcoal">{g.tools.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container section-space">
        <SectionHead n="03" title="Experience" />
        {experience.map((x) => (
          <Reveal key={x.role} className="grid gap-8 border-t py-10 md:grid-cols-[1fr_3fr]">
            <div>
              <p className="eyebrow text-muted-foreground">{x.dates}</p>
              <p className="font-display mt-4 text-5xl text-blush">{x.orgShort}</p>
            </div>
            <div>
              <h3 className="font-display text-3xl md:text-4xl">{x.role}</h3>
              <p className="mt-2 text-charcoal">{x.org}</p>
              {x.orgShort === "MCA" && (
                <a
                  href={mcaRecommendationLetterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eyebrow mt-5 inline-flex min-h-11 items-center rounded-full border px-5 py-3 transition-colors hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Open MCA Recommendation Letter (PDF) ↗
                </a>
              )}
              <ul className="mt-6 space-y-3 text-charcoal">{x.items.map((i) => <li key={i} className="pl-4 -indent-4">— {i}</li>)}</ul>
            </div>
          </Reveal>
        ))}
        <div className="grid gap-8 border-t py-10 md:grid-cols-[1fr_3fr]">
          <p className="eyebrow text-rose">Education</p>
          {education.map((e) => (
            <div key={e.school}>
              <p className="font-display text-3xl">{e.school}</p>
              <p className="mt-2 text-lg">{e.program}</p>
              <p className="text-charcoal">{e.detail}</p>
              <p className="eyebrow mt-3 text-muted-foreground">{e.dates}</p>
              {e.honors && (
                <ul className="mt-4 space-y-2 text-charcoal">
                  {e.honors.map((honor) => <li key={honor}>{honor}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="grid gap-8 border-t py-10 md:grid-cols-[1fr_3fr]">
          <p className="eyebrow text-rose">Certifications</p>
          <div>
            {certifications.length ? (
              <ul className="space-y-4">
                {certifications.map((certification) => (
                  <li key={certification.title} className="flex flex-col items-start gap-3 border-t pt-5 first:border-0 first:pt-0">
                    <div>
                      <h3 className="font-display text-2xl">{certification.title}</h3>
                      <p className="mt-2 max-w-2xl text-charcoal">{certification.description}</p>
                    </div>
                    <a
                      href={certification.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="eyebrow inline-flex min-h-11 items-center rounded-full border px-5 py-3 transition-colors hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      Open Certificate (PDF) ↗
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-charcoal">Certification details and PDFs will be added soon.</p>
            )}
          </div>
        </div>
        <Link to="/contact" className="eyebrow link-underline mt-16 inline-block pb-1">Get in touch →</Link>
      </section>
    </Page>
  );
}
