// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
module.exports = {
  siteName: 'Hunter Trammell',
  siteUrl: 'https://hunter-trammell.netlify.com/',
  siteDescription: "Hiya! This is where you will find all of my tutorials, articles, thought's of the day, etc.",
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
    }
  ],
  templates: {
    Post: '/blog/:title'
  }
}
