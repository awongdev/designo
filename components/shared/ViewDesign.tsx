"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import RightArrow from "/public/assets/shared/desktop/icon-right-arrow.svg";
import { imgGrayBlur } from "@/constants/imgGrayBlur";

type DesignT = "webDesignSm" | "webDesignLg" | "appDesign" | "graphicDesign";

const categories = {
  webDesignSm: {
    title: "Web Design",
    alt: "Laptop with a web design on the screen",
    href: "/web-design",
    mobile: "/assets/home/mobile/image-web-design.jpg",
    tablet: "/assets/home/tablet/image-web-design.jpg",
    desktop: "/assets/home/desktop/image-web-design-small.jpg",
  },
  webDesignLg: {
    title: "Web Design",
    alt: "Laptop with a web design on the screen",
    href: "/web-design",
    mobile: "/assets/home/mobile/image-web-design.jpg",
    tablet: "/assets/home/tablet/image-web-design.jpg",
    desktop: "/assets/home/desktop/image-web-design-large.jpg",
  },
  appDesign: {
    title: "App Design",
    alt: "Mobile phone with an app design on the screen",
    href: "/app-design",
    mobile: "/assets/home/mobile/image-app-design.jpg",
    tablet: "/assets/home/tablet/image-app-design.jpg",
    desktop: "/assets/home/desktop/image-app-design.jpg",
  },
  graphicDesign: {
    title: "Graphic Design",
    alt: "Artistic graphic design",
    href: "/graphic-design",
    mobile: "/assets/home/mobile/image-graphic-design.jpg",
    tablet: "/assets/home/tablet/image-graphic-design.jpg",
    desktop: "/assets/home/desktop/image-graphic-design.jpg",
  },
};

const ViewDesign = ({ design }: { design: DesignT }) => {
  const router = useRouter();
  const currentDesign = categories[design];
  return (
    <div className="relative max-w-fit overflow-hidden rounded-2xl">
      <picture>
        <source media="(min-width: 64rem)" srcSet={currentDesign.desktop} />
        <source media="(min-width: 29.688rem)" srcSet={currentDesign.tablet} />
        <Image
          src={currentDesign.mobile}
          alt={currentDesign.alt}
          blurDataURL={imgGrayBlur}
          placeholder="blur"
          width={1024}
          height={640}
          className="h-full brightness-[.40]"
        ></Image>
      </picture>
      <div className="absolute inset-0 transition-colors duration-300 hover:bg-clr-peach/60">
        <div className="flex h-full flex-col items-center justify-center text-center uppercase text-clr-white">
          <h2 className="mb-1 text-[1.75rem] font-medium leading-9 tracking-[1.4px] sm:mb-6 sm:text-[2.5rem] sm:tracking-[2px]">
            {currentDesign.title}
          </h2>
          <div className="relative">
            <button
              type="button"
              onClick={() => router.push(currentDesign.href)}
              className="animate-underline mx-auto flex max-w-fit items-center text-15px font-medium uppercase tracking-[5px] after:bg-clr-white"
            >
              View Projects
              <RightArrow className="ml-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDesign;
