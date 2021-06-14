module.exports = {
  title: 'Klar Documentation',
  tagline: 'The all-in-one reporting solution to grow your direct-to-consumer business.',
  url: 'https://docs.getklar.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'placeholder-tech', // Usually your GitHub org/user name.
  projectName: 'klar-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Documentation',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Klar Docs',
          items: [
            {
              label: 'Introduction',
              to: '/',
            },

          ],
        },
        {
          title: 'Datasources',
          items: [
            {
              label: 'Google Analytics',
              to: '/docs/google-analytics',
            },
            {
              label: 'Shopify',
              to: '/docs/shopify',
            },
            {
              label: 'Klaviyo',
              to: '/docs/klaviyo',
            },
            {
              label: 'Snapchat',
              to: '/docs/snapchat',
            },
          ],
        },
        {
          title: 'Klar',
          items: [
            {
              label: 'App',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Imprint',
              href: 'https://app.getklar.com/imprint',
            },
            {
              label: 'Data Protection Agreement',
              href: 'https://app.getklar.com/dataprotection-agreement',
            },
          ],
        },
        // {
        //   title: 'More',
        //   items: [
        //     // {
        //     //   label: 'Blog',
        //     //   to: 'blog',
        //     // },
        //     // {
        //     //   label: 'GitHub',
        //     //   href: 'https://github.com/facebook/docusaurus',
        //     // },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Placeholder. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
