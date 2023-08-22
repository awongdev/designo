import Image from "next/image";

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
    | "loopstudios";
};

const projects = {
  express: {
    title: "Express",
    content: "A multi-carrier shipping website for ecommerce businesses",
    alt: "Express project design",
    img: "/assets/web-design/desktop/image-express.jpg",
  },
  transfer: {
    title: "Transfer",
    content:
      "Site for low-cost money transfers and sending money within seconds",
    alt: "Transfer project design",
    img: "/assets/web-design/desktop/image-transfer.jpg",
  },
  photon: {
    title: "Photon",
    content:
      "A state-of-the-art music player with high-resolution audio and DSP effects",
    alt: "Photon project design",
    img: "/assets/web-design/desktop/image-photon.jpg",
  },
  builder: {
    title: "Builder",
    content: "Connects users with local contractors based on their location",
    alt: "Builder project design",
    img: "/assets/web-design/desktop/image-builder.jpg",
  },
  blogr: {
    title: "Blogr",
    content: "Blogr is a platform for creating an online blog or publication",
    alt: "Blogr project design",
    img: "/assets/web-design/desktop/image-blogr.jpg",
  },
  camp: {
    title: "Camp",
    content:
      "Get expert training in coding, data, design, and digital marketing",
    alt: "Camp project design",
    img: "/assets/web-design/desktop/image-camp.jpg",
  },
  airfilter: {
    title: "Airfilter",
    content:
      "Solving the problem of poor indoor air quality by filtering the air",
    alt: "Airfilter app design",
    img: "/assets/app-design/desktop/image-airfilter.jpg",
  },
  eyecam: {
    title: "Eyecam",
    content:
      "Product that lets you edit your favorite photos and videos at any time",
    alt: "Eyecam app design",
    img: "/assets/app-design/desktop/image-eyecam.jpg",
  },
  faceit: {
    title: "Faceit",
    content: "Get to meet your favorite internet superstar with the faceit app",
    alt: "Faceit app design",
    img: "/assets/app-design/desktop/image-faceit.jpg",
  },
  todo: {
    title: "Todo",
    content: "A todo app that features cloud sync with light and dark mode",
    alt: "Todo app design",
    img: "/assets/app-design/desktop/image-todo.jpg",
  },
  loopstudios: {
    title: "Loopstudios",
    content: "A VR experience app made for Loopstudios",
    alt: "Loopstudios app design",
    img: "/assets/app-design/desktop/image-loopstudios.jpg",
  },
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
