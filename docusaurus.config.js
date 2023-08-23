// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Numexa",
  tagline:
    "⚡️ Transform AI/ML operations: Transparency, Control and Cost Optimization. ⚡️",
  favicon: "img/favicon.ico",

  // 
  // Set the production url of your site here
  url: "https://numexahq.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'

  baseUrl: "/documentation/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "NumexaHQ", // Usually your GitHub org/user name.
  projectName: "documentation", // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Numexa",
        logo: {
          alt: "My Site Logo",
          src: "img/nxa-logo-1-transparent-colored-lg.png",
        },
        items: [
          // {
          //   type: "docSidebar",
          //   sidebarId: "tutorialSidebar",
          //   position: "left",
          //   label: "Docs (Coming Soon!)",
          // },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/NumexaHQ",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Docs",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              // {
              //   label: "Discord",
              //   href: "https://discordapp.com/invite/numexa-community",
              // },
              // {
              //   label: "Twitter",
              //   href: "https://twitter.com/numexahq",
              // },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/numexahq",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "GitHub",
                href: "https://github.com/NumexaHQ",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Numexa, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["python", "java", "scala", "sql"],
      },
    }),
};

module.exports = config;
