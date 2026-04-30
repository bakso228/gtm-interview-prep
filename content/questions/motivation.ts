import type { Question } from "@/content/types";

const questions: Question[] = [
  {
    id: "m-01",
    category: "motivation",
    prompt:
      "Why Anthropic? You could be pursuing roles at Google, OpenAI, Microsoft, or a well-funded scale-up. Why here?",
    difficulty: "medium",
    idealAnswerThemes: [
      "Mission specificity: safety-focused AI development, not just AI development",
      "The Constitutional AI / interpretability work is substantive — you've read it",
      "Anthropic is at the enterprise inflection point: early enough to build, large enough to matter",
      "DACH is a greenfield — you're building, not inheriting a process",
      "The safety positioning is a genuine GTM advantage, not just PR",
      "You want to be at the frontier of what AI becomes for enterprise, not chasing it",
      "Avoid: 'Claude is the best model' or generic mission statement recitation",
    ],
    context:
      "This question is about conviction, not just competence. The interviewer wants to know if you've thought about what makes Anthropic different from 'another AI company.' Avoid sounding like you're reading the About page.",
  },
  {
    id: "m-02",
    category: "motivation",
    prompt:
      "Why this role specifically — GTM Strategy & Operations? What about it excites you more than a pure sales leadership or a pure analytics role?",
    difficulty: "medium",
    idealAnswerThemes: [
      "The role operates at the intersection of strategy + execution — that's where you're most effective",
      "GTM Ops is a leverage role: decisions you make affect every AE's productivity",
      "You prefer building systems and frameworks over managing a specific quota",
      "The operational side — territory design, quota, comp, enablement — is where you've created the most impact",
      "The DACH market is new enough to require real strategy, not just process management",
      "You've been in roles where GTM ops was ad hoc — you've seen the cost of that",
    ],
  },
  {
    id: "m-03",
    category: "motivation",
    prompt: "Why now? What's prompting this move from your current role at SIXT?",
    difficulty: "easy",
    idealAnswerThemes: [
      "SIXT role is strong but primarily marketing channel strategy — narrower than your prior scope",
      "You've built the infrastructure at SIXT — the work is now in maintenance mode, not build mode",
      "The Anthropic opportunity is additive, not reactive — you're not leaving a broken situation",
      "The AI moment is now — being inside Anthropic's GTM at this point in time is unique",
      "Be honest: you want to return to a B2B SaaS enterprise GTM context — that's your strongest ground",
      "Avoid: 'I need a new challenge' (too vague), 'SIXT isn't interesting' (burns bridges)",
    ],
  },
  {
    id: "m-04",
    category: "motivation",
    prompt:
      "You've had a broad career — Meta, Agoda, Smile Identity, SIXT, across B2B and B2C, startups and scale-ups. What's the throughline?",
    difficulty: "medium",
    idealAnswerThemes: [
      "Commercial framework building: you build the systems that make GTM reproducible",
      "Data-driven decision-making at scale — always the same core skill, different domains",
      "Operating at the intersection of analytics and strategy — translating data into direction",
      "Consistency: C-level stakeholder work, cross-functional leadership, building from early stage",
      "AI has been a thread: from LLM tooling at SIXT to AI adoption at Agoda to now Anthropic",
      "Avoid: 'I followed opportunities' — frame it as a coherent arc, even if it wasn't planned",
    ],
  },
  {
    id: "m-05",
    category: "motivation",
    prompt:
      "You're in a marketing strategy and operations role at SIXT. Why does a GTM Strategy & Operations role make sense as the next step — and why would Anthropic take the bet on you?",
    difficulty: "hard",
    idealAnswerThemes: [
      "Lead with the B2B GTM track record: Meta partnerships, Smile Identity CGO — not SIXT",
      "Smile Identity: designed territories, quotas, comp, built commercial from scratch, 4x ARR",
      "Meta: B2B GTM motion at scale, executive-level deal management, sales enablement",
      "Current SIXT role: built revenue analytics infrastructure, cross-functional alignment, B2B playbooks",
      "The 'marketing' label at SIXT describes the department, not the work",
      "Anthropic takes the bet because the skillset is complete — the domain is the smallest gap",
      "Avoid the apology framing — don't concede it's a stretch before being asked",
    ],
  },
  {
    id: "m-06",
    category: "motivation",
    prompt:
      "How do you think about AI safety, and how does Anthropic's position on it resonate with you personally?",
    difficulty: "medium",
    idealAnswerThemes: [
      "Don't just recite Anthropic's mission — show independent thinking",
      "You're an AI practitioner (Claude Code, multi-agent workflows) — safety matters to your work",
      "The responsible-deployment question is real for enterprise buyers — you've seen it",
      "Anthropic's Constitutional AI approach is technically credible, not just marketing",
      "Safety and commercial success aren't in tension — safety is a GTM advantage in regulated markets",
      "Be honest if you have questions or uncertainties — intellectual engagement is more credible than uncritical enthusiasm",
    ],
  },
  {
    id: "m-07",
    category: "motivation",
    prompt:
      "What would you want to accomplish in your first 90 days at Anthropic?",
    difficulty: "medium",
    idealAnswerThemes: [
      "Day 1–30: listen and learn — no prescriptions before diagnosis",
      "Understand existing pipeline, AE feedback, and what's working vs. broken",
      "Map the full DACH stakeholder landscape: AEs, finance, product, leadership",
      "Audit the existing GTM motion: stage definitions, pipeline health, coverage",
      "Day 31–60: identify the highest-leverage gap and build an initial framework",
      "First deliverable: a DACH territory and segmentation recommendation",
      "Day 61–90: pilot one play or process improvement with one AE and iterate",
      "Build trust before building systems — don't land and prescribe",
    ],
  },
  {
    id: "m-08",
    category: "motivation",
    prompt:
      "Where do you see the GTM Strategy & Operations role evolving at Anthropic over the next 2–3 years as the enterprise business matures?",
    difficulty: "hard",
    idealAnswerThemes: [
      "Year 1: foundation — territory, quota, pipeline discipline, first playbooks",
      "Year 2: scale — vertical specialization, comp sophistication, RevOps infrastructure",
      "Year 3: optimization — forecast accuracy, expansion motion, data-driven territory refinement",
      "The role likely evolves from generalist (do everything) to specialist (manage a team)",
      "EU AI Act creates a permanent compliance dimension to the GTM motion — that needs owning",
      "DACH could become a template for other European markets (France, Benelux, Nordics)",
      "The winning GTM ops leader will own the model, not just the spreadsheet",
    ],
  },
];

export default questions;
