<template>
  <Layout>
    <div class="container page_home">
      <div class="row">
        <div class="page_home-content">
          <h1 class="mb-0 pb-0"><Typewriter word="Welcome"/></h1>
          <p>Hiya! This is where you will find all of my tutorials, articles, thought's of the day, etc. Check back for updates or follow me on Twitter <strong><a href="https://twitter.com/trammellwebdev" class="text-secondary text-decoration-none font-fredoka" target="_blank" rel="noopener">@trammellwebdev</a></strong>.</p>
        </div>
      </div>
    </div>
     <section class="container">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <PostItem v-for="post in $page.posts.edges" :key="post.node.id" :post="post.node" />
      </div>
    </section>
  </Layout>
</template>

<script>
import Typewriter from '@/components/Typewriter.vue'
import PostItem from "@/components/PostItem";
export default {
  metaInfo: {
    title: 'Hunter Trammell'
  },
  components: {
    Typewriter,
    PostItem
  }
}
</script>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
  posts: allPost {
      edges {
        node {
          id
          title
          image
          readmore
          timeToRead
          description
          date (format: "MMM D YYYY")
          path
        }
      }
    }
}
</page-query>


<style lang="scss">
.page_home {
  &-content{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem 1rem 4rem;
    p, h1 {
      text-align:center !important;
      padding: 1rem 1rem 0;
    }
    p {
      width: 50%;
      @media(max-width: 992px){
        width: 75%;
      }
      @media(max-width: 500px){
        width: 100%;
      }
    }
  }
}
</style>