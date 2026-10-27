import { Link } from "@tanstack/react-router";
import type { CaseStudy, ProfessionalProject, Status } from "@/content/site";

export function StatusTag({ s }: { s: Status }) {
  const label = s === "To confirm" ? "Status to confirm" : s;
  const tone =
    s === "Completed"
      ? "bg-foreground text-background"
      : s === "In Progress"
        ? "bg-blush"
        : "border border-dashed border-rose text-muted-foreground";
  return <span className={`eyebrow inline-block rounded-full px-3 py-1 ${tone}`}>{label}</span>;
}

/** Clearly labeled stand-in for a missing work asset. */
export function AssetPlaceholder({
  label,
  className = "aspect-[4/3]",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      className={`flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-rose bg-card p-6 text-center ${className}`}
    >
      <span className="eyebrow text-rose">Placeholder</span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}

export function ProjectCard({
  p,
  index,
  ratio = "aspect-[4/3]",
  big,
}: {
  p: CaseStudy;
  index: number;
  ratio?: string;
  big?: boolean;
}) {
  return (
    <Link to="/work/$slug" params={{ slug: p.slug }} className="group flex h-full flex-col">
      <div className={`relative flex w-full shrink-0 overflow-hidden rounded-lg bg-card ${ratio}`}>
        {p.cardImage && (
          <>
            <img
              src={p.cardImage}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/45" />
          </>
        )}
        <div className="absolute inset-0 flex flex-col justify-between p-6 transition-transform duration-700 group-hover:scale-[1.02] md:p-8">
          <span className={`eyebrow ${p.cardImage ? "text-white" : "text-rose"}`}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`font-display ${p.cardImage ? "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]" : "text-blush"} ${big ? "text-6xl md:text-8xl" : "text-5xl md:text-6xl"}`}
          >
            {p.title}
          </span>
          {!p.cardImage && (
            <span className="eyebrow text-muted-foreground">Project imagery to be added</span>
          )}
        </div>
      </div>
      <div className="mt-4 flex flex-1 items-start justify-between gap-4 border-t pt-4">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="eyebrow text-rose">{p.type}</span>
            {p.status === "In Progress" && <StatusTag s={p.status} />}
          </div>
          <h3 className="font-display mt-2 text-2xl md:text-3xl">{p.title}</h3>
          <p className="mt-2 max-w-xl text-charcoal">{p.summary}</p>
        </div>
        <span className="eyebrow whitespace-nowrap pt-1 transition-transform group-hover:translate-x-1">
          View →
        </span>
      </div>
    </Link>
  );
}

function projectPreviewHtml(project: Extract<ProfessionalProject, { kind: "ebook" }>) {
  const ebookDataUrl = `data:text/html;charset=utf-8,${encodeURIComponent(project.pages.ebook)}`;
  const thankYouHtml = project.pages.thankYou
    .replaceAll('href="ebook.html"', `href="${ebookDataUrl}"`)
    .replace('var EBOOK_URL = "ebook.html";', `var EBOOK_URL = ${JSON.stringify(ebookDataUrl)};`);
  const aboutHtml = project.pages.about.replace(
    "<strong>FORM PLACEHOLDER</strong>",
    "<strong>HubSpot form not shown in this preview</strong><p>The form is managed on MCA’s live website. Use the live landing-page link above to submit it.</p>",
  );

  return [
    { title: "Landing page", html: aboutHtml },
    { title: "Thank-you page", html: thankYouHtml },
    { title: "E-book page", html: project.pages.ebook },
  ];
}

function ProjectCategories({ categories }: { categories: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {categories.map((category) => (
        <li key={category} className="rounded-full border px-3 py-1 text-xs">
          {category}
        </li>
      ))}
    </ul>
  );
}

function VideoDeliverables({
  project,
}: {
  project: Extract<ProfessionalProject, { kind: "video" }>;
}) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {project.videos.map((video) => (
        <figure key={video.title} className="min-w-0">
          <video
            controls
            playsInline
            preload="metadata"
            className="mx-auto block h-auto w-full max-w-64 rounded-lg"
            aria-label={`${project.organization}: ${video.title}`}
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video element.
          </video>
          <figcaption className="mt-3 text-sm text-muted-foreground">{video.title}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function EbookExperience({
  project,
}: {
  project: Extract<ProfessionalProject, { kind: "ebook" }>;
}) {
  const pages = projectPreviewHtml(project);

  return (
    <div className="mt-8">
      <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-3">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="eyebrow inline-flex min-h-12 items-center rounded-full bg-foreground px-6 py-3 text-background transition-colors hover:bg-rose focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          View Live Landing Page ↗
        </a>
        <p className="max-w-3xl leading-relaxed text-charcoal">{project.role}</p>
      </div>
      <div className="grid items-start gap-6 lg:grid-cols-3">
        {pages.map((page) => (
          <figure key={page.title} className="min-w-0">
            <figcaption className="eyebrow mb-3 text-rose">{page.title}</figcaption>
            <div className="aspect-[4/5] overflow-hidden rounded-lg border bg-card shadow-sm">
              <iframe
                title={`MCA e-book experience — ${page.title} preview`}
                srcDoc={page.html}
                sandbox="allow-scripts"
                loading="lazy"
                className="block h-full w-full border-0 bg-white"
              />
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}

function BrochurePanels({
  project,
}: {
  project: Extract<ProfessionalProject, { kind: "brochure" }>;
}) {
  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-2">
      {project.panels.map((panel) => (
        <figure key={panel.title} className="min-w-0">
          <figcaption className="eyebrow mb-3 text-rose">{panel.title}</figcaption>
          <img
            src={panel.src}
            alt={`${project.organization} brochure — ${panel.title}`}
            className="block h-auto w-full rounded-lg"
          />
        </figure>
      ))}
    </div>
  );
}

export function ProfessionalWork({
  projects,
  title = "Professional Work",
}: {
  projects: ProfessionalProject[];
  title?: string;
}) {
  return (
    <section className="mt-24 border-t pt-10" aria-labelledby="professional-work-title">
      <div className="mb-12">
        <span className="eyebrow text-rose">Selected projects</span>
        <h2 id="professional-work-title" className="font-display mt-3 text-4xl md:text-6xl">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-charcoal">
          Design, web development, and digital content created for organizations.
        </p>
      </div>
      <div className="space-y-20">
        {projects.map((project) => (
          <article key={project.id} className="border-t pt-7">
            <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
              <div>
                <p className="eyebrow text-rose">{project.organization}</p>
                <h3 className="font-display mt-2 text-3xl md:text-4xl">{project.title}</h3>
              </div>
            </div>
            <p className="mt-4 max-w-3xl leading-relaxed text-charcoal">{project.summary}</p>
            <ProjectCategories categories={project.categories} />
            {project.kind === "ebook" && <EbookExperience project={project} />}
            {project.kind === "video" && <VideoDeliverables project={project} />}
            {project.kind === "brochure" && <BrochurePanels project={project} />}
          </article>
        ))}
      </div>
    </section>
  );
}
