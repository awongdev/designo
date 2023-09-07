import type { Metadata } from "next";
import LocationCard from "@/components/locations/LocationCard";
import CallToAction from "@/components/shared/CallToAction";

export const metadata: Metadata = {
  title: "Designo | Locations",
  description: "Explore our locations to discover the nearest office to you.",
};

export default function Locations() {
  return (
    <main>
      <h1 className="sr-only">Locations</h1>
      <section className="mb-[7.5rem] grid gap-10 sm:gap-[7.5rem] lg:mb-40 lg:gap-8">
        <LocationCard location="canada" />
        <LocationCard location="australia" reverse={true} />
        <LocationCard location="uk" />
      </section>
      <CallToAction />
    </main>
  );
}
