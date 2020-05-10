module.exports = {
  title: 'TibiaLabs',
  base: '/',
  description: 'API & Tools for Tibia.',
  logo: './assets/img/logo.png',
  fansite: './assets/img/supported.gif',
  theme: require.resolve('../../'),
  head: [
    [
      'link',
      { rel: 'icon', href: 'https://tibialabs.com/assets/img/favicon.ico' },
    ],
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: 'https://docs.tibialabs.com' },
      { text: 'Boosted Creature History', link: '/boosted-creature-history/' },
      { text: 'Tibia Account Login', link: '/tibia-account-login/' },
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
    smoothScroll: true,
  },
  plugins: [
    '@vuepress/nprogress',
    ['@vuepress/register-components'],
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-134654238 - 1',
      },
    ],
  ],
}
