import Link from "next/link";
import { Fragment } from "react";
import { links } from "@/constants/links";

type Props = {
  setIsOpen: (value: boolean) => void;
};

const MobileNavigation = ({ setIsOpen }: Props) => {
  return (
    <div className="absolute left-0 right-0 z-40 md:hidden">
      <div className="bg-clr-black px-6 py-12">
        <ul className="inline-flex flex-col gap-8 text-2xl uppercase tracking-2px text-clr-white">
          {links.map((link, index) => (
            <Fragment key={index}>
              <li className="relative max-w-fit">
                <Link
                  href={link.href}
                  className="animate-underline after:bg-clr-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.text}
                </Link>
              </li>
            </Fragment>
          ))}
        </ul>
      </div>
      <div
        className="fixed inset-0 z-[-1] h-full w-full bg-clr-black/50"
        onClick={() => setIsOpen(false)}
      ></div>
    </div>
  );
};

export default MobileNavigation;
