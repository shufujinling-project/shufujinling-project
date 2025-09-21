<template>
  <div class="container">
    <v-chart class="chart" :option="option" autoresize/>
  </div>
</template>

<script setup >
import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

use([
  TitleComponent,
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
  "title": {
    "text": "南京市医疗人力资源变化情况",
    "left": "center",
    "top": 10,
    "textStyle": {
      "fontSize": 20,
      "color": "#fff",
      "textShadowColor": "rgba(0,0,0,0.5)",
      "textShadowBlur": 6
    }
  },
  "legend": {
    "left": "center",
    "bottom": 10,
    "textStyle": { "color": "#fff", "fontSize": 14 }
  },
  "tooltip": {
  "trigger": "axis",
    "axisPointer": {
      "type": "shadow",
      "shadowStyle": { "color": "rgba(6,214,160,0.2)" }
    },
    "backgroundColor": "rgba(0,0,0,0.75)",
    "borderColor": "#06D6A0",
    "borderWidth": 1,
    "textStyle": { "color": "#fff", "fontSize": 14 },
    "formatter": function (p) {
      let s = `<div style="padding:8px;border-left:3px solid #06D6A0;">`;
      s += `<div style="font-weight:bold;margin-bottom:4px;">${p[0].axisValue}</div>`;
      p.forEach(function (i) {
        s += `<div>${i.marker} ${i.seriesName}: <span style="font-weight:bold;">${i.value.toLocaleString()}</span> 人</div>`;
      });
      s += `</div>`;
      return s;
    }
  },
  "grid": { "left": "3%", "right": "4%", "bottom": "15%", "containLabel": true },
  "xAxis": {
    "type": "category",
    "data": ["2020年", "2021年", "2022年"],
    "axisLabel": { "color": "rgba(255,255,255,0.8)" },
    "axisLine": { "lineStyle": { "color": "rgba(255,255,255,0.6)" } },
    "axisTick": { "lineStyle": { "color": "rgba(255,255,255,0.6)" } }
  },
  "yAxis": {
    "type": "value",
    "name": "人数",
    "axisLabel": { "color": "rgba(255,255,255,0.8)" },
    "axisLine": { "lineStyle": { "color": "rgba(255,255,255,0.6)" } },
    "axisTick": { "lineStyle": { "color": "rgba(255,255,255,0.6)" } },
    "splitLine": { "lineStyle": { "color": "rgba(255,255,255,0.1)" } }
  },
  "series": [
    {
      "name": "卫生技术人员",
      "type": "bar",
      "data": [99557, 104256, 108640],
      "label": { "show": true, "color": "#fff", "position": "top" },
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
      "animationDelay": function (idx) { return idx * 100; }
    },
    {
      "name": "在职医生",
      "type": "bar",
      "data": [37823, 39326, 40610],
      "label": { "show": true, "color": "#fff", "position": "top" },
      "itemStyle": {
        "borderRadius": [6, 6, 0, 0],
        "color": {
          "type": "linear",
          "x": 0, "y": 0, "x2": 0, "y2": 1,
          "colorStops": [
            { "offset": 0, "color": "#FF8C42" },
            { "offset": 1, "color": "#FFD166" }
          ]
        }
      },
      "emphasis": {
        "itemStyle": {
          "shadowBlur": 12,
          "shadowColor": "rgba(255,140,66,0.6)"
        }
      },
      "animationDuration": 1200,
      "animationDelay": function (idx) { return idx * 100 + 50; }
    },
    {
      "name": "注册护士",
      "type": "bar",
      "data": [45473, 59748, 63591],
      "label": { "show": true, "color": "#fff", "position": "top" },
      "itemStyle": {
        "borderRadius": [6, 6, 0, 0],
        "color": {
          "type": "linear",
          "x": 0, "y": 0, "x2": 0, "y2": 1,
          "colorStops": [
            { "offset": 0, "color": "#aa55dd" },
            { "offset": 1, "color": "#96bfff" }
          ]
        }
      },
      "emphasis": {
        "itemStyle": {
          "shadowBlur": 12,
          "shadowColor": "rgba(170,85,221,0.6)"
        }
      },
      "animationDuration": 1200,
      "animationDelay": function (idx) { return idx * 100 + 100; }
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