<template>
  <div class="container">
      <v-chart class="chart" :option="option" autoresize />
  </div>
</template>

<script setup>
import { use } from 'echarts/core'
import { EffectScatterChart } from 'echarts/charts'
import { TooltipComponent, GeoComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { registerMap } from 'echarts/core';

use([TooltipComponent, GeoComponent, EffectScatterChart, CanvasRenderer])

import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';

provide(THEME_KEY, 'dark');

import { readTextFile } from '@/api/file';

// 导入南京市地图 JSON 文件
const nanjing = ref()
async function loadMapData(fileName) {
  const { data } = await readTextFile(fileName)
  const obj = JSON.parse(data.content)
  nanjing.value = obj
}
loadMapData('nanjing.json').then(() => {
  registerMap('nanjing', nanjing.value)
})

const props = defineProps({
  optionfile: { type: String, required: true }
})

const option = ref();
async function loadFile(fileName) {
  const { data } = await readTextFile(fileName)
  const obj = JSON.parse(data.content)
  option.value = obj
}

loadFile(props.optionfile)

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