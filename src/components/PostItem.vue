<template>
   <div class="post_preview">
    <g-link :to="post.path">
      <div class="post_preview-card">
        <g-link :to="post.path"><g-image :src="post.image" :alt="post.description"/></g-link>
        <div class="post_preview-card--body">
          <h3><g-link :to="post.path">{{post.title}}</g-link></h3>
          <small><span>{{date}}</span>&nbsp;&mdash;&nbsp;<span>{{post.timeToRead}} min read</span></small>
          <p>{{post.description}}</p>
          <g-link class="post_preview-card--btn" :to="post.path">{{post.readmore}}</g-link>
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

<style lang="scss">
.post_preview {
  a {
    text-decoration: none;
  }
  &-card {
    width: 400px;
    margin: 2rem 0;
    border-radius: 15px;
    transition: all .2s ease;
    @media(max-width: 735px){
      margin: 0 auto;
      width: 100%;
    }
    &:hover {
      transform: scale(1.05);
      background-color: white;
      box-shadow: 25px 15px 0 0 rgba($color: teal, $alpha: .4);
    }
    img {
      max-width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 15px 15px 0 0 ;
    }
    &--body {
      padding: 0 1rem 2rem;
      h3 {
        font-size: 1.5rem;
        line-height: 1.25;
        a {
          color: teal;
          text-decoration: none;
        }
        margin-bottom: .75rem;
      }
      small {
        color: #303030;
      }
      p {
        margin-bottom: 2rem;
        color: #303030;
      }
    }
    &--btn {
      padding: .5rem 3rem;
      border-radius: 5px;
      background-color: teal;
      font-size: 1.15rem;
      letter-spacing: .15rem;
      text-decoration: none;
      color: whitesmoke;
      font-family: 'Jost', sans-serif;
      font-weight: 700;
    }
  }
}

</style>
