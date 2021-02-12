<template>  
<Layout>
    <section class="page_blog">
        <h1 id="recent-dev-articles" class="page_blog--header">Blog</h1>
        <div class="page_blog--posts">
            <PostItem v-for="post in $page.posts.edges" :key="post.node.id" :post="post.node" />
        </div>
    </section>
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
.page_blog {
    padding: 2rem 15px;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: 768px) {
        width: 750px;
    }
    @media (min-width: 992px) {
        width: 970px;
    }
    @media (min-width: 1200px) {
        width: 1170px;
    }
    &--header {
        font-size: 2.5rem;
        text-align: center;
        color: teal;

    }
    &--posts {
        padding: 2rem;
        padding-bottom: 0;
    }
}
</style>