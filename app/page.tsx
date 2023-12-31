import Hero from "@/components/home/Hero";
import ViewDesign from "@/components/shared/ViewDesign";
import CoreValue from "@/components/home/CoreValue";
import CallToAction from "@/components/shared/CallToAction";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div
        aria-hidden="true"
        className="background-leaf before:bottom-[-17.125rem] before:left-[-10.313rem]"
      ></div>
      <section>
        <div className="mx-6 my-[7.5rem] grid justify-center md:mx-10 lg:my-40">
          <div className="grid max-w-1110 gap-4 lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-[1.875rem]">
            <div className="lg:row-span-2">
              <ViewDesign design="webDesignLg" />
            </div>
            <ViewDesign design="appDesign" />
            <ViewDesign design="graphicDesign" />
          </div>
        </div>
      </section>
      <section>
        <div className="mx-6 pb-[7.5rem] md:mx-10 md:pb-[4.25rem] lg:flex lg:justify-center lg:pb-40">
          <div className="flex max-w-1110 flex-col gap-20 lg:flex-row lg:gap-[1.875rem]">
            <CoreValue value="passionate" direction="left" />
            <CoreValue value="resourceful" direction="bottom" />
            <CoreValue value="friendly" direction="top" />
          </div>
        </div>
      </section>
      <div
        aria-hidden="true"
        className="background-leaf rotate-180 before:left-[-10.313rem] before:top-[-7.75rem]"
      ></div>
      <CallToAction />
    </main>
  );
}
