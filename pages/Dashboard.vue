<template>
  <div class="container">
    <!-- <nutritionist-dashboard /> -->
    <administrator-dashboard />
  </div>
</template>

<script>
// import NutritionistDashboard from '~/components/NutritionistDashboard.vue'
import AdministratorDashboard from '../components/AdministratorDashboard.vue'

export default {
  components: { AdministratorDashboard }
}
</script>

<style></style>
