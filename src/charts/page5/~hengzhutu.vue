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
  backgroundColor: 'rgba(255,255,255,0.1)', // ← 半透背景
  
  title: {
    text: '环境问卷问题反馈统计',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    formatter: '{b}: {c}%'
  },
  grid: {
    left: '30%',
    right: '10%',
    top: '15%',
    bottom: '10%'
  },
  xAxis: {
    type: 'value',
    max: 80,
    axisLabel: {
      formatter: '{value}%'
    }
  },
  yAxis: {
    type: 'category',
    data: [
      '缺少环境整治人才',
      '群众参与积极性不高',
      '资金不足',
      '组织力不强',
      '整治工作区域不协同',
      '整治规划不全面'
    ]
  },
  series: [
    {
      type: 'bar',
      data: [30.4, 41.8, 49.4, 67.1, 72.2, 63.3],
      itemStyle: {
        color: '#5470c6'
      },
      label: {
        show: true,
        position: 'right',
        formatter: '{c}%'
      }
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