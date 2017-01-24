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
      target: "sitepoint",
      images: {
        tileOff: "/public/assets/images/projects/sitepoint_off.jpg",
        tileOn: "/public/assets/images/projects/sitepoint_on.jpg",
      },
      url: "https://www.sitepoint.com",
      products: "Company media website, Premium platform, forums",
      technology: "HTML, CSS, ES6, React, Redux, Node.js, MobX, RoR, PHP",
      description: "Working with Agile development team to maintain and upgrade company WordPress and Premium platforms. WordPress media site featured a new homepage and article layouts with server-side rendered front-end components. Premium members platform completely renovated the library design as well as shifting front-end components from Rails to React and Redux.",
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
      target: "legoFlinders",
      images: {
        tileOff: "/public/assets/images/projects/legoFlinders_off.jpg",
        tileOn: "/public/assets/images/projects/legoFlinders_on.jpg",
      },
      products: "Artwork, prints",
      technology: "LEGO Digital Designer, Photoshop, POV-Ray",
      description: "The combination of visiting Brickvention, unfulfilled childhood LEGO dreams, and a love for the great city that is Melbourne sparked off this idea. The project took a year to complete, over 43,000 parts, and many visits to the actual location. LDD model was then converted and rendered in POV-Ray before touch up artwork in Photoshop.",
      media: [
        {
          type: "image",
          thumbnail: "/public/assets/images/projects/legoFlinders/legoFlinders_preview.jpg",
          url: "/public/assets/images/projects/legoFlinders/legoFlinders_full.jpg",
          title: "LEGO FLinders St art print",
        },
      ],
    },
    {
      title: "Tramsformation",
      target: "tramsformation",
      images: {
        tileOff: "/public/assets/images/projects/tramsformation_off.jpg",
        tileOn: "/public/assets/images/projects/tramsformation_on.jpg",
      },
      url: "http://tramsformer.com.au",
      products: "3D Models, artwork, website, transformable toy",
      technology: "HTML, CSS, jQuery, PHP, MySQL, Photoshop, 3DS Max, 3D printing",
      description: "A personal project that started with a failed art competition entry. Featuring a website with shop, 3D models, T-shirts, prints and a 3D printed transformable figure.",
      media: [
        {
          type: "website",
          platform: "mobile",
          thumbnail: "/public/assets/images/projects/tramsformation/tramsformation_mobile_preview.jpg",
          url: "http://tramsformer.com",
          title: "Tramsformation mobile site",
        },
        {
          type: "website",
          platform: "desktop",
          thumbnail: "/public/assets/images/projects/tramsformation/tramsformation_desktop_preview.jpg",
          url: "http://tramsformer.com",
          title: "Tramsformation desktop site",
        },
        {
          type: "image",
          thumbnail: "/public/assets/images/projects/tramsformation/tramsformation_print_preview.jpg",
          url: "/public/assets/images/projects/tramsformation/tramsformation_print_full.jpg",
          title: "Tramsformer art print",
        },
        {
          type: "image",
          thumbnail: "",
          url: "",
          title: "Tramsformer model",
        },
      ],
    },
  ],
};
