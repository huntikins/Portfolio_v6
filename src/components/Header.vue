<template>
  <header class="header">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo02">
            <ul class="navbar-nav font-fredoka">
              <li class="nav-item">
                <g-link to="/" class="nav-link" aria-current="page" exact>Home</g-link>
                </li>
              <li class="nav-item">
                <g-link class="nav-link" to="/about/" aria-current="page">About</g-link>
              </li>
              <li class="nav-item">
                <g-link class="nav-link" to="/blog/" aria-current="page">Blog</g-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
</template>


