const _ = require('lodash')
const path = require('path')
const { algorithm, open, react, vue, node, frontend, debug, op } = require('./algorithm.header')

function getFrontMatter (path, pp = './post') {
  const posts = require(pp)
  const postsByPath = _.keyBy(posts, 'path')
  const p = path.split(/\.|\//)[2]
  return _.get(postsByPath, p)
}

function extendMetaByPath (page, path) {
  if (page.path.includes(`/${path}`)) {
    const fm = getFrontMatter(page.path, `../${path}/meta.json`)
    if (fm) {
      page.frontmatter = {
        ...fm,
        ...page.frontmatter
      }
    }
  }
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, '../assets')
      }
    }
  },
  base: '/',
  title: '秋风的笔记',
  description: '',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }],
    // ['meta', { name: 'baidu-site-verification', content: 'ZAdkE6LA10'}]
  ],
  themeConfig: {
    repo: 'hua1995116/vuepress-blog',
    nav: [
      { text: '主页', link: '/' },
      {
        text: '前端系列', items: [
          {text: 'js文章', link: '/frontend/' },
          {text: 'react实践', link: '/react/' },
          {text: 'vue实践', link: '/vue/' },
          {text: 'debug系列', link: '/debug/' },
      ]},
      { text: 'Node 实践', link: '/node/' },
      // { text: '数据库', link: '/database/' },
      // { text: '机器学习', link: '/machine/' },
      { text: '算法', link: '/algorithm/' },
      { text: '前端运维', link: '/op/' },
      { text: '我的开源项目', link: '/open/' },
      // { text: 'react 实践', link: '/react/' },
      // { text: 'vue 实践', link: '/vue/' },
      // { text: '关于我', link: '/about' },
      // {
      //   text: '笔记', items: [
      //     { text: 'flutter', link: '/post/flutter-guide/' },
      //     { text: 'Grid Layout', link: '/post/Grid-Guide/' },
      //     { text: 'spark', link: '/post/learning-spark/' },
      //     { text: 'scala', link: '/post/learning-scala/' },
      //   ]
      // },
    ],
    sidebar: {
      '/algorithm/': algorithm,
      '/node/': node,
      '/vue/': vue,
      '/react/': react,
      '/open/': open,
      '/frontend/': frontend,
      '/debug/': debug,
      '/op/': op
    },
    lastUpdated: 'Last Updated'
  },
  plugins: [
    [ 'feed', {
        
    }],
    [ 
      '@vuepress/google-analytics',
      {
        'ga': 'UA-112201282-4'
      }
    ], 
    (options, ctx) => {
      return {
        name: 'archive',
        async additionalPages () {
          return [
            // {
            //   path: '/post/',
            //   frontmatter: {
            //     archive: true
            //   }
            // },
            {
              path: '/',
              frontmatter: {
                home: true
              }
            }
          ]
        },
        // extendPageData ($page) {
        //   // extendMetaByPath($page, 'frontend-enginerring')
        //   // extendMetaByPath($page, 'node')
        //   if ($page.path.includes('/post')) {
        //     const fm = getFrontMatter($page.path)
        //     if (fm) {
        //       $page.frontmatter = {
        //         ...fm,
        //         ...$page.frontmatter
        //       }
        //     }
        //   }
        //   if ($page.frontmatter.keywords) {
        //     const meta = $page.frontmatter.meta
        //     $page.frontmatter.meta = meta ? [
        //       ...meta,
        //       {
        //         name: 'keywords',
        //         content: $page.frontmatter.keywords
        //       }
        //     ] : [
        //       {
        //         name: 'keywords',
        //         content: $page.frontmatter.keywords
        //       }
        //     ]
        //   }
        //   if (/^\/(code)\/.+?$/.test($page.path)) {
        //     $page.frontmatter.sidebar = 'auto'
        //   }
        //   if (/^\/op\/.+?$/.test($page.path)) {
        //     $page.frontmatter.metaTitle = `${$page.title} | 个人 | 秋风的笔记`
        //   }
        // }
      }
    }
  ]
}