module.exports = {
  siteMetadata: {
    title: `Sleep Apps`,
    description: `Example of using gatsby-source-app-store to display iOS apps and their reviews on your Gatsby site.`,
    author: `@plahteenlahti`,
  },
  plugins: [
    {
      resolve: `gatsby-source-app-store`,
      options: {
        country: "fi",
        apps: [
          "app.sleepcircle.application",
          "com.ouraring.oura",
          "com.aaplab.SleepBot",
          "com.neybox.Pillow",
          "com.tantsissa.AutoSleep",
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    "gatsby-plugin-typescript",
    "gatsby-plugin-styled-components",
  ],
}
