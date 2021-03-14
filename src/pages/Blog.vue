<template>
  <Layout>
    <div class="page_home">
      <section class="page_home-intro d-flex justify-content-center align-items-start flex-column">
        <h1>Web Development<br><span>Tutorials, Tips, and Tidbits</span></h1>
        <div class="page_home-intro--body">
          <p class="page_home-intro--quote"><em>"The largest room in the world is the room for improvement."</em></p>
          <p class="page_home-intro--tagline">While I can't say where that quote originated, I can say as a Full Stack Web Developer I am constantly reminded of this ever expansive room for improvement. There are always new technologies to learn, a javascript method to discover, or even development tools to take advantage of. In this infinite room, how does one quench that endless thirst for knowledge? We drink until we're full &mdash; so let's crack open a cold one and dive into some Web Development concepts.</p>
          <a href="#recent-dev-articles" class="btn">DIVE IN</a>
        </div>
      </section>
      <section class="page_home-blog">
        <h2 id="recent-dev-articles" class="page_home-blog--header pt-4">Recent Web Development Articles</h2>
        <div class="page_home-blog--posts">
          <div class="continer-fluid">
            <div class="row w-100 row-cols-1 row-cols-md-3 row-cols-sm-2 g-4 mx-auto">
              <PostItem v-for="post in $page.posts.edges" :key="post.node.id" :post="post.node" />
            </div>
          </div>
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
          description: this.$page.meta.siteDescription,
          image: this.$page.meta.coverImage,
          site_name: this.$page.meta.siteName
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
