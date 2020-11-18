<template>
  <div>
    <section class="hero is-primary is-medium">
      <!-- HERO BODY -->
      <div class="hero-body">
        /
      </div>
      <!-- /HERO BODY -->

      <!--HERO FOOTER -->
      <div class="hero-foot">
        <div id="navbarMenuHero" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-link">Home</a>
            <div class="navbar-item has-dropdown is-link is-hoverable">
              <!-- MENU HEAD -->
              <a class="navbar-item is-arrowless has-icon-left"
                >User
                <span class="icon is-small is-left">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fas fa-user fa-stack-1x fa-inverse"></i>
                </span>
              </a>

              <!-- /MENU HEAD -->

              <!-- MENU ITENS -->
              <nuxt-link to="/profile" class="navbar-item">Profile</nuxt-link>
              <div class="navbar-item">
                <div class="buttons">
                  <button class="button is-dark">
                    <span>Sair</span
                    ><span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style></style>
