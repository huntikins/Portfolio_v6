<template>
  <div>
    <Header />
    <main>
    <slot/>
    </main>
    <footer>
      <small>&copy; {{ new Date().getFullYear() }} Hunter Trammell | Built with <span>&hearts;</span> using <strong><a href="https://twitter.com/gridsome" target="_blank" rel="noopener">@gridsome</a></strong> & <strong><a href="https://twitter.com/netlify" target="_blank" rel="noopener">@netlify</a></strong></small>
    </footer>
</div>
</template>

<script>
import Header from "@/components/Header";

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
main {
  padding-top: 9vh;
}
body, html {
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  margin:0;
  padding:0;
  background-color: whitesmoke;
  color: #303030;
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'Jost', sans-serif;
  font-weight: 600;
}
footer {
  background-color: teal;
  padding: 2rem;
  text-align: center;
  small {
    color: white;
    a {
      color: white;
      font-weight: 900;
      text-decoration: none;
    }
  }
}
</style>
