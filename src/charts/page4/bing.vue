<template>
  <div class="container">
    <v-chart class="chart" :option="option" autoresize/>
  </div>
</template>

<script setup>
import { use } from 'echarts/core';
import { PieChart } from 'echarts/charts';
import { TitleComponent, LegendComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

use([
    TitleComponent,
    LegendComponent,
    PieChart,
    CanvasRenderer
]);

import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';

provide(THEME_KEY, 'dark');

const option = {
 backgroundColor: 'rgba(255,255,255,0.1)',
 title: {
        text: '南京市医疗机构体系(截至2020年)', // 主标题文本
         // 副标题文本
        left: 'center',
        top: '5%'  
     },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '50%',
        left: '70%'
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['25%', '50%'],
            center: ['50%', '50%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: true,
                position: 'outside',
                formatter: '{b}: {d}%',
                fontSize: 16,
                color: '#fff'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 20,
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: true
            },
            data: [
                { value: 37, name: '三级医院' },
                { value: 61, name: '二级医院' },
                { value: 497, name: '一级医院' },
                
                
            ]
        }
    ]
    
};

// loadFile(props.optionfile)

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
