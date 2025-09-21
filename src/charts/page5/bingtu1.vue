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
  LegendComponent,
  GraphicComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GraphicComponent,
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
    subtext: '2020-2025年数据统计',
    left: 'center',
    top: '2%'
  },
  tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderColor: '#3498db',
    borderWidth: 1,
    formatter: function(params) {
      const total = params.data.total || 1826 // 5年总天数（考虑闰年）
      const percentage = ((params.value / total) * 100).toFixed(1)
      return `<div style="padding: 15px; min-width: 200px;">
                <div style="font-weight: bold; font-size: 18px; margin-bottom: 8px; color: ${params.color};">
                  <i style="display: inline-block; width: 12px; height: 12px; background: ${params.color}; border-radius: 50%; margin-right: 8px;"></i>
                  ${params.name}
                </div>
                <div style="margin: 5px 0;">天数: <strong>${params.value}天</strong></div>
                <div style="margin: 5px 0;">占比: <strong>${percentage}%</strong></div>
                <div style="font-size: 12px; color: #95a5a6; margin-top: 8px;">
                  统计周期: 2020-2025年
                </div>
              </div>`
    }
  },
  series: [
    {
      name: '空气质量等级',
      type: 'pie',
      radius: ['25%', '50%'],
      center: ['50%', '55%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 8,
        borderColor: '#fff',
        borderWidth: 3
      },
      label: {
        show: false,
        position: 'outside',
        formatter: function(params) {
          return `{name|${params.name}}\n{percent|${params.percent}%}`
        },
        rich: {
          name: {
            fontSize: 14,
            fontWeight: 'bold',
            lineHeight: 20
          },
          percent: {
            fontSize: 16,
            fontWeight: 'bold'
          }
        }
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 25,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.4)'
        },
        label: {
          show: true,
          fontSize: 18,
          fontWeight: 'bold'
        },
        scaleSize: 8
      },
      labelLine: {
        show: false,
        length: 25,
        length2: 20,
        smooth: true,
        lineStyle: {
          width: 2
        }
      },
      data: [
        { 
          value: 1247, 
          name: '优',
          total: 1826,
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
          value: 486, 
          name: '良好',
          total: 1826,
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
          value: 78, 
          name: '轻度污染',
          total: 1826,
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
          value: 13, 
          name: '中度污染',
          total: 1826,
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
          value: 2, 
          name: '重度污染',
          total: 1826,
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
        }
      ],
      animationType: 'expansion',
      animationDuration: 1500,
      animationEasing: 'cubicInOut'
    }
  ],
  graphic: [
    // 添加中心装饰圆
    {
      type: 'circle',
      shape: {
        cx: 315, // 35% of 900
        cy: 357, // 55% of 650
        r: 85
      },
      style: {
        fill: {
          type: 'radial',
          x: 0.5, y: 0.5, r: 1,
          colorStops: [
            { offset: 0, color: 'rgba(255, 255, 255, 0.8)' },
            { offset: 1, color: 'rgba(52, 152, 219, 0.1)' }
          ]
        },
        stroke: 'rgba(52, 152, 219, 0.2)',
        lineWidth: 2
      }
    },
    // 中心文字
    {
      type: 'text',
      left: 315,
      top: 340,
      style: {
        text: '空气质量',
        fontSize: 18,
        fontWeight: 'bold',
        fill: '#2c3e50',
        textAlign: 'center'
      }
    },
    {
      type: 'text',
      left: 315,
      top: 365,
      style: {
        text: '总体优良',
        fontSize: 14,
        fill: '#27ae60',
        textAlign: 'center',
        fontWeight: 'bold'
      }
    },
    {
      type: 'text',
      left: 315,
      top: 385,
      style: {
        text: '94.9%',
        fontSize: 20,
        fill: '#e74c3c',
        textAlign: 'center',
        fontWeight: 'bold'
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