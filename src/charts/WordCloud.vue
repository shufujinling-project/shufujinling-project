<template>
  <div class="container">
    <v-chart class="chart" :option="option" autoresize />
  </div>
</template>

<script setup>
import VChart, { THEME_KEY } from 'vue-echarts';
import 'echarts-wordcloud';

import { ref, provide } from 'vue';

provide(THEME_KEY, 'dark');

import { readTextFile } from '@/api/file';

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