<template>
  <Layout>
    <div class="page_contact">
      <section class="page_contact-intro">
        <h1>Contact</h1>
        <form name="contact" class="page_contact-form--group" data-netlify="true"
    data-netlify-honeypot="bot-field" @submit.prevent="handleSubmit">
            <input type="hidden" name="form-name" value="contact" />
            <div class="page_contact-form--group">
                <label for="name">Full Name</label>
                <input type="text" name="name" id="name" :value="form.name" v-model="form.name" required/>
            </div>
            <div class="page_contact-form--group">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" :value="form.email" v-model="form.email" required/>
            </div>
            <div class="page_contact-form--group">
                <label for="message">Message</label>
                <textarea type="text" name="message" id="message" :value="form.messsage" v-model="form.messsage"  required>
            </div>
            <button>Submit</button>
        </form>
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
        message: ""
      }
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
      );
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
