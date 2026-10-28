// Central editable content. Anything marked [TO ADD] / [TO CONFIRM] still needs Riley's real info.
// Rule: never add metrics, clients, results, tools, or functionality Riley hasn't confirmed.

export const site = {
  name: "Riley Hammond",
  initials: "RH",
  positioning: "Creative thinking. Digital building. Strategic impact.",
  descriptor: "Design · Code · Web Experiences · Marketing",
  intro:
    "I bring together design, coding, web experiences, and marketing to turn ideas into thoughtful, engaging digital experiences. My work bridges creativity and technology — combining visual storytelling, user-centered design, and technical problem-solving to create work that looks good, works well, and has a purpose.",
  aboutShort:
    "I’m studying Emerging Technology in Business and Design at Miami University, with a minor in Digital Marketing — a program that lets me move between design, technology, and strategy every day.",
  aboutLong: [
    "I’m drawn to the space where creativity and technology meet. With experience spanning design, coding, web development, and digital marketing, I enjoy approaching challenges from multiple perspectives — thinking about how something looks, how it works, and how it connects with an audience.",
    "From designing digital experiences and building interactive applications to developing marketing campaigns and creating visual content, I bring a multidisciplinary perspective to every project. I’m interested in what happens when thoughtful design, emerging technology, and strategic thinking work together to turn ideas into meaningful experiences.",
  ],
  // Set real values to enable links. Empty = labeled placeholder.
  email: "riley.digital.creative@gmail.com" as string,
  linkedin: "www.linkedin.com/in/riley-hammond-miamiuniversity" as string,
  // Put the PDF in /public/downloads/ and set e.g. "/downloads/riley-hammond-resume.pdf".
  resumeUrl: resume,
  portrait: headshot as string | null,
};

export const approach = [
  { k: "Idea", t: "Start with curiosity", d: "Concepts, research, and the question behind the brief." },
  { k: "Strategy", t: "Think about the audience", d: "Who it’s for, what they need, and how to reach them." },
  { k: "Design", t: "Shape it visually", d: "Branding, layout, typography, and user-centered interfaces." },
  { k: "Build", t: "Make it work", d: "Code, web pages, prototypes, and interactive technology." },
];

export const education = [
  {
    school: "Miami University",
    program: "Emerging Technology in Business and Design",
    detail: "Minor in Digital Marketing",
    dates: "Expected graduation · May 2027",
    honors: ["Dean’s List · Fall 2025", "Dean’s List · Spring 2026"],
  },
];

export const certifications = [
  {
    title: "Social Media Marketing Foundations",
    description:
      "Completed foundational training in social media marketing through LinkedIn Learning.",
    pdfUrl: socialMediaMarketingCertificate,
  },
];
export const mcaRecommendationLetterUrl = mcaRecommendationLetter;

export const experience = [
  {
    role: "Digital Marketing and Design Intern",
    org: "MCA (Marcom Content by Ashley)",
    orgShort: "MCA",
    dates: "March 2026 – August 2026",
    items: [
      "Wrote email copy and created corresponding visuals for recurring email campaigns serving six companies each month.",
      "Created and published HubSpot landing pages for forms, sign-ups, eBooks, and on-demand webinars.",
      "Built recurring landing pages for weekly webinar content as needed.",
      "Wrote blog content and developed content calendars.",
      "Created social media content, profile and bio copy, and story highlights.",
      "Contributed to social content production, typically creating around 10–14 posts per month.",
      "Worked on graphic design and marketing visuals, website updates, SEO research and optimization, and video editing and Reels.",
    ],
  },
];

export const skillAreas = [
  { title: "Creative & Design", note: "How it looks", items: ["Graphic design", "Visual storytelling", "Branding and visual identity", "Layout and typography", "Creative concept development", "Digital content and visual assets"] },
  { title: "Web & Digital Experiences", note: "How it’s experienced", items: ["Web design", "UX/UI design", "Wireframing and prototyping", "Information architecture", "Sitemaps and user workflows", "Website building and updates"] },
  { title: "Coding & Emerging Technology", note: "How it works", items: ["HTML", "CSS", "JavaScript", "Mobile app development", "Interactive digital experiences", "Human-computer interaction", "Exploring emerging technologies through practical problem-solving"] },
  { title: "Marketing & Strategy", note: "How it connects", items: ["Digital marketing", "Social media marketing", "Content calendars and campaign planning", "Email marketing", "Blog writing and content development", "SEO research and optimization", "Creative campaign strategy", "Video and short-form content creation"] },
];

// Featured app-logo grid (About page). Exactly 10, in Riley's order. After Effects intentionally omitted.
export const featuredTools = [
  { label: "Adobe Photoshop", icon: "ps.svg" },
  { label: "Adobe Illustrator", icon: "ai.svg" },
  { label: "Figma", icon: "figma.svg" },
  { label: "Canva", icon: "canva.png" },
  { label: "HTML / CSS / JavaScript", icon: "vscode.svg", alt: "Visual Studio Code" },
  { label: "GitHub", icon: "github.svg" },
  { label: "HubSpot", icon: "hubspot.svg" },
  { label: "Lovable", icon: "lovable.png" },
  { label: "Expo Go", icon: "expo-go.svg" },
  { label: "Adobe Premiere Pro", icon: "pr.svg" },
] as { label: string; icon: string; alt?: string }[];

import headshot from "@/assets/headshots/headshot1.jpg";
import heroImage from "@/assets/case-studies/step-inside-a-computer/hero.jpg";
import conceptMoodboard from "@/assets/case-studies/step-inside-a-computer/concept-moodboard.jpg";
import conceptMoodboardTwo from "@/assets/case-studies/step-inside-a-computer/concept-moodboard-2.jpg";
import lofiAnnotatedWireframes from "@/assets/case-studies/step-inside-a-computer/lofi-annotated-wireframes.jpg";
import lowfiHome from "@/assets/case-studies/step-inside-a-computer/lowfi-home.png";
import lofiAbout from "@/assets/case-studies/step-inside-a-computer/lofi-about.jpg";
import lofiTicketing from "@/assets/case-studies/step-inside-a-computer/lofi-ticketing.jpg";
import highfiAnnotatedWireframes from "@/assets/case-studies/step-inside-a-computer/highfi-annotated-wireframes.jpg";
import highfiHome from "@/assets/case-studies/step-inside-a-computer/highfi-homescreen.jpg";
import highfiAbout from "@/assets/case-studies/step-inside-a-computer/highfi-about.jpg";
import highfiTicketing from "@/assets/case-studies/step-inside-a-computer/highfi-ticketing.png";
import walkthroughLevel1 from "@/assets/case-studies/step-inside-a-computer/walkthrough-level-1.jpg";
import walkthroughLevel2 from "@/assets/case-studies/step-inside-a-computer/walkthrough-level-2.jpg";
import appWorkflow from "@/assets/case-studies/step-inside-a-computer/app-workflow.jpg";
import siteMap from "@/assets/case-studies/step-inside-a-computer/site-map.jpg";
import heroPrototypeOne from "@/assets/case-studies/step-inside-a-computer/hero-image-ideas/Hero1.jpg";
import heroPrototypeTwo from "@/assets/case-studies/step-inside-a-computer/hero-image-ideas/Hero2.jpg";
import heroPrototypeThree from "@/assets/case-studies/step-inside-a-computer/hero-image-ideas/Hero3.jpg";
import chatgptImageOne from "@/assets/case-studies/step-inside-a-computer/ai-journey-images/chatgpt1.png";
import chatgptImageTwo from "@/assets/case-studies/step-inside-a-computer/ai-journey-images/chatgpt2.png";
import geminiImageOne from "@/assets/case-studies/step-inside-a-computer/ai-journey-images/gemini1.jpeg";
import geminiImageTwo from "@/assets/case-studies/step-inside-a-computer/ai-journey-images/gemini2.jpeg";
import geminiImageThree from "@/assets/case-studies/step-inside-a-computer/ai-journey-images/gemini3.jpeg";
import dremniaImageOne from "@/assets/case-studies/step-inside-a-computer/ai-journey-images/dremnia1.jpeg";
import dremniaImageTwo from "@/assets/case-studies/step-inside-a-computer/ai-journey-images/dremnia2.jpeg";
import recipeMockupOne from "@/assets/case-studies/hands-free-recipe/Mockup1.png";
import recipeMockupTwo from "@/assets/case-studies/hands-free-recipe/Mockup2.png";
import recipeInstructionsInterface from "@/assets/case-studies/hands-free-recipe/recipe-instructions-interface.png";
import recipeSelectionInterface from "@/assets/case-studies/hands-free-recipe/recipe-selection-interface.png";
import gestureScroll from "@/assets/case-studies/hands-free-recipe/gestures/scroll.jpg";
import gestureSelect from "@/assets/case-studies/hands-free-recipe/gestures/select.jpg";
import gesturePreviousStep from "@/assets/case-studies/hands-free-recipe/gestures/previous-step.jpg";
import gestureMarkComplete from "@/assets/case-studies/hands-free-recipe/gestures/mark-complete.jpg";
import gestureNextStep from "@/assets/case-studies/hands-free-recipe/gestures/next-step.jpg";
import gestureRecipeSelect from "@/assets/case-studies/hands-free-recipe/gestures/recipe-select.jpg";
import testingNextStep from "@/assets/case-studies/hands-free-recipe/testing/next-step.jpg";
import testingPreviousStep from "@/assets/case-studies/hands-free-recipe/testing/previous-step.jpg";
import handsFreeRecipeCover from "@/assets/case-studies/hands-free-recipe/project-cover-photo/recipe-cover-photo.png";
import mcaAboutPage from "@/assets/case-studies/mca-work/mca-ebook/about.html?raw";
import mcaThankYouPage from "@/assets/case-studies/mca-work/mca-ebook/thank-you.html?raw";
import mcaEbookPage from "@/assets/case-studies/mca-work/mca-ebook/ebook.html?raw";
import mcaWorkCover from "@/assets/case-studies/mca-work/project-cover-photo/internship-project-photo.png";
import mconleyBrochureInside from "@/assets/case-studies/mca-work/mconley-brochure/brochure-inside.png";
import mconleyBrochureOutside from "@/assets/case-studies/mca-work/mconley-brochure/brochure-outside.png";
import papaGyrosGoogleReel from "@/assets/case-studies/mca-work/papa-gyros-reels/google-search-reel.mp4";
import papaGyrosReel from "@/assets/case-studies/mca-work/papa-gyros-reels/gyros-reel.mp4";
import papaGyrosSummerReel from "@/assets/case-studies/mca-work/papa-gyros-reels/summer-flavors-reel.mp4";
import socialMediaMarketingCertificate from "@/assets/certifications/CertificateOfCompletion_Social Media Marketing Foundations.pdf?url";
import mcaRecommendationLetter from "@/assets/reccomendation-letter/Riley Hammond_Letter of Recommendation.pdf?url";
import resume from "@/assets/resume/resume-rileyhammond.pdf?url";

export const toolGroups = [
  { title: "Web & Development", tools: ["HTML", "CSS", "JavaScript", "GitHub", "Lovable", "Expo Go", "Squarespace"] },
  { title: "Marketing & Content", tools: ["HubSpot", "SEO research and optimization tools", "Email marketing", "Social media content creation", "Content calendars", "Blog writing", "Short-form video and Reels"] },
  { title: "Collaboration & Productivity", tools: ["Miro", "Microsoft Teams", "Slack", "Google Slides", "Google Sheets", "ChatGPT"] },
];

export type Status = "Completed" | "In Progress" | "Planned" | "To confirm";

export type Chapter = {
  title: string;
  body?: string;
  status?: Status;
  assets?: Asset[];
};

export type Asset = string | { label: string; src?: string };

export type Concept = {
  title: string;
  subtitle?: string;
  summary: string;
  audience: string;
  impact: string;
  designLanguage: string;
  fontAndColor: string;
  pros: string;
  considerations: string;
  image?: string;
};

export type StepInsideSection = {
  persona: {
    family: { name: string; age: number; description: string }[];
    location: string;
    goalsAndMotivations: string[];
    visitJourney: { phase: string; details: string[] }[];
    preferences: { category: string; details: string[] }[];
    challenges: string[];
    context: { category: string; detail: string }[];
  };
  concepts: Concept[];
  walkthroughs: { title: string; image: string; caption: string }[];
  aiExplorations: { platform: string; image?: string; evaluation: string }[];
  heroPrototypes: { label: string; image?: string; caption?: string }[];
  informationArchitecture: {
    sitemap: string;
    workflow: string;
    wireframe?: string;
    sitemapCaption: string;
    workflowCaption: string;
  };
  lowFidelity: { label: string; image?: string; caption?: string }[];
  lowFidelityOverview?: string;
  highFidelity: { label: string; image?: string; caption?: string }[];
  highFidelityOverview?: string;
  prototypeUrl?: string;
};

export type HandsFreeSection = {
  prototypeUrl: string;
  accessibilityPotential: string;
  mockups: { label: string; image: string; caption: string }[];
  testingPhotos: { label: string; image: string; caption: string }[];
  finalInterfaces: { label: string; image: string; caption: string }[];
  finalGestures: { gesture: string; action: string; image: string }[];
};

export type MobileAppPreview = {
  title: string;
  subtitle: string;
  prompt: string;
  backgroundImage: string;
  assignmentHighlights: string[];
  places: {
    id: string;
    name: string;
    type: string;
    address: string;
    rating: number;
    cost: string;
    image: string;
    website?: string;
  }[];
};

export type AppEntry = { title: string; assignment: string; description: string; tech: string[]; learned: string };

export type CaseStudy = {
  slug: "step-inside-a-computer" | "hands-free-recipe-navigator" | "mca-work" | "mobile-app-development";
  title: string;
  type: string;
  status: Status;
  featured: boolean;
  summary: string;
  categories: string[];
  facts: { k: string; v: string }[];
  heroImage?: string;
  cardImage?: string;
  problem: string;
  goals: string;
  role: string;
  contributions: string[];
  tools: string[];
  chapterLabel: string;
  chapters: Chapter[];
  apps?: AppEntry[];
  reflection: string;
  stepInside?: StepInsideSection;
  handsFree?: HandsFreeSection;
  mobileAppPreview?: MobileAppPreview;
  professionalWork?: boolean;
};

const TBA = "[TO ADD]";

export const caseStudies: CaseStudy[] = [
  {
    slug: "step-inside-a-computer",
    title: "Step Inside a Computer",
    type: "UX/UI · Experience Design",
    status: "In Progress",
    featured: true,
    summary: "An experience-design concept that translates a complex subject — how a computer works on the inside — into a thoughtful, engaging journey.",
    categories: ["UX/UI design", "Experience design", "Information architecture", "Moodboards & wireframes", "User workflows & sitemaps"],
    facts: [{ k: "Type", v: "Experience design concept" }, { k: "Course", v: "Intermediate Interaction Design" }, { k: "Year", v: "2026" }],
    heroImage,
    cardImage: chatgptImageOne,
    problem: `${TBA} — the challenge of explaining a complex, invisible system in a way that feels approachable and engaging.`,
    goals: `${TBA} — project goals and intended audience.`,
    role: TBA,
    contributions: ["Concept moodboard", "Low- and high-fidelity wireframes in Figma", "App workflow", "Sitemap and information architecture"],
    tools: ["Figma, Canva"],
    chapterLabel: "From concept to interface",
    stepInside: {
      persona: {
        family: [
          { name: "Mark Johnson", age: 45, description: "Software engineer" },
          { name: "Lisa Johnson", age: 42, description: "Elementary school teacher" },
          { name: "Emma Johnson", age: 12, description: "Student who enjoys reading and storytelling" },
          { name: "Ryan Johnson", age: 8, description: "Student who enjoys hands-on activities and games" },
        ],
        location: "Cincinnati, Ohio",
        goalsAndMotivations: [
          "Have an engaging, educational, and fun museum experience.",
          "Explore Cincinnati’s history, science, or cultural heritage in a memorable way.",
          "Discover exhibits with interactive, multimedia, or personalized elements.",
          "Create lasting family memories and share learning with their children.",
        ],
        visitJourney: [
          {
            phase: "Before",
            details: [
              "Researches exhibit highlights online.",
              "May download a museum app or look for activity guides.",
              "Plans the day around specific exhibits or interactive stations.",
            ],
          },
          {
            phase: "During",
            details: [
              "Uses smartphones to take photos, look up related content, or access digital guides.",
              "Prefers exhibits that combine storytelling with GUIs, augmented reality, or multimedia.",
              "Engages with hands-on displays, quizzes, and interactive games.",
              "Keeps children involved by encouraging participation and exploration.",
            ],
          },
          {
            phase: "After",
            details: [
              "Shares photos and experiences via social media.",
              "Looks for follow-up resources or activities to extend learning.",
            ],
          },
        ],
        preferences: [
          {
            category: "Design & usability",
            details: [
              "Clear signage and intuitive pathways.",
              "Accessible exhibits with minimal language barriers.",
              "Digital interfaces children can understand and navigate.",
            ],
          },
          {
            category: "Content & interaction",
            details: [
              "Story-driven exhibits blending history, science, or culture.",
              "Interactive kiosks, AR/VR experiences, and tactile elements.",
              "Family participation through quizzes, scavenger hunts, or storytelling.",
            ],
          },
          {
            category: "Technology",
            details: [
              "Seamless integration of technology with physical exhibits.",
              "App features such as exhibit maps, quizzes, or personalized tours.",
              "Privacy and data security, especially for children.",
            ],
          },
        ],
        challenges: [
          "Waiting in long lines or crowded areas.",
          "Understanding or navigating complex exhibits.",
          "Exhibits with minimal interaction or outdated digital interfaces.",
          "Feeling overwhelmed by too much information or poorly organized displays.",
          "Limited opportunities for children to engage actively.",
        ],
        context: [
          { category: "Visit timing", detail: "Primarily weekends, school holidays, or special event days." },
          { category: "Duration", detail: "Typically spends 2–3 hours at the museum." },
          { category: "Group dynamics", detail: "Mostly family with young children; sometimes with grandparents or friends." },
          { category: "Visit style", detail: "A mix of structured activities and free exploration." },
        ],
      },
      concepts: [
        {
          title: "Concept One",
          subtitle: "Futuristic, Immersive, Intruiging",
          summary: "A guided exhibit experience that introduces how a computer works through a physical, visitor-led journey.",
          audience: "Families with older childrren, teens, and adults who are interested in technology and understanding how computers work.",
          impact: "Visitors should leave with a new understanding of a previously hidden world inside their computer and how they are connected to it.",
          designLanguage: "The design language is dark, structured, and technology-based. The code, grids, and circuits create a complex digital system.",
          fontAndColor: "Architype Ballmer is used for its digital character, while Tomorrow is used as the secondary font for a clean, legible look. The range of blues in the palette simulates technology, and the black creates mystery.",
          pros: "Futuristic and immersive, appeals to visitors interested in technology, and it creates a shopisticaed experience.",
          considerations: "Could feel intimidating, dark and technical imagery may be less appealing to children, and dark spaces can be harder to see (accessibility).",
          image: conceptMoodboard,
        },
        {
          title: "Concept Two",
          subtitle: "Retro, Vibrant, Energetic",
          summary: "A second direction for translating the computer’s internal systems into an approachable interactive experience.",
          audience: "Families with younger children and students who are drawn to playful, hands-on experiences. Suited for visitors with no prior knowledge of technology.",
          impact: "The exhibit should spark curiosity through its exploratory and playful nature. Bright colors and interactive elements help draw children into the tech world.",
          designLanguage: "The design language is colorful and retro, with pixel graphics and neon lighting. It should feel playful and welcoming for everyone. ",
          fontAndColor: "Retro Pix is used to create a nostalgic connection to early computers. Deep black, hot pink, electric purple, and teal create vibrance and further develop the playful, retro theme.",
          pros: "Engaging for younger audiences, makes technology approachable, welcoming and inviting, and it has a retro and nostalgic vibe.",
          considerations: "Bright colors can become overwhelming, pixel font brings about legibility issues, and the retro theme could feel more like an arcade than an education experience.",
          image: conceptMoodboardTwo,
        },
      ],
      walkthroughs: [
        {
          title: "Level 1 exhibit walkthrough",
          image: walkthroughLevel1,
          caption: "Level 1 exhibit map. The map and its annotations show the planned visitor progression and interactions for this level.",
        },
        {
          title: "Level 2 exhibit walkthrough",
          image: walkthroughLevel2,
          caption: "Level 2 exhibit map. The map and its annotations continue the planned visitor progression and interactions.",
        },
      ],
      aiExplorations: [
        {
          platform: "ChatGPT",
          image: chatgptImageOne,
          evaluation: "Crisp, Detailed, and On-brand",
        },
        {
          platform: "ChatGPT",
          image: chatgptImageTwo,
          evaluation: "Crisp, Detailed, and On-brand",
        },
        {
          platform: "Gemini",
          image: geminiImageOne,
          evaluation: "Dull, Bland, and Uninspiring",
        },
        {
          platform: "Gemini",
          image: geminiImageTwo,
          evaluation: "Dull, Bland, and Uninspiring",
        },
        {
          platform: "Gemini",
          image: geminiImageThree,
          evaluation: "Dull, Bland, and Uninspiring",
        },
        {
          platform: "Dremnia",
          image: dremniaImageOne,
          evaluation: "Creative, Medium-quality, and Dark",
        },
        {
          platform: "Dremnia",
          image: dremniaImageTwo,
          evaluation: "Creative, Medium-quality, and Dark",
        },
      ],
      heroPrototypes: [
        { label: "Hero prototype 1", image: heroPrototypeOne },
        { label: "Hero prototype 2", image: heroPrototypeTwo },
        { label: "Hero prototype 3", image: heroPrototypeThree },
      ],
      informationArchitecture: {
        sitemap: siteMap,
        workflow: appWorkflow,
        sitemapCaption: "The sitemap maps the website structure and visitor progression through the two levels, including exhibit tasks, error-clearing success states, and the final large-screen interaction after all ten errors are cleared.",
        workflowCaption: "The app workflow maps navigation through the app screens and buttons, eventually returning the visitor to the homepage.",
      },
      lowFidelity: [
        { label: "Home", image: lowfiHome },
        { label: "About", image: lofiAbout },
        { label: "Ticketing", image: lofiTicketing },
      ],
      lowFidelityOverview: lofiAnnotatedWireframes,
      highFidelity: [
        { label: "Home", image: highfiHome },
        { label: "About", image: highfiAbout },
        { label: "Ticketing", image: highfiTicketing },
      ],
      highFidelityOverview: highfiAnnotatedWireframes,
    },
    chapters: [
      { title: "Overview & concept", body: TBA },
      { title: "Concept moodboard", assets: [{ label: "Moodboard", src: conceptMoodboard }] },
      { title: "Low-fidelity wireframes", assets: [
        { label: "Lo-fi annotated wireframes", src: lofiAnnotatedWireframes },
        { label: "Lo-fi about screen" },
      ] },
      { title: "High-fidelity wireframes", assets: [{ label: "Hi-fi home screen" }] },
      { title: "App workflow", assets: [
        { label: "Walkthrough level 1", src: walkthroughLevel1 },
        { label: "Walkthrough level 2", src: walkthroughLevel2 },
        { label: "App workflow", src: appWorkflow },
      ] },
      { title: "Sitemap & information architecture", assets: [{ label: "Sitemap", src: siteMap }] },
      { title: "Research & planning artifacts", body: TBA },
    ],
    reflection: `${TBA} — final concept, key decisions, and what I learned.`,
  },
  {
    slug: "hands-free-recipe-navigator",
    title: "Hands-Free Recipe Navigator",
    cardImage: handsFreeRecipeCover,
    type: "Interaction Design · UX/UI · Prototyping",
    status: "Completed",
    featured: true,
    summary: "A gesture-controlled cookbook prototype exploring how people can navigate recipes hands-free through camera-based hand recognition and audio feedback.",
    categories: ["Interaction design", "UX/UI", "Prototyping", "Gesture-based interaction", "Audio feedback"],
    facts: [{ k: "Project type", v: "Interaction Design · UX/UI · Prototyping" }, { k: "Context", v: "CoLab / Collaborative course project" }, { k: "Year", v: "2026" }],
    problem: "Cooking often means working with messy hands while trying to follow instructions on a laptop or other device. Repeatedly touching a screen to scroll, find an ingredient, or advance to the next step can interrupt the process.",
    goals: "Hands-Free Recipe Navigator explores an alternative: a cookbook interface that uses hand gestures and audio feedback to help users navigate recipes without physically touching their computer. Developed as a collaborative CoLab micro-interaction project, the prototype combines interaction design, camera-based hand recognition, and recipe browsing to explore a more natural way to follow digital instructions.",
    role: "Team project. I focused on visual design, wireframing, documentation, and presenting the project, while collaborating with one teammate on coding and technical implementation.",
    contributions: [
      "Created visual concepts, website mockups, and wireframes.",
      "Contributed to interface design and visual content.",
      "Collaborated with one teammate on coding and technical implementation.",
      "Documented the design process, feedback, decisions, and iterations.",
      "Helped present the project and explain its outcomes.",
    ],
    tools: ["Python", "Claude", "WordPress API", "Node Fetch", "Cheerio", "Figma"],
    chapterLabel: "Hands-Free Recipe Navigator — project phases",
    chapters: [],
    handsFree: {
      prototypeUrl: "https://hands-free-recipe-navigator.onrender.com/",
      accessibilityPotential: "Hands-free interaction may offer an alternative input method for people who find traditional keyboard, mouse, or touchscreen interaction difficult. It may also be useful when a person's hands are occupied during a task such as cooking. This is an opportunity to explore, not a proven or formally tested accessibility outcome.",
      mockups: [
        {
          label: "Variation One — Inline Checklist",
          image: recipeMockupOne,
          caption: "This alternative layout checks off recipe instructions directly on the page, keeping the instructions together in one continuous view.",
        },
        {
          label: "Variation Two — Flashcard-Style Instructions",
          image: recipeMockupTwo,
          caption: "This alternative layout groups instructions into simplified sections organized by heading for a more focused, step-by-step presentation.",
        },
      ],
      testingPhotos: [
        {
          label: "Prototype check-in — next-step gesture",
          image: testingNextStep,
          caption: "A class prototype check-in documented the forward gesture used to move to the next recipe step.",
        },
        {
          label: "Prototype check-in — previous-step gesture",
          image: testingPreviousStep,
          caption: "A class prototype check-in documented the backward gesture used to return to a previous recipe step.",
        },
      ],
      finalInterfaces: [
        {
          label: "Recipe selection",
          image: recipeSelectionInterface,
          caption: "The recipe-selection interface lets the user choose a recipe to follow.",
        },
        {
          label: "Recipe instructions",
          image: recipeInstructionsInterface,
          caption: "The recipe-instructions interface presents the recipe steps for hands-free navigation.",
        },
      ],
      finalGestures: [
        { gesture: "Fist", action: "Select a recipe.", image: gestureRecipeSelect },
        { gesture: "Point forward", action: "Move to the next recipe step.", image: gestureNextStep },
        { gesture: "Point backward", action: "Move to the previous recipe step.", image: gesturePreviousStep },
        { gesture: "Thumbs-up", action: "Mark the current step complete and advance.", image: gestureMarkComplete },
        { gesture: "Palm", action: "Start or stop audio instructions.", image: gestureSelect },
        { gesture: "Pinch", action: "Scroll through the website hands-free.", image: gestureScroll },
      ],
    },
    reflection: "This project showed me that designing a micro-interaction involves more than assigning an action to a gesture. The interaction needs to be understandable to the user, recognizable by the system, and reliable enough to feel intentional.\n\nOne of our biggest challenges was distinguishing deliberate navigation gestures from ordinary movements. Through feedback and iteration, we learned the importance of clear gesture mappings, useful system feedback, and testing interactions in realistic contexts.\n\nThe project also made me consider the accessibility potential of alternative input methods. Hands-free navigation could be useful for people who find traditional input devices difficult to use, as well as people whose hands are occupied during a task. At the same time, gestures are not universally interpreted in the same way, and gesture-based controls may create barriers for some users. Further research and testing with people with different access needs would be necessary to understand where this approach is genuinely helpful.\n\nIf I continued developing the project, I would improve gesture recognition and intentionality, make the gesture guide easier to read, expand recipe and navigation options, and test the experience with a wider range of users in realistic cooking scenarios.\n\nMy biggest takeaway was that successful interaction design depends on understanding people, communicating system behavior clearly, and refining ideas based on feedback. This project let me contribute to visual design, wireframing, documentation, presentation, and collaborative development while exploring how emerging technology can support everyday experiences.",
  },
  {
    slug: "mca-work",
    title: "MCA Professional Work",
    cardImage: mcaWorkCover,
    type: "Professional Work · Design, Web & Marketing",
    status: "Completed",
    featured: true,
    summary:
      "A collection of professional creative work, including an e-book web experience, social video deliverables, and brochure design.",
    categories: ["Web development", "Digital marketing", "Social video", "Graphic design"],
    facts: [
      { k: "Organization", v: "MCA and client projects" },
      { k: "Focus", v: "Design, web development, and digital content" },
      { k: "Experience", v: "Professional work" },
    ],
    problem: "",
    goals: "",
    role: "",
    contributions: [],
    tools: [],
    chapterLabel: "",
    chapters: [],
    reflection: "",
    professionalWork: true,
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    type: "Mobile · Coursework Collection",
    status: "In Progress",
    featured: false,
    summary: "A growing collection of mobile apps built for class. Miami Activities is a guide to places around Oxford, Ohio, presented as a scrollable list.",
    categories: ["Mobile apps", "Coding", "Interaction"],
    facts: [{ k: "Type", v: "Curated collection" }, { k: "Context", v: "Mobile app development course" }, { k: "Year", v: "2026" }],
    problem: "Finding places to visit around Miami University in Oxford, Ohio.",
    goals: "Present local places in a browsable mobile list with location details, photos, cost, and ratings.",
    role: "Built as an individual class app.",
    contributions: ["Created a data-driven place list", "Used FlatList to render and scroll through entries", "Added conditional labels for highly rated places"],
    tools: ["Expo SDK 57", "React Native", "FlatList", "expo-font"],
    chapterLabel: "Selected apps",
    chapters: [],
    apps: [
      {
        title: "Miami Activities",
        assignment: "Create a non-tabbed mobile app in Expo and React Native with remote imagery, a screen font, array-driven content, and a conditional expression.",
        description: "A scrollable guide to restaurants, parks, and other places around Oxford, Ohio.",
        tech: ["Expo SDK 57", "React Native", "FlatList", "expo-font"],
        learned: "Organizing place information in an array and rendering it in a scrollable list with rating-based labels.",
      },
      {
        title: "[App 2 — title to add]",
        assignment: "[Assignment details to add]",
        description: "[App overview to add]",
        tech: ["[Tools and technologies to add]"],
        learned: "[What I learned to add]",
      },
      {
        title: "[App 3 — title to add]",
        assignment: "[Assignment details to add]",
        description: "[App overview to add]",
        tech: ["[Tools and technologies to add]"],
        learned: "[What I learned to add]",
      },
    ],
    mobileAppPreview: {
      title: "Miami University",
      subtitle: "Oxford, Ohio",
      prompt: "Where Will You Go Today?",
      backgroundImage: "https://i.pinimg.com/1200x/d4/4a/39/d44a397ce09a0212196917c849d63d20.jpg",
      assignmentHighlights: [
        "Non-tabbed Expo and React Native app",
        "Remote images and Google Fonts",
        "Array-driven place list",
        "Conditional highly-rated labels",
      ],
      places: [
        { id: "1", name: "Hueston Woods", type: "Restaurant", address: "6301 Park Office Road", rating: 4.5, cost: "$$", image: "https://dam.assets.ohio.gov/image/upload/ohio.org/uploads/068eq00000pep6YAAQ.jpg", website: "https://www.huestonwoodslodge.com/" },
        { id: "2", name: "Brick Street", type: "Bar", address: "36 E High Street", rating: 3.5, cost: "$", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDNO9n33JrUOvOYEMhr5kxO2zQOlkpFJHdNanM1TqLhZJAqQYmC1lIPPc&s=10", website: "https://brickstreetbar.com/about/" },
        { id: "3", name: "Ramen Hachi", type: "Restaurant", address: "17 W Church Street", rating: 4.6, cost: "$$", image: "https://ramenhachi.com/menu/Yuzu%20shio-enhanced.png", website: "https://www.ramenhachi.com" },
        { id: "4", name: "Insomnia Cookies", type: "Restaurant", address: "33 E High Street", rating: 3.9, cost: "$$", image: "https://hips.hearstapps.com/hmg-prod/images/img-8479-jpg-68f13c1348587.jpg?crop=0.609xw:0.812xh;0.199xw,0.00907xh&resize=640:*", website: "https://insomniacookies.com" },
        { id: "6", name: "SoHi", type: "Restaurant", address: "17 E High Street", rating: 4.4, cost: "$$", image: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/97b2cba5-26c3-41f5-a304-93b09930490e.jpg", website: "https://www.sohisandwich.com/" },
        { id: "7", name: "Peffer Park", type: "Park", address: "4346 Millville Oxford Road", rating: 4.6, cost: "$", image: "https://enjoyoxford.org/wp-content/uploads/2024/10/Peffer-Park-Gazebo.png", website: "https://www.oxfordareatrails.org/visit-the-trails" },
        { id: "8", name: "Bagel & Deli", type: "Restaurant", address: "119 E High Street", rating: 4.6, cost: "$", image: "http://bagelanddeli.com/uploads/1/3/7/0/13702275/editor/crunchandmunch_1.jpg?1559765225", website: "https://www.bagelanddeli.com" },
        { id: "9", name: "Little India", type: "Restaurant", address: "431 S Locust Street", rating: 4.8, cost: "$$", image: "https://enjoyoxford.org/wp-content/uploads/2024/02/Little-India.png", website: "https://enjoyoxford.org/restaurant/little-india/" },
        { id: "10", name: "Chop Bento", type: "Restaurant", address: "19 W High Street", rating: 4.9, cost: "$$", image: "https://website-cdn.menusifu.com/wp-content/uploads/chopbento.com/2026/08/yswx_20260820_c32278445cdf042bd8f1679984c573cc1.jpg", website: "https://www.chopbento.com" },
        { id: "11", name: "Chocolate Euphoria", type: "Crepe Place", address: "19 W High Street", rating: 4.7, cost: "$$", image: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/77d0c114-9996-45d0-9ae7-3fd48a77ec7d.jpg" },
        { id: "12", name: "RedLife Coffee", type: "Restaurant", address: "22 No College Avenue", rating: 4.2, cost: "$$", image: "https://enjoyoxford.org/wp-content/uploads/2024/09/RedLife-Coffee.png", website: "https://redlifecoffee.com" },
      ],
    },
    reflection: "This collection will grow as the semester continues.",
  },
];

export const featuredStudies = caseStudies.filter((c) => c.featured);

type ProfessionalProjectBase = {
  id: string;
  organization: string;
  title: string;
  summary: string;
  categories: string[];
};

export type ProfessionalProject =
  | (ProfessionalProjectBase & {
      kind: "ebook";
      liveUrl: string;
      role: string;
      pages: { about: string; thankYou: string; ebook: string };
    })
  | (ProfessionalProjectBase & {
      kind: "video";
      videos: { title: string; src: string }[];
    })
  | (ProfessionalProjectBase & {
      kind: "brochure";
      panels: { title: string; src: string }[];
    });

export const mcaEbookLandingUrl =
  "https://resources.marcomcontentbyashley.com/ai-for-business-leaders";

export const professionalProjects: ProfessionalProject[] = [
  {
    id: "mca-ai-ebook",
    kind: "ebook",
    organization: "MCA",
    title: "AI for Business Leaders e-book experience",
    summary:
      "A connected e-book experience: the live MCA landing page leads into locally showcased thank-you and e-book pages.",
    categories: ["Landing page", "Web development", "HubSpot", "E-book experience"],
    liveUrl: mcaEbookLandingUrl,
    role: "I built the landing-page experience using Lovable, edited the code, and worked with the associated HubSpot setup. The HubSpot form is managed on MCA’s live website; the previews show the supplied follow-up pages.",
    pages: {
      about: mcaAboutPage,
      thankYou: mcaThankYouPage,
      ebook: mcaEbookPage,
    },
  },
  {
    id: "mconley-brochure",
    kind: "brochure",
    organization: "M. Conley Company",
    title: "Brochure design",
    summary: "Inside and outside of a brochure I designed for M. Conley Company.",
    categories: ["Graphic design", "Print design", "Layout"],
    panels: [
      { title: "Inside", src: mconleyBrochureInside },
      { title: "Outside", src: mconleyBrochureOutside },
    ],
  },
  {
    id: "papa-gyros-social-reels",
    kind: "video",
    organization: "Papa Gyros",
    title: "Social media reels",
    summary: "Social media reels created for Papa Gyros.",
    categories: ["Social media", "Video", "Content creation"],
    videos: [
      { title: "Google Search Reel", src: papaGyrosGoogleReel },
      { title: "Gyros Reel", src: papaGyrosReel },
      { title: "Summer Flavors Reel", src: papaGyrosSummerReel },
    ],
  },
];
