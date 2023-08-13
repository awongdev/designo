import Link from "next/link";

const MobileNavigation = () => {
  return (
    <div className="md:hidden">
      <div className="bg-clr-black px-6 py-12">
        <ul className="inline-flex flex-col gap-8 text-2xl uppercase tracking-2px text-clr-white">
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
              href="/locations"
              className="animate-underline after:bg-clr-white"
            >
              Locations
            </Link>
          </li>
          <li className="relative max-w-fit">
            <Link
              href="/contact"
              className="animate-underline after:bg-clr-white"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="fixed h-full w-full bg-clr-black/50"></div>
    </div>
  );
};

export default MobileNavigation;
