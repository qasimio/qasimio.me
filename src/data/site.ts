export type SocialIcon =
  'github' | 'linkedin' | 'x' | 'youtube' | 'devto' | 'medium' | 'patreon' | 'mail';

export const site = {
  name: 'Qasim Sethar',
  handle: 'qasimio',
  email: 'hello@qasimio.me',
  location: 'Sukkur, Pakistan',
  github: 'https://github.com/qasimio',
  linkedin: 'https://linkedin.com/in/qasimio',
  x: 'https://x.com/qasimiohq',
  youtube: 'https://www.youtube.com/@qasimiohq',
  resume: '/resume.pdf',
  socials: [
    { name: 'GitHub', icon: 'github' as SocialIcon, url: 'https://github.com/qasimio' },
    { name: 'LinkedIn', icon: 'linkedin' as SocialIcon, url: 'https://linkedin.com/in/qasimio' },
    { name: 'X', icon: 'x' as SocialIcon, url: 'https://x.com/qasimiohq' },
    { name: 'YouTube', icon: 'youtube' as SocialIcon, url: 'https://www.youtube.com/@qasimiohq' },
  ],
};

export const highlights = [
  { value: '100+', label: 'FOLDR stars', href: 'https://github.com/foldrhq/foldr' },
  { value: '7.3k+', label: 'FOLDR downloads', href: 'https://pepy.tech/projects/foldr' },
  { value: '60+', label: 'projects reviewed' },
  { value: '35+', label: 'people guided' },
  { value: '24h', label: "Sibathon '26" },
  { value: '2', label: 'GitHub organizations' },
];

export const skills = [
  'TypeScript',
  'Python',
  'Java',
  'PostgreSQL',
  'Search & retrieval',
  'AI systems',
  'Shell scripting',
  'Distributed systems',
];

export const experience = [
  {
    company: 'FlyRank',
    title: 'Backend AI Engineer',
    range: '2026',
    url: 'https://flyrank.ai/',
    bullets: [
      'Worked on backend systems around production-oriented AI workflows.',
      'Built APIs and infrastructure where reliability mattered more than demo polish.',
      'Worked with retrieval, data pipelines, and service boundaries rather than only model calls.',
    ],
  },
  {
    company: 'Arch Technologies',
    title: 'Machine Learning Engineering',
    range: '2026',
    url: 'https://archtechnologies.dev/',
    bullets: [
      'Explored practical machine learning engineering and applied inference work.',
      'Worked close to the infrastructure and data side of ML systems.',
    ],
  },
  {
    company: 'CS Society · SIBA',
    title: 'Executive Member',
    range: 'Oct 2025 — Present',
    url: 'https://www.sukkur-iba.edu.pk/',
    bullets: [
      "Helped organize Sibathon '26, a 24-hour student hackathon where AI was allowed and creativity mattered.",
      'Reviewed student projects and helped people get from an idea or half-built project to something usable.',
      'Helped create technical spaces outside ordinary coursework.',
    ],
  },
];

export const timeline = [
  {
    date: '2024 →',
    title: 'Arch became home',
    meta: 'Daily development environment',
    body: 'I moved my main development workflow to Arch and never really looked back. The terminal, keyboard and editor became part of the way I think about work.',
  },
  {
    date: '2025',
    title: 'Started building beyond coursework',
    meta: 'Search · documents · systems',
    body: 'DevShelf and MQNotebook were experiments in understanding search and document intelligence rather than just using somebody else’s abstraction.',
  },
  {
    date: '2025 →',
    title: 'SIBA Launchpad',
    meta: 'Community · projects · people',
    body: 'Started building a community around student work because too many projects disappear after grading.',
  },
  {
    date: '2026',
    title: 'FOLDR escaped the repository',
    meta: 'Open source · real users',
    body: 'FOLDR became a public package that other people could install and use. That changed the kind of problems I cared about.',
  },
  {
    date: '2026',
    title: "Sibathon '26",
    meta: '24-hour hackathon',
    body: 'Helped organize a 24-hour student hackathon through the CS Society. Shipping under a clock is a different species of pressure.',
  },
  {
    date: '2026',
    title: 'GitHub Maintainer Community',
    meta: 'Open source',
    body: 'Invited into GitHub’s Maintainer Community after spending a lot of time building, maintaining and contributing in public.',
  },
  {
    date: '2026',
    title: 'SlotFinder',
    meta: 'Small problem · real usefulness',
    body: 'Built a tiny timetable tool because opening a pile of pages just to find one class felt like a software problem hiding in plain sight.',
  },
  {
    date: 'Now',
    title: 'Building deeper',
    meta: 'Engram · Operon · whatever comes next',
    body: 'The current direction is systems that are harder to fake: better evidence, stronger tooling, and products that survive contact with real users.',
  },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  category: string;
  year: string;
  role: string;
  live?: string;
  github?: string;
  featured?: boolean;
  tags: string[];
  stats?: { value: string; label: string }[];
  problem: string;
  built: string;
  hard: string;
  learned: string;
  quote: string;
  visual: 'engram' | 'operon' | 'foldr' | 'slotfinder' | 'launchpad' | 'devshelf' | 'mqnotebook';
};

export const projects: Project[] = [
  {
    slug: 'engram',
    title: 'Engram',
    description:
      'A knowledge and memory system built around grounded retrieval, persistent context, and useful evidence.',
    category: 'AI SYSTEM',
    year: '2026',
    role: 'Builder',
    featured: true,
    github: 'https://github.com/qasimio/engram',
    tags: ['FastAPI', 'PostgreSQL', 'RAG', 'Agents'],
    stats: [{ value: 'in development', label: 'status' }],
    problem:
      'Memory-heavy AI systems tend to blur retrieval, context and generation into one opaque pipeline. When the answer is wrong, it becomes difficult to understand where the failure started.',
    built:
      'Engram separates ingestion, retrieval, context assembly and synthesis so evidence can be inspected before it reaches the model. The system is designed around workspaces, grounded retrieval and persistent context rather than chat history alone.',
    hard: 'The difficult part is not calling a model. It is keeping the system honest when multiple representations of the same information exist and different retrieval paths disagree.',
    learned:
      'Useful AI infrastructure needs explicit boundaries. The model should be a consumer of evidence, not the source of truth about the evidence.',
    quote: 'The interesting problem starts after the model answers.',
    visual: 'engram',
  },
  {
    slug: 'operon',
    title: 'Operon',
    description:
      'A terminal-native coding tool built around deterministic verification instead of trusting an agent’s explanation of what changed.',
    category: 'OPEN SOURCE',
    year: '2026',
    role: 'Builder / Maintainer',
    featured: true,
    github: 'https://github.com/qasimio/operon',
    tags: ['Python', 'AST', 'CLI', 'Automation'],
    stats: [{ value: 'in development', label: 'status' }],
    problem:
      'Coding agents can describe a change convincingly without proving that the repository is actually in the state they claim.',
    built:
      'Operon treats filesystem state, symbols, diffs and verification as first-class objects. The goal is not a chatty coding assistant. It is a tool that can show its work and fail loudly when reality disagrees.',
    hard: 'The challenge is designing a workflow where automation stays useful without being granted blind authority over a repository.',
    learned: 'The stronger the automation, the more important the evidence layer becomes.',
    quote: 'An agent saying “done” is not a test result.',
    visual: 'operon',
  },
  {
    slug: 'foldr',
    title: 'FOLDR',
    description:
      'A reversible file-organization tool that plans changes before making them and gives users a way back.',
    category: 'OPEN SOURCE',
    year: '2026',
    role: 'Creator / Maintainer',
    featured: true,
    github: 'https://github.com/foldrhq/foldr',
    live: 'https://docs.qasimio.me/docs/foldr/start-here',
    tags: ['Python', 'CLI', 'Open Source', 'Automation'],
    stats: [
      { value: '100+', label: 'GitHub stars' },
      { value: '7.3k+', label: 'downloads' },
    ],
    problem:
      'File organization is repetitive enough to automate and dangerous enough to regret automating badly.',
    built:
      'FOLDR scans directories, proposes operations, supports preview and undo, and treats reversibility as part of the product instead of an emergency feature.',
    hard: 'The hard part is the trust boundary. A tool that can move files needs to be useful while making its intentions visible before it touches anything.',
    learned: 'People adopt automation faster when they can predict it and undo it.',
    quote: 'The safest automation is the one that tells you what it plans to do first.',
    visual: 'foldr',
  },
  {
    slug: 'slot-finder',
    title: 'SlotFinder',
    description:
      'A small timetable utility built to remove a surprisingly annoying piece of student friction.',
    category: 'PRODUCT',
    year: '2026',
    role: 'Builder',
    live: 'https://sibatt.vercel.app',
    tags: ['Next.js', 'TypeScript', 'SIBA'],
    problem:
      'Finding one class in the university timetable meant opening too many pages and remembering too much of the page structure.',
    built:
      'SlotFinder compresses that lookup into one interface so a student can search the class and get on with the actual day.',
    hard: 'The engineering problem was small. The product problem was noticing that the friction was worth removing at all.',
    learned:
      'Not every useful project needs an impressive architecture. Some just need to save someone five annoying minutes.',
    quote: 'Small software can still remove real friction.',
    visual: 'slotfinder',
  },
  {
    slug: 'siba-launchpad',
    title: 'SIBA Launchpad',
    description:
      'A project community built around making student software visible outside the classroom.',
    category: 'COMMUNITY',
    year: '2025 →',
    role: 'Creator / Maintainer',
    live: 'https://iba-launchpad.vercel.app',
    github: 'https://github.com/iba-launchpad',
    tags: ['Community', 'Open Source', 'Sukkur IBA'],
    problem: 'Most student projects disappear as soon as the grade is recorded.',
    built:
      'Launchpad gives students a place to showcase deployed or nearly-ready work and a shared Github home for the ecosystem.',
    hard: 'A community has a people problem before it has a software problem. Getting students to post their work requires lowering the fear of being judged.',
    learned: 'The best community tooling reduces social friction, not just technical friction.',
    quote: 'A project is more useful when another person can find it.',
    visual: 'launchpad',
  },
  {
    slug: 'devshelf',
    title: 'DevShelf',
    description:
      'A search engine built in Java from first principles to understand what actually happens underneath search.',
    category: 'SYSTEM',
    year: '2025',
    role: 'Builder',
    github: 'https://github.com/qasimio/DevShelf',
    tags: ['Java', 'Search', 'Inverted Index'],
    problem:
      'I wanted to understand retrieval mechanisms instead of only consuming search frameworks.',
    built:
      'Built indexing and query paths from scratch with an inverted index, prefix matching and local persistence.',
    hard: 'The challenge was making the core data structures do the work rather than hiding behind a library.',
    learned:
      'Understanding the primitive system makes higher-level systems much easier to reason about.',
    quote: 'Sometimes the fastest route to understanding is to remove the abstraction.',
    visual: 'devshelf',
  },
  {
    slug: 'mqnotebook',
    title: 'MQNotebook',
    description:
      'A local document retrieval experiment for scanned PDFs and messy course material.',
    category: 'EXPERIMENT',
    year: '2025',
    role: 'Builder',
    github: 'https://github.com/qasimio/MQNotebook',
    tags: ['Python', 'OCR', 'RAG'],
    problem: 'Real documents are rarely clean enough for toy retrieval examples.',
    built:
      'Explored OCR, document extraction and retrieval over local course material rather than assuming perfect text.',
    hard: 'The hard part was getting usable information out of ugly source documents before retrieval even began.',
    learned: 'RAG quality often starts before the embedding model enters the room.',
    quote: 'Garbage in is still garbage, even when you vectorize it.',
    visual: 'mqnotebook',
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const otherProjects = projects.filter((project) => !project.featured);

export type Note = {
  slug: string;
  date: string;
  kind: 'achievement' | 'release' | 'build' | 'thought' | 'people';
  title: string;
  excerpt: string;
  tags: string[];
  external?: string;
};

export const notes: Note[] = [
  {
    slug: 'maintainer-community',
    date: 'Sep 17, 2026',
    kind: 'people',
    title: "I got invited to GitHub's Maintainer Community.",
    excerpt:
      'A small line in my inbox, but a useful one. Public maintenance turns out to create its own weird kind of momentum.',
    tags: ['github', 'open-source', 'maintainers'],
  },
  {
    slug: 'foldr-100-stars',
    date: 'Sep 16, 2026',
    kind: 'achievement',
    title: 'FOLDR crossed 100 stars.',
    excerpt:
      'The repository is now useful to people I have never met. That still feels stranger than the number itself.',
    tags: ['foldr', 'open-source'],
  },
  {
    slug: 'slotfinder',
    date: 'Sep 15, 2026',
    kind: 'release',
    title: 'I launched SlotFinder because the timetable was a pain.',
    excerpt:
      'Opening a pile of pages just to find one class is a small problem. Small problems still deserve software.',
    tags: ['siba', 'shipping'],
  },
  {
    slug: 'me-vs-me',
    date: 'Sep 12, 2026',
    kind: 'thought',
    title: 'This time I made something that wasn’t software.',
    excerpt:
      'I spent my time overthinking whether a short film was worth publishing. So I made the film about that feeling.',
    tags: ['film', 'making'],
    external: 'https://www.youtube.com/@qasimiohq',
  },
  {
    slug: 'building-with-people',
    date: 'Sep 10, 2026',
    kind: 'people',
    title: 'I keep learning that building is not a solo activity.',
    excerpt:
      'Launchpad, project reviews, hackathons and maintenance keep dragging me back to the same conclusion: useful software lives inside a social system.',
    tags: ['community', 'mentoring'],
  },
  {
    slug: 'keyboard-first',
    date: 'Sep 08, 2026',
    kind: 'thought',
    title: 'I still do most things with a keyboard.',
    excerpt:
      'Arch, Vim inside VS Code, shell shortcuts, browser shortcuts. It is probably a workflow preference that got out of hand.',
    tags: ['linux', 'arch', 'workflow'],
  },
];
