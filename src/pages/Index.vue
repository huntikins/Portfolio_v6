<template>
  <Layout>
    <div class="page_home">
    <div class="page_home-hero"><g-image src="~/images/hero.jpg"></g-image></div>
    <div class="page_home-container">
      <section class="page_home-intro">
        <div class="container">
          <div class="row">
            <div class="page_home-content text-center pb-4">
              <h1 class="pb-2">Web Development<br>Tutorials, Tips, and Tidbits</h1>
              <div class="page_home-content--body">
                <p class="pb-1 mb-0 pt-1 quote"><em>"The largest room in the world is the room for improvement."</em></p>
                <p class="mb-0 tagline">While I can't say where that quote originated, I can say as a Full Stack Web Developer I am constantly reminded of this ever expansive room for improvement. There are always new technologies to learn, a javascript method to discover, or even development tools to take advantage of. In this infinite room, how does one quench that endless thirst for knowledge? We drink until we're full &mdash; so let's crack open a cold one and dive into some Web Development concepts.</p>
                <a href="#recent-dev-articles" class="btn my-4">*cracks open cold one*</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="page_home-blog">
        <h2 id="recent-dev-articles" class="mb-4 py-4 page_home-blog--header text-lowercase">Recent Web Development Articles</h2>
        <div class="container">
          <div class="row row-cols-1 row-cols-md-3 g-4 pb-4 page_home-blog--posts">
            <PostItem v-for="post in $page.posts.edges" :key="post.node.id" :post="post.node" />
          </div>
        </div>
      </section>
    </div>
    </div>
  </Layout>
</template>

<script>
import Typewriter from '@/components/Typewriter.vue'
import PostItem from "@/components/PostItem";
export default {
    metaInfo() {
      return {
        title: this.$page.meta.siteName,
        description: this.$page.meta.siteDescription,
        keywords: 'web development, javascript, html, vue, react, front-end, back-end, full-stack, coding',
        openGraph: {
          title: this.$page.meta.siteName,
          type: 'website',
          description: this.$page.meta.siteDescription
        },
        meta: [
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: this.$page.meta.siteName },
          { name: "twitter:description", content: this.$page.meta.siteDescription },
          { name: "twitter:site", content: this.$page.meta.twitter }, 
          { name: "twitter:image", content: this.$page.meta.coverImage },
          { name: "twitter:creator", content: this.$page.meta.twitter },
        ]
      }
  },
  components: {
    Typewriter,
    PostItem
  }
}
</script>

<page-query>
query {
  meta: metadata {
    siteName
    siteUrl
    siteDescription
    twitter
    coverImage
  }
  posts: allPost {
      edges {
        node {
          id
          title
          image
          readmore
          author
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
  position: relative;
  &-container {
    position: absolute;
    z-index: 2;
    width: 100%;
  }
  &-hero {
    position: absolute;
    z-index: 1;
    width: 100%;
    background-color:rgb(60, 107, 116);
    img {
      opacity: .4;
      width: 100%;
    }
  }
  &-intro {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &-content{
    padding: 1rem 1rem;
    color: white;
    p, h1 {
      text-align: center !important;
      padding: 0 1rem;
      margin-right: auto;
      @media(max-width: 767px){
        text-align: center !important;
        margin: 0 auto;
      }
    }
    &--body {
      width: 75%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin: 0 auto;
      padding-top: 2rem;
      .tagline {
        padding-top: 1rem;
        font-size: 20px;
        font-weight: bold;
        padding-bottom: 3rem;
      }
       .quote {
        font-weight: 900;
        margin: 0 auto;
        font-size: 24px;
      }
      .btn {
        font-size: 24px;
        background-color: rgb(60, 107, 116);
        color: white;
        padding: .5rem 2rem;
      }
    }
  }
  &-blog{
    background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgb(60, 107, 116) 30%);
    padding-top: 30vh;
    &--header {
      margin-top: 10rem!important;
      text-align: center;
      letter-spacing: .25rem;
      color: white;
    }
    &--posts {
      padding-top: 2rem;
      text-align: left !important;
    }
  }
}
</style>