<template>
  <div class="container">
    <v-chart class="chart" :option="option" autoresize />
  </div>
</template>

<script setup>
import { use } from 'echarts/core'
import { BarChart, LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DataZoomComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DataZoomComponent,
  BarChart,
  LineChart,
  CanvasRenderer
])


import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';

provide(THEME_KEY, 'dark');

const option = {
  backgroundColor: 'rgba(255,255,255,0.1)', // ← 半透背景

  title: {
    text: '空气质量变化趋势分析',
    subtext: '优良天气占比与PM2.5年均浓度对比分析（2015-2023）',
    left: 'center',
    top: '2%'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#3498db',
        width: 2,
        opacity: 0.8,
        type: 'dashed'
      },
      shadowStyle: {
        color: 'rgba(52, 152, 219, 0.1)'
      }
    },
    backgroundColor: 'rgba(255,255,255,0.98)',
    borderColor: '#3498db',
    borderWidth: 2,
    borderRadius: 12,
    textStyle: {
      color: '#2c3e50',
      fontSize: 14,
      fontWeight: '500'
    },
    padding: [15, 20],
    extraCssText: 'box-shadow: 0 10px 30px rgba(0,0,0,0.15);',
    formatter: function(params) {
      let result = `<div style="padding: 5px 0; font-weight: bold; font-size: 18px; color: #2c3e50; border-bottom: 2px solid #ecf0f1; margin-bottom: 10px;">${params[0].name}年数据</div>`
      params.forEach((param) => {
        const unit = param.seriesName === '优良天气占比' ? '%' : 'μg/m³'
        const color = param.color.colorStops ? param.color.colorStops[1].color : param.color
        
        result += `<div style="margin: 8px 0; display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center;">
                      <span style="display:inline-block;width:12px;height:12px;background:${color};border-radius:50%;margin-right:10px;box-shadow: 0 2px 4px rgba(0,0,0,0.2);"></span>
                      <span style="font-weight: 500;">${param.seriesName}</span>
                    </div>
                    <strong style="color:${color}; font-size: 16px;">${param.value}${unit}</strong>
                    </div>`
      })
      return result
    }
  },
  legend: {
    data: [
      {
        name: '优良天气占比',
        icon: 'roundRect',
        itemStyle: {
          color: '#3498db'
        }
      },
      {
        name: 'PM2.5年均浓度',
        icon: 'circle',
        itemStyle: {
          color: '#e74c3c'
        }
      }
    ],
    bottom: '0',
    textStyle: {
      fontSize: 16
    },
    itemWidth: 28,
    itemHeight: 16,
    itemGap: 30
  },
  grid: {
    left: '6%',
    right: '12%',
    top: '40%',
    bottom: '10%',
    containLabel: true,
    borderWidth: 1,
    borderColor: '#f0f0f0'
  },
  xAxis: [
    {
      type: 'category',
      data: ['2015', '2017', '2018', '2019', '2020', '2021','2022','2023'],
      axisPointer: {
        type: 'shadow',
        shadowStyle: {
          color: 'rgba(52, 152, 219, 0.1)'
        }
      },
      axisLabel: {
        color: '#5a6c7d',
        fontSize: 14,
        margin: 12,
        fontWeight: '600'
      },
      axisLine: {
        lineStyle: {
          color: '#d5dbdb',
          width: 2
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: '#bdc3c7'
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '优良天气占比（%）',
      position: 'left',
      min: 60,
      max: 90,
      interval: 5,
      axisLabel: {
        formatter: '{value}%',
        color: '#3498db',
        fontSize: 13,
        fontWeight: '600'
      },
      nameTextStyle: {
        color: '#3498db',
        fontSize: 15,
        fontWeight: 'bold',
        padding: [0, 0, 0, 25]
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#3498db',
          width: 3
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: '#3498db'
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(52, 152, 219, 0.1)',
          type: 'dashed',
          width: 1
        }
      }
    },
    {
      type: 'value',
      name: 'PM2.5年均浓度（μg/m³）',
      position: 'right',
      min: 25,
      max: 60,
      interval: 5,
      axisLabel: {
        formatter: '{value}',
        color: '#e74c3c',
        fontSize: 13,
        fontWeight: '600'
      },
      nameTextStyle: {
        color: '#e74c3c',
        fontSize: 15,
        fontWeight: 'bold',
        padding: [0, 25, 0, 0]
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#e74c3c',
          width: 3
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: '#e74c3c'
        }
      },
      splitLine: {
        show: false
      }
    }
  ],
  series: [
    {
      name: '优良天气占比',
      type: 'bar',
      yAxisIndex: 0,
      data: [64.4, 72.3, 68.8, 70.1, 83.1, 82.2, 79.7, 81.9],
      barWidth: '45%',
      itemStyle: {
        color: {
          type: 'linear',
          x: 0, y: 0, x2: 0, y2: 1,
          colorStops: [
            { offset: 0, color: '#74b9ff' },
            { offset: 0.4, color: '#0984e3' },
            { offset: 0.8, color: '#2980b9' },
            { offset: 1, color: '#1e3799' }
          ]
        },
        borderRadius: [8, 8, 0, 0],
        shadowBlur: 10,
        shadowColor: 'rgba(116, 185, 255, 0.4)',
        shadowOffsetY: 4
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 15,
          shadowColor: 'rgba(116, 185, 255, 0.6)',
          shadowOffsetY: 8,
          borderWidth: 2,
          borderColor: '#fff'
        }
      },
      label: {
        show: true,
        position: 'top',
        formatter: '{c}%',
        color: '#2c3e50',
        fontSize: 13,
        fontWeight: 'bold',
        offset: [0, -8],
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: 4,
        padding: [2, 6]
      },
      animationDelay: function (idx) {
        return idx * 150
      }
    },
    {
      name: 'PM2.5年均浓度',
      type: 'line',
      yAxisIndex: 1,
      data: [57, 40, 43, 40, 31, 29, 28, 29],
      lineStyle: {
        width: 4,
        color: {
          type: 'linear',
          x: 0, y: 0, x2: 1, y2: 0,
          colorStops: [
            { offset: 0, color: '#ff7675' },
            { offset: 0.4, color: '#fd79a8' },
            { offset: 0.7, color: '#e84393' },
            { offset: 1, color: '#d63031' }
          ]
        },
        shadowBlur: 10,
        shadowColor: 'rgba(231, 76, 60, 0.4)',
        shadowOffsetY: 3
      },
      itemStyle: {
        color: '#e74c3c',
        borderColor: '#fff',
        borderWidth: 4,
        shadowBlur: 10,
        shadowColor: 'rgba(231, 76, 60, 0.4)',
        shadowOffsetY: 3
      },
      symbol: 'circle',
      symbolSize: 12,
      emphasis: {
        itemStyle: {
          shadowBlur: 20,
          shadowColor: 'rgba(231, 76, 60, 0.6)',
          scale: 1.4,
          borderWidth: 5
        }
      },
      label: {
        show: true,
        position: 'top',
        formatter: '{c}',
        color: '#e74c3c',
        fontSize: 13,
        fontWeight: 'bold',
        offset: [0, -15],
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 4,
        padding: [2, 6],
        borderColor: '#e74c3c',
        borderWidth: 1
      },
      animationDelay: function (idx) {
        return idx * 200 + 800
      }
    }
  ],
  animationEasing: 'cubicInOut',
  animationDuration: 1500,
  // 添加数据区域
  dataZoom: [
    {
      show: false,
      realtime: true,
      start: 0,
      end: 100
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