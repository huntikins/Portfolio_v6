<template>
  <div class="bg-dark h-100 position-relative">
    <header class="header">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <main class="position-absolute top-50 start-50 translate-middle">
      <slot/>
    </main>
    <footer class="position-absolute top-100 start-50 translate-middle pb-4">
      <small class="text-center d-block text-muted pb-4">&copy; {{ new Date().getFullYear() }} Hunter Trammell</small>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Raleway&display=swap');
body {
  font-family: 'Raleway', sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}
html, body {
height: 100%;
overflow: hidden;
}
h1 {font-weight:400;font-family: 'Fredoka One', cursive;}
.font-fredoka {font-weight:400;font-family: 'Fredoka One', cursive;}
</style>
