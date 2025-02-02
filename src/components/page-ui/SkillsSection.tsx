import Link from "next/link";
import React from "react";
import { FaWordpress, FaReact } from "react-icons/fa";
import {
  SiMysql,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import { EvervaultCard, Icon } from "@/components/ui/evervault-card";

export function SkillsSection() {
  return (
    <div className="mx-auto max-w-5xl px-8 pb-8">
      <h1
        id="skills"
        className="max-w-5xl pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl"
      >
        Skills
      </h1>
      <div
        className={
          "grid grid-cols-1 gap-6  py-10 md:grid-cols-2 lg:grid-cols-3"
        }
      >
        {skills.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            className="relative mx-auto flex h-[13rem] w-full max-w-full flex-col items-start border border-black/[0.2] p-4 dark:border-white/[0.2]"
          >
            <Icon className="absolute -left-3 -top-3 size-6 text-black dark:text-white" />
            <Icon className="absolute -bottom-3 -left-3 size-6 text-black dark:text-white" />
            <Icon className="absolute -right-3 -top-3 size-6 text-black dark:text-white" />
            <Icon className="absolute -bottom-3 -right-3 size-6 text-black dark:text-white" />

            <EvervaultCard text={item.title} icon={item.icon} />
          </Link>
        ))}
      </div>
    </div>
  );
}

const skills = [
  {
    title: "Tailwind",
    link: "https://tailwindcss.com",
    icon: <SiTailwindcss />,
  },
  {
    title: "BootStrap",
    link: "https://getbootstrap.com/",
    icon: <SiBootstrap />,
  },
  {
    title: "JavaScript",
    link: "https://www.javascript.com/",
    icon: <SiJavascript />,
  },
  {
    title: "TypeScript",
    link: "https://www.typescriptlang.org/",
    icon: <SiTypescript />,
  },
  {
    title: "React.js",
    link: "https://react.dev/",
    icon: <FaReact />,
  },
  {
    title: "Next.js",
    link: "https://nextjs.org",
    icon: <TbBrandNextjs />,
  },

  {
    title: "WordPress",
    link: "https://wordpress.com/",
    icon: <FaWordpress />,
  },

  {
    title: "MySQL",
    link: "https://www.mysql.com/",
    icon: <SiMysql />,
  },
];
