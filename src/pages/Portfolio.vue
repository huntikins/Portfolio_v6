<template>
  <Layout>
    <div class="page_home">
      <section class="page_home-intro d-flex justify-content-center align-items-start flex-column">
        <h1>My Portfolio</h1>
        <div class="page_home-intro--body">
          <p class="page_home-intro--tagline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sint, eum ducimus hic culpa eveniet, libero quod quam voluptas voluptatibus cupiditate. Maxime recusandae excepturi similique eveniet ullam nam nemo alias.</p>
          <a href="#projects" class="btn">Projects</a>
        </div>
      </section>
      <section class="page_home-blog">
        <h2 id="projects" class="page_home-blog--header pt-4">Recent Projects</h2>
        <div class="page_home-blog--posts">
            <div class="continer-fluid">
                <div class="row w-100 row-cols-1 row-cols-md-3 row-cols-sm-2 g-4 mx-auto">
                    <PortfolioItem v-for="(portfolio, index) in $page.portfolios.edges" :key="portfolio.node.id" :index="index" :portfolio="portfolio.node" />
                </div>
            </div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
import PortfolioItem from "@/components/PortfolioItem";
export default {
    metaInfo() {
      return {
        title: 'Portfilio',
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
          { name: "twitter:title", content: 'Hunter Trammell\'s Portfilio' },
          { name: "twitter:description", content: this.$page.meta.siteDescription },
          { name: "twitter:site", content: this.$page.meta.twitter }, 
          { name: "twitter:image", content: this.$page.meta.coverImage },
          { name: "twitter:creator", content: this.$page.meta.twitter },
        ]
      }
  },
  components: {
    PortfolioItem
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
  portfolios: allPortfolio {
      edges {
        node {
          id
          title
          preview_text
          cover_photo {
            url
            size
            id
            width
            height
            alternativeText
          }
          path
          github_url
          live_url
          featured
          staxonomies {
            id
            title
            url
          }
          built_for {
            id
            title
            url
          }
        }
      }
    }
}
</page-query>
