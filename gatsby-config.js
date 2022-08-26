module.exports = {
  siteMetadata: {
    title:
      "HackZurich 2022 - SwissRe + Microsoft Challenge on Extended Reality",
    description: "A Gatsby theme for the carbon design system",
    keywords:
      "hackzurich,swissre,microsoft,challenge,mixed reality,extended reality,augmented reality, virtual reality, hololens",
  },
  pathPrefix: `/gtc`,
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "HackZurich 2022 SwissRe and Microsoft Challenge",
        icon: "./static/images/favicon.svg",
        short_name: "SwissRe + MSFT Challenge",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#627d77",
        display: "browser",
      },
    },
    {
      resolve: "gatsby-theme-carbon",
      options: {
        mediumAccount: "carbondesign",
        iconPath: "./static/images/favicon.svg",
        isSwitcherEnabled: false,
        titleType: "page",
        theme: {
          homepage: "dark",
          interior: "dark",
        },

        repository: {
          baseUrl: "https://github.com/faxg/hackzurich2022-swissre-challenge",
          branch: "master",
        },
      },
    },
  ],
};
