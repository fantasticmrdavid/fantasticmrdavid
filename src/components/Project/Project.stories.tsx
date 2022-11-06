import React from "react";
import { Project } from "./Project";
import { Meta } from "@storybook/react";
// @ts-ignore
import gaTileOff from 'assets/images/projects/ga_off.jpg'
// @ts-ignore
import gaTileOn from 'assets/images/projects/ga_on.jpg'
// @ts-ignore
import legoFlindersTileOff from 'assets/images/projects/legoFlinders_off.jpg'
// @ts-ignore
import legoFlindersTileOn from 'assets/images/projects/legoFlinders_on.jpg'
// @ts-ignore
import legoFlindersThumbnail from 'assets/images/projects/legoFlinders/legoFlinders_preview.jpg'
// @ts-ignore
import tramsformationTileOff from 'assets/images/projects/tramsformation_off.jpg'
// @ts-ignore
import tramsformationTileOn from 'assets/images/projects/tramsformation_on.jpg'
import { WorkLocationProvider } from "contexts/WorkLocation";
import { LoadingProvider } from "contexts/Loading";

export default {
  title: "Project",
  component: Project
} as Meta

const projectList = [
  {
    title: 'General Assembly',
    tagline: 'Lead Instructor',
    target: 'ga',
    images: {
      tileOff: gaTileOff,
      tileOn: gaTileOn,
    },
    url: 'https://generalassemb.ly',
    technologies: 'HTML, CSS, JavaScript, PHP',
    description: 'Starting out as a co-working space, General Assembly has grown into a pioneer in education and career transformation, specializing in today’s most in-demand skills. They are a leading source for training, staffing, and career transitions, fostering a flourishing community of professionals pursuing careers they love.<br /><br />I taught the Front End Web Development (FEWD) part time course at General Assembly\'s Melbourne campus. Throughout the 10 week course, students learnt HTML, CSS, JavaScript, and fundamental programming skills to build their own website project. It was immensely rewarding with students moving on to roles ranging from Junior Developer to Project Manager.',
  },
  {
    title: 'LEGO Flinders St',
    tagline: 'CAD Art Project',
    target: 'legoFlinders',
    images: {
      tileOff: legoFlindersTileOff,
      tileOn: legoFlindersTileOn,
    },
    products: 'Artwork, prints',
    technologies: 'LEGO Digital Designer, Photoshop, POV-Ray',
    description: 'The combination of visiting <a href="http://www.brickventures.org.au/brickvention" target="_blank">Brickvention</a>, unfulfilled childhood LEGO dreams, and a love for the great city that is Melbourne left a nagging itch that my creative brain couldn\'t ignore. The LDD model took a year to complete, over 43,000 parts, and many visits to the actual location. It was then converted and rendered in POV-Ray before adding final Melbournian touch ups in Photoshop.',
    media: [
      {
        type: 'image',
        thumbnail: legoFlindersThumbnail,
        url: '/assets/images/projects/legoFlinders/legoFlinders_full.jpg',
        orientation: 'landscape',
        title: 'LEGO Flinders St art print',
        slug: 'legoFlinders',
      },
    ],
  },
  {
    title: 'Project Tramsformation',
    tagline: '3D Printing & Design',
    target: 'tramsformation',
    url: 'https://tramsformation.com.au',
    images: {
      tileOff: tramsformationTileOff,
      tileOn: tramsformationTileOn,
    },
    products: '3D models, artwork, website, online store, mailing list, transformable toys, packaging and collateral design',
    technologies: '3D printing, 3DS Max, ES6, React, Gatsby, Prismic, GraphQL, Photoshop',
    description: 'An ongoing personal project that started with a failed art competition entry. Many years of hacky development and sheer dumb stubborness have resulted in successfully producing custom designed transforming toy models of Melbourne\'s iconic trams. Other products that came along the way include websites, T-shirts, and art prints. I have so much respect for the engineering in those old 80\'s toys.',
  },
]

export const Default = () =>
  <LoadingProvider
    initialValues={{
      firstLoad: false,
      images: false,
      media: false,
      popup: false,
    }}
  >
    <WorkLocationProvider>
      <Project
        {...projectList[1]}
        nextProject={projectList[0]}
        previousProject= { projectList[2] }
      />
    </WorkLocationProvider>
  </LoadingProvider>
