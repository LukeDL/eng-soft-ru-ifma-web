<template>
  <div class="container">
    <section class="section">
      <div class="notification is-primary">
        <div class="container">
          <div class="columns">
            <div class="column is-half">
              <p class="title">
                <span>Adicionar Usuário</span>
                <button class="button is-dark is-medium">
                  <span class="icon is-small is-left">
                    <font-awesome-layers>
                      <font-awesome-icon :icon="['fas', 'circle']" />
                      <font-awesome-icon
                        :icon="['fas', 'plus']"
                        :style="{ color: 363636 }"
                        transform="shrink-3"
                      />
                    </font-awesome-layers>
                  </span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AdministratorDashboard'
}
</script>

<style></style>
