import React from "react";
import { DecoratorFn } from "@storybook/react";

// Receive a component and apply a bordered container with max width of 400px.
export const withMaxWidth: DecoratorFn = (Story) => (
  <div style={{ maxWidth: 400, margin: "auto", border: "1px solid #fab" }}>
    <Story />
  </div>
);

export const withColLg4: DecoratorFn = (Story) => (
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-12">
        <Story />
      </div>
    </div>
  </div>
);
