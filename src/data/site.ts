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
  ],
  organizations: [
    { label: 'FOLDR', href: 'https://github.com/foldrhq' },
    { label: 'IBA Launchpad', href: 'https://github.com/iba-launchpad' },
  ],
};

export const proof = [
  { value: '100+', label: 'GitHub stars', note: 'FOLDR', href: 'https://github.com/qasimio/foldr' },
  { value: '7.3k+', label: 'downloads', note: 'FOLDR', href: 'https://pepy.tech/projects/foldr' },
  { value: '60+', label: 'projects reviewed', note: 'student + peer work' },
  { value: '35+', label: 'people guided', note: 'debugging + direction' },
];

export const now = [
  {
    title: 'Engram',
    state: 'BUILDING',
    detail:
      'Personal knowledge infrastructure for documents, retrieval, memory, and agent context.',
    href: '/work/engram/',
  },
  {
    title: 'Operon',
    state: 'BUILDING',
    detail:
      'A coding agent where the model can suggest a change, but the machine has to verify it.',
    href: '/work/operon/',
  },
  {
    title: 'SIBA Launchpad',
    state: 'GROWING',
    detail:
      'A public home for student work, because a project should not disappear when the grade is posted.',
    href: '/work/siba-launchpad/',
  },
];

export const principles = [
  {
    title: 'Start with the annoyance.',
    detail:
      'The things I ship usually start when a small problem becomes too irritating to keep working around.',
  },
  {
    title: 'Believe the source of truth.',
    detail:
      'When a model, cache, or abstraction disagrees with the state-owning system, the owner wins.',
  },
  {
    title: 'Make failure reversible.',
    detail:
      'Preview dangerous work. Keep history. Make recovery obvious. Trust is part of the interface.',
  },
];

export const milestones = [
  [
    '2025',
    'Started building beyond coursework.',
    'Experiments turned into proper systems once the assignment stopped being the finish line.',
  ],
  [
    '2025 → 26',
    'Moved closer to people as well as code.',
    'CS Society, project reviews, mentoring, Sibathon, and Launchpad made the work less solitary.',
  ],
  [
    '2026',
    'Started shipping into the real world.',
    'FOLDR got real users. SlotFinder solved a campus problem. Open-source work became public work.',
  ],
  [
    'NOW',
    'Going deeper and wider.',
    'Engram and Operon are in development while distribution and product judgment become part of the job.',
  ],
];

export const community = [
  [
    '60+',
    'projects reviewed',
    'Student and peer projects reviewed closely enough to talk about architecture, finish, and what was actually breaking.',
  ],
  [
    '35+',
    'people guided',
    'Helping students and peers get unstuck, pick a direction, or push a project over the line.',
  ],
  [
    '24h',
    'Sibathon’26',
    'A 24-hour student hackathon organized through the CS Society, with AI allowed.',
  ],
  [
    '2',
    'GitHub organizations',
    'FOLDR and IBA Launchpad, both used as public homes rather than empty namespaces.',
  ],
];

export const professional = [
  [
    '2026',
    'FlyRank AI',
    'Backend / AI engineering intern',
    'Backend and AI work in a production-oriented environment.',
  ],
  [
    '2026',
    'Arch Technologies',
    'Machine learning engineering',
    'NLP work around BERT fine-tuning, preprocessing, and local inference.',
  ],
  [
    '2025 → 26',
    'CS Society · Sukkur IBA',
    'Executive member',
    'Technical activities, project review, and organizing Sibathon’26.',
  ],
];

export const programs = [
  [
    'GitHub Maintainer Community',
    'Invited into the maintainer community after building and contributing in public.',
  ],
  [
    'GitHub Developer Program',
    'Used GitHub APIs inside Launchpad so GitHub identity and activity could become part of the product.',
  ],
  ['Google AI Professional Certificate', 'Completed in 2026.'],
];

export const workStyle = [
  ['Environment', 'Arch Linux · daily'],
  ['Editor', 'VS Code + Vim'],
  ['Input', 'Keyboard-first'],
  ['Automation', 'Shell + Python'],
  ['Data', 'PostgreSQL · SQL · DBMS'],
];

export const commandItems = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work/' },
  { label: 'Journal', href: '/journal/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'Résumé', href: '/resume.pdf', external: true },
  ...site.socials.map((item) => ({ label: item.label, href: item.href, external: true })),
];
