module.exports = {
  title: 'TibiaLabs',
  base: '/',
  description: 'API & Tools for Tibia.',
  logo: './assets/img/logo.png',
  fansite: './assets/img/supported.gif',
  theme: require.resolve('../../'),
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: 'https://docs.tibialabs.com' },
      {
        text: 'Dropdown Menu',
        item: [
          { text: 'Chinese', link: 'https://docs.tibialabs.com' },
          { text: 'Japanese', link: 'https://docs.tibialabs.com' },
        ],
      },
    ],
    authors: [
      {
        name: 'Wed',
        avatar: '/assets/img/avatar/wed.png',
        link: 'https://twitch.tv/wedzy_',
        linktext: 'Twitch',
      },
      {
        name: 'Maelstrom',
        avatar: '/assets/img/avatar/xxx.png',
        link: 'https://twitch.tv/maelstrom_',
        linktext: 'Twitch',
      },
    ],
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/tibialabs',
        },
      ],
      copyright: [
        {
          text: 'Copyright © 2020 TibiaLabs. All rights reserved.',
          link: '#',
        },
        {
          text:
            'Tibia is a registered trademark of CipSoft GmbH. Tibia and all products related to Tibia are copyright by CipSoft GmbH.',
          link: '#',
        },
      ],
    },

    // sitemap: {
    //   hostname: 'https://github.com/wowthemesnet/vuepress-theme-mediumish/',
    // },
    // comment: {
    //   service: 'disqus',
    //   shortname: 'demowebsite',
    // },
    // newsletter: {
    //   endpoint:
    //     'https://wowthemes.us11.list-manage.com/subscribe/post?u=8aeb20a530e124561927d3bd8&id=8c3d2d214b',
    // },
    // feed: {
    //   canonical_base:
    //     'https://github.com/wowthemesnet/vuepress-theme-mediumish/',
    // },
    smoothScroll: true,
  },
  plugins: [
    '@vuepress/nprogress',
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-134654238 - 1',
      },
    ],
  ],
}
