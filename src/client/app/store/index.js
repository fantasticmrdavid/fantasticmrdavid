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
    },
    {
      title: "LEGO Flinders St",
      target: "legoFlinders",
      images: {
        tileOff: "/public/assets/images/projects/legoFlinders_off.jpg",
        tileOn: "/public/assets/images/projects/legoFlinders_on.jpg",
      },
      products: "Artwork, prints",
      technology: "Lego Digital Designer, Photoshop, POV-Ray",
      description: "The combination of visiting Brickvention, unfulfilled childhood LEGO dreams, and a love for the great city that is Melbourne sparked off this idea. The project took a year to complete, over 43,000 parts, and many visits to the actual location. LDD model was then converted and rendered in POV-Ray before touch up artwork in Photoshop.",
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
    },
  ],
};
