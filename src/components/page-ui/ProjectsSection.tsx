import React from 'react';

import { HeroParallax } from '@/components/ui/hero-paralax';

export function ProjectsSection() {
  return <HeroParallax products={products} />;
}

const products = [
  {
    title: 'Secure Site Audit',
    link: 'https://securesiteaudit.com/',
    thumbnail: '/projects/secure.png',
  },
  {
    title: 'Online Doctor Appointmen',
    link: 'https://github.com/AmarAbbas123/Softoobootcamp-project.git',
    thumbnail: '/projects/mern.png',
  },
  {
    title: 'Global Digital Networ',
    link: 'https://globaldigitalawards.co.uk/',
    thumbnail: '/projects/global.png',
  },
  {
    title: 'Camping Herzo',
    link: 'https://www.camping-herzog.de/',
    thumbnail: '/projects/camping.png',
  },
  {
    title: 'Telecom Site Audi',
    link: 'https://telecomsiteaudit.com/',
    thumbnail: '/projects/telecom.png',
  },
  {
    title: 'Camping Herzo',
    link: 'https://halazone.io/',
    thumbnail: '/projects/hala.png',
  },
  {
    title: 'Culloden Estate',
    link: 'https://https://cullodenestate.com/',
    thumbnail: '/projects/Culloden1.png',
  },
];
