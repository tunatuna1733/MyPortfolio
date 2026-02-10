export interface Link {
  url: string;
  label: string;
}

export interface SubProject {
  title: string;
  description: string;
  links: Link[];
  tags: string[];
}

export interface Project {
  title: string;
  description: string;
  year: string;
  tags: string[];
  images: string[];
  links: Link[];
  subProjects: SubProject[];
}

export const projects: Project[] = [
  {
    title: 'LoL Custom Game Tools',
    description:
      'Useful tools for organizing custom games in League of Legends, including team balancer with auto balancing feature, and Ban/Pick draft tool with fearless ban feature. All the tools can also be used from discord bot.',
    year: '',
    tags: [],
    images: ['/images/lol-1.png', '/images/lol-2.png', '/images/lol-3.png'],
    links: [{ url: 'https://lol.tunatuna.dev', label: 'Live Site' }],
    subProjects: [
      {
        title: 'Frontend Website',
        description: 'Frontend website built with Next.js and KumaUI.',
        links: [
          {
            url: 'https://github.com/tunatuna1733/lol-draft-kuma',
            label: 'GitHub',
          },
        ],
        tags: ['TypeScript', 'Next.js', 'KumaUI'],
      },
      {
        title: 'Backend Server',
        description: 'Backend server that manages draft, team balancing and user registration.',
        links: [
          {
            url: 'https://github.com/tunatuna1733/lol-draft-websocket',
            label: 'GitHub',
          },
        ],
        tags: ['TypeScript', 'Bun', 'WebSocket', 'MongoDB'],
      },
      {
        title: 'Discord Bot',
        description: 'Discord bot that allows users to use the tools from Discord.',
        links: [
          {
            url: 'https://github.com/tunatuna1733/lol-draft-sapphire',
            label: 'GitHub',
          },
        ],
        tags: ['TypeScript', 'Bun', 'Sapphire.js', 'MongoDB'],
      },
    ],
  },
  {
    title: 'Kawasaki City Bus Navigation',
    description:
      'Bus navigation app for Kawasaki City Bus that shows real-time bus location, bus arrival time, and so on.',
    year: '',
    tags: [],
    images: ['/images/kcb-1.png', '/images/kcb-2.png'],
    links: [],
    subProjects: [
      {
        title: 'Frontend Windows/Android Native App',
        description: 'Native app built with Tauri for Windows and Android.',
        links: [
          {
            url: 'https://github.com/tunatuna1733/KCBApp',
            label: 'GitHub',
          },
        ],
        tags: ['TypeScript', 'Rust', 'Tauri', 'Material UI'],
      },
      {
        title: 'Backend Server',
        description:
          'Backend server that fetches real-time bus information from Public Transportaion Open Data Center API periodically, and provides them.',
        links: [
          {
            url: 'https://github.com/tunatuna1733/kawasaki-gtfs-api',
            label: 'GitHub',
          },
        ],
        tags: ['TypeScript', 'Bun', 'GTFS'],
      },
    ],
  },
];
