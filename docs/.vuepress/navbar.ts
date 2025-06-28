/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  { text: '代表性成果', link: '/publications/' },
  { text: '研究方向', link: '/research/' },
  { text: '团队成员', link: '/people/' },
  { text: '更多',
    items: [
      { text: '友情链接', link: '/links/' },
      { text: '联系我们', link: '/contact/' },
      { text: '关于我们', link: '/about/' },
    ]
  },
  
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { text: 'Blog', link: '/en/blog/' },
  { text: 'Publications', link: '/en/publications/' },
  { text: 'Research', link: '/en/research/' },
  { text: 'People', link: '/en/people/' },
  { text: 'More',
    items: [
      { text: 'Links', link: '/en/links/' },
      { text: 'Contact Us', link: '/en/contact/' },
      { text: 'About Us', link: '/en/about/' },
    ]
  },
])

