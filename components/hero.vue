<template>
  <div class>
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

    <nav class="navbar is-dark is-transparent">
      <div class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item">Home</a>
          <a class="navbar-item">Refeições</a>
          <a class="navbar-item">Preparos</a>
          <a class="navbar-item">Ingredientes</a>

          <!-- NAVBAR-DROPDOWN -->

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link is-arrowless">
              // User //
            </a>

            <div class="navbar-dropdown is-boxed is-right">
              <a href="" class="navbar-item">Profile</a>
              <hr class="navbar-divider" />
              <a href="" class="navbar-item is-align-items-center"
                ><button class="button is-dark is-small is-align-self-center">
                  <span class="icon is-left is-small">
                    <font-awesome-icon :icon="['fas', 'sign-out-alt']" />
                  </span>
                  <span>Sign Out</span>
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
