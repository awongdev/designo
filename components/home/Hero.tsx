import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section>
      <div className="relative flex justify-center">
        <div
          className="absolute bottom-0 left-2/4 right-0 top-0 z-[-1] hidden w-full max-w-1110 -translate-x-2/4 lg:block"
          aria-hidden
        >
          <div className="absolute left-[-10.313rem] top-2/4 h-full max-h-[37.125rem] w-full max-w-[62.875rem] bg-leaf bg-no-repeat"></div>
        </div>
        <div className="relative h-full min-h-[52.688rem] w-full max-w-1110 overflow-hidden bg-clr-peach sm:mx-6 sm:rounded-2xl md:mx-10 lg:flex lg:min-h-[40rem] lg:items-center">
          <div className="relative z-20 flex flex-col items-center px-6 pt-20 text-center text-clr-white md:pt-[3.75rem] lg:items-start lg:px-24 lg:pt-0 lg:text-left">
            <h1 className="header-title mb-[0.875rem] max-w-sm sm:mb-6 sm:max-w-xl lg:mb-10">
              Award-winning custom designs and digital branding solutions
            </h1>
            <p className="header-text mb-6 max-w-xs sm:max-w-[27.813rem] lg:mb-10">
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <Link href="/our-company">
              <Button color="white">Learn More</Button>
            </Link>
          </div>
          <Image
            src={"/assets/home/desktop/bg-pattern-hero-home.svg"}
            width={640}
            height={640}
            alt=""
            className="pointer-events-none absolute left-0 top-2/4 z-10 min-h-[40rem] min-w-[40rem] -translate-y-2/4 object-contain opacity-70 sm:left-3/4 sm:-translate-x-2/4 lg:left-auto lg:right-0 lg:top-0 lg:translate-x-0 lg:translate-y-0"
          />
          <div>
            <Image
              src={"/assets/home/desktop/image-hero-phone.png"}
              width={475}
              height={868}
              alt="Phone displaying a Designo design"
              className="absolute -bottom-80 left-2/4 z-10 min-h-[54.25rem] min-w-[29.688rem] -translate-x-2/4 object-cover lg:-bottom-60 lg:left-auto lg:right-0 lg:translate-x-0"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
