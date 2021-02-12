<template>
  <header>
      <nav>
        <g-link class="header_nav-brand" to="/" aria-current="page" exact>Hunter Trammell</g-link>
        <ul class="header_nav">
          <li class="header_nav-item"><g-link to="/blog/" aria-current="page">Blog</g-link></li>
          <li class="header_nav-item"><g-link to="/portfolio/" aria-current="page">Portfolio</g-link></li>
          <li class="header_nav-item"><g-link to="/about/" aria-current="page">About</g-link></li>
          <li class="header_nav-item"><g-link to="/contact/" aria-current="page">Contact</g-link></li>
        </ul>
      </nav>
    </header>
</template>
<style lang="scss">
header {
  position: fixed;
  height: 10vh;
  width: 100vw;
  background-color: lightgray;
  nav {
    height: 10vh;
    padding: 0 2rem;
    display:flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 735px){
      flex-direction: column;
      padding: 1rem 2rem;
      height: 6.5vh;
    }
    @media(max-width: 470px){
      font-size: 14px;
    }
    a {
      color: teal;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: .15rem;
      font-weight: 900;
    }
  }
  .header_nav {
    list-style-type: none;
    margin: 0;
    padding: 0;
    &-item{
      display: inline;
      padding: 0 1rem;
      @media(max-width: 470px){
        padding: 0 .5rem;
      }
    }
  }
}
</style>
