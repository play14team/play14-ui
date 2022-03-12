export interface Event {
  slug: string;
  name: string;
  start: Date;
  end: Date;
  status: string;
  description: string;
}

export type Entity<T> = {
  id: number;
  attributes: T;
};

export type EventsProps = {
  events: Entity<Event>[];
};

export type EventProps = {
  event: Event;
};
