<template>
  <header class="header">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid d-flex justify-content-center">
            <g-link to="/" class="navbar-brand font-primary text-lowercase" aria-current="page" exact>Hunter Trammell</g-link>
        </div>
      </nav>
    </header>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.navbar {
  border-top: 4px solid black;
  border-bottom: 4px solid black;
  span {
    font-size: 32px;
    @media(max-width: 350px){
        font-size: 24px;
      }
      @media(max-width: 350px){
        font-size: 24px;
      }
  }
  &-brand {
    letter-spacing: .25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0 !important;
  }
}
</style>
