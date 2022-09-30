import { NextPage } from "next";
import { getAllData, getEvent, getFilteredComments } from "../../utils/db";
import type { Event, Comment } from "../../utils/types";

interface EventPageProps {
  event: Event;
  comments: Comment[];
}

const EventsPage: NextPage<EventPageProps> = ({ event }) => {
  return (
    <div className="relative w-full h-screen ">
      <div className="w-full justify-center items-center absolute z-20 -translate-x-1/2 top-[5%] left-1/2 flex flex-col gap-5">
        <div className="w-40 h-40 overflow-hidden border-4 border-white rounded-full sm:w-48 sm:h-48 md:w-60 md:h-60">
          <img src={event.image} className="object-cover w-full h-full" />
        </div>

        <div className="container flex flex-col items-center justify-center w-full gap-2 p-4 mx-auto ">
          <h1 className="w-full text-2xl font-bold text-center text-white md:text-3xl lg:4xl">
            {event.title}
          </h1>
          <span className="font-semibold text-white/90">
            {new Date(event.date).toLocaleDateString("US-en", {
              dateStyle: "medium",
            })}
          </span>
          <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-yellow-500 text-gray-800">
            {event.location}
          </span>
        </div>
        <div>
          <p className="w-full text-center mg:text-lg text-md text-white/70">
            {event.description}
          </p>
        </div>
      </div>
      <div className="relative w-full h-full">
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-slate-900/90"></div>
        <img src={event.image} className="object-cover w-full h-full " />
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const selectedEvent: Event | undefined = getEvent(params.eventId);
  const eventComments: Comment[] = getFilteredComments(params.eventId);

  if (!selectedEvent) {
    return {
      notFound: true,
    };
  }

  return {
    props: { event: selectedEvent, comments: eventComments },
  };
};

export const getStaticPaths = async () => {
  const allEvents: Event[] = getAllData<Event>("events");
  const eventsPaths: { params: { eventId: string } }[] = allEvents.map(
    (event: Event) => {
      return { params: { eventId: event.id } };
    }
  );

  return {
    paths: eventsPaths,
    fallback: false,
  };
};

export default EventsPage;
