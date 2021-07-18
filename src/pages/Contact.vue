<template>
  <Layout>
    <div class="page_contact">
      <section class="page_contact-section">
        <div class="page_contact-section--intro">
          <div class="page_contact-section--intro-tagline">
            <h1>Contact Me</h1>
            <p>Have a question or wan't to chat? Send me a message and I'll try to get back to you as soon as I can. Alternativley, feel free to reach out via <a href="https://twitter.com/trammellwebdev" target="_blank" rel="noreferrer">Twitter</a> or <a href="https://www.linkedin.com/in/huntertrammell" target="_blank" rel="noreferrer">LinkedIn</a>!</p>
          </div>
        </div>
        <div class="page_contact-section--body">
          <div class="container-fluid d-flex flex-column">
            <div class="row">
              <div class="col-12">
                <div class="social d-flex align-items-center justify-content-around flex-wrap">
                    <a href="https://twitter.com/trammellwebdev" class="twitter d-flex flex-column align-items-center justify-content-center" target="_blank" rel="noreferrer">
                      <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Twitter icon</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                      <span>@trammellwebdev</span>
                    </a>
                    <a href="https://www.linkedin.com/in/huntertrammell" class="linkedin d-flex flex-column align-items-center justify-content-center" target="_blank" rel="noreferrer">
                      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn icon</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      <span>Hunter Trammell</span>
                    </a>
                    <a href="https://www.github.com/huntertrammell" class="github d-flex flex-column align-items-center justify-content-center" target="_blank" rel="noreferrer">
                      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                      <span>huntertrammell</span>
                    </a>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 col-sm-12 pb-5">
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
              </div>
              <div class="col-md-6 col-sm-12">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d396368.6856174598!2d-94.8558984736919!3d39.09211671652384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0f75eafe99997%3A0x558525e66aaa51a2!2sKansas%20City%2C%20MO!5e0!3m2!1sen!2sus!4v1617073480845!5m2!1sen!2sus" width="100%" height="400px" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
import axios from "axios";

export default {
    metaInfo() {
      return {
        title: 'Contact',
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
