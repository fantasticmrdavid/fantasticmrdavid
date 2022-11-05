import React from "react";
import { ScopeSpinner } from "./ScopeSpinner";
import { ComponentStory, Meta } from "@storybook/react";

export default {
  title: "ScopeSpinner",
  component: ScopeSpinner
} as Meta

const Template: ComponentStory<typeof ScopeSpinner> = () => <div style={{ margin: "10em" }}><ScopeSpinner /></div>;

export const Default = Template.bind({});
