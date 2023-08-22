"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, Fragment } from "react";
import Logo from "../../public/assets/shared/desktop/logo-dark.png";
import Hamburger from "../../public/assets/shared/mobile/icon-hamburger.svg";
import CloseButton from "../../public/assets/shared/mobile/icon-close.svg";
import MobileNavigation from "./MobileNavigation";
import { links } from "@/constants/links";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav>
      <div className="flex justify-center">
        <div className="relative z-50 flex w-full max-w-1110 items-center justify-between gap-4 bg-clr-white px-6 py-[2.125rem] md:mx-10 md:px-0 md:py-16">
          <Link href="/">
            <Image
              src={Logo}
              width={202}
              height={30}
              alt="Designo logo"
              onClick={() => setIsOpen(false)}
            />
          </Link>
          <ul className="hidden gap-[2.625rem] text-sm uppercase tracking-2px md:flex">
            {links.map((link, index) => (
              <Fragment key={index}>
                <li className="relative">
                  <Link
                    href={link.href}
                    className="animate-underline after:bg-clr-black"
                  >
                    {link.text}
                  </Link>
                </li>
              </Fragment>
            ))}
          </ul>
          {isOpen ? (
            <CloseButton
              aria-label="Close navigation menu"
              alt="Close button"
              className="cursor-pointer object-contain md:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
            />
          ) : (
            <Hamburger
              aria-label="Open navigation menu"
              alt="Hamburger button"
              className="cursor-pointer object-contain md:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
            />
          )}
        </div>
      </div>
      {isOpen && <MobileNavigation setIsOpen={setIsOpen} />}
    </nav>
  );
};

export default Navigation;
