import { FC, Fragment } from "react";
import EventsList from "../../components/EventsList";
import { getFilteredEvents } from "../../utils/db";
import type { Event } from "../../utils/types";

interface FilteredEventsPageProps {
  events: Event[];
}

const FilteredEventsPage: FC<FilteredEventsPageProps> = ({ events }) => {
  if (events.length === 0) {
    return <h1>Sorry Ther is No Events Found!</h1>;
  }

  return (
    <Fragment>
      <EventsList events={events} />
    </Fragment>
  );
};

export const getServerSideProps = async (context) => {
  const { slug } = context.params;

  const month = +slug[0];
  const year = +slug[1];

  const filteredEvents = getFilteredEvents(month, year);

  return {
    props: {
      events: filteredEvents,
    },
  };
};

export default FilteredEventsPage;
