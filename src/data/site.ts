export const site = {
  name: 'Qasim Sethar',
  handle: 'qasimio',
  email: 'hello@qasimio.me',
  description:
    'Qasim Sethar builds software, products, systems, and communities. A living record of what gets built, shipped, learned, and kept.',
  social: [
    { label: 'GitHub', href: 'https://github.com/qasimio' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/qasimio' },
    { label: 'X', href: 'https://x.com/qasimiohq' },
    { label: 'YouTube', href: 'https://www.youtube.com/@qasimiohq' },
  ],
  elsewhere: [
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

export const current = [
  {
    number: '01',
    label: 'Building',
    title: 'Engram',
    detail: 'A knowledge system around retrieval, persistent context, and grounded answers.',
    href: 'https://github.com/qasimio/Engram',
  },
  {
    number: '02',
    label: 'Building',
    title: 'Operon',
    detail: 'A terminal-native coding agent that treats filesystem state as the source of truth.',
    href: 'https://github.com/qasimio/Operon',
  },
  {
    number: '03',
    label: 'Growing',
    title: 'SIBA Launchpad',
    detail:
      'A project ecosystem making student work easier to publish, discover, and collaborate around.',
    href: 'https://iba-launchpad.vercel.app',
  },
];

export const evidence = [
  { value: '7.3k+', label: 'FOLDR downloads' },
  { value: '100+', label: 'FOLDR stars' },
  { value: '60+', label: 'projects reviewed' },
  { value: '35+', label: 'students guided' },
  { value: '24h', label: 'Sibathon’26' },
];

export const evidenceRows = [
  {
    value: '7.3k+',
    label: 'FOLDR downloads',
    detail: 'Published cross-platform file automation utility.',
  },
  {
    value: '100+',
    label: 'FOLDR stars',
    detail: 'Public open-source traction around a small developer tool.',
  },
  {
    value: '60+',
    label: 'projects reviewed',
    detail: 'Student software reviewed for technical quality and finishing decisions.',
  },
  {
    value: '35+',
    label: 'students guided',
    detail: 'Technical guidance, debugging, project direction, and feedback.',
  },
  {
    value: '2',
    label: 'GitHub organizations',
    detail: 'FOLDR and IBA Launchpad maintained as public ecosystems.',
  },
];

export const timeline = [
  {
    year: '2025',
    title: 'Started building beyond coursework.',
    detail:
      'Search, retrieval, scripting, and systems work became projects worth keeping after class.',
  },
  {
    year: '2025–26',
    title: 'Moved closer to people as well as code.',
    detail:
      'CS Society work, project reviews, peer guidance, event organizing, and the early shape of SIBA Launchpad.',
  },
  {
    year: '2026',
    title: 'Started shipping into the real world.',
    detail:
      'FOLDR became a public package people install. SlotFinder became an institutional utility around an actual campus problem.',
  },
  {
    year: 'Now',
    title: 'Building deeper systems and learning distribution.',
    detail:
      'Engram and Operon remain in development while open-source, community, and professional work keep expanding the surface area.',
  },
];

export const workStyle = [
  ['Environment', 'Arch Linux · daily for ~2 years'],
  ['Editor', 'VS Code + Vim'],
  ['Input', 'Keyboard-first · shortcuts before mouse'],
  ['Automation', 'Shell + Python scripting'],
  ['Databases', 'PostgreSQL · SQL · DBMS fundamentals'],
];

export const programs = [
  {
    title: 'GitHub Maintainer Community',
    detail: 'Invited into GitHub’s maintainer community after building and contributing in public.',
  },
  {
    title: 'GitHub Developer Program',
    detail:
      'Built GitHub API-powered workflows for SIBA Launchpad, including contributor data and direct GitHub actions.',
  },
  {
    title: 'Google AI Professional Certificate',
    detail: 'Completed professional AI coursework and certification.',
  },
];

export const experience = [
  {
    title: 'FlyRank',
    role: 'Backend / AI engineering',
    detail: 'Production-oriented backend and AI engineering work during an internship.',
  },
  {
    title: 'Arch Technologies',
    role: 'Machine learning engineering',
    detail: 'NLP model fine-tuning, preprocessing, and local inference engineering.',
  },
  {
    title: 'Sukkur IBA CS Society',
    role: 'Executive member · 2025–2026',
    detail:
      'Helped organize technical activities and Sibathon’26, a 24-hour student hackathon where AI tools were allowed.',
  },
];

export const peopleWork = [
  {
    title: '60+ projects reviewed',
    detail:
      'Student software reviewed for technical quality, architecture, debugging, and finishing decisions.',
  },
  {
    title: '35+ students guided',
    detail: 'Technical counseling and peer guidance around projects, debugging, and next steps.',
  },
  { title: 'Sibathon’26', detail: 'A 24-hour student hackathon organized through the CS Society.' },
  {
    title: 'SIBA Launchpad',
    detail: 'A public project ecosystem for students to showcase, discover, and collaborate.',
  },
];

export const commandItems = [
  { label: 'Go to work', href: '/work/', group: 'Navigate' },
  { label: 'Open the journal', href: '/journal/', group: 'Navigate' },
  { label: 'About Qasim', href: '/about/', group: 'Navigate' },
  { label: 'Contact', href: '/contact/', group: 'Navigate' },
  { label: 'Resume', href: '/resume.pdf', group: 'Navigate', external: true },
  { label: 'GitHub', href: 'https://github.com/qasimio', group: 'Elsewhere', external: true },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/qasimio',
    group: 'Elsewhere',
    external: true,
  },
  { label: 'X', href: 'https://x.com/qasimiohq', group: 'Elsewhere', external: true },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@qasimiohq',
    group: 'Elsewhere',
    external: true,
  },
];
