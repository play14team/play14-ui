import { Enum_Event_Status, EventDetailsFragment } from "../../models/graphql";

const open: EventDetailsFragment = {
  slug: "event-2023-01",
  name: "Event 2023",
  start: new Date("2023-01-20 18:30"),
  end: new Date("2023-01-22 17:30"),
  status: Enum_Event_Status.Open,
  description: "<h2>Description</h2>",
  contactEmail: "team@play14.org",
  defaultImage: {
    data: {
      attributes: {
        url: "/styles/images/events/event1.jpg",
        name: "event1",
      },
    },
  },
};

const over = { ...open, status: Enum_Event_Status.Over };

const cancelled = { ...open, status: Enum_Event_Status.Cancelled };

const announced = { ...open, status: Enum_Event_Status.Announced };

export { open, over, cancelled, announced };
