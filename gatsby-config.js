module.exports = {
  siteMetadata: {
    title: `Matt Hoffman Photography`,
    description: `Beautiful, professional photographs for marketing real estate. Serving Prescott Valley, Prescott, and surrounding area.`,
    author: "Matt Hoffman",
    image:
      "https://www.matthoffmanphoto.com/static/de9cd208614cdc2803b70c0cee91982f/e7136/LorraineCt_2491.webp",
    name: `Matt Hoffman Photography`,
    tagline: `Beautiful Images for Real Estate`,
    menuLinks: [
      {
        name: "Real Estate Photos",
        url: `/`,
        type: "internal",
      },
      {
        name: "Drone Services",
        url: `/drone/`,
        type: "internal",
      },
      {
        name: "Virtual Staging",
        url: `/virtual-staging/`,
        type: "internal",
      },
      {
        name: "Headshots",
        url: `/headshots`,
        type: "internal",
      },
      // {
      //   name: "Pricing",
      //   url: "/prices/",
      //   type: "internal" // internal or anchor
      // },
      {
        name: "Home Prep",
        url: "/home-prep/",
        type: "internal",
      },
      {
        name: "Terms of Service",
        url: "/terms",
        type: "internal",
      },
      // {
      //   name: "Product Photography",
      //   url: "/product",
      //   type: "internal",
      // },
      {
        name: "About",
        url: "/about",
        type: "internal",
      },
      {
        name: "Contact",
        url: "/contact-me/",
        type: "internal",
      },
    ],
    social: [
      {
        name: `Facebook`,
        url: `https://facebook.com/MattHoffmanPhoto`,
      },
      {
        name: `Twitter`,
        url: `https://twitter.com/socialmatt7`,
      },
      {
        name: `Instagram`,
        url: `https://instagram.com/socialmatt7`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Serena (n)`,
        short_name: `Serena`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        icon: `content/assets/icon.png`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-theme-serena`,
      options: {
        margin: `3`,
      },
    },
  ],
  //pathPrefix: "/mhphoto_serena",
}
