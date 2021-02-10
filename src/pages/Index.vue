<template>
  <Layout>
    <section class="page_home">
      <div class="container">
        <div class="row">
          <div class="page_home-content">
            <div class="row">
              <div class="col-md-6 col-sm-12 page_home-content--logo">
                <g-image src="~/images/hunter.png" alt="Hunter Trammell Initial Logo" width="200"/>
              </div>
              <div class="col-md-6 col-sm-12 page_home-content--intro">
                <h1 class="mb-0 pb-0"><Typewriter word="Welcome"/></h1>
                <p>Hiya! This is where you will find all of my tutorials, articles, thought's of the day, etc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     <section class="page_home-blog">
      <h2 class="mb-4 py-2 page_home-blog--header text-white bg-dark text-lowercase">Recent Blog Posts</h2>
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4 py-4 page_home-blog--posts">
          <PostItem v-for="post in $page.posts.edges" :key="post.node.id" :post="post.node" />
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import Typewriter from '@/components/Typewriter.vue'
import PostItem from "@/components/PostItem";
export default {
  metaInfo: {
    title: 'Welcome'
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
  background-color: lightgray;
  &-content{
    padding: 1rem 1rem;
    &--logo {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      @media(max-width: 767px){
        justify-content: center;
        img {
          width: 100px;
        }
      }
    }
    &--intro {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      text-align: left;
      padding: 1.5rem 0;
      p, h1 {
        text-align:left !important;
        padding: 1rem 1rem 0;
        margin-right: auto;
        @media(max-width: 767px){
          text-align: center !important;
          margin: 0 auto;
        }
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
      @media(max-width: 767px){
        text-align: center !important;
        padding-top: 0;
      }
    }
  }
  &-blog{
    &--header {
      border-top: 4px solid black;
      border-bottom: 4px solid black;
      text-align: center;
      letter-spacing: .25rem;
    }
    &--post {
      text-align: left !important;
    }
  }
}
</style>