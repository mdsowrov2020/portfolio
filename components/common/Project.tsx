import Link from "next/link";
import React from "react";

type ProjectProps = {
  index: number;
  title: string;
  slug: string;
  category: string;
  setModal: (modal: { active: boolean; index: number }) => void;
};

const Project = ({ index, title, category, slug, setModal }: ProjectProps) => {
  const handleMouseEnter = () => {
    setModal({ active: true, index });
  };

  const handleMouseLeave = () => {
    setModal({ active: false, index });
  };

  return (
    <Link href={slug} target="_blank">
      <div
        className={`group flex items-center justify-between border-t border-gray-600 dark:border-t-gray-400 border-b-0 last:border-b last:border-gray-400 dark:last:border-b-gray-400 py-14 px-24  transition-all w-full cursor-pointer`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex justify-between items-center w-full transition-opacity group-hover:opacity-60 ">
          <h2 className="text-lg lg:text-7xl text-gray-700 font-light dark:text-gray-100 transition-transform group-hover:translate-x-2">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-md transition-transform group-hover:-translate-x-2">
            {category}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Project;
