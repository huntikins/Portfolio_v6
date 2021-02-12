<template>
  <header class="header">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid d-flex justify-content-center">
            <g-link to="/" class="navbar-brand font-primary text-lowercase" aria-current="page" exact>Hunter Trammell</g-link>
        </div>
      </nav>
    </header>
</template>
<style lang="scss">
.navbar {
  background-color:rgb(60, 107, 116);
  &-brand {
    letter-spacing: .25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0 !important;
    color: white;
    font-size: 2.5rem !important;
    &:hover, &:active, &:focus {
      color: white !important;
    }
  }
}
</style>
