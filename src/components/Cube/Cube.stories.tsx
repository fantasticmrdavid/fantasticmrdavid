import React from "react";
import { Cube } from "./Cube";
import { ComponentStory, Meta } from "@storybook/react";

export default {
  title: "Cube",
  component: Cube
} as Meta

const Template: ComponentStory<typeof Cube> = (args) => <div style={{ width: "100%", height: "100%", position: "relative" }}><Cube {...args} /></div>;

export const Loading = Template.bind({ isLoading: true });
export const Loaded = Template.bind({ isLoading: false });
