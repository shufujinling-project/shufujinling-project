<template>
  <div class="container">
    <v-chart class="chart" :option="option" autoresize />
  </div>
</template>

<script setup>
import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  LegendComponent,
  GridComponent,
  TitleComponent
} from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TooltipComponent,
  LegendComponent,
  GridComponent,
  TitleComponent,
  BarChart,
  CanvasRenderer
]);

import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';

provide(THEME_KEY, 'dark');

const option = {
  backgroundColor: 'rgba(255,255,255,0.1)', // ← 半透背景
  title: {
    text: '总产业产值与高新技术产业产值对比(含预测)',
    subtext: '',
    left: 'center',
    top: '3%',
    subtextStyle: {
      fontSize: 14,
      color: '#7f8c8d',
      fontWeight: '400'
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
      shadowStyle: {
        color: 'rgba(52, 152, 219, 0.1)'
      }
    },
    backgroundColor: 'rgba(255, 255, 255, 0.96)',
    borderColor: '#e1e8ed',
    borderWidth: 1,
    textStyle: {
      color: '#fff',
      fontSize: 13
    },
    extraCssText: 'box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1); border-radius: 8px;',
    formatter: function(params) {
      let result = `<div style="font-weight: bold; margin-bottom: 8px; color: #2c3e50;">${params[0].axisValue}年</div>`;
      params.forEach(param => {
        result += `<div style="display: flex; align-items: center; margin-bottom: 4px;">`;
        result += `<span style="display: inline-block; width: 12px; height: 12px; background: ${param.color}; margin-right: 8px; border-radius: 2px;"></span>`;
        result += `<span>${param.seriesName}: <strong style="color: #e74c3c;">${param.value}亿元</strong></span>`;
        result += `</div>`;
      });
      return result;
    }
  },
  legend: {
    data: ['总产业产值', '高新技术产业产值'],
    bottom: '2%',
    left: 'center',
    itemGap: 30,
    textStyle: {
      fontSize: 14,
      color: '#fff',
      fontWeight: '500'
    },
    itemWidth: 18,
    itemHeight: 14
  },
  grid: {
    left: '2%',
    right: '2%',
    bottom: '10%',
    top: '30%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['2017', '2018', '2019', '2020', '2021', '2022','2023','2024','2025','2026'],
      axisLine: {
        lineStyle: {
          color: '#bdc3c7',
          width: 2
        }
      },
      axisLabel: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '500',
        margin: 12
      },
      axisTick: {
        show: false
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '产值（亿元）',
      nameTextStyle: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '500',
        padding: [0, 0, 0, 20]
      },
      axisLabel: {
        color: '#fff',
        fontSize: 12,
        formatter: '{value}'
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: '#ecf0f1',
          type: 'dashed',
          width: 1
        }
      }
    }
  ],
  series: [
    {
      name: '总产业产值',
      type: 'bar',
      stack: 'total',
      barWidth: '50%',
      emphasis: {
        focus: 'series',
        itemStyle: {
          shadowBlur: 15,
          shadowColor: 'rgba(154, 96, 180, 0.5)'
        }
      },
      data: [11894, 13009.17, 14045.15, 14817.95, 16355.32, 16907.85,18092.96,19118.118,20143.278,21168.42],
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#667eea' },
          { offset: 0.5, color: '#764ba2' },
          { offset: 1, color: '#9a60b4' }
        ]),
        borderRadius: [6, 6, 0, 0],
        shadowBlur: 8,
        shadowColor: 'rgba(154, 96, 180, 0.3)',
        shadowOffsetY: 3
      },
      label: {
        show: true,
        position: 'inside',
        formatter: '{c}',
        color: '#fff',
        fontSize: 11,
        fontWeight: 'bold'
      },
      animationDelay: function (idx) {
        return idx * 100;
      }
    },
    {
      name: '高新技术产业产值',
      type: 'bar',
      stack: 'total',
      emphasis: {
        focus: 'series',
        itemStyle: {
          shadowBlur: 15,
          shadowColor: 'rgba(234, 124, 204, 0.5)'
        }
      },
      data: [1979.47, 2682.01, 5763.86, 6404.89, 7800.6, 8349.88,10281.67,11648.78,13015.89,14383],
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#ff9a9e' },
          { offset: 0.5, color: '#fecfef' },
          { offset: 1, color: '#ea7ccc' }
        ]),
        borderRadius: [6, 6, 0, 0],
        shadowBlur: 8,
        shadowColor: 'rgba(234, 124, 204, 0.3)',
        shadowOffsetY: 3
      },
      label: {
        show: true,
        position: 'top',
        formatter: '{c}',
        color: '#fff',
        fontSize: 11,
        fontWeight: 'bold'
      },
      animationDelay: function (idx) {
        return idx * 100 + 300;
      }
    }
  ],
  animationEasing: 'elasticOut',
  animationDuration: 1500
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