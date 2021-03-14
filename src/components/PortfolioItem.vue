<template>
   <div class="portfolio_preview col p-4">
      <div class="portfolio_preview-card card h-100">
        <g-link :to="portfolio.path" class="portfolio_preview-card-img"><g-image :src="portfolio.cover_photo.url" :alt="portfolio.preview_text" class="card-img-top"/></g-link>
        <div class="portfolio_preview-card--body card-body">
          <h3><g-link :to="portfolio.path">{{portfolio.title}}</g-link></h3>
          <ul>
            <li v-for="stack in portfolio.staxonomies" :key="stack.id"><span class="badge rounded-pill bg-success"><a :href="stack.url" target="_blank" rel="noopener">{{stack.title}}</a></span></li>
          </ul>
          <small v-if="portfolio.built_for.length"><span>Built for</span>&nbsp;<span><a :href="portfolio.built_for[0].url" target="_blank" rel="noopener">{{portfolio.built_for[0].title}}</a></span></small>
          <p class="my-2">{{portfolio.preview_text}}</p>
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
  }
};
</script>

