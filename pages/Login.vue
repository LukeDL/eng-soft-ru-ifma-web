<template>
  <div>
    <section class="section">
      <div class="columns is-centered">
        <div class="box column is-one-quarter has-background-white">
          <form id="login-form" @submit.prevent="submitForm">
            <div class="field">
              <label for="" class="label is-small has-text-left">Login:</label>
              <div class="control">
                <input
                  id="email"
                  v-model="email"
                  type="text"
                  class="input"
                  name="email"
                />
              </div>
            </div>

            <div class="field">
              <label for="" class="label is-small has-text-left">Senha:</label>
              <div class="control">
                <input
                  id="password"
                  v-model="password"
                  type="password"
                  class="input"
                  name="password"
                />
              </div>
            </div>

            <div class="field">
              <div class="control">
                <button class="button is-fullwidth has-text-light is-primary">
                  Acessar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submitForm() {
      this.$auth.loginWith('local', {
        data: {
          email: this.email,
          password: this.password
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/scss/main.scss';

/*.button {
  border-radius: 25px;
  background-color: #25a25a;
}
.button:hover {
  background-color: #1c7943;
}*/
</style>
