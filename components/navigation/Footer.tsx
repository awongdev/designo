import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assets/shared/desktop/logo-light.png";
import FacebookIcon from "../../public/assets/shared/desktop/icon-facebook.svg";
import YoutubeIcon from "../../public/assets/shared/desktop/icon-youtube.svg";
import TwitterIcon from "../../public/assets/shared/desktop/icon-twitter.svg";
import PinterestIcon from "../../public/assets/shared/desktop/icon-pinterest.svg";
import InstagramIcon from "../../public/assets/shared/desktop/icon-instagram.svg";

const socialIcons = [
  {
    id: 0,
    Icon: FacebookIcon,
    alt: "Facebook icon",
    href: "https://www.facebook.com/",
  },
  {
    id: 1,
    Icon: YoutubeIcon,
    alt: "Youtube icon",
    href: "https://www.youtube.com/",
  },
  {
    id: 2,
    Icon: TwitterIcon,
    alt: "Twitter icon",
    href: "https://twitter.com/",
  },
  {
    id: 3,
    Icon: PinterestIcon,
    alt: "Pinterest icon",
    href: "https://www.pinterest.com/",
  },
  {
    id: 4,
    Icon: InstagramIcon,
    alt: "Instagram icon",
    href: "https://www.instagram.com/",
  },
];

const Footer = () => {
  return (
    <footer className="bg-clr-black">
      <div className="flex justify-center px-6 py-16 md:px-10 md:py-20">
        <div className="flex w-full max-w-1110 flex-col items-center gap-10 md:gap-8">
          <div className="flex w-full flex-col md:flex-row md:justify-between md:border-b md:border-clr-white/10 md:pb-10">
            <div className="mb-8 border-b border-clr-white/10 pb-8 md:mb-0 md:border-none md:pb-0">
              <Link href="/">
                <Image
                  src={Logo}
                  width={202}
                  height={27}
                  alt="Designo logo"
                  className="mx-auto md:mx-0"
                />
              </Link>
            </div>
            <ul className="flex flex-col items-center gap-6 text-center text-sm font-normal uppercase tracking-2px text-clr-white md:flex-row md:gap-[2.625rem]">
              <li className="relative max-w-fit">
                <Link
                  href="/our-company"
                  className="animate-underline after:bg-clr-white"
                >
                  Our Company
                </Link>
              </li>
              <li className="relative max-w-fit">
                <Link
                  href="locations"
                  className="animate-underline after:bg-clr-white"
                >
                  Locations
                </Link>
              </li>
              <li className="relative max-w-fit">
                <Link
                  href="contact"
                  className="animate-underline after:bg-clr-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex w-full flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-10 md:flex-row md:gap-14 lg:gap-52">
              <div className="text-center leading-[1.625rem] text-clr-white/50 md:text-left">
                <p className="font-bold">Designo Central Office</p>
                <p>3886 Wellington Street</p>
                <p>Toronto, Ontario M9C 3J5</p>
              </div>
              <div className="text-center leading-[1.625rem] text-clr-white/50 md:text-left">
                <p className="font-bold">Contact Us (Central Office)</p>
                <p>P : +1 253-863-8967</p>
                <p>M : contact@designo.co</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {socialIcons.map(({ id, alt, Icon, href }) => (
                <Link href={href} key={id}>
                  <Icon
                    alt={alt}
                    className="fill-current text-clr-peach transition-colors duration-300 hover:text-clr-light-peach"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
