<template>
  <div>
    <Header />
    <main>
    <slot/>
    </main>
    <footer>
      <small class="text-center d-block text-muted pb-4">&copy; {{ new Date().getFullYear() }} Hunter Trammell</small>
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
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Raleway&display=swap');
body {
  font-family: 'Raleway', sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}
h1 {font-weight:400;font-family: 'Fredoka One', cursive;}
.font-fredoka {font-weight:400;font-family: 'Fredoka One', cursive;}
</style>
