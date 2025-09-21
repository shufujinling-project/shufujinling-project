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
  backgroundColor: 'rgba(255,255,255,0.1)', // ← 半透背景

  title: {
    text: '医疗人力资源图',
    left: 'center',
    top: 10,
    textStyle: { color: '#fff' }
  },

  legend: {
    left: "center",
    bottom: 10,
    textStyle: { color: '#fff' }
  },

  grid: { left: '3%', right: '4%', bottom: '15%', containLabel: true },

  xAxis: {
    type: 'category',
    data: ['2020年', '2021年', '2022年'],
    axisLabel: { color: '#fff' }, // 文字白色
    axisLine: { lineStyle: { color: '#fff' } },
    axisTick: { lineStyle: { color: '#fff' } }
  },

  yAxis: {
    type: 'value',
    axisLabel: { color: '#fff' }, // 文字白色
    axisLine: { lineStyle: { color: '#fff' } },
    axisTick: { lineStyle: { color: '#fff' } }
  },

  series: [
    {
      name: '卫生技术人员',
      type: 'bar',
      data: [99557, 104256, 108640],
      label: { show: true, color: '#fff', position: 'top' }
    },
    {
      name: '在职医生',
      type: 'bar',
      data: [37823, 39326, 40610],
      label: { show: true, color: '#fff', position: 'top' }
    },
    {
      name: '注册护士',
      type: 'bar',
      data: [45473, 59748, 63591],
      label: { show: true, color: '#fff', position: 'top' }
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