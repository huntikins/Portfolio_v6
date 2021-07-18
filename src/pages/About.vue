<template>
  <Layout>
    <div class="page_home">
      <section class="page_home-intro d-flex justify-content-center align-items-start flex-column">
        <h1>Every Hero<br><span>Has An Origin Story</span></h1>
        <div class="page_home-intro--body">
          <p class="page_home-intro--quote"><em>"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking." - Steve Jobs</em></p>
          <p class="page_home-intro--tagline">I've wanted to be many things in life: Writer, Tattoo Artist, Restauranteur, Architect, and loads more I can't recall. I frequently get inspired and think to myself 'my gosh, this is what I've been searching for, this is what I was born to do' and so as any knowledge seeker would I turned to papa Udemy and bought a course. At this point, if you're thinking 'oh, what a gift this man is. truly remarkable that he can change his specialty at the drop of a dime', you've probably never purchased a course from Udemy before. A few of my inspirations made it to light, but my most important and final career inspiration being a Developer.</p>
          <g-link to="/blog/that-one-time-i-grew-up-and-became-a-web-developer/" class="btn">Get To Know Me</g-link>
        </div>
      </section>
      <section class="px-4 bio_career">
        <div class="row my-5">
          <div class="col-lg-6 col-md-12 pe-4">
            <div class="text-left d-flex justify-content-end align-items-start h-100">
              <div class="page_home-portfolio--posts-cta pt-4">
                <h3 class="text-right">Employment History</h3>
                <p class="mt-4 text-right"><strong>Web Developer</strong> @ <a href="https://createfervor.com" target="_blank" rel="noreferrer">Fervor</a> | <strong>Oct 2020</strong>&nbsp;-&nbsp;<strong>Present</strong></p>
                <p class="text-right"><strong>Web Developer</strong> @ <a href="https://kclibrary.org" target="_blank" rel="noreferrer">KC Public Library</a> | <strong>Oct 2019</strong>&nbsp;-&nbsp;<strong>Oct 2020</strong></p>
                <p class="text-right"><strong>Level 2 Analyst</strong> @ <a href="https://amctheatres.com" target="_blank" rel="noreferrer">AMC Theatres</a> | <strong>Jun 2019</strong>&nbsp;-&nbsp;<strong>Oct 2019</strong></p>
                <p class="text-right"><strong>Level 1 Analyst</strong> @ <a href="https://amctheatres.com" target="_blank" rel="noreferrer">AMC Theatres</a> | <strong>Feb 2017</strong>&nbsp;-&nbsp;<strong>Jun 2019</strong></p>
                <p class="text-right"><strong>Hourly Manager</strong> @ <a href="https://www.amctheatres.com/movie-theatres/kansas-city/amc-dine-in-studio-28" target="_blank" rel="noreferrer">AMC Studio 30</a> | <strong>Oct 2014</strong>&nbsp;-&nbsp;<strong>Feb 2017</strong></p>
                <p class="text-right"><strong>Supervisor</strong> @ <a href="https://www.amctheatres.com/movie-theatres/kansas-city/amc-dine-in-studio-28" target="_blank" rel="noreferrer">AMC Studio 30</a> | <strong>Aug 2013</strong>&nbsp;-&nbsp;<strong>Oct 2014</strong></p>
                <p class="text-right mb-0"><strong>Film Crew</strong> @ <a href="https://www.amctheatres.com/movie-theatres/kansas-city/amc-dine-in-studio-28" target="_blank" rel="noreferrer">AMC Studio 30</a> | <strong>Sep 2011</strong>&nbsp;-&nbsp;<strong>Aug 2013</strong></p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 ps-4">
            <div class="text-left d-flex justify-content-start align-items-start h-100">
              <div class="page_home-portfolio--posts-cta pt-4">
                <h3>What I Like To Work With</h3>
                <ul class="mt-4">
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS/SCSS</li>
                  <li>PHP/WordPress</li>
                  <li>JAMStack</li>
                  <li>Vue</li>
                  <li>React</li>
                  <li>Git</li>
                  <li>Netlify</li>
                  <li>Gridsome</li>
                  <li>Bootstrap</li>
                  <li>Vuetify</li>
                  <li>Web Components</li>
                  <li>GraphQL</li>
                  <li>Strapi</li>
                  <li>AWS S3</li>
                  <li>Documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p class="bio_connect text-center pb-4">Connect with me on <a href="https://linkedin.com/in/huntertrammell" target="_blank" rel="noreferrer">Linked In</a> & <a href="https://twitter.com/trammellwebdev" target="_blank" rel="noreferrer">Twitter</a>!</p>
      </section>
    </div>
  </Layout>
</template>

<script>
export default {
    metaInfo() {
      return {
        title: `About Me`,
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
}
</page-query>