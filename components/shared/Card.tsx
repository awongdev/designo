import Image from "next/image";
import { projects } from "@/constants/projects";

type ProjectT = {
  project:
    | "express"
    | "transfer"
    | "photon"
    | "builder"
    | "blogr"
    | "camp"
    | "airfilter"
    | "eyecam"
    | "faceit"
    | "todo"
    | "loopstudios"
    | "timBrown"
    | "boxedWater"
    | "science";
};

const Card = ({ project }: ProjectT) => {
  const currentProject = projects[project];
  return (
    <div className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl md:flex-row lg:flex-col">
      <Image
        src={currentProject.img}
        alt={currentProject.alt}
        width={650}
        height={620}
        className="h-full w-full"
      />
      <div className="flex h-full w-full flex-col items-center justify-start bg-[#FDF3F0] px-[1.875rem] py-8 text-center transition-colors duration-300 group-hover:bg-clr-peach md:justify-center lg:justify-start">
        <h2 className="mb-4 text-[1.25rem] font-medium uppercase tracking-[5px] text-clr-peach group-hover:text-clr-white">
          {currentProject.title}
        </h2>
        <p className="max-w-[17.313rem] text-clr-dark-gray group-hover:text-clr-white">
          {currentProject.content}
        </p>
      </div>
    </div>
  );
};

export default Card;
