<template>
  <Layout>
    <div class="container text-white text-center">
      <div class="intro-wrapper d-flex flex-column justify-content-center align-items-center h-100">
        <div class="intro-wrapper_overlay"></div>
        <div class="intro-wrapper_body">
          <h1>Hunter Trammell</h1>
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere delectus assumenda totam libero nobis in, quam voluptas consequatur iusto qui aut odio error aspernatur minus, eos quibusdam id expedita dicta.
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hi Ceri!'
  }
}
</script>

<style>
.intro-wrapper {
  height: 500px;
  width: 500px;
  position: relative;
  top: 50;
}
.intro-wrapper_overlay {
  height: 250px;
  width: 600px;
  position: absolute;
  z-index: 1;
  background-color: #303030;
  filter: blur(5px);
  transform: skewY(5deg);
}
.intro-wrapper_body {
  height: 250px;
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
}
</style>
