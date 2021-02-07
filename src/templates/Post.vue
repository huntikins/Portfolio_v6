<template>
  <Layout>
    <div class="container py-4">
      <h1 class="text-center pb-0 mb-0">{{$page.post.title}}</h1>
      <small class="text-muted text-center d-block"><span>{{$page.post.date}}</span>&nbsp;&mdash;&nbsp;<span>{{$page.post.timeToRead}} min read</span></small>
      <article v-html="$page.post.content" />
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

<style>
 
</style>
