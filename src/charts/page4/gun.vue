<template>
  <div class="content">
    <dv-scroll-board :config="config" style="width: 100%;height:175px;top: -10px;"/>
  </div>
</template>


<script lang="ts" setup>
import {ref,reactive } from 'vue'


const config = reactive({
  header: ["致死率排名", '疾病名称'],
  data: [
    ['TOP1', '脑血管病'],
    ['TOP2', '心血管病'],
    ['TOP3', '肺癌'],
    ['TOP4', '慢性下呼吸道疾病'],
    ['TOP5', '胃癌'],
    ["TOP6","糖尿病"]
  ],
  index: false,
  columnWidth: [100],
  align: ['center'],
})
</script>

  <style lang="scss" scoped>
  .content{
    background-color: rgb(255, 255, 255, 0.1);
    height:100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing:border-box;
    gap:12px;
  }
  </style>