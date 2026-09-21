export const site = {
  name: 'Qasim Sethar',
  handle: 'qasimio',
  email: 'hello@qasimio.me',
  location: 'Sukkur, Pakistan',
  socials: [
    { label: 'GitHub', href: 'https://github.com/qasimio' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/qasimio' },
    { label: 'X', href: 'https://x.com/qasimiohq' },
    { label: 'YouTube', href: 'https://www.youtube.com/@qasimiohq' },
    { label: 'Dev.to', href: 'https://dev.to/qasimio' },
    { label: 'Peerlist', href: 'https://peerlist.io/qasimio/' },
    { label: 'Medium', href: 'https://medium.com/@qasimio' },
    { label: 'Patreon', href: 'https://patreon.com/qasimio' },
    { label: 'Gravatar', href: 'https://gravatar.com/qasimio' },
  ],
  organizations: [
    { label: 'FOLDR', href: 'https://github.com/foldrhq' },
    { label: 'IBA Launchpad', href: 'https://github.com/iba-launchpad' },
  ],
};

export const proof = [
  { value: '100+', label: 'GitHub stars', note: 'FOLDR', href: 'https://github.com/qasimio/foldr' },
  { value: '7.3k+', label: 'downloads', note: 'FOLDR', href: 'https://pepy.tech/projects/foldr' },
  { value: '60+', label: 'projects reviewed', note: 'student & peer work' },
  { value: '35+', label: 'people guided', note: 'projects & debugging' },
  { value: '24h', label: 'hackathon organized', note: "Sibathon'26" },
  { value: '2', label: 'GitHub organizations', note: 'FOLDR · Launchpad' },
];

export const now = [
  {
    tag: '01',
    state: 'BUILDING',
    title: 'Engram',
    detail: 'A knowledge system for keeping context around long enough to be useful.',
    href: '/work/engram/',
  },
  {
    tag: '02',
    state: 'BUILDING',
    title: 'Operon',
    detail:
      'A coding agent where the model can propose a change but the machine gets the final vote.',
    href: '/work/operon/',
  },
  {
    tag: '03',
    state: 'GROWING',
    title: 'SIBA Launchpad',
    detail: 'A public home for student projects, built to make publishing the work a normal thing.',
    href: '/work/siba-launchpad/',
  },
];

export const capabilities = [
  {
    number: '01',
    title: 'AI systems',
    text: 'Retrieval, agent loops, memory, grounded generation, and the infrastructure around models.',
  },
  {
    number: '02',
    title: 'Search & information',
    text: 'Indexes, ranking, document pipelines, and the boring details that decide whether retrieval is useful.',
  },
  {
    number: '03',
    title: 'Tools that ship',
    text: 'CLI software, automation, internal tools, and products that need to survive contact with real users.',
  },
];

export const principles = [
  {
    title: 'Start with the annoyance.',
    detail:
      'The best things I have built usually started with a problem that had become irritating enough to deserve a real fix.',
  },
  {
    title: 'The source of truth wins.',
    detail:
      'If the model, cache, abstraction, or state estimate disagrees with the thing that owns the state, believe the owner.',
  },
  {
    title: 'Make failure boring.',
    detail:
      'Preview dangerous actions. Keep history. Make recovery obvious. Software is more trustworthy when its mistakes are reversible.',
  },
];

export const milestones = [
  {
    period: '2025',
    title: 'Started building outside coursework.',
    detail:
      'Small experiments turned into proper systems once I stopped treating a class submission as the finish line.',
  },
  {
    period: '2025 → 26',
    title: 'Started building around people too.',
    detail:
      "CS Society work, project reviews, mentoring, Sibathon'26, and SIBA Launchpad made the work less solitary.",
  },
  {
    period: '2026',
    title: 'Started shipping into the real world.',
    detail:
      'FOLDR got users. SlotFinder solved a campus problem. Open-source work started attracting people I had never met.',
  },
  {
    period: 'NOW',
    title: 'Going deeper, then wider.',
    detail:
      'Engram and Operon are still being worked on while I learn the harder parts: distribution, product judgment, and making useful software last.',
  },
];

export const community = [
  {
    value: '60+',
    label: 'projects reviewed',
    text: 'Student projects looked at closely enough to talk about architecture, finish, and why something keeps breaking.',
  },
  {
    value: '35+',
    label: 'people guided',
    text: 'Helping students and peers get unstuck, choose a direction, or push a project over the line.',
  },
  {
    value: '24h',
    label: "Sibathon'26",
    text: 'A 24-hour student hackathon organized through the CS Society, with AI allowed.',
  },
  {
    value: '2',
    label: 'GitHub organizations',
    text: 'FOLDR and IBA Launchpad, both used as public homes rather than empty namespaces.',
  },
];

export const professional = [
  {
    period: '2026',
    place: 'FlyRank AI',
    role: 'Backend / AI engineering intern',
    text: 'Backend and AI engineering work in a production-oriented environment.',
  },
  {
    period: '2026',
    place: 'Arch Technologies',
    role: 'Machine learning engineering',
    text: 'NLP work around BERT fine-tuning, preprocessing, and local model inference.',
  },
  {
    period: '2025 → 26',
    place: 'CS Society · Sukkur IBA',
    role: 'Executive member',
    text: "Technical activities, project review, and organizing Sibathon'26.",
  },
];

export const programs = [
  {
    label: 'GitHub Maintainer Community',
    text: 'Invited after maintaining and contributing to public open-source work.',
  },
  {
    label: 'GitHub Developer Program',
    text: 'Used GitHub APIs inside Launchpad so GitHub identity and activity could become part of the product experience.',
  },
  { label: 'Google AI Professional Certificate', text: 'Completed in 2026.' },
];

export const workStyle = [
  ['Environment', 'Arch Linux · daily'],
  ['Editor', 'VS Code + Vim'],
  ['Input', 'Keyboard-first'],
  ['Automation', 'Shell + Python'],
  ['Data', 'PostgreSQL · SQL · DBMS'],
];

export const commandItems = [
  { label: 'Home', href: '/', group: 'Navigate' },
  { label: 'Work', href: '/work/', group: 'Navigate' },
  { label: 'Journal', href: '/journal/', group: 'Navigate' },
  { label: 'About', href: '/about/', group: 'Navigate' },
  { label: 'Contact', href: '/contact/', group: 'Navigate' },
  { label: 'Résumé', href: '/resume.pdf', group: 'Navigate', external: true },
  ...site.socials.map((item) => ({
    label: item.label,
    href: item.href,
    group: 'Elsewhere',
    external: true,
  })),
];
