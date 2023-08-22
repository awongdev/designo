import type { Metadata } from "next";
import CallToAction from "@/components/shared/CallToAction";
import DesignHeader from "@/components/shared/DesignHeader";
import Card from "@/components/shared/Card";
import ViewDesign from "@/components/shared/ViewDesign";

export const metadata: Metadata = {
  title: "Designo | App Design",
  description:
    "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
};

export default function AppDesign() {
  return (
    <main>
      <DesignHeader category="appDesign" />
      <section>
        <div className="card-container">
          <div className="card-grid">
            <Card project="airfilter" />
            <Card project="eyecam" />
            <Card project="faceit" />
            <Card project="todo" />
            <Card project="loopstudios" />
          </div>
        </div>
      </section>
      <section>
        <div className="design-container">
          <div className="design-grid">
            <ViewDesign design="webDesignSm" />
            <ViewDesign design="graphicDesign" />
          </div>
        </div>
      </section>
      <CallToAction />
    </main>
  );
}
