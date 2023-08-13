"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../public/assets/shared/desktop/logo-dark.png";
import Hamburger from "../../public/assets/shared/mobile/icon-hamburger.svg";
import MobileNavigation from "./MobileNavigation";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav>
      <div className="flex justify-center">
        <div className="mx-6 flex w-full max-w-1110 items-center justify-between gap-4 py-[2.125rem] md:mx-10 md:py-16">
          <Link href="/">
            <Image src={Logo} width={202} height={30} alt="Designo logo" />
          </Link>
          <ul className="hidden gap-[2.625rem] text-sm uppercase tracking-2px md:flex">
            <li className="relative">
              <Link
                href="/our-company"
                className="animate-underline after:bg-clr-black"
              >
                Our Company
              </Link>
            </li>
            <li className="relative">
              <Link
                href="/locations"
                className="animate-underline after:bg-clr-black"
              >
                Locations
              </Link>
            </li>
            <li className="relative">
              <Link
                href="/contact"
                className="animate-underline after:bg-clr-black"
              >
                Contact
              </Link>
            </li>
          </ul>
          <Hamburger
            alt="Hamburger menu"
            className="cursor-pointer object-contain md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </div>
      </div>
      {isOpen && <MobileNavigation />}
    </nav>
  );
};

export default Navigation;
