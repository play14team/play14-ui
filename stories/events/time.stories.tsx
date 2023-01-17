import React from "react";
import { ComponentMeta } from "@storybook/react";
import EventTime from "../../components/events/time";

export default {
  title: "Time",
  component: EventTime,
} as ComponentMeta<typeof EventTime>;

export const Default = () => <EventTime time={new Date()} />;
