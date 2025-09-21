<template>
  <div class="container">
    <v-chart class="chart" :option="option" autoresize />
  </div>
</template>

<script setup>
import * as echarts from 'echarts/core';
import {
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components';
import { BarChart, LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  LineChart,
  CanvasRenderer,
  UniversalTransition
]);

import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';

provide(THEME_KEY, 'dark');

const option = {
  backgroundColor: 'rgba(255,255,255,0.1)', // ← 半透背景
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    },
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderColor: '#ddd',
    borderWidth: 1,
    textStyle: {
      color: '#333',
      fontSize: 12
    },
    extraCssText: 'box-shadow: 0 4px 12px rgba(0,0,0,0.15); border-radius: 8px;'
  },

  legend: {
    data: ['研发活动人员', '科研支出'],
    bottom: '5%',
    textStyle: {
      fontSize: 14,
      fontWeight: '500'
    },
    itemGap: 20,
    itemWidth: 20,
    itemHeight: 14
  },
  grid: {
    top: '20%',
    left: '8%',
    right: '8%',
    bottom: '20%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['2017', '2018', '2019', '2020', '2021', '2022','2023','2024','2025','2026'],
      axisPointer: {
        type: 'shadow'
      },
      axisLine: {
        lineStyle: {
          color: '#e0e0e0',
          width: 1.5
        }
      },
      axisLabel: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '500'
      },
      axisTick: {
        alignWithLabel: true,
        lineStyle: {
          color: '#e0e0e0'
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '研发活动人员',
      min: 10,
      max: 28,
      interval: 2,
      position: 'left',
      axisLabel: {
        formatter: '{value} 万人',
        color: '#fff',
        fontSize: 11
      },
      nameTextStyle: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '600',
        padding: [0, 0, 10, 0]
      },
      axisLine: {
        lineStyle: {
          color: '#2563eb',
          width: 2
        }
      },
      splitLine: {
        lineStyle: {
          color: '#f0f0f0',
          type: 'dashed'
        }
      }
    },
    {
      type: 'value',
      name: '科研支出',
      min: 300,
      max: 900,
      interval: 50,
      position: 'right',
      axisLabel: {
        formatter: '{value} 亿元',
        color: '#fff',
        fontSize: 11
      },
      nameTextStyle: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '600',
        padding: [0, 0, 10, 0]
      },
      axisLine: {
        lineStyle: {
          color: '#8b5cf6',
          width: 2
        }
      }
    }
  ],
  series: [
    {
      name: '研发活动人员',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' 万人';
        }
      },
      data: [12.67, 12.94, 14.66, 16.16, 18.19, 19.95,21.12,22.65,24.19,25.72],
      barWidth: '45%',
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#3b82f6' },
          { offset: 0.5, color: '#60a5fa' },
          { offset: 1, color: '#93c5fd' }
        ]),
        borderRadius: [4, 4, 0, 0],
        shadowColor: 'rgba(59, 130, 246, 0.3)',
        shadowBlur: 10,
        shadowOffsetY: 3
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#1d4ed8' },
            { offset: 0.5, color: '#3b82f6' },
            { offset: 1, color: '#60a5fa' }
          ]),
          shadowBlur: 15
        }
      },
      animationDelay: function (idx) {
        return idx * 100;
      }
    },
    {
      name: '科研支出',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value + ' 亿元';
        }
      },
      data: [357.67, 416.57, 465.16, 515.66, 578.81, 645.30,694.06533333,750.50447619,806.94361905,863.3827619],
      lineStyle: {
        color: '#dc2626',
        width: 3,
        shadowColor: 'rgba(220, 38, 38, 0.3)',
        shadowBlur: 8,
        shadowOffsetY: 2
      },
      itemStyle: {
        color: '#dc2626',
        borderColor: '#fff',
        borderWidth: 2,
        shadowColor: 'rgba(220, 38, 38, 0.4)',
        shadowBlur: 8,
        shadowOffsetY: 2
      },
      emphasis: {
        itemStyle: {
          color: '#b91c1c',
          borderWidth: 3,
          shadowBlur: 12
        },
        lineStyle: {
          width: 4
        }
      },
      symbol: 'circle',
      symbolSize: 8,
      smooth: true,
      animationDelay: function (idx) {
        return idx * 150 + 300;
      }
    }
  ],
  animationEasing: 'elasticOut',
  animationDelayUpdate: function (idx) {
    return idx * 50;
  }
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