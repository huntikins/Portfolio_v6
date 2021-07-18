<template>
  <div>
    <Header />
    <main>
    <slot />
    </main>
    <footer>
      <small>&copy; {{ new Date().getFullYear() }} Hunter Trammell | Built with <span>&hearts;</span> using <strong><a href="https://twitter.com/gridsome" target="_blank" rel="noreferrer">@gridsome</a></strong> & <strong><a href="https://twitter.com/netlify" target="_blank" rel="noreferrer">@netlify</a></strong></small>
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

