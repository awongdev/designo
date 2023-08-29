import Image from "next/image";
import dynamic from "next/dynamic";
import { locations } from "@/constants/locations";

type LocationT = { location: "canada" | "australia" | "uk"; reverse?: boolean };

const Map = dynamic(() => import("./Map"), { ssr: false });

const LocationCard = ({ location, reverse }: LocationT) => {
  const currentLocation = locations[location];
  return (
    <>
      <div className="flex justify-center sm:mx-6 md:mx-10">
        <div className="grid w-full max-w-1110 sm:gap-8 lg:grid-cols-3">
          <div
            className={`relative order-2 overflow-hidden bg-clr-bg-peach sm:rounded-2xl lg:col-span-2 ${
              reverse ? "" : "lg:order-none"
            }`}
          >
            <div className="grid grid-flow-row gap-6 px-[4.688rem] py-20 text-center sm:max-w-fit sm:grid-cols-2 sm:gap-x-20 sm:py-[5.5rem] sm:text-start md:gap-x-28">
              <h2 className="relative z-10 text-[2rem] font-medium leading-[3rem] text-clr-peach sm:col-span-2 sm:text-[2.5rem]">
                {currentLocation.title}
              </h2>
              <address className="relative z-10 whitespace-pre-line text-15px not-italic leading-6 sm:text-base">
                <span className="block font-bold">
                  {currentLocation.office}
                </span>
                {currentLocation.address}
              </address>
              <address className="relative z-10 whitespace-pre-line text-15px not-italic leading-6 sm:text-base">
                <span className="block font-bold">Contact</span>
                {currentLocation.contact}
              </address>
            </div>
            <Image
              src="/assets/shared/desktop/bg-pattern-three-circles.svg"
              alt=""
              width={584}
              height={584}
              className="pointer-events-none absolute inset-0 h-[36.5rem] w-[36.5rem] -scale-x-100 transform object-cover object-right opacity-25 sm:inset-auto sm:bottom-0 sm:left-0"
            />
          </div>
          <div className="relative z-10 overflow-hidden sm:rounded-2xl">
            <Map
              coordinates={currentLocation.coordinates}
              popup={currentLocation.popup}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationCard;
