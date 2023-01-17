import React from "react";
import { ComponentMeta } from "@storybook/react";
import { withMaxWidth } from "../../.storybook/decorators";

import EventSidebar from "../../components/events/sidebar";
import { open, over, cancelled, announced } from "./event";

export default {
  title: "EventSidebar",
  component: EventSidebar,
  decorators: [withMaxWidth],
} as ComponentMeta<typeof EventSidebar>;

export const Open = () => <EventSidebar event={open} />;

export const Closed = () => <EventSidebar event={over} />;

export const Cancelled = () => <EventSidebar event={cancelled} />;

export const Announced = () => <EventSidebar event={announced} />;
