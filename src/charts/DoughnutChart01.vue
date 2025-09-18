<template>
  <div class="container">
    <v-chart class="chart" :option="option" autoresize />
    <div class="list">
      <HorizonalBar optionfile="HorizonalBar01.json"/>
    </div>
  </div>
</template>

<script setup>
import { use } from 'echarts/core'
import { PieChart } from 'echarts/charts'
import { TooltipComponent, LegendComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

use([TooltipComponent, LegendComponent, PieChart, CanvasRenderer])

import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';

provide(THEME_KEY, 'dark');

import { readTextFile } from '@/api/file';
import HorizonalBar from '@/charts/HorizonalBar.vue';

const props = defineProps({
  optionfile: { type: String, required: true },
  tablefile: { type: String, required: true }
})

const option = ref();

async function loadFile(fileName, refvar) {
  const { data } = await readTextFile(fileName)
  const obj = JSON.parse(data.content)
  refvar.value = obj
}

loadFile(props.optionfile, option)

</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
}
.chart {
  min-height: 0;
  min-width: 0;
  height: 100%;
  width: 40%;
  display: flex;
}
.list {
  height: 100%;
  width: 60%;
  display: flex;
}
</style>
