/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: '我有病嗎？與精神疾病的真實距離', // Title for your website.
  tagline: '什麼是精神疾病？精神疾病患者離我們很遠嗎？宗辰和玉如都在二十多歲發病，同一般人的外表下，他們其實已與精神症狀共處多年。宗辰曾經是咖啡店員，玉如是護理師，他們規律生活，正常工作，只是.....',
  url: 'https://newmedia.pts.org.tw', // Your website URL
  baseUrl: '/mental_disorder/', // Base URL for your project */

  // Used for publishing and more
  projectName: 'mental_disorder',
  organizationName: 'ptstaiwan',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [],

  /* path to images for header/footer */
  headerIcon: 'img/logo-p-white.svg',
  footerIcon: 'img/logo-p-white.svg',
  favicon: 'img/favicon@2x.png',
  footerIcon2: 'img/footer-logo-pts@2x.png',

  /* Colors for website */
  colors: {
    primaryColor: '#3C4467',
    secondaryColor: '#3C4467',
  },

  /* Custom fonts for website */
  fonts: {
    myFont: [
      "Noto Sans TC",
      "sans-serif"
    ]
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()}公視 P# 新聞實驗室`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://code.jquery.com/jquery-3.4.1.min.js',
    'js/menu.js'
  ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  cleanUrl: true,

  docsSideNavCollapsible: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/share.jpg',
  twitterImage: 'img/share.jpg',

  customDocsPath: 'story',
  stylesheets: ['https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css','https://fonts.googleapis.com/css?family=Noto+Sans+TC:400,700&display=swap&subset=chinese-traditional'],
  disableHeaderTitle: true
};

module.exports = siteConfig;
