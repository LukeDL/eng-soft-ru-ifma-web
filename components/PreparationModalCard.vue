<template>
  <div class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <div class="modal-card-head">
        <p class="modal-card-title">Criar Preparação:</p>
        <button @click="exitModal()" class="delete" aria-label="close"></button>
      </div>
      <section class="modal-card-body">
        <!-- TODO: Form of Preparation -->

        <form>
          <div class="field">
            <label for="" class="label">Nome do Preparo:</label>
            <input v-model="formData.name" type="text" class="input" />
          </div>

          <div class="field">
            <label for="" class="label">Tipo de Preparo:</label>
            <div class="control">
              <div class="select">
                <select
                  id=""
                  v-model="formData.type"
                  @focus="getTypes()"
                  name=""
                >
                  <option
                    v-bind:key="option.id"
                    v-for="option in selectOptions"
                    :value="option.id"
                    >{{ option.preparationType }}
                  </option></select
                >
              </div>
            </div>
          </div>

          <div class="field">
            <p class="buttons">
              <button
                @click.prevent="addPreparationItem()"
                class="button is-link is-rounded"
              >
                <span class="icon">
                  <font-awesome-icon :icon="['far', 'plus-square']" />
                </span>
                <span>Adicionar Ingrediente</span>
              </button>
            </p>
          </div>

          <div v-bind:key="item.id" v-for="item in preparationItens">
            <!-- eslint-disable-next-line vue/require-component-is -->
            <component
              v-on:select-value="formData.ingredients = $event"
              v-model="formData.ingredients"
              v-if="item.id"
              :is="item.item"
            />
          </div>
        </form>
      </section>
      <footer class="modal-card-foot">
        <button v-on:click="modalSend()" class="button is-primary">
          Salvar
        </button>
        <button v-on:click="exitModal()" class="button is-dark">
          Cancelar
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
import IngredientItem from './IngredientItem.vue'

export default {
  name: 'PreparationModalCard',
  // eslint-disable-next-line vue/no-unused-components
  components: { IngredientItem },
  data() {
    return {
      isActive: false,
      formData: {
        name: '',
        type: '',
        ingredients: []
      },
      preparationItens: [
        {
          id: 1,
          item: IngredientItem
        }
      ],
      selectOptions: []
    }
  },
  methods: {
    sendModal() {},
    async exitModal() {
      await this.eraseLength(this.preparationItens)
      this.$emit('modal-close')
    },
    addPreparationItem() {
      this.preparationItens.push({
        id: Object.keys(this.preparationItens).length + 1,
        item: IngredientItem
      })
    },
    eraseLength(arr) {
      for (let i = arr.length; i > 1; i--) {
        arr.pop()
      }
    },
    getTypes() {
      this.$axios
        .get('/api/preparations/types')
        .then((res) => (this.selectOptions = JSON.parse(res.data)))
    }
  }
}
</script>

<style></style>
