import type { Metadata } from "next";
import CallToAction from "@/components/shared/CallToAction";
import DesignHeader from "@/components/design/DesignHeader";
import ProjectCard from "@/components/design/ProjectCard";
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
            <ProjectCard project="timBrown" />
            <ProjectCard project="boxedWater" />
            <ProjectCard project="science" />
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
