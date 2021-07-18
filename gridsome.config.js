// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Hunter Trammell',
  siteUrl: 'https://huntertrammell.dev',
  siteDescription: "I make websites happen and live near Kansas City",
  titleTemplate: 'Hunter Trammell | %s',
  metadata: {
    twitter: '@trammellwebdev',
    author: 'Hunter Trammell',
    blogDescription:  "Web Development Tutorials, Tips, & Tidbits",
    coverImage: 'https://huntertrammell.dev/trammellwebdev.jpg'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
        remark: {
          plugins: [
            ['@gridsome/remark-prismjs', {transformInlineCode: true}]
          ]
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap'
    },
    {
      use: 'gridsome-plugin-netlify-redirects',
      options: {
        typeName: 'NetlifyRedirects',
        redirects: [
          {
            from: '/blog/:slug',
            to: 'https://blog.huntertrammell.dev/:slug',
            status: 301
          },
          {
            from: '/blog/',
            to: 'https://blog.huntertrammell.dev/',
            status: 301
          }
        ]
      }
    }
  ],
  templates: {
    Post: '/blog/:title',
    Portfolio: '/portfolio/:title'
  }
}
