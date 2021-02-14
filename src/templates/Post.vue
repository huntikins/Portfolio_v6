<template>
  <Layout>
    <div class="post_page">
      <h1>{{$page.post.title}}</h1>
      <small ><span>{{$page.post.date}}</span>&nbsp;&mdash;&nbsp;<span>{{$page.post.timeToRead}} min read</span></small>
      <hr>
      <article v-html="$page.post.content"/>
      <div class="post_page-footer">
        <p>If you liked this article or have questions of comments feel free to reach out on twitter <a href="https://twitter.com/trammellwebdev" target="_blank" rel="noopener">@trammellwebdev</a></p>
      </div>
    </div>
  </Layout>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: {
    Header
  },
   metaInfo() {
      return {
        title: this.$page.post.title,
        description: this.$page.post.description,
        keywords: 'web development, javascript, html, vue, react, front-end, back-end, full-stack, coding',
        openGraph: {
          title: this.$page.post.title,
          type: 'article',
          description: this.$page.post.description
        },
        meta: [
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: this.$page.post.title },
          { name: "twitter:description", content: this.$page.post.description },
          { name: "twitter:site", content: this.$page.meta.twitter }, 
          { name: "twitter:image", content: this.$page.post.image },
          { name: "twitter:creator", content: this.$page.meta.twitter },
        ]
      }
   }
};
</script>


<page-query>
query Post ($path: String!) {
  meta: metadata {
    siteName
    siteDescription
    twitter
  }
   post: post (path: $path) {
    id
    title
    image
    description
    content
    date (format: "D MMMM YYYY")
    timeToRead
  }
}
</page-query>

