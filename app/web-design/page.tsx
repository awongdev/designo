import type { Metadata } from "next";
import CallToAction from "@/components/shared/CallToAction";
import Header from "@/components/shared/Header";

export const metadata: Metadata = {
  title: "Designo | Web Design",
  description:
    "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
};

export default function WebDesign() {
  return (
    <main>
      <Header category="webDesign" />
      <section>
        <CallToAction />
      </section>
    </main>
  );
}
