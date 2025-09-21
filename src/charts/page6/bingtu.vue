<template>
  <div class="container">
    <v-chart class="chart" :option="option" autoresize />
  </div>
</template>

<script setup>
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TitleComponent,
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
    text: '高校专利申请数量',
    subtext: '各学校专利申请统计(截止时间2025年)',
    left: 'center',
    top: '3%',
    subtextStyle: {
      fontSize: 14,
      color: '#7f8c8d',
      fontWeight: '400'
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: function(params) {
      return `<div style="padding: 8px;">
        <div style="display: flex; align-items: center; margin-bottom: 6px;">
          <span style="display: inline-block; width: 12px; height: 12px; background-color: ${params.color}; border-radius: 50%; margin-right: 8px;"></span>
          <strong style="font-size: 14px;">${params.name}</strong>
        </div>
        <div style="color: #666; font-size: 13px;">专利申请数: <strong style="color: #2c3e50;">${params.value}件</strong></div>
        <div style="color: #666; font-size: 13px;">占比: <strong style="color: #e74c3c;">${params.percent}%</strong></div>
      </div>`;
    },
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    borderColor: '#e1e8ed',
    borderWidth: 1,
    textStyle: {
      color: '#333'
    },
    extraCssText: 'box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12); border-radius: 10px; backdrop-filter: blur(10px);'
  },
  legend: {
    show: false,
    orient: 'vertical',
    left: '5%',
    top: '18%',
    itemGap: 12,
    itemWidth: 16,
    itemHeight: 16,
    textStyle: {
      fontSize: 13,
      color: '#fff',
      fontWeight: '500'
    },
    formatter: function(name) {
      return name.length > 8 ? name.substring(0, 8) + '...' : name;
    }
  },
  series: [
    {
      name: '各学校专利申请数量',
      type: 'pie',
      radius: ['25%', '60%'],
      center: ['50%', '60%'],
      avoidLabelOverlap: true,
      itemStyle: {
        borderRadius: 8,
        borderColor: '#fff',
        borderWidth: 2,
        shadowBlur: 12,
        shadowColor: 'rgba(0, 0, 0, 0.1)'
      },
      label: {
        show: true,
        position: 'outside',
        formatter: function(params) {
          if (params.percent < 5) return '';
          return `{name|${params.name}}\n{value|${params.value}件}`;
        },
        rich: {
          name: {
            fontSize: 12,
            fontWeight: 'bold',
            color: '#fff',
            lineHeight: 16
          },
          value: {
            fontSize: 11,
            fontWeight: '600',
            color: '#fff'
          }
        },
        distanceToLabelLine: 8
      },
      labelLine: {
        show: true,
        length: 15,
        length2: 12,
        smooth: true,
        lineStyle: {
          color: '#bdc3c7',
          width: 2
        }
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 20,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          borderWidth: 3
        },
        label: {
          show: true,
          fontSize: 14,
          fontWeight: 'bold'
        },
        scaleSize: 8
      },
      animationType: 'expansion',
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return idx * 120;
      },
      animationDuration: 1500,
      data: [
        { 
          value: 2647, 
          name: '东南大学',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              { offset: 0, color: '#667eea' },
              { offset: 1, color: '#764ba2' }
            ])
          }
        },
        { 
          value: 2344, 
          name: '南京航空航天',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              { offset: 0, color: '#f093fb' },
              { offset: 1, color: '#f5576c' }
            ])
          }
        },
        { 
          value: 1468, 
          name: '南京理工大学',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              { offset: 0, color: '#4facfe' },
              { offset: 1, color: '#00f2fe' }
            ])
          }
        },
        { 
          value: 1364, 
          name: '南京邮电大学',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              { offset: 0, color: '#43e97b' },
              { offset: 1, color: '#38f9d7' }
            ])
          }
        },
        { 
          value: 1337, 
          name: '南京工业大学',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              { offset: 0, color: '#fa709a' },
              { offset: 1, color: '#fee140' }
            ])
          }
        },
        { 
          value: 1291, 
          name: '河海大学',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              { offset: 0, color: '#a8edea' },
              { offset: 1, color: '#fed6e3' }
            ])
          }
        },
        { 
          value: 1152, 
          name: '南京大学',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              { offset: 0, color: '#ffecd2' },
              { offset: 1, color: '#fcb69f' }
            ])
          }
        },
        { 
          value: 1010, 
          name: '南京信息工程大学',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              { offset: 0, color: '#ff9a9e' },
              { offset: 1, color: '#fecfef' }
            ])
          }
        },
        { 
          value: 621, 
          name: '南京林业大学',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              { offset: 0, color: '#a1c4fd' },
              { offset: 1, color: '#c2e9fb' }
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