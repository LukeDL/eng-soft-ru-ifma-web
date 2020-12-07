<template>
  <div class="container">
    <nutritionist-dashboard v-if="$auth.user.role == 2" />
    <administrator-dashboard v-if="$auth.user.role == 1" />
  </div>
</template>

<script>
import AdministratorDashboard from '../components/AdministratorDashboard.vue'
import NutritionistDashboard from '~/components/NutritionistDashboard.vue'

export default {
  components: { AdministratorDashboard, NutritionistDashboard },
  // middleware: ['auth-dashboard']
  middleware: ['auth']
}
</script>

<style></style>
