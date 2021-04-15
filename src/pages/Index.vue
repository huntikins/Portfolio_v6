<template>
  <Layout>
    <div class="page_home">
      <section class="page_home-intro d-flex justify-content-center align-items-start flex-column">
        <h1>Hunter Trammell<br><span>Web Developer, Tutor & Author</span></h1>
        <div class="page_home-intro--body">
          <p class="page_home-intro--tagline">As you may have deduced from the title, my name is Hunter Trammell and I am a Full Stack Web Developer from Kansas City. Web Development is my passion and I love to share that passion with others whether it is through casual conversation or by way of instruction. I am constantly learning and improving my skills as a developer. If you'd like to learn more about me and my work, click the button below, otherwise keep scrolling to see some of my recent projects & articles.</p>
          <g-link to="/contact/" class="btn">Say Hello</g-link>
        </div>
      </section>
      <section class="page_home-blog">
        <h2 id="recent-dev-articles" class="page_home-blog--header pt-4">Articles</h2>
        <div class="row">
          <div class="col-lg-4 col-md-12">
            <div class="text-left d-flex justify-content-center align-items-center h-100">
              <div class="page_home-portfolio--posts-cta text-right pt-4" style="text-align:right;">
                <h3>Read What I've Written Lately</h3>
                <p class="my-4">As a Full Stack Web Developer I am constantly reminded of the ever expansive room for improvement. There are always new technologies to learn, a javascript method to discover, or even development tools to take advantage of. I'd love to share my experience and assuming I get around to writing new content, here is where you can find all of my Web Development Tips, Tricks, and Tidbits.</p>
                <g-link to="/blog/" class="btn">Blog</g-link>
              </div>
            </div>
          </div>
          <div class="page_home-blog--posts col-lg-8 col-md-12">
            <div class="row w-100 row-cols-1 row-cols-md-2 g-4 mx-auto">
              <PostItem v-for="post in $page.posts.edges" :key="post.node.id" :post="post.node" />
            </div>
          </div>
        </div>
      </section>
      <section class="page_home-portfolio">
        <div class="container-fluid">
          <h2 id="recent-dev-articles" class="page_home-portfolio--header pt-4">Recent Projects</h2>
          <div class="row">
            <div class="page_home-portfolio--posts col-lg-8 col-md-12">
              <div class="row w-100 row-cols-1 row-cols-md-2 g-4 mx-auto">
                <PortfolioItem v-for="(portfolio, index) in $page.portfolios.edges" :key="portfolio.node.id" :index="index" :portfolio="portfolio.node" />
              </div>
            </div>
            <div class="page_home-portfolio--text col-lg-4 col-md-12">
              <div class="text-left d-flex justify-content-center align-items-center h-100">
                <div class="page_home-portfolio--posts-cta pt-4">
                  <h3>See What I've Been Working On</h3>
                  <p class="my-4">I am thankful that my work can persist past creation and have collected it here for you. Whereas a chef’s creation may only live until the dining guest completes their meal, my work lives as long as the hosting is paid for (or longer if we’re talking GitHub).</p>
                  <g-link to="/portfolio/" class="btn">Portfolio</g-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
import PostItem from "@/components/PostItem";
import PortfolioItem from "@/components/PortfolioItem";
export default {
    metaInfo() {
      return {
        title: `Full Stack Web Developer`,
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
    PostItem,
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
  posts: allPost(filter: { featured: { eq: true }}) {
      edges {
        node {
          id
          title
          readmore
          image
          author
          timeToRead
          description
          date (format: "MMM D YYYY")
          path
        }
      }
    }
    portfolios: allPortfolio(filter: { featured: { eq: true }}) {
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
