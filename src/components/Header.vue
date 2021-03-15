<template>
  <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <g-link class="header_nav-brand navbar-brand" to="/" aria-current="page" exact>Hunter Trammell</g-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header_nav" aria-controls="header_nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse bg-light"  id="header_nav">
            <ul class="header_nav navbar-nav me-auto mb-2 mb-lg-0">
              <li class="header_nav-item"><g-link to="/blog/" aria-current="page">Blog</g-link></li>
              <li class="header_nav-item"><g-link to="/portfolio/" aria-current="page">Portfolio</g-link></li>
              <li class="header_nav-item"><g-link to="/about/" aria-current="page">About</g-link></li>
              <li class="header_nav-item"><g-link to="/contact/" aria-current="page">Contact</g-link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
</template>

