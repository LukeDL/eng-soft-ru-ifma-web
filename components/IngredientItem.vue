<template>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Ingrediente:</label>
    </div>

    <div class="field-body">
      <div class="field is-grouped">
        <p class="control is-expanded ">
          <span class="select">
            <select
              v-model="select"
              @change="$emit('select-value', select.id)"
              @click="loadIngredients()"
            >
              <option
                v-bind:key="option.id"
                v-for="option in selectOptions"
                :value="option.id"
                >{{ option.ingredientName }}</option
              >
            </select>
          </span>
        </p>
        <p class="control is-expanded">
          <input class="input" placeholder="Quantidade" />
        </p>
      </div>
      <!-- <div class="field"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'IngredientItem',
  data() {
    return {
      select: '',
      selectOptions: []
    }
  },
  methods: {
    loadIngredients() {
      this.$axios
        .get('/api/preparations/ingredients')
        .then((res) => (this.selectOptions = JSON.parse(res.data)))
    }
  }
}
</script>

<style></style>
