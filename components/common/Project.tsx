import React from "react";
type ProjectProps = {
  index: number;
  title: string;
  setModal: (modal: { active: boolean; index: number }) => void;
};
const Project = ({ index, title, setModal }: ProjectProps) => {
  const handleMouseEnter = () => {
    console.log(`Activating modal for project ${index}`);
    setModal({ active: true, index });
  };

  const handleMouseLeave = () => {
    console.log(`Deactivating modal for project ${index}`);
    setModal({ active: false, index });
  };
  return (
    <div
      className="group flex items-center justify-between border-t border-gray-600 dark:border-t-gray-200 last:border-b last:border-gray-600 dark:last:border-b-gray-200 py-14  transition-all w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-between w-full transition-opacity group-hover:opacity-60">
        <h2 className="text-lg lg:text-4xl text-gray-700 dark:text-gray-100 transition-transform group-hover:translate-x-2">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-500 text-sm transition-transform group-hover:-translate-x-2">
          Design & development
        </p>
      </div>
    </div>
  );
};

export default Project;
