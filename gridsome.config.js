// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
module.exports = {
  siteName: 'Hunter Trammell',
  siteUrl: 'https://huntertrammell.dev',
  siteDescription: "Web Development Tutorials, Tips, & Tidbits",
  metadata: {
    twitter: '@trammellwebdev',
    author: 'Hunter Trammell',
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
    }
  ],
  templates: {
    Post: '/blog/:title'
  }
}
