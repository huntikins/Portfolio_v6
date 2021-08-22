// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	siteName: 'Hunter Trammell',
	siteUrl: 'https://huntertrammell.dev',
	siteDescription: 'I make websites happen and live near Kansas City',
	titleTemplate: 'Hunter Trammell | %s',
	metadata: {
		twitter: '@trammellwebdev',
		author: 'Hunter Trammell',
		blogDescription: 'Web Development Tutorials, Tips, & Tidbits',
		coverImage:
			'https://strapifileserver.s3.us-east-2.amazonaws.com/9488_EC_3_A_E522_4594_8057_7072906366_B0_6ab0a466a2.PNG',
	},
	plugins: [
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: 'content/posts/**/*.md',
				typeName: 'Post',
				remark: {
					plugins: [
						['@gridsome/remark-prismjs', { transformInlineCode: true }],
					],
				},
			},
		},
		{
			use: '@gridsome/plugin-sitemap',
		},
		{
			use: 'gridsome-plugin-netlify-redirects',
			options: {
				typeName: 'NetlifyRedirects',
				redirects: [
					{
						from: '/blog/:slug',
						to: 'https://blog.huntertrammell.dev/:slug',
						status: 301,
					},
					{
						from: '/blog/',
						to: 'https://blog.huntertrammell.dev/',
						status: 301,
					},
				],
			},
		},
		{
			use: 'gridsome-source-rss',
			options: {
				feedUrl: 'https://blog.huntertrammell.dev/rss.xml',
				typeName: 'Hashnode',
				parser: {
					customFields: {
						item: ['cover_image', { includeSnippet: true }],
					},
				},
			},
		},
	],
	templates: {
		Post: '/blog/:title',
		Portfolio: '/portfolio/:title',
	},
}
