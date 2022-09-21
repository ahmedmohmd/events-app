//* Imports
import fs from "fs";
import path from "path";
import type { Event, Comment } from "./types";

//* Public Functions
const getFilePath = (fileName: string): string => {
  return path.resolve(process.cwd(), "db", `${fileName}.json`);
};

const getAllData = <T>(fileName: string): T[] => {
  const filePath = getFilePath(fileName),
    data: string = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

//* Events Functions
const getEvent = (eventId: string, fileName?: string): Event | undefined => {
  let allData: Event[] = getAllData("events");

  if (fileName) {
    allData = getAllData(fileName);
  }

  const selectedElement: Event | undefined = allData.find(
    (element: Event) => element.id === eventId
  );

  return selectedElement;
};

const getFilteredEvents = (month: number, year: number, fileName?: string) => {
  let events: Event[] = getAllData("events");

  if (fileName) {
    events = getAllData<Event>(fileName);
  }

  const filteredEvents: Event[] = events.filter((event: Event) => {
    const eventDate: Date = new Date(event.date),
      eventMonth: number = eventDate.getMonth() + 1,
      eventYear: number = eventDate.getFullYear();

    return eventMonth === month && eventYear === year;
  });

  return filteredEvents;
};

const getFeaturedEvents = (fileName?: string): Event[] => {
  let allEvents: Event[] = getAllData("events");

  if (fileName) {
    allEvents = getAllData("fake-events");
  }
  const featuredEvents: Event[] = allEvents.filter(
    (event: Event) => event.featured
  );

  return featuredEvents;
};

//* Comments Functions
const getFilteredComments = (eventId: string, fileName?: string): Comment[] => {
  let allComments: Comment[] = getAllData<Comment>("comments");

  if (fileName) {
    allComments = getAllData<Comment>(fileName);
  }

  const filteredComments: Comment[] = allComments.filter(
    (comment: Comment) => comment.eventId === eventId
  );

  return filteredComments;
};

export {
  getFilteredEvents,
  getAllData,
  getEvent,
  getFilteredComments,
  getFeaturedEvents,
};
