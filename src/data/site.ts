export const site = {
  name: 'Qasim Sethar',
  handle: 'qasimio',
  email: 'hello@qasimio.me',
  location: 'Sukkur, Pakistan',
  resume: '/resume.pdf',
  socials: [
    { name: 'GitHub', short: 'GH', url: 'https://github.com/qasimio' },
    { name: 'LinkedIn', short: 'LI', url: 'https://linkedin.com/in/qasimio' },
    { name: 'X', short: 'X', url: 'https://x.com/qasimiohq' },
    { name: 'YouTube', short: 'YT', url: 'https://www.youtube.com/@qasimiohq' },
  ],
};

export const skills = [
  'Python',
  'Java',
  'C++',
  'SQL',
  'TypeScript',
  'RAG & retrieval',
  'Agent systems',
  'PostgreSQL',
  'Shell scripting',
  'Linux',
];

export const experience = [
  {
    company: 'FlyRank',
    title: 'Backend / AI Engineer',
    range: 'Remote · recent',
    url: 'https://www.flyrank.ai/',
    bullets: [
      'Worked on backend and AI engineering in a production-oriented environment.',
      'Focused on the software around data, models, APIs, and reliable application behavior.',
    ],
  },
  {
    company: 'Arch Technologies',
    title: 'Machine Learning Engineering',
    range: 'Remote · recent',
    url: '',
    bullets: [
      'Worked on model fine-tuning, inference prototypes, preprocessing, and ML engineering workflows.',
      'Moved model work beyond notebooks into software that could actually run inside a product.',
    ],
  },
  {
    company: 'SIBA CS Society',
    title: 'Executive Member',
    range: 'Oct 2025 — Oct 2026 · Sukkur IBA University',
    url: '',
    bullets: [
      'Helped organize Sibathon ’26, a 24-hour student hackathon where AI was allowed.',
      'Worked around students, projects, logistics, and the parts of building that happen outside the editor.',
    ],
  },
];

export const timeline = [
  {
    date: '2026',
    title: 'FOLDR crossed 100 stars',
    meta: 'Open source',
    body: 'A small project became something other people installed and kept around.',
  },
  {
    date: '2026',
    title: 'Joined GitHub’s Maintainer Community',
    meta: 'Open source',
    body: 'An invitation that came after spending more time maintaining and contributing in public.',
  },
  {
    date: '2026',
    title: 'Shipped SlotFinder',
    meta: 'Product',
    body: 'A small utility for finding classes without opening a pile of timetable pages.',
  },
  {
    date: '2026',
    title: 'Organized Sibathon ’26',
    meta: 'Community',
    body: 'Helped run a 24-hour student hackathon through the CS Society at SIBA.',
  },
  {
    date: '2025–26',
    title: 'Built SIBA Launchpad',
    meta: 'Community',
    body: 'Created a project community so student work could be shown, found, and discussed.',
  },
  {
    date: '2025',
    title: 'Built DevShelf from first principles',
    meta: 'Search',
    body: 'Built a Java search engine to understand indexing and retrieval instead of hiding the interesting parts behind an external engine.',
  },
];

export const featuredProjects = [
  {
    slug: 'engram',
    title: 'Engram',
    eyebrow: 'Knowledge system',
    description:
      'A persistent knowledge system for turning documents and conversations into retrievable context. I built the ingestion, retrieval, memory, workspace isolation, and grounded-answer layers around the model.',
    tech: ['FastAPI', 'PostgreSQL', 'pgvector', 'Redis', 'Celery', 'Next.js'],
    github: 'https://github.com/qasimio/Engram',
    external: '',
  },
  {
    slug: 'operon',
    title: 'Operon',
    eyebrow: 'Autonomous coding',
    description:
      'A terminal-native coding agent designed around verification. Repository structure, AST operations, filesystem checks, and approval gates are used to make the model prove what it actually changed.',
    tech: ['Python', 'AST', 'Textual', 'ReAct', 'LLM'],
    github: 'https://github.com/qasimio/Operon',
    external: '',
  },
  {
    slug: 'foldr',
    title: 'FOLDR',
    eyebrow: 'Open source',
    description:
      'A cross-platform file automation CLI built around preview, protected paths, background watching, and undo. It is the project where shipping stopped being private.',
    tech: ['Python', 'CLI', 'watchdog', 'PyPI', 'Open source'],
    github: 'https://github.com/qasimio/foldr',
    external: 'https://pypi.org/project/foldr/',
  },
];

export const otherProjects = [
  {
    slug: 'slot-finder',
    title: 'SlotFinder',
    description:
      'A timetable utility for Sukkur IBA built because finding one class should not require opening the whole timetable.',
    tech: ['Next.js', 'FastAPI', 'PDF extraction'],
    github: 'https://github.com/AbdulGhaffarcs/slot-finder',
    external: 'https://sibatt.vercel.app',
  },
  {
    slug: 'siba-launchpad',
    title: 'SIBA Launchpad',
    description:
      'A project community for making student software visible and giving builders a place to find collaborators and feedback.',
    tech: ['Community', 'GitHub', 'Events'],
    github: 'https://github.com/iba-launchpad',
    external: 'https://iba-launchpad.vercel.app',
  },
  {
    slug: 'devshelf',
    title: 'DevShelf',
    description:
      'A vertical search engine built from first principles in Java to understand indexing, retrieval, and prefix matching.',
    tech: ['Java', 'Information Retrieval', 'Data Structures'],
    github: 'https://github.com/qasimio/DevShelf',
    external: '',
  },
  {
    slug: 'mqnotebook',
    title: 'MQNotebook',
    description:
      'A local-first document retrieval system for messy PDFs, OCR-heavy files, presentations, and spreadsheets.',
    tech: ['Python', 'RAG', 'OCR', 'LlamaIndex'],
    github: 'https://github.com/qasimio/MQNotebook',
    external: '',
  },
  {
    slug: 'reworkly',
    title: 'Reworkly',
    description:
      'A workspace restoration idea in development. The goal is to restore the context of what you were doing instead of making you reconstruct it from scratch.',
    tech: ['In development', 'Product', 'Automation'],
    github: '',
    external: '',
  },
  {
    slug: 'mq-banking-core',
    title: 'MQ Banking Core',
    description:
      'A transactional C++ project focused on file I/O, balances, and rigid state integrity.',
    tech: ['C++', 'Data structures', 'File I/O'],
    github: 'https://github.com/qasimio/MQ-Bank',
    external: '',
  },
];

export const notes = [
  {
    date: 'Sep 17, 2026',
    tag: 'Open source',
    title: 'I got invited to GitHub’s Maintainer Community.',
    excerpt:
      'That one felt different. Mostly because it arrived after doing the boring part: maintaining software in public.',
    href: '/journal/invited-to-github-maintainer-community/',
  },
  {
    date: 'Sep 16, 2026',
    tag: 'Shipping',
    title: 'FOLDR crossed 100 stars.',
    excerpt:
      'People keep installing something I made because they have better things to do than sort files manually.',
    href: '/journal/foldr-crossed-100-stars/',
  },
  {
    date: 'Sep 15, 2026',
    tag: 'Product',
    title: 'I launched SlotFinder because the timetable was a pain.',
    excerpt:
      'The information already existed. The annoying part was getting to the one answer you needed.',
    href: '/journal/launched-slotfinder/',
  },
  {
    date: 'Sep 12, 2026',
    tag: 'Making',
    title: 'This time I made something that wasn’t software.',
    excerpt:
      'I made a short film called Me vs Me. Turns out publishing a video can require more nerve than publishing code.',
    href: '/journal/me-vs-me/',
  },
  {
    date: 'Sep 08, 2026',
    tag: 'Workflow',
    title: 'I still do most things with a keyboard.',
    excerpt:
      'Arch, shell work, VS Code, Vim. The point is not being a keyboard person. It is removing tiny bits of friction all day.',
    href: '/journal/keyboard-first/',
  },
];

export const writing = [];
