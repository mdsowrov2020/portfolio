"use client";

import WorkOne from "@/public/images/0.png";
import WorkTwo from "@/public/images/1.png";
import WorkThree from "@/public/images/2.png";
import { useState } from "react";
import Project from "@/components/common/Project";
import Modal from "../common/Modal";
import Wrapper from "../common/Wrapper";
import { StaticImageData } from "next/image";

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
    category: "Development",
    image: WorkOne,
    color: "#000000",
  },
  {
    slug: "project-two",
    title: "My blog",
    category: "Development",
    image: WorkTwo,
    color: "#8C8C8C",
  },
  {
    slug: "project-three",
    title: "Hospital Management System",
    category: "Development",
    image: WorkThree,
    color: "#EFE8D3",
  },
];

export default function Home() {
  const [modal, setModal] = useState<ModalState>({ active: false, index: 0 });

  return (
    <div className="text-neutral-900 dark:text-neutral-100 max-w-7xl mx-auto my-28">
      <Wrapper>
        <h1 className="text-xl font-medium mb-12">Recent Work</h1>

        <div className="relative overflow-hidden z-50">
          {projects.map((project, i) => (
            <div key={i} className="block">
              <Project index={i} title={project.title} setModal={setModal} />
            </div>
          ))}
        </div>
        <Modal modal={modal} projects={projects} />
      </Wrapper>
    </div>
  );
}
