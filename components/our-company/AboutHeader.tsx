import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-center">
      <div className="flex w-full max-w-1110 flex-col-reverse overflow-hidden sm:mx-6 sm:mb-[7.5rem] sm:rounded-2xl md:mx-10 md:mb-40 lg:flex-row">
        <div className="relative flex flex-col items-center overflow-hidden bg-clr-peach px-6 py-20 text-center text-clr-white lg:items-start lg:justify-center lg:px-24 lg:text-left">
          <h1 className="header-title relative z-10 mb-6 lg:mb-8">About Us</h1>
          <p className="header-text relative z-10 max-w-xl lg:max-w-[28.625rem]">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
          <picture>
            <source
              srcSet="/assets/about/desktop/bg-pattern-hero-about-desktop.svg"
              media="(min-width: 40rem)"
            />
            <Image
              src="/assets/about/mobile/bg-pattern-hero-about-mobile.svg"
              alt=""
              width={876}
              height={584}
              className="pointer-events-none absolute right-0 top-[-9.125rem] h-[18.25rem] w-[36.5rem] object-cover object-right sm:bottom-[7.563rem] sm:left-[-6.563rem] sm:top-auto sm:h-[40rem] sm:w-[40rem] lg:bottom-0 lg:left-auto lg:right-0"
            />
          </picture>
        </div>
        <picture>
          <source
            srcSet="/assets/about/desktop/image-about-hero.jpg"
            media="(min-width: 64rem)"
          />
          <source
            srcSet="/assets/about/tablet/image-about-hero.jpg"
            media="(min-width: 40rem)"
          />
          <Image
            src="/assets/about/desktop/image-about-hero.jpg"
            alt="Workers at a table with laptops, notebooks, and plant"
            width={1110}
            height={790}
            className="max-h-[20rem] object-cover lg:max-h-[30rem] lg:max-w-[29.75rem]"
          />
        </picture>
      </div>
    </header>
  );
};

export default Header;
