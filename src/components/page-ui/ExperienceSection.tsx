'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { TracingBeam } from '@/components/ui/tracing-beams';

export function ExperienceSection() {
    return (
        <>
            <h1 id="experience" className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">
                Experience
            </h1>
            <TracingBeam className="px-6">
                <div className="relative mx-auto max-w-2xl pb-32 pt-4 text-white antialiased">
                    {experience.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10 mt-4 md:mt-0">
                            <h2 className={twMerge('text-xl text-black dark:text-white')}>{item.title}</h2>
                            <span className="w-fit rounded-full py-1 text-sm italic text-neutral-800 dark:text-neutral-200">{item.badge}</span>
                            <div className="prose prose-sm dark:prose-invert mt-2 text-sm text-black dark:text-white">{item.description}</div>
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
                <li>Developed a secure web portal-based project management console to manage site audits.</li>
                <li>
                    Contributed to the development of a web applicatigion by implementing a new app theme and developing various frontend components.
                </li>
            </ul>
        ),
        badge: 'Junior Software Engineer/Oct 2023 - Present'
    },
    {
        title: 'Alilogics',
        description: (
            <ul className="list-disc">
                <li>Joined Alilogics as a Junior Frontend Developer.</li>
                <li>
                    Developed and customized a wide range of WordPress projects, including theme customization, Elementor-based designs, and
                    WooCommerce integrations, tailored to meet diverse client requirements and expectations.
                </li>
            </ul>
        ),
        badge: 'Frontend Developer/June 2023 – Present'
    },
    
   
];
