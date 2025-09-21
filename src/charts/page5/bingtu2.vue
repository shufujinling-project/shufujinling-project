<template>
  <div class="container">
    <v-chart class="chart" :option="option" autoresize />
  </div>
</template>

<script setup>
import * as echarts from 'echarts/core';
import { TooltipComponent, LegendComponent } from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout
]);

import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';

provide(THEME_KEY, 'dark');

const option = {
  backgroundColor: 'rgba(255,255,255,0.1)', // ← 半透背景
  title: {
    text: '人居环境满意度',
    left: 'center',
    top: '3%'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c}% ({d}%)',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderColor: '#ddd',
    borderWidth: 1,
    textStyle: {
      color: '#333',
      fontSize: 14
    },
    extraCssText: 'box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); border-radius: 8px;'
  },
  legend: {
    top: 'center',
    left: '3%',
    orient: 'vertical'
  },
  series: [
    {
      name: '满意度调查',
      type: 'pie',
      radius: ['25%', '50%'],
      center: ['70%', '50%'],
      avoidLabelOverlap: true,
      itemStyle: {
        borderRadius: 8,
        borderColor: '#fff',
        borderWidth: 2,
        shadowBlur: 8,
        shadowColor: 'rgba(0, 0, 0, 0.1)'
      },
      label: {
        show: false,
        position: 'outside',
        formatter: '{b}\n{c}%',
        fontSize: 12,
        fontWeight: '600',
        color: '#555'
      },
      labelLine: {
        show: false,
        length: 15,
        length2: 8,
        smooth: true,
        lineStyle: {
          color: '#999',
          width: 1
        }
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 12,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.2)'
        },
        label: {
          show: true,
          fontSize: 14,
          fontWeight: 'bold'
        }
      },
      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return Math.random() * 200;
      },
      data: [
        { 
          value: 15.2, 
          name: '非常满意',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#67C23A' },
              { offset: 1, color: '#85CE61' }
            ])
          }
        },
        { 
          value: 30.4, 
          name: '比较满意',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#409EFF' },
              { offset: 1, color: '#66B1FF' }
            ])
          }
        },
        { 
          value: 27.8, 
          name: '基本满意',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#E6A23C' },
              { offset: 1, color: '#EEBE77' }
            ])
          }
        },
        { 
          value: 12.7, 
          name: '不太满意',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#F56C6C' },
              { offset: 1, color: '#F78989' }
            ])
          }
        },
        { 
          value: 13.9, 
          name: '不满意',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#909399' },
              { offset: 1, color: '#B3B8C4' }
            ])
          }
        }
      ]
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