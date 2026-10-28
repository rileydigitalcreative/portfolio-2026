import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Page } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import { AssetPlaceholder, StatusTag } from "@/components/site/Work";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { caseStudies, professionalProjects, type CaseStudy, type HandsFreeSection, type MobileAppPreview, type StepInsideSection } from "@/content/site";
import { ProfessionalWork } from "@/components/site/Work";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const i = caseStudies.findIndex((p) => p.slug === params.slug);
    if (i < 0) throw notFound();
    const visibleStudies = caseStudies.filter((study) => study.slug !== "mobile-app-development");
    const visibleIndex = visibleStudies.findIndex((study) => study.slug === params.slug);
    const nextIndex = visibleIndex < 0 ? 0 : (visibleIndex + 1) % visibleStudies.length;
    return { p: caseStudies[i]!, next: visibleStudies[nextIndex]! };
  },
  head: ({ loaderData }) => {
    const t = loaderData ? `${loaderData.p.title} — Riley Hammond` : "Project — Riley Hammond";
    const d = loaderData?.p.summary ?? "Case study by Riley Hammond.";
    return {
      meta: [
        { title: t }, { name: "description", content: d },
        { property: "og:title", content: t }, { property: "og:description", content: d },
        { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <Page><div className="site-container section-space-spacious"><h1 className="font-display text-6xl">Project not found</h1><Link to="/work" className="eyebrow link-underline mt-8 inline-block pb-1">← All work</Link></div></Page>
  ),
  component: CaseStudyPage,
});

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Reveal className="grid gap-4 border-t py-8 md:grid-cols-[1fr_2fr] md:gap-12">
      <h2 className="eyebrow text-rose">{label}</h2>
      <div className="text-lg leading-relaxed text-charcoal">{children}</div>
    </Reveal>
  );
}

function ArtifactImage({ label, src, caption, secondary = false }: { label: string; src?: string; caption?: string; secondary?: boolean }) {
  if (!src) return <AssetPlaceholder label={`${label} — image to add`} className={secondary ? "min-h-32" : undefined} />;

  return (
    <figure className={secondary ? "opacity-85" : undefined}>
      <Dialog>
        <DialogTrigger asChild>
          <button type="button" className="block w-full cursor-zoom-in text-left" aria-label={`Enlarge ${label}`}>
            <img src={src} alt={label} className="mx-auto h-auto w-auto max-w-full rounded-lg border object-contain md:mx-0 md:w-full" />
          </button>
        </DialogTrigger>
        <DialogContent className="max-h-[95vh] max-w-[min(96vw,90rem)] overflow-auto p-4">
          <DialogTitle className="eyebrow pr-8">{label}</DialogTitle>
          <DialogDescription className="sr-only">Enlarged view of {label}</DialogDescription>
          <img src={src} alt={label} className="mx-auto h-auto max-h-[80vh] w-auto max-w-full object-contain md:mx-0 md:w-full" />
        </DialogContent>
      </Dialog>
      {caption && <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">{caption}</figcaption>}
    </figure>
  );
}

function AssetGrid({ assets, columns = "md:grid-cols-3" }: { assets: { label: string; image?: string; caption?: string }[]; columns?: string }) {
  return (
    <div className={`grid gap-8 ${columns}`}>
      {assets.map((asset) => <ArtifactImage key={asset.label} label={asset.label} src={asset.image} caption={asset.caption} />)}
    </div>
  );
}

function StepSection({ number, title, id, children }: { number: string; title: string; id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mt-24 scroll-mt-28 border-t pt-8">
      <div className="mb-12">
        <span className="eyebrow text-rose">{number}</span>
        <h2 className="font-display mt-3 text-4xl md:text-6xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function LivePrototypePreview({ url, screenshot }: { url: string; screenshot: string }) {
  return (
    <section className="mt-12 border-t pt-8" aria-labelledby="live-prototype-title">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
        <h3 id="live-prototype-title" className="font-display text-3xl md:text-4xl">Live Prototype</h3>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="eyebrow inline-flex rounded-full border px-5 py-3 transition-colors hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Open Live Prototype ↗
        </a>
      </div>
      <div className="overflow-hidden rounded-xl border bg-background shadow-sm">
        <div className="flex min-h-12 items-center gap-4 border-b px-4 py-3">
          <span className="flex shrink-0 gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full border bg-secondary" />
            <span className="h-2.5 w-2.5 rounded-full border bg-secondary" />
            <span className="h-2.5 w-2.5 rounded-full border bg-secondary" />
          </span>
          <span className="min-w-0 flex-1 truncate text-sm text-muted-foreground">Hands-Free Recipe Navigator — Live Prototype</span>
        </div>
        <iframe
          src={url}
          title="Hands-Free Recipe Navigator live prototype"
          allow="camera; autoplay"
          loading="lazy"
          className="block aspect-video min-h-[28rem] w-full border-0 md:min-h-0"
        />
      </div>
      <div className="mt-5 grid items-start gap-5 md:grid-cols-[minmax(0,1fr)_18rem]">
        <p className="text-sm leading-relaxed text-muted-foreground">
          If the prototype is blocked from embedding, open it in a new tab or select the recipe-selection screenshot to open the live version.
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open the live recipe-selection prototype in a new tab"
          className="block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          <img src={screenshot} alt="Recipe-selection screen from Hands-Free Recipe Navigator; select to open the live prototype." className="mx-auto h-auto w-auto max-w-full rounded-lg border object-contain md:mx-0 md:w-full" />
          <span className="mt-2 block text-sm text-muted-foreground">Recipe-selection screenshot · opens live prototype ↗</span>
        </a>
      </div>
    </section>
  );
}

function ConceptCard({ concept }: { concept: StepInsideSection["concepts"][number] }) {
  const details = [
    ["Concept summary", concept.summary],
    ["Audience", concept.audience],
    ["Intended impact", concept.impact],
    ["Design language", concept.designLanguage],
    ["Font and color", concept.fontAndColor],
    ["Pros", concept.pros],
    ["Considerations", concept.considerations],
  ];

  return (
    <article className="border-t pt-5">
      <h3 className="flex flex-wrap items-baseline gap-x-3 font-display text-3xl md:text-4xl">
        {concept.title}
        {concept.subtitle && <span className="font-sans text-sm font-medium leading-normal tracking-wide text-rose md:text-base">{concept.subtitle}</span>}
      </h3>
      <div className="mt-6">
        <ArtifactImage label={`${concept.title} moodboard`} src={concept.image} />
      </div>
      <dl className="mt-7 space-y-4">
        {details.map(([label, value]) => (
          <div key={label} className="border-t pt-3">
            <dt className="eyebrow text-rose">{label}</dt>
            <dd className="mt-2 leading-relaxed text-charcoal">{value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

function AiExplorationCarousel({ slides }: { slides: StepInsideSection["aiExplorations"] }) {
  const [index, setIndex] = useState(0);
  const slide = slides[index]!;

  return (
    <div className="grid gap-6 border-t pt-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-8">
      <div className="flex flex-col">
        <div className="flex items-center justify-between gap-4">
          <span className="eyebrow text-rose">{slide.platform}</span>
          <span className="eyebrow text-muted-foreground">{index + 1} / {slides.length}</span>
        </div>
        <p className="mt-5 leading-relaxed text-charcoal">{slide.evaluation}</p>
        <div className="mt-6 flex flex-wrap gap-3 md:mt-auto md:pt-8">
          <button type="button" className="eyebrow rounded-full border px-4 py-2 transition-colors hover:bg-blush disabled:cursor-not-allowed disabled:opacity-40" onClick={() => setIndex((current) => current - 1)} disabled={index === 0} aria-label="Previous AI hero exploration">← Previous</button>
          <button type="button" className="eyebrow rounded-full border px-4 py-2 transition-colors hover:bg-blush disabled:cursor-not-allowed disabled:opacity-40" onClick={() => setIndex((current) => current + 1)} disabled={index === slides.length - 1} aria-label="Next AI hero exploration">Next →</button>
        </div>
      </div>
      <div>
        {slide.image ? (
          <Dialog>
            <DialogTrigger asChild>
              <button type="button" className="block w-full cursor-zoom-in text-left" aria-label={`Enlarge ${slide.platform} hero exploration ${index + 1}`}>
                <span className="block aspect-[1671/941] w-full overflow-hidden rounded-lg border bg-card">
                  <img src={slide.image} alt={`${slide.platform} generated hero exploration ${index + 1}`} className="mx-auto h-full w-auto max-w-full object-contain md:mx-0 md:w-full" />
                </span>
              </button>
            </DialogTrigger>
            <DialogContent className="max-h-[95vh] max-w-[min(96vw,90rem)] overflow-auto p-4">
              <DialogTitle className="eyebrow pr-8">{slide.platform} — hero exploration {index + 1}</DialogTitle>
              <DialogDescription className="sr-only">Enlarged view of the full generated image.</DialogDescription>
              <img src={slide.image} alt={`${slide.platform} generated hero exploration ${index + 1}`} className="mx-auto h-auto max-h-[80vh] w-auto max-w-full object-contain md:mx-0 md:w-full" />
            </DialogContent>
          </Dialog>
        ) : (
          <AssetPlaceholder label={`AI-generated hero exploration ${index + 1} — image to add`} className="aspect-[1671/941]" />
        )}
      </div>
    </div>
  );
}

function PrototypeAction({ url }: { url?: string }) {
  return url ? (
    <a href={url} target="_blank" rel="noreferrer" className="eyebrow inline-flex rounded-full bg-foreground px-5 py-3 text-background transition-opacity hover:opacity-80">Explore the Website Prototype</a>
  ) : (
    <button type="button" disabled className="eyebrow inline-flex cursor-not-allowed rounded-full bg-foreground px-5 py-3 text-background opacity-40" aria-label="Website prototype URL to be added">Explore the Website Prototype</button>
  );
}

function RemoteImage({ src, alt, className }: { src: string; alt: string; className: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <div role="img" aria-label={`${alt} unavailable`} className={`flex items-center justify-center bg-secondary px-3 text-center text-xs text-muted-foreground ${className}`}>Photo unavailable</div>;
  }
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} loading="lazy" />;
}

function PhoneAppPreview({ data, compact = false }: { data?: MobileAppPreview; compact?: boolean }) {
  return (
    <div className={`relative mx-auto w-full ${compact ? "max-w-[14rem] rounded-[2rem] border-[7px] p-1.5" : "max-w-[21rem] rounded-[2.8rem] border-[9px] p-2"} border-foreground bg-foreground shadow-xl`}>
      <div className={`flex ${compact ? "h-[27rem] rounded-[1.45rem]" : "h-[40rem] rounded-[2.1rem]"} flex-col overflow-hidden bg-background`}>
        <div className={`flex shrink-0 items-center justify-between bg-background font-semibold text-foreground ${compact ? "h-5 px-3 text-[0.55rem]" : "h-7 px-5 text-[0.65rem]"}`}>
          <span>9:41</span>
          <span aria-hidden="true">●●● ▰</span>
        </div>
        {data ? (
          <>
            <div className={`relative shrink-0 overflow-hidden bg-charcoal ${compact ? "h-36" : "h-52"}`}>
              <RemoteImage src={data.backgroundImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
              <div className={`absolute inset-x-3 text-center text-white ${compact ? "bottom-3" : "bottom-5"}`}>
                <h2 className={`font-display leading-none ${compact ? "text-xl" : "text-3xl"}`}>{data.title}</h2>
                <p className={`mt-1 ${compact ? "text-[0.65rem]" : "text-sm"}`}>{data.subtitle}</p>
                <p className={`font-medium ${compact ? "mt-2 text-[0.65rem]" : "mt-4 text-sm"}`}>{data.prompt}</p>
              </div>
            </div>
            <div className={`flex shrink-0 items-center justify-between border-b ${compact ? "gap-1 px-2 py-2" : "px-4 py-3"}`}>
              <h3 className={`font-display ${compact ? "text-sm" : "text-lg"}`}>Explore Oxford</h3>
              <span className={`eyebrow text-muted-foreground ${compact ? "text-[0.48rem]" : ""}`}>{data.places.length} places</span>
            </div>
            <div className={`min-h-0 flex-1 overflow-y-auto overscroll-contain [scrollbar-width:thin] ${compact ? "px-2 pb-3 pt-2" : "px-3 pb-5 pt-3"}`} tabIndex={0} role="region" aria-label={`Scrollable Miami Activities places${compact ? " compact preview" : ""}`}>
              <ul className={compact ? "space-y-2.5" : "space-y-4"}>
                {data.places.map((place) => (
                  <li key={place.id} className="overflow-hidden rounded-lg border bg-card">
                    {place.website ? (
                      <a href={place.website} target="_blank" rel="noreferrer" aria-label={`Visit ${place.name} website (opens in a new tab)`}>
                        <RemoteImage src={place.image} alt={`${place.name}`} className={`w-full object-cover ${compact ? "h-20" : "h-36"}`} />
                      </a>
                    ) : (
                      <RemoteImage src={place.image} alt={`${place.name}`} className={`w-full object-cover ${compact ? "h-20" : "h-36"}`} />
                    )}
                    <div className={compact ? "space-y-1 p-2" : "space-y-1.5 p-3"}>
                      <h4 className={`font-display leading-tight ${compact ? "text-base" : "text-xl"}`}>{place.name}</h4>
                      <p className={compact ? "text-[0.62rem] text-muted-foreground" : "text-xs text-muted-foreground"}>{place.type} · {place.cost}</p>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place.name}, ${place.address}, Oxford, OH`)}`}
                        target="_blank"
                        rel="noreferrer"
                        className={`font-semibold text-blue-600 hover:underline focus-visible:underline ${compact ? "text-[0.62rem]" : "text-xs"}`}
                      >
                        {place.address}
                      </a>
                      <p className={compact ? "text-[0.62rem] text-charcoal" : "text-xs text-charcoal"}>
                        <span aria-hidden="true">★ </span>{place.rating.toFixed(1)}
                        {place.rating >= 4.5 ? " · Highly Rated" : " · Decently Rated"}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <div className="flex min-h-0 flex-1 flex-col items-center justify-center p-6 text-center">
            <span className="eyebrow text-rose">App preview</span>
            <p className="mt-3 text-sm text-muted-foreground">Add this app’s screen preview here.</p>
          </div>
        )}
      </div>
      <div aria-hidden="true" className={`absolute -left-[10px] rounded-l bg-muted-foreground ${compact ? "top-16 h-8 w-[2px]" : "top-24 h-12 w-[3px]"}`} />
      <div aria-hidden="true" className={`absolute -right-[10px] rounded-r bg-muted-foreground ${compact ? "top-20 h-10 w-[2px]" : "top-28 h-16 w-[3px]"}`} />
    </div>
  );
}

function MobileAppDevelopmentCaseStudy({ p, data }: { p: CaseStudy; data: MobileAppPreview }) {
  return (
    <>
      {p.apps?.map((app, index) => {
        const hasContent = index === 0;
        const appData = hasContent ? data : undefined;
        const title = hasContent ? app.title : `App ${index + 1} — title to add`;

        return (
          <StepSection key={app.title} number={String(index + 1).padStart(2, "0")} title={title}>
            <div className="grid items-start gap-12 lg:grid-cols-[minmax(18rem,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
              <div>
                <PhoneAppPreview data={appData} />
                <p className="mt-4 text-center text-sm text-muted-foreground">
                  {hasContent ? "Scroll inside the phone to browse the app." : "Phone-shaped preview template — add app screens here."}
                </p>
              </div>
              <div className="space-y-10">
                <div>
                  <span className="eyebrow text-rose">App overview</span>
                  {hasContent ? (
                    <>
                      <h3 className="font-display mt-3 text-3xl md:text-4xl">{app.title}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-charcoal md:text-base">{app.description}</p>
                      <p className="mt-3 text-sm leading-relaxed text-charcoal md:text-base">{p.goals}</p>
                    </>
                  ) : (
                    <p className="mt-4 text-sm text-muted-foreground">Add a short description and purpose for this app.</p>
                  )}
                </div>
                <div className="border-t pt-6">
                  <h3 className="eyebrow text-rose">Assignment highlights</h3>
                  {hasContent ? (
                    <>
                      <p className="mt-2 text-sm leading-relaxed text-charcoal">A concise summary of the brief requirements demonstrated by this app.</p>
                      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {data.assignmentHighlights.map((highlight) => (
                          <li key={highlight} className="border-t pt-3 text-sm leading-relaxed text-charcoal">— {highlight}</li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <p className="mt-3 text-sm text-muted-foreground">Add the key requirements demonstrated by this app.</p>
                  )}
                </div>
                <div className="border-t pt-6">
                  <h3 className="eyebrow text-rose">Built with</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal">
                    {hasContent ? app.tech.join(" · ") : "Add tools and technologies."}
                  </p>
                  {hasContent ? (
                    <p className="mt-3 text-sm leading-relaxed text-charcoal">{app.learned}</p>
                  ) : (
                    <p className="mt-3 text-sm text-muted-foreground">Add a reflection or key learning.</p>
                  )}
                </div>
                {hasContent && <p className="text-xs leading-relaxed text-muted-foreground">This interactive browser preview recreates the Expo app’s scrollable screen. It is not a live native Expo build.</p>}
              </div>
            </div>
          </StepSection>
        );
      })}
    </>
  );
}

function HandsFreeCaseStudy({ p, data }: { p: CaseStudy; data: HandsFreeSection }) {
  return (
    <>
      <StepSection number="01" title="Introduction">
        <div className="grid gap-x-8 gap-y-10 md:grid-cols-[1fr_2fr]">
          <h3 className="eyebrow text-rose">The opportunity</h3>
          <div className="space-y-5 text-sm leading-relaxed text-charcoal md:text-base">
            <p>{p.problem}</p>
            <p>{p.goals}</p>
          </div>
          <h3 className="eyebrow text-rose">My role</h3>
          <div className="text-sm leading-relaxed text-charcoal md:text-base">
            <p>{p.role}</p>
            <ul className="mt-4 space-y-2">
              {p.contributions.map((contribution) => <li key={contribution}>— {contribution}</li>)}
            </ul>
          </div>
          <h3 className="eyebrow text-rose">Accessibility potential</h3>
          <p className="text-sm leading-relaxed text-charcoal md:text-base">{data.accessibilityPotential}</p>
        </div>
        <LivePrototypePreview url={data.prototypeUrl} screenshot={data.finalInterfaces[0].image} />
      </StepSection>

      <StepSection number="02" title="Brainstorming & conceptualizing">
        <div className="max-w-4xl">
          <h3 className="eyebrow text-rose">Finding the right task</h3>
          <p className="mt-3 text-sm leading-relaxed text-charcoal md:text-base">
            Our team began by brainstorming concepts that felt both interesting and achievable. Early ideas included making music through gestures and teaching American Sign Language. We wanted to find a concept that could complete a meaningful task rather than demonstrate technology for its own sake.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-charcoal md:text-base">
            After gathering feedback, we chose a cookbook because it addressed a familiar problem: navigating instructions while cooking with messy hands. We explored possible gestures and mapped them to actions, using familiar movements where possible.
          </p>
        </div>
        <div className="mt-10 border-t pt-6">
          <h3 className="eyebrow text-rose">Early layout explorations</h3>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted-foreground">
            These were alternative concepts explored during the design process; neither is presented as a formally tested winner.
          </p>
          <div className="mt-5 grid gap-8 md:grid-cols-2">
            {data.mockups.map((mockup) => (
              <ArtifactImage key={mockup.label} label={mockup.label} src={mockup.image} caption={mockup.caption} />
            ))}
          </div>
        </div>
      </StepSection>

      <StepSection number="03" title="Prototyping & iteration">
        <div className="grid gap-8 md:grid-cols-2">
          <article className="border-t pt-5">
            <h3 className="eyebrow text-rose">From concept to prototype</h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal md:text-base">
              The project began with an early implementation developed using Python and Claude-assisted development. As we explored gesture recognition, we considered factors such as hand position, movement direction, and the distance between points on the hand to help distinguish different actions. A timer was added to help detect intentional gestures.
            </p>
          </article>
          <article className="border-t pt-5">
            <h3 className="eyebrow text-rose">Collaborative implementation</h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal md:text-base">
              I contributed visual concepts, mockups, wireframes, and documentation while collaborating with a teammate on coding and technical implementation. Documented feedback raised practical questions about gesture clarity, recognition, and how the prototype would behave in a cooking context.
            </p>
          </article>
        </div>
        <div className="mt-10 border-t pt-6">
          <h3 className="eyebrow text-rose">Questions raised through feedback</h3>
          <ul className="mt-4 grid gap-x-8 gap-y-2 text-sm leading-relaxed text-charcoal md:grid-cols-2">
            <li>— Could users tell which gestures were available?</li>
            <li>— Could the system distinguish intentional navigation from ordinary movement?</li>
            <li>— Would detecting both hands cause unintended actions?</li>
            <li>— Could users scroll through longer ingredient lists comfortably?</li>
            <li>— Could gesture instructions remain visible without distracting from the recipe?</li>
          </ul>
        </div>
        <div className="mt-10 border-t pt-6">
          <h3 className="eyebrow text-rose">Prototype check-in</h3>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-charcoal md:text-base">
            These photographs are included in the project document and show the team demonstrating forward and backward recipe navigation during a class check-in.
          </p>
          <div className="mt-6">
            <AssetGrid assets={data.testingPhotos} columns="md:grid-cols-2" />
          </div>
        </div>
        <div className="mt-10 border-t pt-6">
          <h3 className="eyebrow text-rose">Refining the gesture language</h3>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-charcoal md:text-base">
            Early concepts explored holding a fist and moving side to side for navigation. Class and instructor feedback encouraged a more directional approach. The team moved toward pointing forward to advance and pointing backward to return to a previous step, with the goal of making the relationship between each gesture and its outcome easier to understand.
          </p>
        </div>
      </StepSection>

      <StepSection number="04" title="Refinement & final experience">
        <div className="max-w-4xl space-y-4 text-sm leading-relaxed text-charcoal md:text-base">
          <h3 className="eyebrow text-rose">A more flexible recipe experience</h3>
          <p>
            The later prototype expanded beyond a small set of manually coded recipes by connecting to recipe content from Budget Bytes through a WordPress API. Project documentation describes using Node Fetch to retrieve data, Cheerio to process recipe pages, and parsing logic to organize ingredients and instructions.
          </p>
          <p>
            The team also refined hand detection to respond to one hand at a time while allowing users to use either their left or right hand. A camera-pause control was added, and the interface gained a recipe dashboard and search. Dashboard navigation was still identified as an area to improve.
          </p>
        </div>
        <div className="mt-10 grid items-start gap-10 md:grid-cols-2">
          {data.finalInterfaces.map((screen) => (
            <article key={screen.label}>
              <h3 className="font-display mb-5 text-2xl md:text-3xl">{screen.label}</h3>
              <ArtifactImage label={screen.label} src={screen.image} caption={screen.caption} />
            </article>
          ))}
        </div>
        <div className="mt-16 border-t pt-8">
          <h3 className="font-display text-3xl md:text-4xl">Final gesture catalog</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Gesture-to-action descriptions below follow the project’s final prototype documentation.</p>
          <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 xl:grid-cols-6">
            {data.finalGestures.map((item) => (
              <article key={item.gesture} className="min-w-0 border-t pt-4">
                <ArtifactImage label={`${item.gesture} gesture`} src={item.image} />
                <h4 className="eyebrow mt-4 text-rose">{item.gesture}</h4>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">{item.action}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-10 border-t pt-6">
          <h3 className="eyebrow text-rose">Further refinements documented</h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-charcoal md:text-base">
            <li>— The prototype was adjusted to detect one hand at a time, including when both hands are visible.</li>
            <li>— Either hand can be used, accommodating left- and right-handed users.</li>
            <li>— A camera-pause control was added.</li>
            <li>— Dashboard navigation was identified as an area to improve.</li>
          </ul>
        </div>
      </StepSection>

      <StepSection number="05" title="Reflection">
        <div className="max-w-4xl space-y-5 text-sm leading-relaxed text-charcoal md:text-base">
          <h3 className="font-display text-3xl md:text-4xl">Designing for intention, not just movement</h3>
          {p.reflection.split("\n\n").map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
      </StepSection>
    </>
  );
}

function StepInsideCaseStudy({ p, data }: { p: CaseStudy; data: StepInsideSection }) {
  return (
    <>
      <section className="mt-20 border-y py-6" aria-label="Case study sections">
        <p className="eyebrow text-rose">Explore the process</p>
        <nav className="mt-4 flex flex-wrap gap-x-6 gap-y-3" aria-label="Case study phases">
          {[
            ["phase-01", "01 Concept & branding"],
            ["phase-02", "02 AI exploration"],
            ["phase-03", "03 Museum website"],
            ["phase-04", "04 App experience"],
            ["phase-05", "05 Physical wayfinding"],
          ].map(([id, label]) => <a key={id} className="eyebrow link-underline pb-1" href={`#${id}`}>{label}</a>)}
        </nav>
      </section>

      <section className="mt-24 border-t pt-8" aria-labelledby="persona-title">
        <span className="eyebrow text-rose">Audience & persona</span>
        <h2 id="persona-title" className="font-display mt-3 text-4xl md:text-6xl">The Johnson family</h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-charcoal">
          This is the project persona, not a claim of verified user research. The available persona details describe a Cincinnati family of four.
        </p>
        <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-rose/30 bg-blush/40 px-4 py-2 text-sm text-charcoal">
          <span className="eyebrow text-rose">Home</span>
          <span>{data.persona.location}</span>
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {data.persona.family.map((person) => (
            <article key={person.name} className="rounded-lg border border-rose/30 bg-blush/50 p-6 md:p-7">
              <span className="eyebrow text-rose">Family member</span>
              <h3 className="font-display mt-3 text-2xl md:text-3xl">{person.name}</h3>
              <p className="mt-2 text-sm font-medium text-muted-foreground">Age {person.age}</p>
              <div className="mt-5 border-t pt-4">
                <p className="leading-relaxed text-charcoal">{person.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <article className="rounded-lg border bg-card p-5 md:p-6">
            <h3 className="eyebrow text-rose">Before, during & after the visit</h3>
            <div className="mt-4 space-y-4">
              {data.persona.visitJourney.map((phase) => (
                <div key={phase.phase}>
                  <h4 className="text-sm font-semibold text-foreground">{phase.phase}</h4>
                  <ul className="mt-1 space-y-1 text-sm leading-relaxed text-charcoal">
                    {phase.details.map((detail) => <li key={detail}>— {detail}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </article>
          <article className="rounded-lg border bg-card p-5 md:p-6">
            <h3 className="eyebrow text-rose">Preferences & expectations</h3>
            <div className="mt-4 space-y-4">
              {data.persona.preferences.map((group) => (
                <div key={group.category}>
                  <h4 className="text-sm font-semibold text-foreground">{group.category}</h4>
                  <ul className="mt-1 space-y-1 text-sm leading-relaxed text-charcoal">
                    {group.details.map((detail) => <li key={detail}>— {detail}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </article>
          <article className="rounded-lg border bg-card p-5 md:p-6">
            <h3 className="eyebrow text-rose">Challenges & pain points</h3>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-charcoal">
              {data.persona.challenges.map((detail) => <li key={detail}>— {detail}</li>)}
            </ul>
          </article>
          <article className="rounded-lg border bg-card p-5 md:p-6">
            <h3 className="eyebrow text-rose">Goals & motivations</h3>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-charcoal">
              {data.persona.goalsAndMotivations.map((detail) => <li key={detail}>— {detail}</li>)}
            </ul>
          </article>
          <article className="rounded-lg border bg-card p-5 md:p-6 lg:col-span-2">
            <h3 className="eyebrow text-rose">Context & family dynamics</h3>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {data.persona.context.map((item) => (
                <div key={item.category}>
                  <dt className="text-sm font-semibold capitalize text-foreground">{item.category}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-charcoal">{item.detail}</dd>
                </div>
              ))}
            </dl>
          </article>
        </div>
      </section>

      <StepSection number="01" title="Concept & branding" id="phase-01">
        <p className="max-w-3xl leading-relaxed text-charcoal">
          The two visual directions explore different emotional tones and ways to make the computer’s inner workings approachable. Their moodboards and design rationale are presented side by side for comparison.
        </p>
        <div className="mt-10 grid gap-12 md:grid-cols-2">
          {data.concepts.map((concept) => <ConceptCard key={concept.title} concept={concept} />)}
        </div>
        <div className="mt-16 border-t pt-8">
          <span className="eyebrow text-rose">Exhibit visitor progression</span>
          <h3 className="font-display mt-3 text-3xl md:text-4xl">Level 1 and Level 2 walkthroughs</h3>
          <p className="mt-4 max-w-3xl leading-relaxed text-charcoal">
            These annotated maps show the proposed physical exhibit journey. The concept describes visitors completing computer-component tasks, clearing associated errors when successful, progressing between levels, and reaching a final large-screen interaction after all ten errors are cleared.
          </p>
          <div className="mt-8 grid gap-12 md:grid-cols-2">
            {data.walkthroughs.map((walkthrough) => (
              <article key={walkthrough.title}>
                <h4 className="font-display mb-5 text-2xl md:text-3xl">{walkthrough.title}</h4>
                <ArtifactImage label={walkthrough.title} src={walkthrough.image} caption={walkthrough.caption} />
              </article>
            ))}
          </div>
        </div>
      </StepSection>

      <StepSection number="02" title="AI exploration" id="phase-02">
        <p className="text-lg leading-relaxed text-charcoal">
          AI image generation was explored as a way to develop hero imagery for the exhibit website. The images below are image-only explorations and do not include text; each platform’s result and evaluation stay paired as you move through the carousel.
        </p>
        <div className="mt-10">
          <AiExplorationCarousel slides={data.aiExplorations} />
        </div>
      </StepSection>

      <StepSection number="03" title="Museum website redesign" id="phase-03">
        <p className="max-w-3xl leading-relaxed text-charcoal">
          The website direction begins with Cincinnati Museum Center’s existing branding and logo, then develops a dedicated digital experience for the proposed exhibit.
        </p>
        <div className="mt-12">
          <h3 className="font-display mb-6 text-3xl md:text-4xl">Website hero prototypes</h3>
          <p className="mb-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Three distinct prototype artifacts explore the hero. They draw on two generated source images, with one source image reused in two prototypes.
          </p>
          <AssetGrid assets={data.heroPrototypes.map((asset, index) => ({ ...asset, label: `Hero prototype ${index + 1}` }))} />
        </div>
        <div className="mt-16 border-t pt-8">
          <h3 className="font-display mb-6 text-3xl md:text-4xl">Website structure & information architecture</h3>
          <p className="mb-8 max-w-3xl leading-relaxed text-charcoal">{data.informationArchitecture.sitemapCaption}</p>
          <ArtifactImage label="Website sitemap" src={data.informationArchitecture.sitemap} />
          <div className="mt-12">
            <ArtifactImage label="Early website structure sketch" src={data.informationArchitecture.wireframe} secondary />
          </div>
        </div>
        <div className="mt-16 border-t pt-8">
          <h3 className="font-display mb-8 text-3xl md:text-4xl">Low-fidelity wireframes</h3>
          <AssetGrid assets={data.lowFidelity} />
        </div>
        <div className="mt-16 border-t pt-8">
          <h3 className="font-display mb-8 text-3xl md:text-4xl">High-fidelity wireframes</h3>
          <AssetGrid assets={data.highFidelity} />
        </div>
        <div className="mt-16 border-t pt-8">
          <h3 className="font-display mb-3 text-3xl md:text-4xl">Annotated wireframes</h3>
          <p className="mb-8 text-sm leading-relaxed text-muted-foreground">Combined annotated overviews for reference. Select either image to view it larger.</p>
          <div className="grid items-start gap-8 md:grid-cols-2">
            <ArtifactImage label="Annotated low-fidelity wireframe overview" src={data.lowFidelityOverview} caption="Low-fidelity annotated overview" secondary />
            <ArtifactImage label="Annotated high-fidelity wireframe overview" src={data.highFidelityOverview} caption="High-fidelity annotated overview" secondary />
          </div>
        </div>
        <div className="mt-16 border-t pt-8">
          <h3 className="font-display mb-6 text-3xl md:text-4xl">Interactive website prototype</h3>
          <AssetPlaceholder label="Website prototype preview — image to add" className="min-h-64" />
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <PrototypeAction url={data.prototypeUrl} />
            {!data.prototypeUrl && <span className="text-sm text-muted-foreground">Add the actual Figma prototype URL to enable this link.</span>}
          </div>
        </div>
      </StepSection>

      <StepSection number="04" title="Mobile app experience & gamification" id="phase-04">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          <div className="space-y-8">
            <div>
              <h3 className="eyebrow text-rose">App experience overview</h3>
              <p className="mt-3 leading-relaxed text-charcoal">The documented app artifact is the workflow diagram below. No additional app screens, interaction mockups, or gamification visuals were found in the project assets, so those are not presented as completed deliverables.</p>
            </div>
            <div className="border-t pt-6">
              <h3 className="eyebrow text-rose">User flow & navigation</h3>
              <p className="mt-3 leading-relaxed text-charcoal">{data.informationArchitecture.workflowCaption}</p>
            </div>
          </div>
          <div className="md:flex md:justify-center">
            <div className="h-fit w-full md:max-w-[82%]">
              <ArtifactImage label="Museum app workflow" src={data.informationArchitecture.workflow} caption="The existing workflow diagram is shown at its full aspect ratio; select it to enlarge." />
            </div>
          </div>
        </div>
      </StepSection>

      <StepSection number="05" title="Physical wayfinding" id="phase-05">
        <p className="max-w-3xl leading-relaxed text-charcoal">
          Physical wayfinding would connect the digital experience to the museum environment. No completed signage, room markers, directional signs, banners, floor decals, or physical mockups were found in the current project files.
        </p>
        <div className="mt-8">
          <AssetPlaceholder label="Physical wayfinding and signage concepts — project visuals to add" className="min-h-40" />
        </div>
      </StepSection>

      <div className="mt-20"><Row label="Outcome & next steps">{p.reflection}</Row></div>
    </>
  );
}

function CaseStudyPage() {
  const { p, next } = Route.useLoaderData();
  const heroPreview = p.heroImage ?? p.handsFree?.finalInterfaces[0]?.image;
  return (
    <Page>
      <article className="site-container section-space-intro">
        <Link to="/work" className="eyebrow link-underline pb-1">← All work</Link>
        {p.stepInside || p.handsFree || p.mobileAppPreview ? (
          <section className={`mt-12 grid items-center gap-10 ${p.mobileAppPreview ? "lg:grid-cols-[minmax(0,1fr)_16rem]" : "lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14"}`} aria-label="Project overview">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow text-rose">{p.type}</span>
                <StatusTag s={p.status} />
              </div>
              <h1 className={`font-display animate-rise mt-5 break-words text-4xl md:text-7xl ${p.mobileAppPreview ? "max-w-none" : "max-w-3xl"}`}>{p.title}</h1>
              <p className={`mt-6 text-xl leading-relaxed text-charcoal ${p.mobileAppPreview ? "max-w-none" : "max-w-2xl"}`}>{p.summary}</p>
              <dl className="mt-8 grid gap-x-6 gap-y-5 border-y py-6 sm:grid-cols-3">
                {p.facts.map((f) => <div key={f.k}><dt className="eyebrow text-muted-foreground">{f.k}</dt><dd className="mt-1 text-sm text-charcoal">{f.v}</dd></div>)}
              </dl>
            </div>
            <div>
              {p.mobileAppPreview ? (
                <div className="ml-auto w-full max-w-[16rem]">
                  <PhoneAppPreview data={p.mobileAppPreview} compact />
                  <p className="mt-3 text-center text-xs text-muted-foreground">Interactive preview · scroll inside the phone</p>
                </div>
              ) : heroPreview ? <ArtifactImage label={`${p.title} project preview`} src={heroPreview} /> : <AssetPlaceholder label={`${p.title} — project preview image`} className="aspect-[4/3]" />}
            </div>
          </section>
        ) : (
          <>
            <div className="mt-12 flex flex-wrap items-center gap-3">
              <span className="eyebrow text-rose">{p.type}</span>
              <StatusTag s={p.status} />
            </div>
            <h1 className="font-display animate-rise mt-4 max-w-5xl break-words text-3xl sm:text-4xl md:text-7xl lg:text-8xl">{p.title}</h1>
            <p className="mt-6 max-w-2xl text-xl text-charcoal">{p.summary}</p>
            <dl className="mt-10 grid gap-6 border-y py-6 sm:grid-cols-3">
              {p.facts.map((f) => <div key={f.k}><dt className="eyebrow text-muted-foreground">{f.k}</dt><dd className="mt-1">{f.v}</dd></div>)}
            </dl>
          </>
        )}

        {p.professionalWork ? (
          <ProfessionalWork projects={professionalProjects} title="Selected Deliverables" />
        ) : p.stepInside ? <StepInsideCaseStudy p={p} data={p.stepInside} /> : p.handsFree ? <HandsFreeCaseStudy p={p} data={p.handsFree} /> : p.mobileAppPreview ? <MobileAppDevelopmentCaseStudy p={p} data={p.mobileAppPreview} /> : p.heroImage ? (
          <img src={p.heroImage} alt={`${p.title} hero`} className="mx-auto mt-12 h-auto w-auto max-w-full rounded-lg md:mx-0 md:w-full" />
        ) : (
          <AssetPlaceholder label={`${p.title} — hero image`} className="mt-12 aspect-[16/8]" />
        )}

        {!p.stepInside && !p.handsFree && !p.mobileAppPreview && !p.professionalWork && <div className="mt-16">
          <Row label="Context & problem">{p.problem}</Row>
          <Row label="Goals & audience">{p.goals}</Row>
          <Row label="My role">
            <p>{p.role}</p>
            <ul className="mt-4 space-y-2">{p.contributions.map((c) => <li key={c}>— {c}</li>)}</ul>
          </Row>
          <Row label="Tools">{p.tools.join(" · ")}</Row>
        </div>}

        {!p.stepInside && !p.handsFree && !p.mobileAppPreview && !p.professionalWork && <h2 className="font-display mt-24 text-4xl md:text-6xl">{p.chapterLabel}</h2>}

        {!p.stepInside && !p.handsFree && !p.mobileAppPreview && !p.professionalWork && (p.apps ? (
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {p.apps.map((a) => (
              <Reveal key={a.title} className="border-t pt-6">
                <AssetPlaceholder label={`${a.title} — screenshots or prototype`} className="aspect-[4/3]" />
                <h3 className="font-display mt-6 text-3xl">{a.title}</h3>
                <dl className="mt-4 space-y-3 text-charcoal">
                  <div><dt className="eyebrow text-muted-foreground">Assignment</dt><dd>{a.assignment}</dd></div>
                  <div><dt className="eyebrow text-muted-foreground">Description</dt><dd>{a.description}</dd></div>
                  <div><dt className="eyebrow text-muted-foreground">Technologies</dt><dd>{a.tech.join(" · ")}</dd></div>
                  <div><dt className="eyebrow text-muted-foreground">What I learned</dt><dd>{a.learned}</dd></div>
                </dl>
              </Reveal>
            ))}
          </div>
        ) : (
          <ol className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-2">
            {p.chapters.map((c, i) => (
              <Reveal key={c.title} className={(c.assets?.length ?? 0) > 1 ? "md:col-span-2" : ""}>
                <li className="list-none border-t pt-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="eyebrow text-rose">{String(i + 1).padStart(2, "0")}</span>
                    {c.status && <StatusTag s={c.status} />}
                  </div>
                  <h3 className="font-display mt-3 text-2xl md:text-3xl">{c.title}</h3>
                  {c.body && <p className="mt-3 text-charcoal">{c.body}</p>}
                  {c.assets && (
                    <div className={`mt-5 grid gap-4 ${c.assets.length > 1 ? "sm:grid-cols-2 lg:grid-cols-3" : ""}`}>
                      {c.assets.map((a) => typeof a === "object" && a.src ? (
                        <img key={a.label} src={a.src} alt={a.label} className="mx-auto h-auto w-auto max-w-full rounded-lg md:mx-0 md:w-full" />
                      ) : (
                        <AssetPlaceholder key={typeof a === "string" ? a : a.label} label={typeof a === "string" ? a : a.label} />
                      ))}
                    </div>
                  )}
                </li>
              </Reveal>
            ))}
          </ol>
        ))}

        {!p.stepInside && !p.handsFree && !p.mobileAppPreview && !p.professionalWork && <div className="mt-20"><Row label="Outcome & next steps">{p.reflection}</Row></div>}

        <div className="mt-16 flex flex-col gap-10 border-t pt-10 md:flex-row md:items-end md:justify-between">
          <Link to="/work/$slug" params={{ slug: next.slug }} className="group block">
            <span className="eyebrow text-muted-foreground">Next project</span>
            <span className="font-display mt-3 block break-words text-3xl transition-transform group-hover:translate-x-2 md:text-6xl">{next.title} →</span>
          </Link>
          <Link to="/work" className="eyebrow link-underline pb-1">All work</Link>
        </div>
      </article>
    </Page>
  );
}
