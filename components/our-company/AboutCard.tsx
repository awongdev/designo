import Image from "next/image";
import { categories } from "@/constants/aboutInfo";
import { imgGrayBlur } from "@/constants/imgGrayBlur";

type CategoryT = { category: "talent" | "realDeal"; reverse?: boolean };

const AboutCard = ({ category, reverse }: CategoryT) => {
  const currentCategory = categories[category];

  return (
    <section>
      <div className="mb-[7.5rem] flex justify-center sm:mx-6 md:mx-10 lg:mb-40">
        <div
          className={`flex w-full max-w-1110 flex-col sm:overflow-hidden sm:rounded-2xl ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          <picture>
            <source
              srcSet={currentCategory.img.desktop}
              media="(min-width: 64rem)"
            />
            <source
              srcSet={currentCategory.img.tablet}
              media="(min-width: 29.688rem)"
            />
            <Image
              src={currentCategory.img.mobile}
              placeholder="blur"
              blurDataURL={imgGrayBlur}
              width={1024}
              height={640}
              alt={currentCategory.alt}
              className="h-full max-h-[20rem] min-h-[20rem] object-cover object-top lg:max-h-[40rem] lg:max-w-[476px]"
            />
          </picture>
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-clr-bg-peach py-20">
            <div className="relative z-10 mx-6 flex flex-col gap-6 text-center sm:max-w-xl lg:mx-24 lg:text-start">
              <h2 className="secondary-title text-clr-peach">
                {currentCategory.title}
              </h2>
              {currentCategory.text.map((text, index) => (
                <p key={index} className="secondary-text">
                  {text}
                </p>
              ))}
            </div>
            <Image
              src="/assets/shared/desktop/bg-pattern-three-circles.svg"
              width={584}
              height={584}
              alt=""
              className={`pointer-events-none absolute inset-0 h-[36.5rem] w-[36.5rem] -scale-x-100 object-cover object-right opacity-25 sm:bottom-11 sm:left-auto sm:right-3 sm:top-auto lg:bottom-0 lg:right-auto lg:object-left ${
                reverse ? "lg:left-0" : "lg:left-[-9.125rem]"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
