import type { Metadata } from "next";
import CallToAction from "@/components/shared/CallToAction";
import AboutHeader from "@/components/our-company/AboutHeader";
import AboutCard from "@/components/our-company/AboutCard";
import Countries from "@/components/shared/Countries";

export const metadata: Metadata = {
  title: "Designo | About Us",
  description:
    "Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.",
};

export default function OurCompany() {
  return (
    <main className="overflow-hidden">
      <AboutHeader />
      <div
        aria-hidden="true"
        className="background-leaf before:bottom-[-17.125rem] before:left-[-10.313rem]"
      ></div>
      <AboutCard category="talent" />
      <Countries />
      <div
        aria-hidden="true"
        className="background-leaf before:bottom-[-15.875rem] before:right-[-35rem]"
      ></div>
      <AboutCard category="realDeal" reverse={true} />
      <CallToAction />
    </main>
  );
}
