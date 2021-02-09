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
  }
};
</script>


<page-query>
query Post ($path: String!) {
  metadata {
    siteName
    siteDescription
  }
   post: post (path: $path) {
    id
    title
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
     font-weight: 900;
     color: black;
     text-decoration: none;
     transition: .25s all ease-in-out;
     border-bottom: 2px solid transparent;
     &:hover {
       color: gray;
       text-decoration: none;
       border-bottom: 2px solid gray;
     }
   }
 }
</style>
