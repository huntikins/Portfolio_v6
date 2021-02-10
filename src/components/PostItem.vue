<template>
   <div class="col">
    <div class="card h-100 shadow border-0 bg-light">
       <g-link :to="post.path"><g-image :src="post.image" class="card-img-top" :alt="post.description"/></g-link>
      <div class="card-body">
        <h3 class="card-title font-fredoka"><g-link :to="post.path" class="text-decoration-none text-dark">{{post.title}}</g-link></h3>
        <small class="text-muted"><span>{{date}}</span>&nbsp;&mdash;&nbsp;<span>{{post.timeToRead}} min read</span></small>
        <p class="card-text">{{post.description}}</p>
        <g-link :to="post.path" class="btn btn-secondary font-fredoka">{{post.readmore}}</g-link>
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

<style lang="scss">
.card-img-top {
  filter: grayscale(1);
  transition: filter .5s ease;
}
.card {
  &:hover {
    .card-img-top {
      filter: grayscale(0);
    }
  }
}
</style>
