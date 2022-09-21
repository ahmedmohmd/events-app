import { FC } from "react";
import { Event } from "../utils/types";
import EventComponent from "./Event";

interface EventsListProps {
  events: Event[];
}

const EventsList: FC<EventsListProps> = ({ events }) => {
  return (
    <div className="container grid gap-5 px-4 py-10 mx-auto md:grid-cols-2 lg:grid-cols-3">
      {events.map((event: Event) => {
        return (
          <div key={event.id}>
            <EventComponent eventData={event} />
          </div>
        );
      })}
    </div>
  );
};

export default EventsList;
