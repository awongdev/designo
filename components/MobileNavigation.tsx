import Link from "next/link";

const MobileNavigation = () => {
  return (
    <div className="md:hidden">
      <div className="bg-clr-black px-6 py-12">
        <ul className="inline-flex flex-col gap-8 text-2xl uppercase tracking-2px text-clr-white">
          <li>
            <Link
              href="/our-company"
              className="transition-colors duration-200 hover:text-clr-peach"
            >
              Our Company
            </Link>
          </li>
          <li>
            <Link
              href="/locations"
              className="transition-colors duration-200 hover:text-clr-peach"
            >
              Locations
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="transition-colors duration-200 hover:text-clr-peach"
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
