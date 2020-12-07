<template>
  <div class="container">
    <section class="section">
      <div class="tile is-ancestor">
        <div class="tile is-parent is-vertical">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <div class="tile is-child notification is-primary">
                <div class="container">
                  <div class="box">
                    <p class="title">Refeição Rápida:</p>
                    <button class="button is-dark is-fullwidth is-medium">
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

                      <span>Adicionar Refeição</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="tile is-child notification is-info">
                <div class="box">
                  <p class="title is-size-4">Preparações Rapidas:</p>
                  <button
                    @click="modalActive('Preparations')"
                    class="button is-dark is-fullwidth is-medium"
                  >
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
                    <span>Adicionar Preparação</span>
                  </button>
                </div>
              </div>
            </div>

            <div class="tile is-parent">
              <div class="tile is-child notification is-danger">
                <p class="title is-size-4">Refeições do Dia:</p>
                <div class="container">
                  <MealsListItem /><br />
                  <MealsListItem /><br />
                  <MealsListItem />
                </div>
              </div>
            </div>
          </div>
          <!-- primeiro nivel -->
          <div class="tile is-parent">
            <div class="tile is-child notification is-warning">
              <div class="box">
                <p class="is-size-1">Saída das Refeições</p>
                <MealsGraph />
              </div>
            </div>
          </div>
          <!-- segundo nivel -->
        </div>
      </div>
      <!-- /ancestor -->
    </section>

    <PreparationModalCard
      v-bind:class="{ 'is-active': isActive }"
      v-on:modal-close="isActive = false"
    />
  </div>
</template>

<script>
import MealsListItem from './MealsListItem.vue'
import MealsGraph from './MealsGraph.vue'
import PreparationModalCard from './PreparationModalCard.vue'

export default {
  name: 'NutritionistDashboard',
  components: { MealsListItem, MealsGraph, PreparationModalCard },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    modalActive(el) {
      if (el === 'Preparations') {
        this.isActive = !this.isActive
      }
    }
  }
}
</script>

<style scoped lang="scss"></style>
