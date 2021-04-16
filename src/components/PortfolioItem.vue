<template>
   <div class="portfolio_preview col p-4 my-0">
      <div class="portfolio_preview-card card h-100">
        <g-link :to="portfolio.path" class="portfolio_preview-card-img"><g-image :src="portfolio.cover_photo.url" :alt="portfolio.preview_text" class="card-img-top"/></g-link>
        <a v-if="portfolio.github_url" :href="portfolio.github_url" target="_blank" rel="noopener" class="github-corner" aria-label="View source on GitHub" title="View source on GitHub"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:teal; color:#fff; position: absolute; top: 0; border: 0; right: 0; border-top-right-radius: 15px;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>
        <div class="portfolio_preview-card--body card-body d-flex flex-column">
          <h3><g-link :to="portfolio.path">{{portfolio.title}}</g-link></h3>
          <ul>
            <li v-for="stack in portfolio.staxonomies" :key="stack.id"><span class="badge rounded-pill bg-success"><a :href="stack.url" target="_blank" rel="noopener">{{stack.title}}</a></span></li>
          </ul>
          <small v-if="portfolio.built_for.length"><span>Built For</span>&nbsp;<span><a :href="portfolio.built_for[0].url" target="_blank" rel="noopener">{{portfolio.built_for[0].title}}</a></span></small>
          <p class="my-2">{{portfolio.preview_text}}</p>
          <div class="mt-auto">
              <a v-if="portfolio.url" class="btn-teal mr-auto text-center mt-5 w-100 d-block" :href="portfolio.url" target="_blank" rel="noopener">{{ portfolio.built_for.length ? siteMsg(portfolio.built_for[0].title) : 'View Demo' }}</a>
              <g-link class="btn-teal mr-auto text-center mt-2 w-100 d-block" :to="portfolio.path">Read More</g-link>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ["portfolio", "index"],
  computed: {
    date() {
      return this.post.date.substring(0, this.post.date.length - 4);
    }
  },
  methods: {
    siteMsg(build) {
        if(build == 'School' || build == 'undefined'){
          return "View Demo"
        }
        else {
          return "View Site"
        }
      }
  }
};
</script>

