interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  image: string;
  date: string;
  featured: boolean;
}

interface Comment {
  eventId: string;
  name: string;
  description: string;
}

export type { Event, Comment };
