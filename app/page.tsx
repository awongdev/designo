import Hero from "@/components/home/Hero";
import ViewDesign from "@/components/ViewDesign";
import CoreValue from "@/components/home/CoreValue";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
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
          <div className="relative flex max-w-1110 flex-col gap-20 before:absolute before:bottom-0 before:left-auto before:right-[-10.25rem] before:top-[7.75rem] before:z-[-1] before:hidden before:h-[37.125rem] before:w-[62.875rem] before:rotate-180 before:bg-leaf before:bg-no-repeat lg:flex-row lg:gap-[1.875rem] before:lg:block">
            <CoreValue value="passionate" direction="left" />
            <CoreValue value="resourceful" direction="bottom" />
            <CoreValue value="friendly" direction="top" />
          </div>
        </div>
      </section>
      <section>
        <CallToAction />
      </section>
    </main>
  );
}
