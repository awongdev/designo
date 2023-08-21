import Image from "next/image";

type ProjectT = {
  project: "express" | "transfer" | "photon" | "builder" | "blogr" | "camp";
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
};

const Card = ({ project }: ProjectT) => {
  const currentProject = projects[project];
  return (
    <div className="group grid w-full max-w-1110 cursor-pointer overflow-hidden rounded-2xl sm:grid-flow-col sm:grid-cols-2 lg:grid-flow-row lg:grid-cols-none">
      <Image
        src={currentProject.img}
        alt={currentProject.alt}
        width={650}
        height={620}
        className="h-full w-full"
      />
      <div className="flex w-full flex-col items-center justify-center bg-[#FDF3F0] px-[1.875rem] py-8 text-center transition-colors duration-300 group-hover:bg-clr-peach">
        <h2 className="mb-4 text-[1.25rem] font-medium uppercase tracking-[5px] text-clr-peach group-hover:text-clr-white">
          {currentProject.title}
        </h2>
        <p className="max-w-[17.313rem] text-clr-dark-gray group-hover:text-clr-white">
          A multi-carrier shipping website for ecommerce businesses
        </p>
      </div>
    </div>
  );
};

export default Card;
