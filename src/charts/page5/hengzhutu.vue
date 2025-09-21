<template>
  <div class="container">
    <v-chart class="chart" :option="option" autoresize />
  </div>
</template>

<script setup>
import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

use([TitleComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer])

import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';

provide(THEME_KEY, 'dark');

const option = {
  "backgroundColor": "rgba(255,255,255,0.1)",
  "title": {
    "text": "人居城市环境问卷问题反馈",
    "left": "center",
    "textStyle": {
      "fontSize": 20,
      "color": "#fff",
      "textShadowColor": "rgba(0,0,0,0.5)",
      "textShadowBlur": 6
    }
  },
  "tooltip": {
    "trigger": "axis",
    "formatter": "{b}: {c}%",
    "backgroundColor": "rgba(0,0,0,0.7)",
    "borderColor": "#5470c6",
    "borderWidth": 1,
    "textStyle": { "color": "#fff" }
  },
  "grid": {
    "left": "30%",
    "right": "10%",
    "top": "15%",
    "bottom": "10%"
  },
  "xAxis": {
    "type": "value",
    "max": 80,
    "axisLine": { "lineStyle": { "color": "rgba(255,255,255,0.6)" } },
    "axisTick": { "lineStyle": { "color": "rgba(255,255,255,0.6)" } },
    "axisLabel": { "color": "rgba(255,255,255,0.8)", "formatter": "{value}%" },
    "splitLine": { "lineStyle": { "color": "rgba(255,255,255,0.1)" } }
  },
  "yAxis": {
    "type": "category",
    "data": [
      "缺少环境整治人才",
      "群众参与积极性不高",
      "资金不足",
      "组织力不强",
      "整治工作区域不协同",
      "整治规划不全面"
    ],
    "axisLine": { "lineStyle": { "color": "rgba(255,255,255,0.6)" } },
    "axisTick": { "lineStyle": { "color": "rgba(255,255,255,0.6)" } },
    "axisLabel": { "color": "rgba(255,255,255,0.8)" }
  },
  "series": [
    {
      "type": "bar",
      "data": [30.4, 41.8, 49.4, 67.1, 72.2, 63.3],
      "itemStyle": {
        "borderRadius": [0, 6, 6, 0],
        "color": {
          "type": "linear",
          "x": 0, "y": 0, "x2": 1, "y2": 0,
          "colorStops": [
            { "offset": 0, "color": "#5470c6" },
            { "offset": 1, "color": "#91cc75" }
          ]
        }
      },
      "label": {
        "show": true,
        "position": "right",
        "formatter": "{c}%",
        "color": "#fff",
        "fontWeight": "bold"
      },
      "emphasis": {
        "itemStyle": {
          "shadowBlur": 12,
          "shadowColor": "rgba(84,112,198,0.6)"
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