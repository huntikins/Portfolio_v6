<template>
  <Layout>
    <div class="page_home">
      <section class="page_home-intro d-flex justify-content-center align-items-start flex-column">
        <h1>My Portfolio<br><span>Check Out What I've Built</span></h1>
        <div class="page_home-intro--body">
          <p class="page_home-intro--quote"><em>"All we have to decide is what to do with the time that is given us." - Gandalf</em></p>
          <p class="page_home-intro--tagline">This is where I showcase my work, from projects I built learning to code to websites I created for work. I’ve gathered all my projects into a single repository. I am honored to work in a field where my work can persist past it’s creation. Whereas a chef’s creation may only live until the dining guest completes their meal, my work lives as long as the hosting is paid for (or longer if we’re talking <a href="https://archiveprogram.github.com/arctic-vault/" target="_blank" rel="noreferrer">GitHub Arctic Code Vault</a>). Each project includes the tech stack used, applicable links and a copy of the sites readme.</p>
          <a href="#projects" class="btn">Projects</a>
        </div>
      </section>
      <section class="page_home-blog">
        <h2 id="projects" class="page_home-blog--header pt-4">Projects</h2>
        <div class="page_home-blog--posts">
            <div class="continer-fluid">
                <div class="row w-100 row-cols-1 row-cols-md-3 row-cols-sm-2 g-4 mx-auto" data-masonry='{"percentPosition": true }'>
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
        title: 'Portfolio',
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
          article
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
          url
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
