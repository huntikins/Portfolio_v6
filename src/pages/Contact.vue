<template>
  <Layout>
    <div class="page_contact">
      <section class="page_contact-intro">
        <h1>Contact</h1>
        <h2>Have a question? Send me a message and I'll try to get back to you as soon as I can. Alternativley, feel free to reach out via Twitter <a href="https://twitter.com/trammellwebdev" target="_blank" rel="noopener">@trammellwebdev</a>!</h2>
        <form v-if="formSent == false" name="contact" class="page_contact-form" data-netlify="true" data-netlify-honeypot="bot-field" @submit.prevent="handleSubmit">
            <input type="hidden" name="form-name" value="contact" />
            <div class="page_contact-form--group">
                <label for="name">Full Name</label>
                <input type="text" name="name" id="name" v-model="form.name"  placeholder="Full Name" required/>
            </div>
            <div class="page_contact-form--group">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" v-model="form.email" placeholder="Email" required/>
            </div>
            <div class="page_contact-form--group">
                <label for="message">Message</label>
                <textarea type="text" name="message" id="message" v-model="form.message" placeholder="Message" required/>
            </div>
            <button class="btn">Submit</button>
        </form>
        <p v-else>{{ submissionMsg }}</p>
      </section>
    </div>
  </Layout>
</template>

<script>
import axios from "axios";

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
  },
  data () {
    return {
      form: {
        name: "",
        email: "",
        message: "",
        error: ""
      },
      formSent: false,
      submissionMsg: '',
      formError: false
    }
  },
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit () {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      axios.post(
        "/",
        this.encode({
          "form-name": "contact",
          ...this.form
        }),
        axiosConfig
      ).then(res => {
        this.formSent = true;
        this.submissionMsg = 'Your message has been sent, I will get back to you as soon as possible!';
      }).catch(err => {
        this.formSent = true;
        this.submissionMsg = 'Uh-Oh, it looks like something went wrong. Hang tight, let me grab some error reporting and refresh your session...';
        this.formError = true
        this.errorMsg = err
        setTimeout(()=>{
          this.$router.go();
        }, 5000)
      })
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
