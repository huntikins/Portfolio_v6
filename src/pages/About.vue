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
      <section class="page_home-blog">
        <h2 class="page_home-blog--header pt-4">Currents</h2>
        <div class="row">
          <div class="col-lg-4 col-md-12">
            <div class="text-left d-flex justify-content-center align-items-center h-100">
              <div class="page_home-portfolio--posts-cta text-right pt-4" style="text-align:right;">
                <h3>It's A Me!</h3>
                <p class="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, soluta similique voluptatibus, culpa facilis, odio delectus voluptatem ad molestiae a perferendis possimus incidunt? Maxime, dolorem. Labore, ducimus explicabo. Ipsa, natus!</p>
              </div>
            </div>
          </div>
          <div class="page_home-blog--posts col-lg-8 col-md-12">
            <div class="row w-100 row-cols-1 row-cols-md-2 g-4 mx-auto">
              
            </div>
          </div>
        </div>
      </section>
      <section class="page_home-portfolio">
        <div class="container-fluid">
          <h2 id="recent-dev-articles" class="page_home-portfolio--header pt-4">What I Use</h2>
          <div class="row">
            <div class="page_home-portfolio--posts col-lg-8 col-md-12">
              <div class="row w-100 row-cols-1 row-cols-md-2 g-4 mx-auto">
                
              </div>
            </div>
            <div class="page_home-portfolio--text col-lg-4 col-md-12">
              <div class="text-left d-flex justify-content-center align-items-center h-100">
                <div class="page_home-portfolio--posts-cta pt-4">
                  <h3>See What I've Been Working On</h3>
                  <p class="my-4">I am thankful that my work can persist past creation and have collected it here for you. Whereas a chef’s creation may only live until the dining guest completes their meal, my work lives as long as the hosting is paid for (or longer if we’re talking GitHub).</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="page_home-blog">
        <h2 class="page_home-blog--header pt-4">Fun Facts</h2>
        <div class="row">
          <div class="col-lg-4 col-md-12">
            <div class="text-left d-flex justify-content-center align-items-center h-100">
              <div class="page_home-portfolio--posts-cta text-right pt-4" style="text-align:right;">
                <h3>It's A Me!</h3>
                <p class="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, soluta similique voluptatibus, culpa facilis, odio delectus voluptatem ad molestiae a perferendis possimus incidunt? Maxime, dolorem. Labore, ducimus explicabo. Ipsa, natus!</p>
              </div>
            </div>
          </div>
          <div class="page_home-blog--posts col-lg-8 col-md-12">
            <div class="row w-100 row-cols-1 row-cols-md-2 g-4 mx-auto">
              
            </div>
          </div>
        </div>
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