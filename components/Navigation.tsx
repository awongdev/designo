"use client";
import Image from "next/image";
import Logo from "../public/assets/shared/desktop/logo-dark.png";
import Hamburger from "../public/assets/shared/mobile/icon-hamburger.svg";
import MobileNavigation from "./MobileNavigation";
import Link from "next/link";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav>
      <div className="mx-auto flex max-w-1110 justify-between px-6 py-[2.125rem] md:px-10 md:py-16">
        <Link href="/">
          <Image src={Logo} width={202} height={30} alt="Designo logo" />
        </Link>
        <ul className="hidden items-center gap-[2.625rem] text-sm uppercase tracking-2px md:flex">
          <li className="relative">
            <Link href="/our-company" className="animate-underline">
              Our Company
            </Link>
          </li>
          <li className="relative">
            <Link href="/locations" className="animate-underline">
              Locations
            </Link>
          </li>
          <li className="relative">
            <Link href="/contact" className="animate-underline">
              Contact
            </Link>
          </li>
        </ul>
        <Image
          src={Hamburger}
          width={20}
          height={20}
          alt="Hamburger menu"
          className="cursor-pointer object-contain md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
      {isOpen && <MobileNavigation />}
    </nav>
  );
};

export default Navigation;
