<template>
  <Layout>
    <div class="container py-4">
      <h1 class="text-center pb-0 mb-0">{{$page.post.title}}</h1>
      <small class="text-muted text-center d-block"><span>{{$page.post.date}}</span>&nbsp;&mdash;&nbsp;<span>{{$page.post.timeToRead}} min read</span></small>
      <article v-html="$page.post.content" class="pt-4"/>
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

<style lang="scss">
  h1 {
    text-transform: capitalize;
  }
 h2 {
   padding-top: 1rem;
   text-transform: capitalize;
 }
 blockquote {
   padding-left: 1rem;
   font-style: italic;
   border-left: 4px solid darkslategray;
   line-height: 1.20;
   font-size: 14px;
   color: darkslategray;
 }
 p {
   a {
     font-weight: 900 !important;
     color: black !important;
     text-decoration: none !important;
     transition: .25s all ease-in-out;
     border-bottom: 2px solid transparent !important;
     &:hover {
       color: gray !important;
       text-decoration: none;
       border-bottom: 2px solid gray !important;
     }
   }
 }
</style>
