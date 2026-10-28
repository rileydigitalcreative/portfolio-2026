import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import { ProjectCard } from "@/components/site/Work";
import { caseStudies } from "@/content/site";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Selected Work — Riley Hammond" },
      {
        name: "description",
        content:
          "UX/UI, emerging technology, mobile apps, web development, and professional creative work by Riley Hammond.",
      },
      { property: "og:title", content: "Selected Work — Riley Hammond" },
      {
        property: "og:description",
        content: "Case studies and professional work across design, technology, and marketing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

const workOrder = [
  "step-inside-a-computer",
  "mca-work",
  "hands-free-recipe-navigator",
  // "mobile-app-development", // Hidden from the work list for now; case study content is preserved.
] as const;

function WorkPage() {
  return (
    <Page>
      <section className="site-container section-space-intro">
        <h1 className="font-display animate-rise text-7xl uppercase md:text-9xl">Work</h1>
        <p className="font-script animate-ink mt-1 text-4xl text-charcoal">selected projects</p>
        <p className="mt-8 max-w-2xl text-lg text-charcoal">
          Projects across experience design, emerging technology, mobile apps, and professional
          creative work.
        </p>
        <h2 className="font-display mt-16 text-4xl md:text-5xl">Selected Work</h2>
        <div className="mt-16 grid gap-x-6 gap-y-14 md:grid-cols-2">
          {workOrder.map((slug, i) => {
            const p = caseStudies.find((study) => study.slug === slug);
            if (!p) return null;

            return (
              <Reveal key={p.slug} className="flex h-full flex-col">
                <ProjectCard p={p} index={i} ratio="aspect-[4/3]" />
                <ul className="mt-auto flex min-h-[4.75rem] flex-wrap content-start gap-2 pt-4">
                  {p.categories.map((c) => (
                    <li key={c} className="rounded-full border px-3 py-1 text-xs">
                      {c}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </section>
    </Page>
  );
}
