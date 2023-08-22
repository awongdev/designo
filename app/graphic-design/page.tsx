import type { Metadata } from "next";
import CallToAction from "@/components/shared/CallToAction";
import DesignHeader from "@/components/shared/DesignHeader";
import Card from "@/components/shared/Card";
import ViewDesign from "@/components/shared/ViewDesign";

export const metadata: Metadata = {
  title: "Designo | Graphic Design",
  description:
    "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
};

export default function GraphicDesign() {
  return (
    <main>
      <DesignHeader category="graphicDesign" />
      <section>
        <div className="card-container">
          <div className="card-grid">
            <Card project="timBrown" />
            <Card project="boxedWater" />
            <Card project="science" />
          </div>
        </div>
      </section>
      <section>
        <div className="design-container">
          <div className="design-grid">
            <ViewDesign design="appDesign" />
            <ViewDesign design="webDesignSm" />
          </div>
        </div>
      </section>
      <CallToAction />
    </main>
  );
}
