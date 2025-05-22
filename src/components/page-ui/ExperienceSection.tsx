'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

import { TracingBeam } from '@/components/ui/tracing-beams';

export function ExperienceSection() {
  return (
    <>
      <h1
        id="experience"
        className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl"
      >
        Experience
      </h1>
      <TracingBeam className="px-6">
        <div className="relative mx-auto max-w-2xl pb-32 pt-4 text-white antialiased">
          {experience.map((item, index) => (
            <div key={`content-${index}`} className="mb-10 mt-4 md:mt-0">
              <h2 className={twMerge('text-xl text-black dark:text-white')}>
                {item.title}
              </h2>
              <span className="w-fit rounded-full py-1 text-sm italic text-neutral-800 dark:text-neutral-200">
                {item.badge}
              </span>
              <div className="prose prose-sm dark:prose-invert mt-2 text-sm text-black dark:text-white">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </>
  );
}

const experience = [
  {
    title: 'Secure Site Audit',
    description: (
      <ul className="list-disc">
        <li>
          Developed a secure web portal-based project management console to
          manage site audits.
        </li>
        <li>
          Built and styled reusable front-end components to ensure a clean and
          intuitive user interface.
        </li>
        <li>
          Focused on responsive design, optimizing the user experience across
          various screen sizes and devices.
        </li>
        <li>
          Created a modern and cohesive UI theme to align with usability and
          accessibility best practices.
        </li>
        <li>
          Worked independently on the front-end architecture, applying best
          practices in code organization and maintainability.
        </li>
      </ul>
    ),
    badge: 'Junior Software Engineer / Aug 2024 - Present',
  },
  {
    title: 'Alilogics',
    description: (
      <ul className="list-disc">
        <li>
          Joined Alilogics as a fresh graduate, quickly adapting to the
          company's culture of quality work and teamwork.
        </li>
        <li>
          Contributed to the development of Secure Site Audit system, a web
          portal-based project management console designed to define, manage,
          track, and report project status with consistent quality and timely
          delivery.
        </li>
        <li>
          Developed and optimized responsive front-end components to ensure
          seamless user experience across devices.
        </li>
        <li>
          Collaborated with the team to implement a modern UI theme, focusing on
          usability, accessibility, and performance.
        </li>
      </ul>
    ),
    badge: 'Frontend Developer / Aug 2024 – Present',
  },
];
