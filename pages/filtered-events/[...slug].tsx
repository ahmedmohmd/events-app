import { FC } from "react";
import SectionHeading from "../../components/core/SectionHeading";
import EventsList from "../../components/EventsList";
import { getFilteredEvents } from "../../utils/db";
import type { Event } from "../../utils/types";
import ErrorPage from "../404";

interface FilteredEventsPageProps {
  events: Event[];
}

const FilteredEventsPage: FC<FilteredEventsPageProps> = ({ events }) => {
  if (events.length === 0) {
    return <ErrorPage />;
  }

  return (
    <div className="pt-16">
      <SectionHeading>
        <span className="text-3xl lg:text-4xl text-slate-900/90">
          Filtered{" "}
          <span className="text-3xl lg:text-4xl text-orange-600/90">
            Events
          </span>
        </span>
      </SectionHeading>
      <EventsList events={events} />
    </div>
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
