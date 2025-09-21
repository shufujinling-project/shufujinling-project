<template>
  <div class="container">
    <v-chart class="chart" :option="option" autoresize />
  </div>
</template>

<script setup>
import { use } from 'echarts/core'
import { BarChart, LineChart } from 'echarts/charts'
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
  LineChart,
  CanvasRenderer
])

import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';

provide(THEME_KEY, 'dark');

const option = {
  "backgroundColor": "rgba(255,255,255,0.1)",
  "title": {
    "text": "南京市旅游总人数和旅游业总收入变化情况",
    "left": "center"
  },
  "tooltip": {
    "trigger": "axis",
    "axisPointer": { "type": "shadow" },
    "backgroundColor": "rgba(0,0,0,0.7)",
    "borderColor": "#3498db",
    "borderWidth": 1,
    "textStyle": { "color": "#fff" }
  },
  "grid": { "left": "10px", "right": "10px", "top": "30%", "bottom": "5%", "containLabel": true },
  "legend": {
    "show": true,
    "right": "0px",
    "left": "150px",
    "top": "10%",
    "textStyle": { "color": "#ffffff", "fontSize": 14 }
  },
  "xAxis": {
    "type": "category",
    "data": ["2019", "2020", "2021", "2022", "2023"],
    "axisLine": { "lineStyle": { "color": "rgba(255,255,255,0.6)" } },
    "axisTick": { "lineStyle": { "color": "rgba(255,255,255,0.6)" } },
    "axisLabel": { "color": "rgba(255,255,255,0.8)" }
  },
  "yAxis": [
    {
      "type": "value",
      "name": "人数（万人）",
      "min": 5000,
      "max": 25000,
      "interval": 5000,
      "axisLine": { "show": false },
      "axisTick": { "show": false },
      "splitLine": { "lineStyle": { "color": "rgba(255,255,255,0.1)" } },
      "axisLabel": { "color": "rgba(255,255,255,0.8)" },
      "nameTextStyle": { "color": "rgba(255,255,255,0.8)" }
    },
    {
      "type": "value",
      "name": "千万元",
      "min": 5000,
      "max": 25000,
      "interval": 5000,
      "axisLine": { "show": false },
      "axisTick": { "show": false },
      "splitLine": { "show": false },
      "axisLabel": { "color": "rgba(255,255,255,0.8)" },
      "nameTextStyle": { "color": "rgba(255,255,255,0.8)" }
    }
  ],
  "series": [
    {
      "name": "接待游客人数",
      "type": "bar",
      "data": [14682, 9704, 10844, 10944, 9789, 15732],
      "itemStyle": {
        "borderRadius": [6, 6, 0, 0],
        "color": {
          "type": "linear",
          "x": 0, "y": 0, "x2": 0, "y2": 1,
          "colorStops": [
            { "offset": 0, "color": "#06D6A0" },
            { "offset": 1, "color": "#2EC4B6" }
          ]
        }
      },
      "emphasis": {
        "itemStyle": {
          "shadowBlur": 12,
          "shadowColor": "rgba(6,214,160,0.6)"
        }
      },
      "animationDuration": 1200,
      "animationDelay": function (value) { return value * 100; }
    },
    {
      "name": "旅游业总收入",
      "type": "line",
      "yAxisIndex": 1,
      "data": [27849.5, 18226.4, 21304.5, 19461.8, 19780.8],
      "smooth": true,
      "symbol": "circle",
      "symbolSize": 8,
      "lineStyle": {
        "width": 4,
        "color": {
          "type": "linear",
          "x": 0, "y": 0, "x2": 1, "y2": 0,
          "colorStops": [
            { "offset": 0, "color": "#FF8C42" },
            { "offset": 1, "color": "#FFD166" }
          ]
        },
        "shadowBlur": 12,
        "shadowColor": "rgba(255,140,66,0.6)"
      },
      "itemStyle": {
        "color": "#FF8C42",
        "borderColor": "#fff",
        "borderWidth": 2
      },
      "emphasis": {
        "scale": 1.4,
        "itemStyle": {
          "shadowBlur": 20,
          "shadowColor": "rgba(255,140,66,0.8)"
        }
      },
      "animationDuration": 1400,
      "animationDelay": function (value) { return value * 120; }
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