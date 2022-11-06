import React from "react";
import { ProjectMedia } from "./ProjectMedia";
import { ComponentStory, Meta } from "@storybook/react";
// @ts-ignore
import desktopImage from 'assets/images/projects/tramsformation/tramsformation_desktop_preview.jpg';
// @ts-ignore
import mobileImage from 'assets/images/projects/tramsformation/tramsformation_mobile_preview.jpg';
// @ts-ignore
import imagePortrait from 'assets/images/projects/tramsformation/tramsformation_print_preview.jpg';
// @ts-ignore
import imageLandscape from 'assets/images/projects/tramsformation/tramsformer_w_1_preview.jpg';

export default {
  title: "ProjectMedia",
  component: ProjectMedia
} as Meta

const Template: ComponentStory<typeof ProjectMedia> = (args) => <div style={{ display: "flex" }}><ProjectMedia {...args} /></div>;

export const Desktop = Template.bind({});
Desktop.args = {
  type: "website",
  platform: "desktop",
  title: "Desktop Media",
  thumbnail: desktopImage,
  url: "https://tramsformation.com.au"
}

export const Mobile = Template.bind({});
Mobile.args = {
  type: "website",
  platform: "mobile",
  title: "Mobile Media",
  thumbnail: mobileImage,
  url: "https://tramsformation.com.au"
}

export const ImagePortrait = Template.bind({});
ImagePortrait.args = {
  type: "image",
  orientation: "portrait",
  title: "Image (Portrait)",
  thumbnail: imagePortrait
}

export const ImageLandscape = Template.bind({});
ImageLandscape.args = {
  type: "image",
  orientation: "landscape",
  title: "Image (Landscape)",
  thumbnail: imageLandscape
}
