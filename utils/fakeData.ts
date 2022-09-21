import type { Event, Comment } from "./types";

const allFakeEvents: Event[] = [
  {
    id: "e1",
    title: "Event 1",
    description: "Hello From Event One",
    location: "Egypt-Cairo",
    date: "10-4-2021",
    image: "/images/e1.png",
    featured: false,
  },
  {
    id: "e2",
    title: "Event 2",
    description: "Hello From Event Two",
    location: "Egypt-Qina",
    date: "2-3-2020",
    image: "/images/e2.png",
    featured: true,
  },
  {
    id: "e3",
    title: "Event 3",
    description: "Hello From Event Three",
    location: "Egypt-Alex",
    date: "2-7-2019",
    image: "/images/e3.png",
    featured: false,
  },
  {
    id: "e4",
    title: "Event 4",
    description: "Hello From Event Four",
    location: "Egypt-Giza",
    date: "2-3-2020",
    image: "/images/e4.png",
    featured: true,
  },
];

const filteredFakeEvents: Event[] = [
  {
    id: "e2",
    title: "Event 2",
    description: "Hello From Event Two",
    location: "Egypt-Qina",
    date: "2-3-2020",
    image: "/images/e2.png",
    featured: true,
  },
  {
    id: "e4",
    title: "Event 4",
    description: "Hello From Event Four",
    location: "Egypt-Giza",
    date: "2-3-2020",
    image: "/images/e4.png",
    featured: true,
  },
];

const featuredEvents: Event[] = [
  {
    id: "e2",
    title: "Event 2",
    description: "Hello From Event Two",
    location: "Egypt-Qina",
    date: "2-3-2020",
    image: "/images/e2.png",
    featured: true,
  },
  {
    id: "e4",
    title: "Event 4",
    description: "Hello From Event Four",
    location: "Egypt-Giza",
    date: "2-3-2020",
    image: "/images/e4.png",
    featured: true,
  },
];

const singleFakeEvent: Event = {
  id: "e3",
  title: "Event 3",
  description: "Hello From Event Three",
  location: "Egypt-Alex",
  date: "2-7-2019",
  image: "/images/e3.png",
  featured: false,
};

const allFakeComments: Comment[] = [
  {
    eventId: "e1",
    name: "User One",
    description: "This Comment for Event One",
  },
  {
    eventId: "e2",
    name: "User Two",
    description: "This Comment for Event Two",
  },
  {
    eventId: "e2",
    name: "User Three",
    description: "This Comment for Event Two",
  },
  {
    eventId: "e3",
    name: "User Four",
    description: "This Comment for Event Three",
  },
];

const filteredFakeComments: Comment[] = [
  {
    eventId: "e2",
    name: "User Two",
    description: "This Comment for Event Two",
  },
  {
    eventId: "e2",
    name: "User Three",
    description: "This Comment for Event Two",
  },
];

export {
  allFakeEvents,
  allFakeComments,
  filteredFakeEvents,
  filteredFakeComments,
  singleFakeEvent,
  featuredEvents,
};
