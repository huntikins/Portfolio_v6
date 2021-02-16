<template>
   <div class="post_preview">
    <g-link :to="post.path">
      <div class="post_preview-card">
        <g-link :to="post.path"><g-image :src="post.image" :alt="post.description"/></g-link>
        <div class="post_preview-card--body">
          <h3><g-link :to="post.path">{{post.title}}</g-link></h3>
          <small><span>{{date}}</span>&nbsp;&mdash;&nbsp;<span>{{post.timeToRead}} min read</span></small>
          <p>{{post.description}}</p>
          <g-link class="btn" :to="post.path">{{post.readmore}}</g-link>
        </div>
      </div>
    </g-link>
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

