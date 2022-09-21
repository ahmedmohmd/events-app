import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import SectionHeading from "../components/core/SectionHeading";
import EventsList from "../components/EventsList";
import { getFeaturedEvents } from "../utils/db";
import type { Event } from "../utils/types";

interface HomePageProps {
  events: Event[];
}

const HomePage: NextPage<HomePageProps> = ({ events }) => {
  return (
    <div>
      <div className="relative mb-16">
        <div className="absolute inset-0 object-cover w-full !h-full">
          <Image
            objectFit="cover"
            width={1905}
            height={700}
            src="/images/festival.jpg"
            alt="Festival Image"
          />
        </div>
        <div className="relative bg-orange-500/80 bg-opacity-90 sm:h-[400px] lg:h-[500px] xl:h-[700px]">
          <svg
            className="absolute inset-x-0 text-[#fff7ee] -bottom-1"
            viewBox="0 0 1160 163"
          >
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
          </svg>
          <div className="relative px-4 py-16 mx-auto overflow-hidden translate-y-10 h-96 md:h-auto md:translate-y-12 xl:translate-y-32 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-start justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-[1.2] tracking-tight text-white sm:text-4xl xl:text-6xl lg:text-5xl sm:leading-none">
                  Here, You can Know Our All{" "}
                  <span className="font-extrabold text-slate-800/90">
                    Events
                  </span>
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                  This is a Testing Website to Show All events, Which Builded By
                  Next JS and TypeScript.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionHeading>
        <span className="text-3xl md:text-4xl xl:text-4xl text-slate-800/90 font-luckiestGuy">
          Featured <span className="text-orange-500/90">Events</span>
        </span>
      </SectionHeading>
      <EventsList events={events} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const featuredEvents: Event[] = getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
  };
};

export default HomePage;
