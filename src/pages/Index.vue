<template>
  <Layout>
    <div class="page_home">
      <section class="page_home-intro">
        <h1>Hunter Trammell<br><span>Web Developer, Tutor & Author</span></h1>
        <div class="page_home-intro--body">
          <p class="page_home-intro--tagline">As you may have deduced from the title, my name is Hunter Trammell and I am a Full Stack Web Developer from Kansas City. Web Development is my passion and I love to share that passion with others whether it is through casual conversation or by way of instruction. I am constantly learning and improving my skills as a developer. If you'd like to learn more about me and my work, click the button below, otherwise keep scrolling to see some of my recent projects & articles.</p>
          <g-link to="/about/" class="btn">About Me</g-link>
        </div>
      </section>
      <section class="page_home-blog">
        <h2 id="recent-dev-articles" class="page_home-blog--header">Articles</h2>
        <div class="page_home-blog--posts">
          <PostItem v-for="post in $page.posts.edges" :key="post.node.id" :post="post.node" />
        </div>
      </section>
      <section class="page_home-portfolio">
        <div class="container-fluid">
          <h2 id="recent-dev-articles" class="page_home-portfolio--header">Recent Projects</h2>
          <div class="row">
            <div class="page_home-portfolio--posts col-md-8 col-sm-12">
              <div class="row">
                <PortfolioItem v-for="(portfolio, index) in $page.portfolios.edges" :key="portfolio.node.id" :index="index" :portfolio="portfolio.node" />
              </div>
            </div>
            <div class="col-md-4 col-sm-12">
              <div class="text-left d-flex justify-content-start align-content-center flex-column h-100">
                <h3>Take a look at my Portfolio</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsam ab enim excepturi a! Ut veniam impedit perspiciatis dolore natus sunt deleniti repellat quo. Tenetur aliquid cum sit molestiae necessitatibus.</p>
                <g-link to="/portfolio/" class="btn">About Me</g-link>
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
        title: this.$page.meta.siteName,
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
  posts: allPost {
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
