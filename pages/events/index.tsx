import { NextPage } from "next";
import { Fragment } from "react";
import EventsList from "../../components/EventsList";
import SelectList from "../../components/SelectList";
import { getAllData } from "../../utils/db";
import type { Event } from "../../utils/types";

interface EventsPageProps {
  events: Event[];
}

const EventsPage: NextPage<EventsPageProps> = ({ events }) => {
  if (events.length === 0) {
    return <h1>Sorry Ther is No Events Found!</h1>;
  }

  return (
    <Fragment>
      <SelectList />
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
