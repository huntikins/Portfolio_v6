<template>
   <div class="post_preview col p-4 my-0">
    <div class="post_preview-card card h-100">
      <g-link :to="post.path"><g-image :src="post.cover_image" :alt="post.title" height="389" width="129"/></g-link>
      <div class="post_preview-card--body card-body d-flex flex-column">
        <h3 class="card-title pt-4"><g-link :to="post.path">{{post.title}}</g-link></h3>
        <p>{{post.contentSnippet.substr(0, 250)}}...</p>
        <a class="btn-teal mt-auto d-block text-center mt-auto" target="_blank" rel="noopener" :href="post.link">Read More</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
  computed: {
    date() {
      return this.post.pubDate.substring(5, this.post.pubDate.length - 13);
    }
  }
};
</script>

