<template>
   <div class="post_preview col p-4 my-0">
    <div class="post_preview-card card h-100">
      <g-link :to="post.path"><g-image :src="post.image" :alt="post.description"/></g-link>
      <div class="post_preview-card--body card-body d-flex flex-column">
        <h3 class="card-title pt-4"><g-link :to="post.path">{{post.title}}</g-link></h3>
        <small><span>{{date}}</span>&nbsp;&mdash;&nbsp;<span>{{post.timeToRead}} min read</span></small>
        <p>{{post.description}}</p>
        <g-link class="btn-teal mt-auto d-block text-center mt-auto" :to="post.path">{{post.readmore}}</g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
  computed: {
    date() {
      return this.post.date.substring(0, this.post.date.length - 4);
    }
  }
};
</script>

