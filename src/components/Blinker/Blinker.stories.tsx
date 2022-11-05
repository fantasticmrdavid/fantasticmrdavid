import React from "react";
import { Blinker } from "./Blinker";
import { ComponentStory, Meta } from "@storybook/react";

export default {
  title: "Blinker",
  component: Blinker
} as Meta

const Template: ComponentStory<typeof Blinker> = () => <Blinker />;

export const Default = Template.bind({});
