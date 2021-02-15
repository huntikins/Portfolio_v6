<template>
  <Layout>
    <div class="page_contact">
      <section class="page_contact-intro">
        <h1>Contact</h1>
        <form name="contact" class="page_contact-form--group" data-netlify="true"
    data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <div class="page_contact-form--group">
                <label for="name">Full Name</label>
                <input type="text" name="name" id="name" required/>
            </div>
            <div class="page_contact-form--group">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" required/>
            </div>
            <div class="page_contact-form--group">
                <label for="message">Message</label>
                <textarea type="text" name="message" id="message" required>
            </div>
            <input type="submit" value="Submit">
        </form>
      </section>
    </div>
  </Layout>
</template>

<script>
export default {
    metaInfo() {
      return {
        title: this.$page.meta.siteName,
        description: this.$page.meta.siteDescription,
        keywords: 'web development, javascript, html, vue, react, front-end, back-end, full-stack, coding',
        openGraph: {
          title: this.$page.meta.siteName,
          type: 'website',
          description: this.$page.meta.siteDescription
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
