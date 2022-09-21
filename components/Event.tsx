import Link from "next/link";
import { FC } from "react";
import { randomInt } from "../utils/helpers";
import type { Event } from "../utils/types";
import Image from "next/image";
import classnames from "classnames";

interface EventComponentProps {
  eventData: Event;
}

const colors: string[] = [
  "hover:bg-[#e3567d]/60",
  "hover:bg-[#ea8763]/60",
  "hover:bg-[#60c2e6]/60",
  "hover:bg-[#f1c75b]/60",
  "hover:bg-[#7650d2]/60",
  "hover:bg-[#75d084]/60",
  "hover:bg-[#5b57ea]/60",
];

const EventComponent: FC<EventComponentProps> = ({ eventData }) => {
  return (
    <Link href={`/events/${eventData.id}`}>
      <a
        className={`event h-48 flex rounded-2xl lg:h-48 xl:h-64 overflow-hidden relative hover:cursor-pointer`}
      >
        <div
          className={classnames(
            "absolute flex top-0 left-0 w-full h-full z-20  justify-center items-center duration-300 opacity-0",
            colors[randomInt(0, colors.length - 1)]
          )}
        >
          <h3 className="text-lg font-bold text-white md:text-xl xl:text-2xl ">
            {eventData.title}
          </h3>
        </div>
        <Image
          width={1000}
          height={500}
          src={eventData.image}
          className="object-cover !w-full !h-full"
        />
      </a>
    </Link>
  );
};

export default EventComponent;
