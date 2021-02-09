<template>
  <div>
    <Header />
    <main class="pb-4">
    <slot/>
    </main>
    <footer class="mt-4">
      <small class="text-center d-block text-light py-1 bg-dark">&copy; {{ new Date().getFullYear() }} Hunter Trammell | Built with <span>&hearts;</span> using <strong><a href="https://twitter.com/gridsome" class="text-white text-decoration-none font-fredoka" target="_blank" rel="noopener">@gridsome</a></strong> & <strong><a href="https://twitter.com/netlify" class="text-white text-decoration-none font-fredoka" target="_blank" rel="noopener">@netlify</a></strong></small>
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
@import url('https://fonts.googleapis.com/css2?family=Patua+One&family=Raleway&display=swap');
body, html {
  font-family: 'Raleway', sans-serif;
  margin:0;
  padding:0;
}
h1, h2, h3, h4, h5, h6 {font-weight:400;font-family: 'Patua One', cursive;}
.font-fredoka {font-weight:400;font-family: 'Patua One', cursive;}
</style>
