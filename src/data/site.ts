export const site = {
  name: 'Qasim Sethar',
  handle: 'qasimio',
  email: 'hello@qasimio.me',
  location: 'Sukkur, Pakistan',
  social: [
    { label: 'GitHub', href: 'https://github.com/qasimio' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/qasimio' },
    { label: 'X', href: 'https://x.com/qasimiohq' },
    { label: 'YouTube', href: 'https://www.youtube.com/@qasimiohq' },
  ],
  secondary: [
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
  {
    value: '7.3k+',
    label: 'FOLDR downloads',
    detail: 'People installed it, used it, and started telling me where it fell short.',
  },
  {
    value: '100-star',
    label: 'FOLDR milestone',
    detail: 'The number is not huge. I still liked seeing strangers care about something I made.',
  },
  {
    value: '60+',
    label: 'projects reviewed',
    detail:
      'Usually the part where a project is almost working and somebody needs another pair of eyes.',
  },
  {
    value: '35+',
    label: 'people guided',
    detail: 'Students and peers who were stuck, unsure, or just wanted a second opinion.',
  },
];

export const current = [
  {
    label: 'building',
    title: 'Engram',
    detail:
      'A knowledge system I am still building because memory is easy to claim and hard to make trustworthy.',
    href: '/work/engram/',
  },
  {
    label: 'building',
    title: 'Operon',
    detail: 'A coding agent I am building around a simple rule: the files get the final vote.',
    href: '/work/operon/',
  },
  {
    label: 'growing',
    title: 'SIBA Launchpad',
    detail:
      'A place for SIBA students to put their work in front of other people before it disappears after grading.',
    href: '/work/siba-launchpad/',
  },
];

export const timeline = [
  {
    period: '2025',
    title: 'Started building beyond coursework.',
    body: 'I started making things outside class because the assignments stopped being enough.',
  },
  {
    period: '2025 → 26',
    title: 'Moved closer to people as well as code.',
    body: 'I ended up doing more around people too: reviewing projects, helping friends debug things, organizing an event, and starting Launchpad.',
  },
  {
    period: '2026',
    title: 'Started shipping into the real world.',
    body: 'FOLDR left my machine and found actual users. SlotFinder fixed a timetable problem I was tired of having.',
  },
  {
    period: 'now',
    title: 'Building deeper systems.',
    body: 'Engram and Operon are taking most of my attention. I am also trying to get better at the part after code: shipping, talking to people, and seeing what sticks.',
  },
];

export const people = [
  {
    metric: '60+',
    title: 'Projects reviewed',
    detail:
      'Student software reviewed for architecture, debugging, finish, and technical decisions.',
  },
  {
    metric: '35+',
    title: 'People guided',
    detail:
      'Project direction, debugging, feedback, and the last stretch before something gets shipped.',
  },
  {
    metric: '24h',
    title: 'Sibathon’26',
    detail: 'A student hackathon organized through the CS Society with AI tools allowed.',
  },
  {
    metric: '2',
    title: 'GitHub organizations',
    detail: 'FOLDR and IBA Launchpad, maintained as public places for software and people.',
  },
];

export const recognition = [
  {
    label: 'GitHub Maintainer Community',
    detail: 'Invited to GitHub’s Maintainer Community after spending a lot of time in open source.',
  },
  {
    label: 'GitHub Developer Program',
    detail:
      'Used the GitHub API in Launchpad so projects could pull real GitHub data instead of asking students to type it all again.',
  },
  { label: 'Google AI Professional Certificate', detail: 'Google AI Professional Certificate.' },
];

export const professional = [
  {
    company: 'FlyRank',
    role: 'Backend / AI engineering',
    detail: 'Backend and AI engineering internship work.',
  },
  {
    company: 'Arch Technologies',
    role: 'Machine learning engineering',
    detail:
      'Machine-learning engineering work around NLP models, preprocessing, and local inference.',
  },
  {
    company: 'CS Society, Sukkur IBA',
    role: 'Executive member · 2025–2026',
    detail:
      'Technical activities, project reviews, and organizing Sibathon’26, a 24-hour student hackathon.',
  },
];

export const workStyle = [
  { key: 'environment', value: 'Arch Linux' },
  { key: 'editor', value: 'VS Code + Vim' },
  { key: 'input', value: 'Keyboard-first' },
  { key: 'automation', value: 'Shell + Python' },
  { key: 'data', value: 'PostgreSQL + SQL' },
];

export const patterns = [
  {
    title: 'Use the source of truth.',
    detail: 'If the file says one thing and the model says another, I trust the file.',
  },
  {
    title: 'Make scary actions reversible.',
    detail: 'Anything that can damage a user’s files should show its work and have a way back.',
  },
  {
    title: 'Keep expensive work off the critical path.',
    detail: 'The expensive work can happen in the background. The user should not have to.',
  },
];

export const commandItems = [
  { label: 'Work', href: '/work/', group: 'Navigate' },
  { label: 'Journal', href: '/journal/', group: 'Navigate' },
  { label: 'About', href: '/about/', group: 'Navigate' },
  { label: 'Contact', href: '/contact/', group: 'Navigate' },
  { label: 'Résumé', href: '/resume.pdf', group: 'Navigate', external: true },
  ...site.social.map((item) => ({
    label: item.label,
    href: item.href,
    group: 'Elsewhere',
    external: true,
  })),
];
