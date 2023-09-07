import Image from "next/image";

type CategoryT = {
  category: "webDesign" | "appDesign" | "graphicDesign";
};

const categories = {
  webDesign: {
    title: "Web Design",
    content:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    desktopImg: "/assets/web-design/desktop/bg-pattern-intro-web.svg",
    classes: "",
  },
  appDesign: {
    title: "App Design",
    content:
      "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
    desktopImg: "/assets/app-design/desktop/bg-pattern-intro-app.svg",
    classes: "lg:left-[-3.625rem]",
  },
  graphicDesign: {
    title: "Graphic Design",
    content:
      "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
    desktopImg: "/assets/graphic-design/desktop/bg-pattern-intro-graphic.svg",
    classes: "lg:left-[-3.625rem]",
  },
};

const DesignHeader = ({ category }: CategoryT) => {
  const currentCategory = categories[category];
  return (
    <header>
      <div className="mb-24 flex justify-center sm:mx-6 md:mx-10 md:mb-[7.5rem] lg:mb-40">
        <div className="relative w-full max-w-1110 overflow-hidden bg-clr-peach px-6 py-[6.563rem] sm:rounded-2xl sm:py-16 ">
          <picture>
            <source
              srcSet={currentCategory.desktopImg}
              media="(min-width: 64rem)"
            />
            <source
              srcSet="/assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg"
              media="(min-width: 48rem)"
            />
            <Image
              src="/assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg"
              alt=""
              width={876}
              height={584}
              className={`pointer-events-none absolute bottom-0 left-2/4 top-0 h-[36.5rem] w-[36.5rem] -translate-x-2/4 object-cover object-right md:left-auto md:right-0 md:top-2/4 md:w-[54.75rem] md:-translate-y-2/4 md:translate-x-0 md:object-left ${currentCategory.classes}`}
            />
          </picture>
          <div className="relative z-10 flex flex-col items-center text-center text-clr-white">
            <h1 className="header-title mb-6">{currentCategory.title}</h1>
            <p className="header-text max-w-sm">{currentCategory.content}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DesignHeader;
