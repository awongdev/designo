import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";

const CallToAction = () => {
  return (
    <section>
      <div className="relative before:absolute before:bottom-[-1px] before:left-0 before:right-0 before:top-2/4 before:bg-clr-black md:before:top-3/4">
        <div className="mx-6 flex flex-col items-center md:mx-10">
          <div className="relative w-full max-w-1110 overflow-hidden rounded-2xl bg-clr-peach">
            <picture>
              <source
                media="(min-width: 48rem)"
                srcSet="/assets/shared/desktop/bg-pattern-call-to-action.svg"
              />
              <Image
                src="/assets/shared/desktop/bg-pattern-three-circles.svg"
                alt=""
                width={876}
                height={584}
                className="absolute right-0 top-2/4 h-[36.5rem] w-[36.5rem] -translate-y-2/4 object-cover object-right md:w-[54.75rem] md:object-center"
              />
            </picture>
            <div className="relative z-10 flex flex-col items-center px-6 py-16 text-center text-clr-white md:py-14 lg:flex-row lg:justify-between lg:px-[5.938rem] lg:py-[4.5rem] lg:text-left">
              <div className="flex flex-col items-center lg:items-start">
                <h3 className="mb-4 text-[2rem] font-medium leading-9 md:max-w-xs md:text-[2.5rem] md:leading-10">
                  Let’s talk about your project
                </h3>
                <p className="mb-8 text-15px leading-6 md:max-w-md md:text-base">
                  Ready to take it to the next level? Contact us today and find
                  out how our expertise can help your business grow.
                </p>
              </div>
              <Link href="/contact" className="">
                <Button>Get in touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
