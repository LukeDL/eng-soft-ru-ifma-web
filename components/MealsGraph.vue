<template>
  <div class="container">
    <HorizontalBarChart :chartData="data" :options="chartOptions" />
  </div>
</template>

<script>
import HorizontalBarChart from './HorizontalBarChart.js'

export default {
  name: 'MealsGraph',
  components: { HorizontalBarChart },
  data() {
    return {
      data: {
        labels: [
          '{{ Name.Meal 1 }}',
          '{{ Name.Meal 2 }}',
          '{{ Name.Meal 3 }}',
          '{{ Name.Meal 4 }}',
          '{{ Name.Meal 5 }}'
        ],
        datasets: [{ data: [10, 20, 30, 40, 100] }]
      },
      chartOptions: {
        /* plugins: {
          colorschemes: {
            scheme: 'tableau.ClassicGreen7'
          }
        }, */
        responsive: true,
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Data HorizontalBar',
          fontSize: 24,
          fontColor: '#6b7280'
        },
        scales: {
          xAxes: [
            {
              gridlines: {
                display: false
              },
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    }
  }
}
</script>

<style></style>
