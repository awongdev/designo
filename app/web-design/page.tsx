import type { Metadata } from "next";
import CallToAction from "@/components/shared/CallToAction";
import DesignHeader from "@/components/shared/DesignHeader";
import Card from "@/components/shared/Card";
import ViewDesign from "@/components/shared/ViewDesign";

export const metadata: Metadata = {
  title: "Designo | Web Design",
  description:
    "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
};

export default function WebDesign() {
  return (
    <main>
      <DesignHeader category="webDesign" />
      <section>
        <div className="card-container">
          <div className="card-grid">
            <Card project="express" />
            <Card project="transfer" />
            <Card project="photon" />
            <Card project="builder" />
            <Card project="blogr" />
            <Card project="camp" />
          </div>
        </div>
      </section>
      <section>
        <div className="design-container">
          <div className="design-grid">
            <ViewDesign design="appDesign" />
            <ViewDesign design="graphicDesign" />
          </div>
        </div>
      </section>
      <CallToAction />
    </main>
  );
}
