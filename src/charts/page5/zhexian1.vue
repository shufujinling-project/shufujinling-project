<template>
  <div class="container">
    <v-chart class="chart" :option="option" autoresize />
  </div>
</template>

<script setup>
import { use } from 'echarts/core'
import { LineChart } from 'echarts/charts'
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
  LineChart,
  CanvasRenderer
])

import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';

provide(THEME_KEY, 'dark');

const option = {
  backgroundColor: 'rgba(255,255,255,0.1)', // ← 半透背景
  
  title: {
    text: '地表水功能区与集中式饮用水水源地达标率对比（2017-2023年）',
    left: 'center',
    top: '2%'
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    borderColor: '#3498db',
    borderWidth: 2,
    borderRadius: 12,
    textStyle: {
      color: '#2c3e50',
      fontSize: 14,
      fontWeight: '500'
    },
    padding: [16, 20],
    extraCssText: 'box-shadow: 0 12px 32px rgba(0,0,0,0.15); backdrop-filter: blur(10px);',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#3498db',
        width: 1,
        opacity: 0.8,
        type: 'dashed'
      }
    },
    formatter: function(params) {
      let result = `<div style="padding: 8px 0; font-weight: bold; font-size: 16px; color: #2c3e50; border-bottom: 1px solid #ecf0f1; margin-bottom: 12px;">${params[0].name}年水质数据</div>`
      params.forEach(param => {
        const color = param.color.colorStops ? param.color.colorStops[1].color : param.color
        const status = param.value === 100 ? '✓ 达标' : param.value >= 90 ? '○ 良好' : '△ 改善中'
        result += `<div style="margin: 10px 0; display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center;">
                      <span style="display:inline-block;width:12px;height:12px;background:${color};border-radius:50%;margin-right:12px;box-shadow: 0 2px 4px rgba(0,0,0,0.2);"></span>
                      <span style="font-weight: 500; max-width: 200px;">${param.seriesName}</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                      <strong style="color:${color}; font-size: 16px;">${param.value}%</strong>
                      <span style="font-size: 12px; color: #27ae60;">${status}</span>
                    </div>
                    </div>`
      })
      return result
    }
  },
  legend: {
    data: [
      {
        name: '地表水功能区水质达标率',
        icon: 'path://M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'
      },
      {
        name: '集中式饮用水水源地水质达标率',
        icon: 'circle'
      }
    ],
    top: '15%',
    left: 'center',
    textStyle: {
      fontSize: 15,
      color: '#fff',
      fontWeight: '600'
    },
    itemWidth: 25,
    itemHeight: 14,
    itemGap: 35,
    selectedMode: false
  },
  grid: {
    left: '2%',
    right: '2%',
    top: '40%',
    bottom: '2%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    axisLine: {
      lineStyle: {
        color: '#bdc3c7',
        width: 2
      }
    },
    axisLabel: {
      color: '#fff',
      fontSize: 13,
      fontWeight: '600',
      margin: 12
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: '#bdc3c7'
      }
    },
    splitLine: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    min: 60,
    max: 105,
    interval: 10,
    axisLine: {
      lineStyle: {
        color: '#bdc3c7',
        width: 2
      }
    },
    axisLabel: {
      color: '#fff',
      fontSize: 12,
      fontWeight: '600',
      formatter: '{value}%'
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: '#bdc3c7'
      }
    },
    splitLine: {
      lineStyle: {
        color: '#ecf0f1',
        type: 'dashed',
        width: 1
      }
    },
    name: '达标率（%）',
    nameTextStyle: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
      padding: [0, 0, 0, 20]
    }
  },
  series: [
    {
      name: '地表水功能区水质达标率',
      type: 'line',
      data: [72.7, 81.8, 98.6, 100, 100, 100, 100],
      symbol: 'diamond',
      symbolSize: 14,
      lineStyle: {
        color: {
          type: 'linear',
          x: 0, y: 0, x2: 1, y2: 0,
          colorStops: [
            { offset: 0, color: '#74b9ff' },
            { offset: 0.3, color: '#0984e3' },
            { offset: 0.7, color: '#2980b9' },
            { offset: 1, color: '#1e3799' }
          ]
        },
        width: 4,
        shadowBlur: 8,
        shadowColor: 'rgba(116, 185, 255, 0.4)',
        shadowOffsetY: 2
      },
      itemStyle: {
        borderWidth: 3,
        borderColor: '#fff',
        color: {
          type: 'radial',
          x: 0.5, y: 0.5, r: 0.8,
          colorStops: [
            { offset: 0, color: '#74b9ff' },
            { offset: 1, color: '#0984e3' }
          ]
        },
        shadowBlur: 10,
        shadowColor: 'rgba(116, 185, 255, 0.5)',
        shadowOffsetY: 3
      },
      emphasis: {
        itemStyle: {
          borderWidth: 4,
          shadowBlur: 15,
          shadowColor: 'rgba(116, 185, 255, 0.7)',
          scale: 1.3
        },
        lineStyle: {
          width: 5
        }
      },
      label: {
        show: true,
        position: 'top',
        formatter: '{c}%',
        color: '#2c3e50',
        fontSize: 12,
        fontWeight: 'bold',
        offset: [0, -12],
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 6,
        padding: [4, 8],
        borderColor: '#0984e3',
        borderWidth: 1
      },
      animationDelay: function (idx) {
        return idx * 200
      }
    },
    {
      name: '集中式饮用水水源地水质达标率',
      type: 'line',
      data: [100, 100, 100, 100, 100, 100, 100],
      symbol: 'circle',
      symbolSize: 12,
      lineStyle: {
        color: {
          type: 'linear',
          x: 0, y: 0, x2: 1, y2: 0,
          colorStops: [
            { offset: 0, color: '#a8e6cf' },
            { offset: 0.5, color: '#27ae60' },
            { offset: 1, color: '#00b894' }
          ]
        },
        width: 4,
        shadowBlur: 8,
        shadowColor: 'rgba(39, 174, 96, 0.4)',
        shadowOffsetY: 2
      },
      itemStyle: {
        borderWidth: 3,
        borderColor: '#fff',
        color: {
          type: 'radial',
          x: 0.5, y: 0.5, r: 0.8,
          colorStops: [
            { offset: 0, color: '#a8e6cf' },
            { offset: 1, color: '#27ae60' }
          ]
        },
        shadowBlur: 10,
        shadowColor: 'rgba(39, 174, 96, 0.5)',
        shadowOffsetY: 3
      },
      emphasis: {
        itemStyle: {
          borderWidth: 4,
          shadowBlur: 15,
          shadowColor: 'rgba(39, 174, 96, 0.7)',
          scale: 1.3
        },
        lineStyle: {
          width: 5
        }
      },
      label: {
        show: true,
        position: 'top',
        formatter: '{c}%',
        color: '#2c3e50',
        fontSize: 12,
        fontWeight: 'bold',
        offset: [0, -12],
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 6,
        padding: [4, 8],
        borderColor: '#27ae60',
        borderWidth: 1
      },
      animationDelay: function (idx) {
        return idx * 250 + 500
      }
    }
  ],
  animationEasing: 'cubicInOut',
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