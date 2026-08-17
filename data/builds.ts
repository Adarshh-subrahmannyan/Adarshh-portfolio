export interface TimelineEntry {
  date: string;
  title: string;
  description: string;
  type: 'Architecture' | 'Prototype' | 'Concept' | 'Feature' | 'Research' | string;
  tags?: string[];
  image?: string;
}

export interface ProgressItem {
  name: string;
  level: number; // e.g. 1 to 10 (blocks)
  totalBlocks?: number; // default 10
  statusText?: string;
  note?: string;
}

export interface Experiment {
  id: string;
  number: string;
  title: string;
  date: string;
  explanation: string;
  result: string;
  tags?: string[];
  image?: string;
}

export interface FailureLog {
  title: string;
  date?: string;
  whatHappened: string;
  whyItFailed: string;
  lessonOrSolution: string;
}

export interface Milestone {
  title: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  targetDate?: string;
  note?: string;
}

export interface BuildJournal {
  slug: string;
  name: string;
  subtitle: string;
  tagline: string;
  status: string;
  startedDate: string;
  lastUpdateDate: string;
  latestUpdate: {
    title: string;
    summary: string;
  };
  shortDescription: string;
  theIdea: {
    heading: string;
    paragraphs: string[];
    corePillars: { title: string; desc: string }[];
  };
  journey: TimelineEntry[];
  progress: ProgressItem[];
  experiments: Experiment[];
  failures: FailureLog[];
  milestones: Milestone[];
}

export const buildJournals: Record<string, BuildJournal> = {
  voxio: {
    slug: 'voxio',
    name: 'Voxio',
    subtitle: '// BUILDING NOW',
    tagline: 'Building an idea into something real.',
    status: 'In Development',
    startedDate: 'AUG 2026',
    lastUpdateDate: 'AUG 15, 2026',
    latestUpdate: {
      title: 'Core architecture in progress',
      summary: 'Establishing the modular engine, state pipeline, and foundational data contracts.',
    },
    shortDescription: "A project I'm building from the ground up. Follow the process, experiments and progress.",
    theIdea: {
      heading: 'THE IDEA',
      paragraphs: [
        "Voxio started as an idea I wanted to explore and turn into something real. This journal documents the process from the first concept to the eventual release.",
        "Rather than building behind closed doors until launch, I'm documenting the actual development journey here—the architectural decisions, interface iterations, prototypes, technical bottlenecks, and breakthroughs.",
        "The goal is simple: craft a tool that feels fast, intentional, and deeply capable, while openly showing how software gets designed and refined step by step.",
      ],
      corePillars: [
        {
          title: 'Intentional Architecture',
          desc: 'Lightweight foundation designed for low latency, clean separation of concerns, and local-first resilience.',
        },
        {
          title: 'Fluid Experience',
          desc: 'Interfaces that respond instantly without visual clutter or unnecessary friction.',
        },
        {
          title: 'Transparent Evolution',
          desc: 'Documenting every experiment, pivot, and lesson in the open as the codebase matures.',
        },
      ],
    },
    journey: [
      {
        date: '15 AUG 2026',
        title: 'CORE ARCHITECTURE',
        description: 'Started building the core architecture and initial structure. Setting up strict typing, state synchronization boundaries, and modular service interfaces.',
        type: 'Architecture',
        tags: ['Engine', 'State Pipeline', 'TypeScript'],
      },
      {
        date: '13 AUG 2026',
        title: 'FIRST PROTOTYPE',
        description: 'Built the first working prototype and started experimenting with the interface layout, interaction speed, and event handling loops.',
        type: 'Prototype',
        tags: ['Prototype', 'UI/UX', 'Events'],
      },
      {
        date: '10 AUG 2026',
        title: 'THE IDEA',
        description: 'Started exploring the original concept behind Voxio. Outlined functional specifications, user workflow sketches, and initial technical trade-offs.',
        type: 'Concept',
        tags: ['Concept', 'Research', 'Specs'],
      },
    ],
    progress: [
      {
        name: 'CORE ARCHITECTURE',
        level: 7,
        totalBlocks: 10,
        statusText: 'In active development',
        note: 'Modular engine & event dispatchers taking shape',
      },
      {
        name: 'INTERFACE',
        level: 5,
        totalBlocks: 10,
        statusText: 'Prototyping layouts',
        note: 'Iterating on low-friction interactive canvas',
      },
      {
        name: 'BACKEND',
        level: 3,
        totalBlocks: 10,
        statusText: 'Schema & service design',
        note: 'Data persistence & sync endpoints structured',
      },
      {
        name: 'TESTING',
        level: 2,
        totalBlocks: 10,
        statusText: 'Initial test harness',
        note: 'Unit benchmarks and baseline assertions',
      },
    ],
    experiments: [
      {
        id: 'exp-01',
        number: 'EXPERIMENT 01',
        title: 'Testing the initial interface',
        date: '15 AUG 2026',
        explanation: 'Tried several approaches for the initial interface to balance information density with speed. Tested multi-pane split layouts versus a focused single-workspace flow.',
        result: 'The first approach was too complicated with too many competing panels, so I simplified it down to a focused canvas with contextual overlays.',
        tags: ['UI Exploration', 'Canvas Layout', 'Simplicity'],
      },
      {
        id: 'exp-02',
        number: 'EXPERIMENT 02',
        title: 'State Sync Pipeline Exploration',
        date: '12 AUG 2026',
        explanation: 'Evaluated centralized store vs actor-based decoupled message channels to handle rapid event streams with minimum re-render overhead.',
        result: 'Decoupled reactive signals yielded significantly lower input latency and cleaner component isolation.',
        tags: ['Performance', 'State Management', 'Latency'],
      },
    ],
    failures: [
      {
        title: "The first architecture wasn't scalable enough",
        date: '14 AUG 2026',
        whatHappened: 'Built an initial unified state controller that tightly coupled the layout state directly to the core processing engine.',
        whyItFailed: 'As soon as asynchronous background actions were introduced, the tight coupling caused cascading updates and made testing individual services painful.',
        lessonOrSolution: 'Ripped out the coupled controller and introduced an event-driven message bus with strict immutable payloads. Decoupled UI from engine completely.',
      },
      {
        title: 'Over-engineering early configuration schemas',
        date: '11 AUG 2026',
        whatHappened: 'Spent two days designing an exhaustive multi-nested JSON config spec before validating core user interaction patterns.',
        whyItFailed: 'Most configuration flags became obsolete within 48 hours once practical UI prototyping started.',
        lessonOrSolution: 'Adopted a lean "build as needed" rule: only parameterize options once two distinct features explicitly require them.',
      },
    ],
    milestones: [
      {
        title: 'Finish core architecture & state pipeline',
        status: 'in-progress',
        note: 'Current focus',
      },
      {
        title: 'Build the main interactive interface',
        status: 'upcoming',
      },
      {
        title: 'Implement core functionality & processing engine',
        status: 'upcoming',
      },
      {
        title: 'End-to-end testing & performance benchmarking',
        status: 'upcoming',
      },
      {
        title: 'First usable release / closed preview',
        status: 'upcoming',
      },
    ],
  },
};

export function getBuildJournal(slug: string): BuildJournal | undefined {
  return buildJournals[slug];
}

export function getAllBuildSlugs(): string[] {
  return Object.keys(buildJournals);
}
