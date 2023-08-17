/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const isProd = process.env.NODE_ENV === "production";
const previewEnabled =
  (process.env.GATSBY_IS_PREVIEW || "false").toLowerCase() === "true";

const { languages, defaultLanguage } = require("./languages");
module.exports = {
  siteMetadata: {
    title: `Tatamy`,
    siteUrl: `http://localhost:8000`,

    description: `BJJ a grapling`,
    titleTemplate: " - Tatamy",
    siteUrl: `https://www.tatamy.cz`,
    author: `@Lukas Valta <valtalukas@sezanm.cz>`,
    image: `./src/images/footerLogo.png`,
    social: {
      twitter: `Lukas`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a page view event will be fired for all of them.
        trackingIds: [
          process.env.GOOGLE_ANALYTICS_ID, // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending page view hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd || previewEnabled,
      },
    },
    `gatsby-plugin-layout`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-emotion",
    /*  "gatsby-plugin-google-gtag", */
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Tatamy`,
        short_name: `Tatamy`,
        start_url: `/`,
        background_color: `#1B1B1B`,
        theme_color: `#1B1B1B`,
        display: `fullscreen`,
        icon: "src/images/footerLogo.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages,
        defaultLanguage,

        siteUrl: `https://localhost:8000`,
        // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')

        // you can pass any i18next options
        i18nextOptions: {
          fallbackLng: defaultLanguage,
          supportedLngs: languages,
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
  ],
};
