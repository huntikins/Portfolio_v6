<template>
  <Layout>
    Hello World
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
        title: this.$page.portfolio.title,
        description: this.$page.portfolio.preview_text,
        keywords: 'web development, javascript, html, vue, react, front-end, back-end, full-stack, coding',
        openGraph: {
          title: this.$page.portfolio.title,
          type: 'article',
          description: this.$page.portfolio.preview_text,
          image: this.$page.portfolio.image,
          site_name: this.$page.meta.siteName
        },
        meta: [
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: this.$page.portfolio.title },
          { name: "twitter:description", content: this.$page.portfolio.preview_text },
          { name: "twitter:site", content: this.$page.meta.twitter }, 
          { name: "twitter:image", content: this.$page.portfolio.image },
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
    siteUrl
  }
   portfolio: portfolio (path: $path) {
    id
    title
    preview_text
    article
  }
}
</page-query>
