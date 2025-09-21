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
  backgroundColor: 'rgba(255,255,255,0.1)',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
  left: '10px',
  right: '10px',
  top:"30%",
  bottom: '5%',
  containLabel: true
  },
  legend: {
      show: true,
      
      right: '0px',
      left:"150px",
      top: '5%',
      textStyle: {
          color: "#ffffff"
      }
  },

  xAxis: {
    type: 'category',
    data: ["2019","2020","2021","2022","2023"],
  },
  yAxis: [
    {
      type: 'value',
      name: '人数（万人）',
      min: 5000,
      max: 25000,
      interval: 5000,
      
    },
    {
      type: 'value',
      name: '千万元',
      min: 5000,
      max: 25000,
      interval: 5000,
      
    }
  ],
  series: [
    {
      name: '接待游客人数',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' 万人';
        }
      },
      data: [
        14682, 9704, 10844, 10944,9789,  15732
      ]
    },
    
    {
      name: '旅游业总收入',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value + ' 千万元';
        }
      },
      data: [27849.5,18226.4,21304.5,19461.8,19780.8]
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