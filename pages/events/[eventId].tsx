import { NextPage } from "next";
import { Fragment } from "react";
import EventComponent from "../../components/Event";
import { getAllData, getEvent, getFilteredComments } from "../../utils/db";
import type { Event, Comment } from "../../utils/types";

interface EventPageProps {
  event: Event;
  comments: Comment[];
}

const EventsPage: NextPage<EventPageProps> = ({ event }) => {
  return (
    <Fragment>
      <EventComponent eventData={event} />
    </Fragment>
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
