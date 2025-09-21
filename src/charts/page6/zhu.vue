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
import {
  BarChart,
  LineChart
} from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TooltipComponent,
  LegendComponent,
  GridComponent,
  TitleComponent,
  BarChart,
  LineChart,
  CanvasRenderer
]);

import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';

provide(THEME_KEY, 'dark');

const option = {
  backgroundColor: 'rgba(255,255,255,0.1)', // ← 半透背景
  title: {
    text: '普通高等学校在校学生人数（含预测）',
    left: 'center',
    top: '3%',
    textStyle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
      fontFamily: 'Microsoft YaHei, Arial, sans-serif'
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#95a5a6'
      }
    },
    backgroundColor: 'rgba(255, 255, 255, 0.96)',
    borderColor: '#e1e8ed',
    borderWidth: 1,
    textStyle: {
      color: '#2c3e50',
      fontSize: 13
    },
    extraCssText: 'box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1); border-radius: 6px;',
    formatter: function(params) {
      let result = `<div style="font-weight: bold; margin-bottom: 8px;">${params[0].axisValue}年</div>`;
      result += `<div style="display: flex; align-items: center;">`;
      result += `<span style="display: inline-block; width: 10px; height: 10px; background: ${params[0].color}; margin-right: 8px; border-radius: 2px;"></span>`;
      result += `<span>${params[0].seriesName}: <strong>${params[0].value}万人</strong></span>`;
      result += `</div>`;
      return result;
    }
  },
  legend: {
    data: ['在校学生人数'],
    top: '12%',
    left: 'center',
    textStyle: {
      fontSize: 13,
      color: '#fff',
      fontWeight: '500'
    }
  },
  grid: {
    left: '8%',
    right: '10%',
    bottom: '5%',
    top: '25%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      name: '年份',
      data: ['2017','2018', '2019', '2020', '2021', '2022','2023','2024','2025','2026'],
      axisPointer: {
        type: 'shadow',
        shadowStyle: {
          color: 'rgba(52, 152, 219, 0.1)'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#bdc3c7',
          width: 1
        }
      },
      axisLabel: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '500',
        margin: 10
      },
      axisTick: {
        show: false
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '万人',
      nameTextStyle: {
        color: '#7f8c8d',
        fontSize: 12,
        fontWeight: '500',
        padding: [0, 0, 0, 20]
      },
      min: 60,
      max: 120,
      interval: 5,
      axisLabel: {
        formatter: '{value}',
        color: '#fff',
        fontSize: 11
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
      name: '在校学生人数',
      type: 'bar',
      data: [84.08, 85.17,87.78, 91.81, 93.53, 97.2,99.446,102.162,104.878,107.594],
      barWidth: '50%',
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#74b9ff' },
          { offset: 0.5, color: '#0984e3' },
          { offset: 1, color: '#2d3436' }
        ]),
        borderRadius: [6, 6, 0, 0],
        shadowBlur: 10,
        shadowColor: 'rgba(116, 185, 255, 0.3)',
        shadowOffsetY: 3
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 15,
          shadowColor: 'rgba(116, 185, 255, 0.5)',
          shadowOffsetY: 5
        }
      },
      label: {
        show: true,
        position: 'top',
        formatter: '{c}万',
        color: '#2c3e50',
        fontSize: 11,
        fontWeight: 'bold',
        offset: [0, -5]
      },
      animationDelay: function (idx) {
        return idx * 150;
      },
      animationEasing: 'elasticOut'
    },
    {
      name: '在校学生人数',
      type: 'line',
      data: [84.08, 85.17,87.78, 91.81, 93.53, 97.2,99.446,102.162,104.878,107.594],
      smooth: true,
      itemStyle: {
        color: '#fd79a8',
        borderWidth: 2,
        borderColor: '#fff',
        shadowBlur: 8,
        shadowColor: 'rgba(253, 121, 168, 0.4)'
      },
      lineStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          { offset: 0, color: '#fd79a8' },
          { offset: 1, color: '#e84393' }
        ]),
        width: 4,
        shadowBlur: 10,
        shadowColor: 'rgba(253, 121, 168, 0.3)',
        shadowOffsetY: 2
      },
      symbol: 'circle',
      symbolSize: 8,
      emphasis: {
        itemStyle: {
          color: '#e84393',
          borderWidth: 3,
          shadowBlur: 12
        },
        symbolSize: 12,
        scale: 1.2
      },
      animationDelay: function (idx) {
        return idx * 150 + 800;
      },
      animationEasing: 'cubicOut'
    }
  ],
  animationDuration: 2000,
  animationEasingUpdate: 'cubicInOut'
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
