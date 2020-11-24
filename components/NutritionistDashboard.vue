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
                <p class="is-size-1">CALENDARIO</p>
              </div>
            </div>
          </div>
          <!-- segundo nivel -->
        </div>
      </div>
      <!-- /ancestor -->
    </section>
  </div>
</template>

<script>
import MealsListItem from './MealsListItem.vue'

export default {
  name: 'NutritionistDashboard',
  components: { MealsListItem }
}
</script>

<style scoped lang="scss"></style>
