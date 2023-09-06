import type { Metadata } from "next";
import CallToAction from "@/components/shared/CallToAction";
import DesignHeader from "@/components/design/DesignHeader";
import ProjectCard from "@/components/design/ProjectCard";
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
            <ProjectCard project="express" />
            <ProjectCard project="transfer" />
            <ProjectCard project="photon" />
            <ProjectCard project="builder" />
            <ProjectCard project="blogr" />
            <ProjectCard project="camp" />
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
