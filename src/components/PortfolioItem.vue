<template>
   <div class="portfolio_preview">
    <g-link :to="portfolio.path">
      <div class="portfolio_preview-card">
        <!-- <g-link :to="portfolio.path"><g-image :src="'https://fast-falls-82394.herokuapp.com'+portfolio.preview_photo.url" :alt="portfolio.preview_text"/></g-link> -->
        <div class="portfolio_preview-card--body">
          <h3><g-link :to="portfolio.path">{{portfolio.title}}</g-link></h3>
          <small><span>Built for</span>&nbsp;&mdash;&nbsp;<span>{{portfolio.built_for}}</span></small>
          <p>{{portfolio.preview_text}}</p>
        </div>
      </div>
    </g-link>
  </div>
</template>

<script>
export default {
  props: ["portfolio"],
  computed: {
    date() {
      return this.post.date.substring(0, this.post.date.length - 4);
    }
  }
};
</script>

