<template>
  <div class="login">
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
              <button class="button is-fullwidth has-text-light">
                Acessar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
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
      this.$axios
        .post('/api/users', {
          email: this.email,
          password: this.password
        })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.button {
  border-radius: 25px;
  background-color: #25a25a;
}
.button:hover {
  background-color: #1c7943;
}
</style>
