module.exports = {
  siteMetadata: {
    title:
      "HackZurich 2022 - Swiss Re + Microsoft Challenge on Extended Reality",
    description:
      "Join the Mixed Reality Challenge from Swiss Re and Microsoft, at HackZurich 2022",
    keywords:
      "hackzurich,swissre,microsoft,challenge,mixed reality,extended reality,augmented reality, virtual reality, hololens",
  },
  pathPrefix: `/hackzurich2022-swissre-challenge`,
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "HackZurich 2022 Swiss Re + Microsoft Challenge on Extended Reality",
        icon: "./static/images/favicon.svg",
        short_name: "Swiss Re + MSFT Challenge",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#627d77",
        display: "browser",
      },
    },
    {
      resolve: "gatsby-theme-carbon",
      options: {
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
