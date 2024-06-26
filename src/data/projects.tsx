import React from "react";
import { Link } from "components/Link/Link";

export type ProjectData = {
  title: string;
  tagline: string;
  target: string;
  images: {
    [key: string]: string;
    tile: string;
  };
  urlLabel?: string;
  url?: string;
  products?: string;
  technologies: string;
  description: React.ReactNode;
  media?: any[];
};

const projects = [
  {
    title: "Binformer",
    tagline: "3D Printing & Design",
    target: "binformer",
    urlLabel: "the Binformer Blog",
    url: "https://binformer.com.au",
    images: {
      tile: "/assets/images/projects/binformer.jpg",
    },
    products: "3D models, artwork, website, mailing list, transformable toys",
    technologies: "3D printing, 3DS Max, Substack",
    description: (
      <>
        A successor to{" "}
        <Link href={"/work/tramsformation"}>Project Tramsformation</Link>, the
        Binformer is a project created while on holiday after a few glasses of
        wine. While initially conceived as little more than a fun joke, it has
        grown into a far more ambitious project with hopes to have a positive
        impact on our current state of plastic recycling in Australia. Read all
        about the development journey at the Binformer blog website.
      </>
    ),
    media: [
      {
        type: "image",
        thumbnail:
          "/assets/images/projects/binformer/all_robot_mode_preview.jpg",
        url: "/assets/images/projects/binformer/all_robot_mode.jpg",
        orientation: "landscape",
        title: "Binformer in Robot Mode",
        slug: "binformer_robot",
      },
      {
        type: "image",
        thumbnail: "/assets/images/projects/binformer/all_bin_mode_preview.jpg",
        url: "/assets/images/projects/binformer/all_bin_mode.jpg",
        orientation: "landscape",
        title: "Binformers in bin mode",
        slug: "binformer_alt",
      },
      {
        type: "image",
        thumbnail: "/assets/images/projects/binformer/parts_preview.jpg",
        url: "/assets/images/projects/binformer/parts.jpg",
        orientation: "landscape",
        title: "Binformer parts",
        slug: "binformer_parts",
      },
      {
        type: "image",
        thumbnail: "/assets/images/projects/binformer/green_bin_preview.jpg",
        url: "/assets/images/projects/binformer/green_bin.jpg",
        orientation: "landscape",
        title: "Green Binformer",
        slug: "binformer_green",
      },
      {
        type: "image",
        thumbnail: "/assets/images/projects/binformer/red_bin_preview.jpg",
        url: "/assets/images/projects/binformer/red_bin.jpg",
        orientation: "landscape",
        title: "Red Binformer",
        slug: "binformer_red",
      },
      {
        type: "image",
        thumbnail: "/assets/images/projects/binformer/recycled_preview.jpg",
        url: "/assets/images/projects/binformer/recycled.jpg",
        orientation: "landscape",
        title: "Recycled plastic Binformer",
        slug: "binformer_recycled",
      },
      {
        type: "image",
        thumbnail: "/assets/images/projects/binformer/sketch_preview.jpg",
        url: "/assets/images/projects/binformer/sketch.jpg",
        orientation: "portrait",
        title: "Initial scribble",
        slug: "binformer_sketch",
      },
    ],
  },
  {
    title: "Mini Retro TV",
    tagline: "3D Printing & Design",
    target: "retrotv",
    images: {
      tile: "/assets/images/projects/retropie_tv.jpg",
    },
    urlLabel: "Mini Retro TV on printables.com",
    url: "https://www.printables.com/model/362585-retro-tv-raspberry-pi-case",
    products: "Mini Retro TV",
    technologies: "Raspberry Pi, RetroPie, 3D printing",
    description: (
      <>
        A tiny retro TV case based on a Toshiba Blackstripe I designed and
        printed for a Raspberry Pi 3B to run RetroPie. Designed to fit a Pi 3B
        with a 3.5 inch HDMI MPI3508 LCD display. It currently sits on a shelf
        playing cartoons on loop. 3D printable files are available from the link
        below.
      </>
    ),
    media: [
      {
        type: "image",
        thumbnail: "/assets/images/projects/retropie_tv/retrotv_1_preview.jpg",
        url: "/assets/images/projects/retropie_tv/retrotv_1.jpg",
        orientation: "landscape",
        title: "RetroPie TV with wireless controller",
        slug: "retrotv_controller",
      },
      {
        type: "image",
        thumbnail: "/assets/images/projects/retropie_tv/retrotv_2_preview.jpg",
        url: "/assets/images/projects/retropie_tv/retrotv_2.jpg",
        orientation: "landscape",
        title: "RetroPie TV title screen",
        slug: "retrotv_title",
      },
      {
        type: "image",
        thumbnail: "/assets/images/projects/retropie_tv/parts_preview.jpg",
        url: "/assets/images/projects/retropie_tv/parts.jpg",
        orientation: "portrait",
        title: "RetroPie TV parts",
        slug: "retrotv_parts",
      },
      {
        type: "image",
        thumbnail: "/assets/images/projects/retropie_tv/back_open_preview.jpg",
        url: "/assets/images/projects/retropie_tv/back_open.jpg",
        orientation: "portrait",
        title: "RetroPie TV back panel open",
        slug: "retrotv_back_open",
      },
      {
        type: "image",
        thumbnail: "/assets/images/projects/retropie_tv/back_preview.jpg",
        url: "/assets/images/projects/retropie_tv/back.jpg",
        orientation: "landscape",
        title: "RetroPie TV back",
        slug: "retrotv_back",
      },
    ],
  },
  {
    title: "Zepben",
    tagline: "Team Lead",
    target: "zepben",
    images: {
      tile: "/assets/images/projects/zepben.jpg",
    },
    url: "https://zepben.com",
    products: "EDNAR (Electrical Distribution Network Access Register) Project",
    technologies: "ES6, React, Redux, Node.js",
    description:
      "Zepben is a consultancy that builds software for electrical distribution networks. My role was focused specifically on the EDNAR project, an application designed to support planned network access request workflows.",
  },
  {
    title: "SFF PC",
    tagline: "Custom Mini-PC Case",
    target: "sffpc",
    images: {
      tile: "/assets/images/projects/sffpc.jpg",
    },
    products: "ITX PC Case",
    technologies: "3D printing, laser cutting, PC parts",
    description: (
      <>
        I'd wanted to upgrade from my old PC for a while but wasn't feeling very
        inspired until seeing some Velka 5 builds. After deciding that the
        Velkas were a bit too much for my current budget, I found the{" "}
        <Link
          href={"https://www.thingiverse.com/thing:4638825"}
          target={"_blank"}
        >
          ITX_CR10-ONE on Thingiverse
        </Link>{" "}
        and thought I'd have a crack at a bit of DIY instead. I modified the
        original design to have open sides and top so that I could install some
        wood and acrylic panelling. A sheet of metal bracketing had to be
        sandwiched between the top panel and handle in order for the handle to
        manage the weight. Cable management was challenging but not impossible;
        next time round I'll probably put everything onto a 1TB M.2 and lose the
        SSD.
      </>
    ),
    media: [
      {
        type: "image",
        thumbnail: "/assets/images/projects/sffpc/parts_preview.jpg",
        url: "/assets/images/projects/retropie_tv/parts.jpg",
        orientation: "portrait",
        title: "3D printed case with PC components",
        slug: "sffpc_parts",
      },
      {
        type: "image",
        thumbnail: "/assets/images/projects/sffpc/inner_preview.jpg",
        url: "/assets/images/projects/sffpc/inner.jpg",
        orientation: "landscape",
        title: "PC components installed on inner frame",
        slug: "sffpc_inner",
      },
      {
        type: "image",
        thumbnail: "/assets/images/projects/sffpc/open_preview.jpg",
        url: "/assets/images/projects/sffpc/open.jpg",
        orientation: "landscape",
        title: "PC switched on before panels added.",
        slug: "sffpc_open",
      },
      {
        type: "image",
        thumbnail: "/assets/images/projects/sffpc/off_preview.jpg",
        url: "/assets/images/projects/sffpc/off.jpg",
        orientation: "landscape",
        title: "PC off",
        slug: "sffpc_off",
      },
      {
        type: "image",
        thumbnail: "/assets/images/projects/sffpc/complete_preview.jpg",
        url: "/assets/images/projects/sffpc/complete.jpg",
        orientation: "landscape",
        title: "Completed PC switch on",
        slug: "sffpc_complete",
      },
    ],
  },
  {
    title: "Mini Retro PC",
    tagline: "3D Printing & Design",
    target: "retropc",
    images: {
      tile: "/assets/images/projects/retro_pc.jpg",
    },
    urlLabel: "Mini Retro PC on printables.com",
    url: "https://www.printables.com/model/694802-retro-desktop-pc-raspberry-pi-case-v2",
    products: "Mini Retro PC",
    technologies: "Raspberry Pi, DOSBox, 3D printing",
    description: (
      <>
        A successor project to my Mini Retro TV project, I built a tiny retro PC
        case based on an old 286 PC I grew up with. Designed to fit a Pi 4B with
        a 3.5 inch HDMI MPI3508 LCD display, it also features a soundboard and
        a bootable SD card reader in the 5.25 floppy drive bay. Running DOSBox
        on Debian Buster I aimed to recreate as much as possible the retro PC
        experience of a bygone era. 3D printable files and build guide are
        available from the link below.
      </>
    ),
    media: [
      {
        type: "image",
        thumbnail: "/assets/images/projects/retro_pc/front_preview.jpg",
        url: "/assets/images/projects/retro_pc/front.jpg",
        orientation: "landscape",
        title: "Retro PC - Front",
        slug: "retropc_front",
      },
      {
        type: "image",
        thumbnail: "/assets/images/projects/retro_pc/back_preview.jpg",
        url: "/assets/images/projects/retro_pc/back.jpg",
        orientation: "landscape",
        title: "Retro PC - Back",
        slug: "retropc_back",
      },
      {
        type: "image",
        thumbnail:
          "/assets/images/projects/retro_pc/desktop_internal_preview.jpg",
        url: "/assets/images/projects/retro_pc/desktop_internal.jpg",
        orientation: "landscape",
        title: "Retro PC - Desktop internals",
        slug: "retropc_desktop_internal",
      },
      {
        type: "image",
        thumbnail:
          "/assets/images/projects/retro_pc/monitor_internal_preview.jpg",
        url: "/assets/images/projects/retro_pc/monitor_internal.jpg",
        orientation: "landscape",
        title: "Retro PC - Monitor internals",
        slug: "retropc_monitor_internal",
      },
      {
        type: "image",
        thumbnail: "/assets/images/projects/retro_pc/exploded_view_preview.jpg",
        url: "/assets/images/projects/retro_pc/exploded_view.jpg",
        orientation: "landscape",
        title: "Retro PC - CAD Assembly",
        slug: "retropc_exploded_view",
      },
      {
        type: "image",
        thumbnail: "/assets/images/projects/retro_pc/tim_preview.jpg",
        url: "/assets/images/projects/retro_pc/tim.jpg",
        orientation: "portrait",
        title: "Retro PC - The Incredible Machine",
        slug: "retropc_tim",
      },
      {
        type: "image",
        thumbnail: "/assets/images/projects/retro_pc/hackspace_preview.jpg",
        url: "/assets/images/projects/retro_pc/hackspace.jpg",
        orientation: "landscape",
        title: "Retro PC article published in Hackspace magazine",
        slug: "retropc_hackspace",
      },
    ],
  },
  {
    title: "Nerf Mods",
    tagline: "Tinkering & Electronics",
    target: "nerf",
    images: {
      tile: "/assets/images/projects/nerf.jpg",
    },
    urlLabel: "my YouTube channel",
    url: "https://www.youtube.com/@fantasticmrdavid1096/videos",
    products: "Modified Nerf blasters and accessories",
    technologies: "3D Printing, Nerf blasters, electronics",
    description: (
      <>
        Tinkering around with Nerf blasters for me has always been one of those
        hobbies that I float back in and out of over the years. While there's
        always the joy of trying to squeeze extra performance out of the things,
        I've also enjoyed having a hand at some cosmetic mods to add some more
        personal design touches. Modifying electronic blasters has been a great
        way to learn how to solder and apply some basic circuitry.
      </>
    ),
    media: [
      {
        type: "image",
        thumbnail: "/assets/images/projects/nerf/megalodon_preview.jpg",
        url: "/assets/images/projects/nerf/megalodon.jpg",
        orientation: "landscape",
        title: "Nerf Megalodon 100 round chain mod",
        slug: "nerf_megalodon",
      },
      {
        type: "image",
        thumbnail: "/assets/images/projects/nerf/stryfe_preview.jpg",
        url: "/assets/images/projects/nerf/stryfe.jpg",
        orientation: "landscape",
        title: "Nerf Stryfe full-auto solenoid LiPO mod",
        slug: "nerf_stryfe",
      },
      {
        type: "image",
        thumbnail: "/assets/images/projects/nerf/retaliator_preview.jpg",
        url: "/assets/images/projects/nerf/retaliator.jpg",
        orientation: "portrait",
        title: "Nerf Retaliator semi-auto solenoid LiPO mod",
        slug: "nerf_retaliator",
      },
      {
        type: "image",
        thumbnail: "/assets/images/projects/nerf/titan_preview.jpg",
        url: "/assets/images/projects/nerf/titan.jpg",
        orientation: "landscape",
        title: "Nerf Titan CS-50 3S LiPO mod",
        slug: "nerf_titan",
      },
    ],
  },
  {
    title: "KindyNow",
    tagline: "Front-End Engineer",
    target: "kindynow",
    images: {
      tile: "/assets/images/projects/kindynow_on.jpg",
    },
    url: "https://www.kindynow.com",
    products:
      "Child care search platform, Centre management platform, Mobile app, Admin platform",
    technologies:
      "HTML, CSS, ES6, SSR React, React-Native, Redux, TypeScript, Node.js, Jest, Enzyme, AWS, CircleCI",
    description: (
      <>
        KindyNow provides Australia's leading app and web service for helping
        parents find daycare for their children. As Lead Front-End engineer I
        architected and developed the company\'s flagship web assets, including
        a new child care search platform (Childcare Near Me), a rebuild of their
        existing booking management app (KindyNow), and admin tools for internal
        management of centres and bookings.
        <br />
        <br />I also managed and trained junior engineers, collaborated with the
        marketing team to prioritise and build features to maximise conversion
        goals, and provided guidance on UX and product strategy.
      </>
    ),
    media: [
      {
        type: "website",
        platform: "mobile",
        thumbnail: "/assets/images/projects/kindynow/cnm_mobile_preview.jpg",
        url: "https://childcarenearme.com.au",
        title: "Childcare Near Me mobile site",
        slug: "cnm_mobile_preview",
      },
      {
        type: "website",
        platform: "desktop",
        thumbnail: "/assets/images/projects/kindynow/cnm_search_preview.jpg",
        url: "https://childcarenearme.com.au",
        title: "Childcare Near Me search",
        slug: "cnm_search_preview",
      },
      {
        type: "website",
        platform: "mobile",
        thumbnail: "/assets/images/projects/kindynow/kn_app_preview.jpg",
        url: "https://www.kindynow.com",
        title: "KindyNow Mobile App",
        slug: "kn_app_preview",
      },
      {
        type: "website",
        platform: "desktop",
        thumbnail: "/assets/images/projects/kindynow/cnm_desktop_preview.jpg",
        url: "https://childcarenearme.com",
        title: "Childcare Near Me desktop site",
        slug: "cnm_desktop_preview",
      },
      {
        type: "website",
        platform: "desktop",
        thumbnail: "/assets/images/projects/kindynow/kn_desktop_preview.jpg",
        url: "https://www.kindynow.com",
        title: "KindyNow desktop site",
        slug: "kn_desktop_preview",
      },
    ],
  },
  {
    title: "Culture Amp",
    tagline: "Software Engineer",
    target: "cultureamp",
    images: {
      tile: "/assets/images/projects/cultureamp/ca_desktop_preview.jpg",
    },
    url: "https://cultureamp.com",
    products:
      "Homepage, Shoutouts, Goals, and various internal platform integrations",
    technologies: "React, Next.js, Tailwind CSS",
    description: (
      <>
        Culture Amp is the world’s leading employee experience platform,
        revolutionizing how 25 million employees across more than 6,500
        companies create a better world of work. Powered by people science and
        the most comprehensive employee dataset in the world, Culture Amp
        empowers companies of all sizes and industries to transform employee
        engagement, drive performance management, and develop high-performing
        teams.
        <br />
        <br />
        As a Front-End engineer I worked with various teams to build and deliver
        software features ranging from new features for customers to improving
        our internal developer tooling. Some highlights include building the
        Shoutouts web platform, mentoring junior engineers, and migrating
        codebases to Next.js.
      </>
    ),
    media: [
      {
        type: "website",
        platform: "desktop",
        thumbnail: "/assets/images/projects/cultureamp/ca_desktop_preview.jpg",
        url: "https://cultureamp.com",
        title: "Culture Amp website",
        slug: "cultureamp_desktop_preview",
      },
    ],
  },
  {
    title: "LEGO Flinders St",
    tagline: "CAD Art Project",
    target: "legoFlinders",
    images: {
      tile: "/assets/images/projects/legoFlinders_on.jpg",
    },
    products: "Artwork, prints",
    technologies: "LEGO Digital Designer, Photoshop, POV-Ray",
    description: (
      <>
        The combination of visiting{" "}
        <Link
          href="http://www.brickventures.org.au/brickvention"
          target="_blank"
        >
          Brickvention
        </Link>
        , unfulfilled childhood LEGO dreams, and a love for the great city that
        is Melbourne left a nagging itch that my creative brain couldn\'t
        ignore. The LDD model took a year to complete, over 43,000 parts, and
        many visits to the actual location. It was then converted and rendered
        in POV-Ray before adding final Melbournian touch ups in Photoshop.
      </>
    ),
    media: [
      {
        type: "image",
        thumbnail:
          "/assets/images/projects/legoFlinders/legoFlinders_preview.jpg",
        url: "/assets/images/projects/legoFlinders/legoFlinders_full.jpg",
        orientation: "landscape",
        title: "LEGO Flinders St art print",
        slug: "legoFlinders",
      },
    ],
  },
  {
    title: "General Assembly",
    tagline: "Lead Instructor",
    target: "ga",
    images: {
      tile: "/assets/images/projects/ga_on.jpg",
    },
    url: "https://generalassemb.ly",
    technologies: "HTML, CSS, JavaScript, PHP",
    description: (
      <>
        Starting out as a co-working space, General Assembly has grown into a
        pioneer in education and career transformation, specializing in today’s
        most in-demand skills. They are a leading source for training, staffing,
        and career transitions, fostering a flourishing community of
        professionals pursuing careers they love.
        <br />
        <br />I taught the Front End Web Development (FEWD) part time course at
        General Assembly\'s Melbourne campus. Throughout the 10 week course,
        students learnt HTML, CSS, JavaScript, and fundamental programming
        skills to build their own website project. It was immensely rewarding
        with students moving on to roles ranging from Junior Developer to
        Project Manager.
      </>
    ),
  },
  {
    title: "Project Tramsformation",
    tagline: "3D Printing & Design",
    target: "tramsformation",
    url: "https://tramsformation.com.au",
    images: {
      tile: "/assets/images/projects/tramsformation_on.jpg",
    },
    products:
      "3D models, artwork, website, online store, mailing list, transformable toys, packaging and collateral design",
    technologies:
      "3D printing, 3DS Max, ES6, React, Gatsby, Prismic, GraphQL, Photoshop",
    description:
      "An ongoing personal project that started with a failed art competition entry. Many years of hacky development and sheer dumb stubborness have resulted in successfully producing custom designed transforming toy models of Melbourne's iconic trams. Other products that came along the way include websites, T-shirts, and art prints. I have so much respect for the engineering in those old 80's toys.",
    media: [
      {
        type: "image",
        thumbnail:
          "/assets/images/projects/tramsformation/tramsformer_w_1_preview.jpg",
        url: "/assets/images/projects/tramsformation/tramsformer_w_1_full.jpg",
        orientation: "landscape",
        title: "Tramsformer W-Class Robot Mode",
        slug: "tramsformation_w_1",
      },
      {
        type: "image",
        thumbnail:
          "/assets/images/projects/tramsformation/tramsformer_w_2_preview.jpg",
        url: "/assets/images/projects/tramsformation/tramsformer_w_2_full.jpg",
        orientation: "landscape",
        title: "Tramsformer W-Class Tram Mode",
        slug: "tramsformation_w_2",
      },
      {
        type: "image",
        thumbnail:
          "/assets/images/projects/tramsformation/tramsformation_print_preview.jpg",
        url: "/assets/images/projects/tramsformation/tramsformation_print_full.jpg",
        orientation: "portrait",
        title: "Tramsformer art print",
        slug: "tramsformation_print",
      },
      {
        type: "image",
        thumbnail:
          "/assets/images/projects/tramsformation/tramsformation_transform_preview.jpg",
        url: "/assets/images/projects/tramsformation/tramsformation_transform_full.jpg",
        orientation: "portrait",
        title: "Tramsformer transformation",
        slug: "tramsformation_transform",
      },
      {
        type: "image",
        thumbnail:
          "/assets/images/projects/tramsformation/tramsformation_model_preview.jpg",
        url: "/assets/images/projects/tramsformation/tramsformation_model_full.jpg",
        orientation: "portrait",
        title: "Tramsformer model",
        slug: "tramsformation_model",
      },
      {
        type: "image",
        thumbnail:
          "/assets/images/projects/tramsformation/tramsformation_model_altmode_preview.jpg",
        url: "/assets/images/projects/tramsformation/tramsformation_model_altmode_full.jpg",
        orientation: "landscape",
        title: "Tramsformer model tram mode",
        slug: "tramsformation_model_altmode",
      },
      {
        type: "website",
        platform: "mobile",
        thumbnail:
          "/assets/images/projects/tramsformation/tramsformation_mobile_preview.jpg",
        title: "Tramsformation mobile site",
        slug: "tramsformation_mobile",
      },
      {
        type: "website",
        platform: "desktop",
        thumbnail:
          "/assets/images/projects/tramsformation/tramsformation_desktop_preview.jpg",
        title: "Tramsformation desktop site",
        slug: "tramsformation_desktop",
      },
    ],
  },
];

export default projects;
