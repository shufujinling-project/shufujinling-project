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
  backgroundColor: 'rgba(255,255,255,0.1)',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    top:"10",
    textStyle: {
          color: "#ffffff"
      },
    data: ['社会消费品零售总额']
  },
  grid: {
  left: '0px',
  right: '20px',
  bottom: '10%',
  containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['2018', '2019', '2020', '2021', '2023']
  },
  yAxis: {
    type: 'value'
  },
  series: [
  {
    name: '社会消费品零售总额',
    type: 'bar',
    stack: 'total',
    data: [6778, 7100, 7387, 7899, 8078, 8201],
    itemStyle: {
      color: '#4CAF50' // 设置柱体颜色
    }
  }
]
};
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