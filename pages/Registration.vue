<template>
  <div class="Registration">
    <div class="columns is-centered">
      <div class="box column is-one-quarter has-background-white">
        <form id="login-form" @submit.prevent="submitForm">
          <div class="field">
            <label for="" class="label is-small has-text-left">Nome</label>
            <div class="control">
              <input
                id="firstName"
                v-model="firstName"
                type="text"
                class="input"
                name="firstName"
              />
            </div>
          </div>

          <div class="field">
            <label for="" class="label is-small has-text-left">Sobrenome</label>
            <div class="control">
              <input
                id="lastName"
                v-model="lastName"
                type="text"
                class="input"
                name="lastName"
              />
            </div>
          </div>

          <div class="field">
            <label for="" class="label is-small has-text-left">Email:</label>
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
            <label for="" class="label is-small has-text-left"
              >Confirmar Senha:</label
            >
            <div class="control">
              <input
                id="passwordConfirmation"
                v-model="passwordConfirmation"
                type="password"
                class="input"
                name="password"
              />
            </div>
          </div>

          <div class="field">
            <div class="control">
              <button class="button is-fullwidth has-text-light">
                Registrar
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
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  },
  methods: {
    submitForm() {
      if (this.checkPassword()) {
        this.$axios
          .post('/api/users', {
            firstName: this.firstName,
            lastName: this.lastName,
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
    },
    checkPassword() {
      if (this.password === this.passwordConfirmation) {
        console.log('confirmation ok')
        return true
      } else {
        console.log('confirmation not ok')
        return false
      }
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
