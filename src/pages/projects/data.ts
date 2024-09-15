import type { ProjectData } from '@/types'

export const projectData: ProjectData = [
  {
    title: '2024',
    projects: [
      {
        text: 'Hermione (In progress)',
        description: 'static binary version image (as of now), soon to be made user interactive so that image updates upon manipulation of data.',
        icon: 'i-carbon-magic-wand-filled',
        href: 'https://dask-58.github.io/hermione',
      },
      {
        text: 'Erudite',
        description: 'Ai chat bot built with Google Gemini API (ERUDITE 2.0 soon ... ).',
        icon: 'i-carbon-ai',
        href: 'https://dask-58.github.io/erudite',
      },
      {
        text: '[ . ] Files',
        description: 'My dot files.',
        icon: 'i-carbon-code',
        href: 'https://github.com/dask-58/dot',
      },
    ],
  },
  {
    title: '2023',
    projects: [
      {
        text: 'Spend Elon Money',
        description: 'Simulate spending the money of the richest man on Earth; as you wish!',
        icon: 'i-carbon-currency',
        href: 'https://dask-58.github.io/spendelonmoney',
      },
    ],
  },
]
