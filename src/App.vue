<template>
  <main class="layout">
    <div class="grid">
      <div class="cell"><StackedLineChart01 /></div>
    </div>
  </main>
</template>

<script setup>
import '@/styles/reset.css';
import StackedLineChart01 from '@/charts/StackedLineChart01.vue';


</script>

<style scoped>
.layout{
  background-color: black;
  height: 100vh;
  width: 100vw;
}
.grid{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows:    repeat(3, 1fr);
  gap: 16px;
  height: 100%;
}
.cell{
  min-height: 0;
  min-width:  0;
}
</style>
