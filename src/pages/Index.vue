<template>
  <Layout>
    <div class="container page_home">
      <div class="row">
        <div class="page_home-content">
          <h1><Typewriter word="Hunter Trammell"/></h1>
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere delectus assumenda totam libero nobis in, quam voluptas consequatur iusto qui aut odio error aspernatur minus, eos quibusdam id expedita dicta.
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import typewriter from '@/components/Typewriter.vue'
export default {
  metaInfo: {
    title: 'Hi Ceri!'
  },
  components: {
    Typewriter: typewriter
  }
}
</script>

<style lang="scss">
.page_home {
  &-content{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    height: 70vh;
    p, h1 {
      text-align:center !important;
      padding: 1rem 1rem 0;
    }
  }
}
</style>