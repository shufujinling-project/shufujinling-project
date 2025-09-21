<template>
  <div class="container">
    <v-chart class="chart" :option="option" autoresize />
  </div>
</template>

<script setup>
import { use } from 'echarts/core'
import { PieChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer
])

import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';

provide(THEME_KEY, 'dark');

const option = {
  backgroundColor: 'rgba(255,255,255,0.1)', // ← 半透背景

  title: {
    text: '',
    subtext: '2015-2020年数据统计',
    left: '30%',
    top: '2%'
  },
  tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderColor: '#3498db',
    borderWidth: 1,
    formatter: function(params) {
      return `<div style="padding: 10px;">
                <div style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: ${params.color};">
                  ${params.name}
                </div>
                <div>占比: <strong>${params.percent}%</strong></div>
                <div>天数: <strong>${params.value}天</strong></div>
              </div>`
    }
  },
  legend: {
    type: 'scroll',
    orient: 'vertical',
    left: '8%',
    top: 'center',
    itemWidth: 18,
    itemHeight: 14,
    formatter: function(name) {
      return name
    }
  },
  series: [
    {
      name: '空气质量等级',
      type: 'pie',
      radius: ['25%', '50%'],
      center: ['70%', '55%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 8,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'outside',
        formatter: function(params) {
          return `${params.name}\n${params.percent}%`
        },
        fontSize: 12,
        fontWeight: 'bold'
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 20,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.3)'
        },
        label: {
          show: true,
          fontSize: 16,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false,
        length: 20,
        length2: 15,
        smooth: true
      },
      data: [
        { 
          value: 1095, 
          name: '优',
          itemStyle: {
            color: {
              type: 'linear',
              x: 0, y: 0, x2: 1, y2: 1,
              colorStops: [
                { offset: 0, color: '#00b894' },
                { offset: 1, color: '#55a3ff' }
              ]
            }
          }
        },
        { 
          value: 876, 
          name: '良好',
          itemStyle: {
            color: {
              type: 'linear',
              x: 0, y: 0, x2: 1, y2: 1,
              colorStops: [
                { offset: 0, color: '#fdcb6e' },
                { offset: 1, color: '#e17055' }
              ]
            }
          }
        },
        { 
          value: 219, 
          name: '轻度污染',
          itemStyle: {
            color: {
              type: 'linear',
              x: 0, y: 0, x2: 1, y2: 1,
              colorStops: [
                { offset: 0, color: '#fd79a8' },
                { offset: 1, color: '#fdcb6e' }
              ]
            }
          }
        },
        { 
          value: 73, 
          name: '中度污染',
          itemStyle: {
            color: {
              type: 'linear',
              x: 0, y: 0, x2: 1, y2: 1,
              colorStops: [
                { offset: 0, color: '#fd79a8' },
                { offset: 1, color: '#e84393' }
              ]
            }
          }
        },
        { 
          value: 29, 
          name: '重度污染',
          itemStyle: {
            color: {
              type: 'linear',
              x: 0, y: 0, x2: 1, y2: 1,
              colorStops: [
                { offset: 0, color: '#e17055' },
                { offset: 1, color: '#d63031' }
              ]
            }
          }
        },
        { 
          value: 4, 
          name: '严重污染',
          itemStyle: {
            color: {
              type: 'linear',
              x: 0, y: 0, x2: 1, y2: 1,
              colorStops: [
                { offset: 0, color: '#6c5ce7' },
                { offset: 1, color: '#2d3436' }
              ]
            }
          }
        }
      ],
      animationType: 'expansion',
      animationDuration: 1500,
      animationEasing: 'cubicInOut'
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