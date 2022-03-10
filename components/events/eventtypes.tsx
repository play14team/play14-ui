export type Event = {
  slug: string;
  name: string;
  start: Date;
  end: Date;
  status: string;
};

export type Entity<T> = {
  id: number;
  attributes: T;
};

export type EventProps = {
  events: Entity<Event>[];
};
