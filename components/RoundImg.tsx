import Image from "next/image";
import React from "react";

interface Props {
  category:
    | "passionate"
    | "resourceful"
    | "friendly"
    | "canada"
    | "australia"
    | "united-kingdom";
  gradientDirection: "top" | "right" | "bottom" | "left";
}

const categories = {
  passionate: {
    img: "/assets/home/desktop/illustration-passionate.svg",
    alt: "Illustration of a person working on a computer",
  },
  resourceful: {
    img: "/assets/home/desktop/illustration-resourceful.svg",
    alt: "Illustration of a person working on a tablet",
  },
  friendly: {
    img: "/assets/home/desktop/illustration-friendly.svg",
    alt: "Illustration of two people",
  },
  canada: {
    img: "/assets/shared/desktop/illustration-canada.svg",
    alt: "Illustration of a city",
  },
  australia: {
    img: "/assets/shared/desktop/illustration-australia.svg",
    alt: "Illustration of an arena",
  },
  "united-kingdom": {
    img: "/assets/shared/desktop/illustration-united-kingdom.svg",
    alt: "Illustration of a bridge",
  },
};

const directions = {
  top: "90deg",
  right: "180deg",
  bottom: "270deg",
  left: "0deg",
};

const RoundImg = ({ category, gradientDirection }: Props) => {
  const currentCategory = categories[category];
  return (
    <div className="relative">
      <Image
        src={currentCategory.img}
        alt={currentCategory.alt}
        width={202}
        height={202}
        className="absolute z-10"
      />
      <Image
        src="/assets/shared/desktop/bg-pattern-small-circle.svg"
        alt=""
        width={202}
        height={202}
        className={`rotate-[${directions[gradientDirection]}]`}
      />
    </div>
  );
};

export default RoundImg;
