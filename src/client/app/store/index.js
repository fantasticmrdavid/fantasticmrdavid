export var store = {
  menu: [
    {
      label: "About",
      target: "about",
    },
    {
      label: "Latest Work",
      target: "work",
    },
    {
      label: "Contact",
      target: "contact",
    },
  ],
  projects: [
    {
      title: "SitePoint",
      tagline: "Front-End Engineer",
      target: "sitepoint",
      images: {
        tileOff: "/public/assets/images/projects/sitepoint_off.jpg",
        tileOn: "/public/assets/images/projects/sitepoint_on.jpg",
      },
      url: "https://www.sitepoint.com",
      products: "Company media website, Premium platform, forums",
      technologies: "HTML, CSS, ES6, React, Redux, Node.js, MobX, RoR, PHP",
      description: "As Front-End engineer I worked within an Agile development team to maintain and upgrade the company Articles WordPress and Premium RoR platforms. The revised articles site featured a new homepage and template designs with server-side rendered front-end components. We completely renovated the Premium members platform library design as well as shifted front-end components from Rails to React and Redux.",
      media: [
        {
          type: "website",
          platform: "mobile",
          thumbnail: "/public/assets/images/projects/sitepoint/sitepoint_mobile_preview.jpg",
          url: "https://www.sitepoint.com",
          title: "SitePoint mobile site",
        },
        {
          type: "website",
          platform: "desktop",
          thumbnail: "/public/assets/images/projects/sitepoint/sitepoint_preview.jpg",
          url: "https://www.sitepoint.com",
          title: "SitePoint desktop site",
        },
        {
          type: "website",
          platform: "desktop",
          thumbnail: "/public/assets/images/projects/sitepoint/sitepoint_premium_preview.jpg",
          url: "https://www.sitepoint.com/premium",
          title: "SitePoint Premium desktop site",
        },
        {
          type: "website",
          platform: "mobile",
          thumbnail: "/public/assets/images/projects/sitepoint/sitepoint_premium_mobile_preview.jpg",
          url: "https://www.sitepoint.com/premium",
          title: "SitePoint Premium mobile site",
        },
      ],
    },
    {
      title: "LEGO Flinders St",
      tagline: "CAD Art Project",
      target: "legoFlinders",
      images: {
        tileOff: "/public/assets/images/projects/legoFlinders_off.jpg",
        tileOn: "/public/assets/images/projects/legoFlinders_on.jpg",
      },
      products: "Artwork, prints",
      technologies: "LEGO Digital Designer, Photoshop, POV-Ray",
      description: "The combination of visiting Brickvention, unfulfilled childhood LEGO dreams, and a love for the great city that is Melbourne sparked off this project. The LDD model took a year to complete, over 43,000 parts, and many visits to the actual location. It was then converted and rendered in POV-Ray before adding final Melbournian touch ups in Photoshop.",
      media: [
        {
          type: "image",
          thumbnail: "/public/assets/images/projects/legoFlinders/legoFlinders_preview.jpg",
          url: "/public/assets/images/projects/legoFlinders/legoFlinders_full.jpg",
          orientation: "landscape",
          title: "LEGO FLinders St art print",
        },
      ],
    },
    {
      title: "General Assembly",
      tagline: "Lead Instructor",
      target: "ga",
      images: {
        tileOff: "/public/assets/images/projects/ga_off.jpg",
        tileOn: "/public/assets/images/projects/ga_on.jpg",
      },
      url: "https://generalassemb.ly",
      technologies: "HTML, CSS, JavaScript, PHP",
      description: "I currently teach the Front End Web Development (FEWD) part time course at General Assembly's Melbourne campus. Throughout the 10 week course, students learn HTML, CSS, JavaScript, and fundamental programming skills to build their own website project. It has been immensely rewarding with students moving on to roles ranging from Junior Developer to Project Manager.",
    },
    {
      title: "Tramsformation",
      tagline: "3D Printing & Design",
      target: "tramsformation",
      images: {
        tileOff: "/public/assets/images/projects/tramsformation_off.jpg",
        tileOn: "/public/assets/images/projects/tramsformation_on.jpg",
      },
      url: "http://tramsformer.com.au",
      products: "3D Models, artwork, website, transformable toy",
      technologies: "HTML, CSS, jQuery, PHP, MySQL, Photoshop, 3DS Max, 3D printing",
      description: "A personal project that started with a failed art competition entry. Featuring a website with shop, 3D models, T-shirts, prints and a 3D printed transformable figure. I have so much respect for the engineering in those old 80's toys.",
      media: [
        {
          type: "website",
          platform: "mobile",
          thumbnail: "/public/assets/images/projects/tramsformation/tramsformation_mobile_preview.jpg",
          url: "http://tramsformer.com.au",
          title: "Tramsformation mobile site",
        },
        {
          type: "website",
          platform: "desktop",
          thumbnail: "/public/assets/images/projects/tramsformation/tramsformation_desktop_preview.jpg",
          url: "http://tramsformer.com.au",
          title: "Tramsformation desktop site",
        },
        {
          type: "image",
          thumbnail: "/public/assets/images/projects/tramsformation/tramsformation_print_preview.jpg",
          url: "/public/assets/images/projects/tramsformation/tramsformation_print_full.jpg",
          orientation: "portrait",
          title: "Tramsformer art print",
        },
        {
          type: "image",
          thumbnail: "/public/assets/images/projects/tramsformation/tramsformation_transform_preview.jpg",
          url: "/public/assets/images/projects/tramsformation/tramsformation_transform_full.jpg",
          orientation: "portrait",
          title: "Tramsformer transfomration",
        },
        {
          type: "image",
          thumbnail: "/public/assets/images/projects/tramsformation/tramsformation_model_preview.jpg",
          url: "/public/assets/images/projects/tramsformation/tramsformation_model_full.jpg",
          orientation: "portrait",
          title: "Tramsformer model",
        },
      ],
    },
  ],
  socialLinks: [
    {
      title: "LinkedIn",
      href: "https://au.linkedin.com/in/fantasticmrdavid",
      icon: "linkedIn-square",
      fa: true,
    },
    {
      title: "Github",
      href: "https://github.com/fantasticmrdavid/",
      icon: "github",
      fa: true,
    },
    {
      title: "Redbubble",
      href: "https://www.redbubble.com/people/misterdavid/",
      icon: "redbubble",
    },
  ],
};
