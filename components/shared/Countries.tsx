"use client";
import RoundImg from "./RoundImg";
import { useRouter } from "next/navigation";

type Category = "canada" | "australia" | "united-kingdom";
type GradientDirection = "top" | "right" | "bottom" | "left";

const countries = [
  { title: "Canada", category: "canada", gradientDirection: "top" },
  { title: "Australia", category: "australia", gradientDirection: "left" },
  {
    title: "United Kingdom",
    category: "united-kingdom",
    gradientDirection: "bottom",
  },
];

const Countries = () => {
  const router = useRouter();
  return (
    <section className="mx-6 my-[7.5rem] flex justify-center md:mx-10 lg:my-0 lg:mb-40">
      <div className="flex w-full max-w-1110 flex-col justify-center gap-12 lg:flex-row lg:justify-evenly">
        {countries.map((country, index) => (
          <div key={index} className="flex w-full flex-col items-center">
            <RoundImg
              category={country.category as Category}
              gradientDirection={country.gradientDirection as GradientDirection}
            />
            <h3 className="mb-8 mt-12 whitespace-nowrap text-xl font-medium uppercase tracking-[5px]">
              {country.title}
            </h3>
            <button
              type="button"
              onClick={() => router.push("/locations")}
              className="btn btn-peach"
            >
              See Location
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Countries;
