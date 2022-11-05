import React from "react";
import { LogoMenu } from "./LogoMenu";
import { ComponentStory, Meta } from "@storybook/react";

export default {
  title: "LogoMenu",
  component: LogoMenu
} as Meta

const Template: ComponentStory<typeof LogoMenu> = (args) => <LogoMenu {...args} />;

export const Default = Template.bind({});
