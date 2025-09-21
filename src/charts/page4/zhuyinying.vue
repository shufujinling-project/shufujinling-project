<template>
  <div class="container">
    <v-chart class="chart" :option="option" autoresize />
  </div>
</template>

<script setup>
import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import {
  TooltipComponent,
  LegendComponent,
  GridComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

use([
  TooltipComponent,
  LegendComponent,
  GridComponent,
  BarChart,
  CanvasRenderer
])

import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';

provide(THEME_KEY, 'dark');

const option = {
  "backgroundColor": "rgba(255,255,255,0.1)",
  "tooltip": {
    "trigger": "axis",
    "axisPointer": { "type": "shadow" },
    "backgroundColor": "rgba(0,0,0,0.7)",
    "borderColor": "#4CAF50",
    "borderWidth": 1,
    "textStyle": { "color": "#fff" }
  },
  "legend": {
    "top": 10,
    "textStyle": { "color": "#ffffff", "fontSize": 14 },
    "data": ["社会消费品零售总额"]
  },
  "grid": {
    "left": "10px",
    "right": "50px",
    "bottom": "10%",
    "containLabel": true
  },
  "xAxis": {
    "type": "category",
    "name": "年份",
    "data": ["2018", "2019", "2020", "2021", "2023"],
    "axisLine": { "lineStyle": { "color": "rgba(255,255,255,0.6)" } },
    "axisTick": { "lineStyle": { "color": "rgba(255,255,255,0.6)" } },
    "axisLabel": { "color": "rgba(255,255,255,0.8)" }
  },
  "yAxis": {
    "type": "value",
    "name": "亿元",
    "axisLine": { "show": false },
    "axisTick": { "show": false },
    "splitLine": { "lineStyle": { "color": "rgba(255,255,255,0.1)" } },
    "axisLabel": { "color": "rgba(255,255,255,0.8)" }
  },
  "series": [
    {
      "name": "社会消费品零售总额",
      "type": "bar",
      "stack": "total",
      "data": [6778, 7100, 7387, 7899, 8078, 8201],
      "itemStyle": {
        "borderRadius": [6, 6, 0, 0],
        "color": {
          "type": "linear",
          "x": 0, "y": 0, "x2": 0, "y2": 1,
          "colorStops": [
            { "offset": 0, "color": "#66BB6A" },
            { "offset": 1, "color": "#2E7D32" }
        ]
        }
      },
      "emphasis": {
        "itemStyle": {
          "shadowBlur": 12,
          "shadowColor": "rgba(76,175,80,0.6)"
        }
      },
      "animationDuration": 1200,
      "animationDelay": function (idx) { return idx * 100; }
    }
  ]
}
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
}
.chart {
  min-height: 0;
  min-width: 0;
  height: 100%;
  width: 100%;
  display: flex;
}
</style>