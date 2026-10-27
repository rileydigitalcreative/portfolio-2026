import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/site/Nav";
import { site } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Riley Hammond" },
      { name: "description", content: "Get in touch with Riley Hammond about entry-level roles in digital marketing, creative strategy, web and UX/UI design, and digital innovation." },
      { property: "og:title", content: "Contact Riley Hammond" },
      { property: "og:description", content: "Let’s connect about design, technology, and marketing work." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Contact,
});

export function ContactLinks() {
  return (
    <ul className="flex min-w-0 flex-col items-start gap-5">
      <li>{site.email ? <a href={`mailto:${site.email}`} className="link-underline break-all text-2xl">{site.email}</a> : <span className="text-muted-foreground">[TO ADD — professional email]</span>}</li>
      <li>{site.linkedin ? <a href={site.linkedin} target="_blank" rel="noreferrer" className="eyebrow link-underline pb-1">LinkedIn ↗</a> : <span className="text-muted-foreground">[TO ADD — LinkedIn URL]</span>}</li>
      {site.resumeUrl && <li><a href={site.resumeUrl} className="rounded-full bg-primary px-7 py-3 eyebrow text-primary-foreground hover:bg-charcoal">Résumé (PDF)</a></li>}
    </ul>
  );
}

function Contact() {
  return (
    <Page>
      <section className="site-container section-space-spacious">
        <h1 className="font-display animate-rise text-4xl uppercase sm:text-6xl md:text-7xl lg:text-9xl">Let’s connect</h1>
        <p className="font-script animate-ink mt-2 text-5xl text-charcoal">I’d love to hear from you</p>
        <div className="hairline my-12 w-24" />
        <div className="grid gap-12 md:grid-cols-2">
          <p className="max-w-md text-lg text-charcoal">I’m graduating in May 2027 and looking for full-time opportunities where design, technology, and marketing meet. Reach out — I’m always happy to talk about a project or role.</p>
          <ContactLinks />
        </div>
      </section>
    </Page>
  );
}
