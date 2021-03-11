<template>
   <div class="portfolio_preview col-md-4 col-sm-12">
    <g-link :to="portfolio.path">
      <div class="portfolio_preview-card card">
        <g-link :to="portfolio.path"><g-image :src="portfolio.cover_photo.url" :alt="portfolio.preview_text" class="card-img-top"/></g-link>
        <div class="portfolio_preview-card--body card-body">
          <h3><g-link :to="portfolio.path">{{portfolio.title}}</g-link></h3>
          <small v-if="portfolio.built_for.length"><span>Built for</span>&nbsp;&mdash;&nbsp;<span><a :href="portfolio.built_for[0].url" target="_blank" rel="noopener">{{portfolio.built_for[0].title}}</a></span></small>
          <p>{{portfolio.preview_text}}</p>
          <ul>
            <li v-for="stack in portfolio.staxonomies" :key="stack.id"><a :href="stack.url" target="_blank" rel="noopener">{{stack.title}}</a></li>
          </ul>
        </div>
      </div>
    </g-link>
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

