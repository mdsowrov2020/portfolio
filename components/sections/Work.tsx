"use client";

import WorkOne from "@/public/images/0.png";
import WorkTwo from "@/public/images/1.png";
import WorkThree from "@/public/images/2.png";
import { useState } from "react";
import Project from "@/components/common/Project";
import Modal from "../common/Modal";
import Wrapper from "../common/Wrapper";
import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";

type ProjectType = {
  slug: string;
  title: string;
  category: string;
  image: StaticImageData;
  color: string;
};

type ModalState = {
  active: boolean;
  index: number;
};

const projects: ProjectType[] = [
  {
    slug: "project-one",
    title: "AgCrop",
    category: "Design & development",
    image: WorkOne,
    color: "#000000",
  },
  {
    slug: "project-two",
    title: "My blog",
    category: "Design & development",
    image: WorkTwo,
    color: "#8C8C8C",
  },
  {
    slug: "project-three",
    title: "HMS",
    category: "Design & development",
    image: WorkThree,
    color: "#EFE8D3",
  },
];

export default function Home() {
  const [modal, setModal] = useState<ModalState>({ active: false, index: 0 });

  return (
    <div className="text-neutral-900 dark:text-neutral-100 max-w-7xl mx-auto my-28 px-4">
      <Wrapper>
        <h1 className="text-xl font-medium mb-12">Recent Work</h1>

        {/* Desktop View - hidden on mobile */}
        <div className="hidden md:block relative overflow-hidden z-50">
          {projects.map((project, i) => (
            <div key={i} className="block">
              <Project
                index={i}
                title={project.title}
                category={project.category}
                setModal={setModal}
              />
            </div>
          ))}
        </div>

        {/* Mobile View - shown only on mobile */}
        <div className="md:hidden grid grid-cols-1 gap-4">
          {projects.map((project, i) => (
            <Link
              href={`/${project.slug}`}
              key={i}
              className="w-full h-48 relative rounded-lg overflow-hidden"
              style={{ backgroundColor: project.color }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-medium">{project.title}</h3>
                <p className="text-white/80 text-sm">{project.category}</p>
              </div>
            </Link>
          ))}
        </div>

        <Modal modal={modal} projects={projects} />
      </Wrapper>
    </div>
  );
}
