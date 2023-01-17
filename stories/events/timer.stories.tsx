import "../../styles/css/style.css";
import React from "react";
import { ComponentMeta, DecoratorFn } from "@storybook/react";
import UpcomingEventTimer from "../../components/events/timer";

const eventDetailsImage: DecoratorFn = (Story) => (
  <div className="events-details-image">
    <Story />
  </div>
);

export default {
  title: "UpcomingEventTimer",
  component: UpcomingEventTimer,
  decorators: [eventDetailsImage],
} as ComponentMeta<typeof UpcomingEventTimer>;

export const Timer = () => <UpcomingEventTimer date={new Date()} />;
