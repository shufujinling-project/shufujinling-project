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
    text: '城市环境满意度',
    left: 'center',
    top: '3%'
  },
  tooltip: {
    trigger: 'item',
    formatter: function(params) {
      return `<div style="padding: 8px;">
        <div style="display: flex; align-items: center; margin-bottom: 4px;">
          <span style="display: inline-block; width: 10px; height: 10px; background-color: ${params.color}; border-radius: 50%; margin-right: 8px;"></span>
          <strong>${params.name}</strong>
        </div>
        <div style="color: #666;">占比: <strong>${params.value}%</strong></div>
        <div style="color: #666;">角度: <strong>${params.percent}%</strong></div>
      </div>`;
    },
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    borderColor: '#e1e8ed',
    borderWidth: 1,
    textStyle: {
      color: '#333'
    },
    extraCssText: 'box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12); border-radius: 12px; backdrop-filter: blur(10px);'
  },
  series: [
    {
      name: '满意度分布',
      type: 'pie',
      radius: ["25%", "50%"],
      center: ['50%', '50%'],
      itemStyle: {
        borderRadius: 6,
        borderColor: '#fff',
        borderWidth: 3,
        shadowBlur: 15,
        shadowColor: 'rgba(0, 0, 0, 0.15)'
      },
      label: {
        show: false,
        position: '',
        formatter: function(params) {
          return `{name|${params.name}}\n{percent|${params.value}%}`;
        },
        rich: {
          name: {
            fontSize: 13,
            fontWeight: 'bold',
            color: '#fff',
            lineHeight: 18
          },
          percent: {
            fontSize: 16,
            fontWeight: '600',
            color: '#e74c3c'
          }
        },
        distanceToLabelLine: 10
      },
      labelLine: {
        show: false,
        length: 10,
        length2: 5,
        smooth: true,
        lineStyle: {
          color: '##fff',
          width: 2,
          type: 'solid'
        }
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 25,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          borderWidth: 4
        },
        label: {
          fontSize: 15
        },
        scaleSize: 5
      },
      animationType: 'expansion',
      animationEasing: 'cubicInOut',
      animationDelay: function (idx) {
        return idx * 100;
      },
      animationDuration: 1000,
      data: [
        { 
          value: 16.7, 
          name: '非常满意',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#67C23A' },
              { offset: 1, color: '#85CE61' }
            ])
          }
        },
        { 
          value: 51, 
          name: '比较满意',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#409EFF' },
              { offset: 1, color: '#66B1FF' }
            ])
          }
        },
        { 
          value: 23.5, 
          name: '基本满意',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#E6A23C' },
              { offset: 1, color: '#EEBE77' }
            ])
          }
        },
        { 
          value: 5.9, 
          name: '不太满意',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#F56C6C' },
              { offset: 1, color: '#F78989' }
            ])
          }
        },
        { 
          value: 2.9, 
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