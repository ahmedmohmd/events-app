import { NextPage } from "next";
import { Fragment } from "react";
import EventsList from "../../components/EventsList";
import SelectList from "../../components/SelectList";
import { getAllData } from "../../utils/db";
import type { Event } from "../../utils/types";
import SectionHeading from "../../components/core/SectionHeading";

interface EventsPageProps {
  events: Event[];
}

const EventsPage: NextPage<EventsPageProps> = ({ events }) => {
  if (events.length === 0) {
    return <h1>Sorry Ther is No Events Found!</h1>;
  }

  return (
    <Fragment>
      <div className="container flex flex-col-reverse items-center justify-between w-full p-4 mx-auto md:flex-row">
        <SectionHeading>
          <span className="text-3xl lg:text-4xl text-slate-900/90">Events</span>
        </SectionHeading>
        <SelectList />
      </div>
      <EventsList events={events} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const allEvents: Event[] = getAllData("events");

  return {
    props: {
      events: allEvents,
    },
  };
};

export default EventsPage;
