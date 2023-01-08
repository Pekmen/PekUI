import React from "react";

import TestComponent from "../TestComponent";

export default {
  title: "TestComponent",
  component: TestComponent,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = () => <TestComponent />;

export const Test = Template.bind({});
