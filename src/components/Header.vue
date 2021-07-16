<template>
  <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <g-link class="navbar-brand" to="/" aria-current="page" exact>Hunter Trammell</g-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarMenu">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item"><g-link class="nav-link" to="/blog/" aria-current="page">Blog</g-link></li>
              <li class="nav-item"><g-link class="nav-link" to="/portfolio/" aria-current="page">Portfolio</g-link></li>
              <li class="nav-item"><g-link class="nav-link" to="/about/" aria-current="page">About</g-link></li>
              <li class="nav-item"><g-link class="nav-link" to="/contact/" aria-current="page">Contact</g-link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
</template>

