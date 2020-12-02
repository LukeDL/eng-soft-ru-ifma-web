import { HorizontalBar, mixins } from 'vue-chartjs'
import { chartjsPluginColorSchemes } from 'chartjs-plugin-colorschemes'
const { reactiveProp } = mixins

export default {
  extends: HorizontalBar,
  name: 'HorizontalBarChart',
  mixins: [reactiveProp],
  props: ['chartData', 'options', 'height'],
  mounted() {
    this.addPlugin([chartjsPluginColorSchemes])
    this.renderChart(this.chartData, this.options)
  }
}
