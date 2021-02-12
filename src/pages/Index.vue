<template>
  <Layout>
    <div class="page_home">
      <section class="page_home-intro">
        <h1>Web Development<br><span>Tutorials, Tips, and Tidbits</span></h1>
        <div class="page_home-intro--body">
          <p class="page_home-intro--quote"><em>"The largest room in the world is the room for improvement."</em></p>
          <p class="page_home-intro--tagline">While I can't say where that quote originated, I can say as a Full Stack Web Developer I am constantly reminded of this ever expansive room for improvement. There are always new technologies to learn, a javascript method to discover, or even development tools to take advantage of. In this infinite room, how does one quench that endless thirst for knowledge? We drink until we're full &mdash; so let's crack open a cold one and dive into some Web Development concepts.</p>
          <a href="#recent-dev-articles" class="page_home-intro--btn">DIVE IN</a>
        </div>
      </section>
      <section class="page_home-blog">
        <h2 id="recent-dev-articles" class="page_home-blog--header">Recent Web Development Articles</h2>
        <div class="page_home-blog--posts">
          <PostItem v-for="post in $page.posts.edges" :key="post.node.id" :post="post.node" />
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
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
  &-intro {
    padding: 2rem 2rem;
    height: 550px;
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;
    background-color: lightgray;
    @media(max-width: 1100px){
    padding: 2rem 2rem;
    height: 100%;
    }
    h1 {
      font-size: 3rem;
      color: teal;
      margin-bottom: 0;
      @media(max-width: 735px){
        margin: 0;
        width: 100%;
      }
      span {
        color: #303030;
        font-family: 'Open Sans', sans-serif;
        font-weight: 100;
        font-style: italic;
      }
    }
    &--body {
      margin-top: 1rem;
      padding-bottom: 2rem;
      width: 60%;
      @media(max-width: 1100px){
        width: 100%;
      }
    }
    &--tagline {
      padding-bottom: 1rem;
      font-size: 1.15rem;
      letter-spacing: .1rem;
    }
    &--quote {
      font-weight: 500;
      font-size: 1.1rem;
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
      font-weight: 600;
    }
  }
  &-blog{
    padding: 0 2rem 4rem;
    &--header {
      font-size: 2.5rem;
      text-align: center;
      color: teal;
    }
    &--posts {
      padding: 2rem;
      padding-bottom: 0;
      @media(max-width: 735px){
        padding: 2rem 0;
      }
    }
  }
}
</style>