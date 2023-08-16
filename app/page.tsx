import Hero from "@/components/home/Hero";
import ViewDesign from "@/components/ViewDesign";

export default function Home() {
  return (
    <>
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
    </>
  );
}
