// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')
module.exports = function(api) {
	api.loadSource(async (actions) => {
		const { data } = await axios.get(
			'https://fast-falls-82394.herokuapp.com/portfolios'
		)
		const collection = actions.addCollection({
			typeName: 'Portfolio',
		})
		for (const project of data) {
			collection.addNode({
				id: project.id,
				title: project.title,
				preview_text: project.preview_text,
				staxonomies: project.staxonomies,
				article: project.article,
				url: project.url,
				live_url: project.live_url,
				built_for: project.built_for,
				github_url: project.github_url,
				cover_photo: project.cover_photo,
				featured: project.Featured,
			})
		}
	})
}
