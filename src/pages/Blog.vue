<template>
  <Layout>
    <section class="container">
      <div class="row py-4">
        <div class="d-flex text-center justify-content-center align-items-center flex-column">
          <h1 class="font-frederoka">Knowledge Is Power</h1>
          <p class="lead">Hiya! Welcome to my blog. This is where you fill find all of my tutorials, articles, thought's of the day. Check back for updates or follow me on Twitter <strong><a href="https://twitter.com/trammellwebdev" class="text-secondary text-decoration-none font-fredoka" target="_blank" rel="noopener">@trammellwebdev</a></strong>.</p>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <PostItem v-for="post in $page.posts.edges" :key="post.node.id" :post="post.node" />
      </div>
    </section>
  </Layout>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  components: {
    PostItem,
  },
  metaInfo: {
    title: "Blog"
  }
};
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

<style>
</style>
