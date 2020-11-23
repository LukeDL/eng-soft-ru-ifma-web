<template>
  <div>
    <section class="hero is-primary is-bold">
      <!-- HERO BODY -->
      <div class="hero-body">
        <div class="container">
          <div class="title is-1">RU - IFMA</div>
        </div>
      </div>
      <!-- /HERO BODY -->
    </section>

    <!-- NAVBAR -->

    <nav class="navbar is-info">
      <div class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item">Home</a>
          <a class="navbar-item">Refeições</a>
          <a class="navbar-item">Preparos</a>
          <a class="navbar-item">Ingredientes</a>

          <!-- NAVBAR-DROPDOWN -->

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              // User //
            </a>

            <div class="navbar-dropdown">
              <a href="" class="navbar-item">Profile</a>
              <a href="" class="navbar-item has-text-centered"
                ><button class="button is-dark is-small">
                  Sign Out
                </button></a
              >
            </div>
          </div>

          <!-- /NAVBAR-DROPDOWN -->
        </div>
      </div>
    </nav>

    <!-- /NAVBAR -->
  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style lang="scss">
/*.button {
  border-radius: 25px;
  background-color: #25a25a;
}
.button:hover {
  background-color: #1c7943;
}*/
</style>
