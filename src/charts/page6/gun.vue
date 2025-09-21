<template>
  <div class="content">
    <dv-scroll-board :config="config" style="width: 100%;height:175px;top: -10px;"/>
  </div>
</template>


<script lang="ts" setup>
import {ref,reactive } from 'vue'


const config = reactive({
  header: ["排名", '研究热点'],
  data: [
    ['TOP1', '聚焦数智文科与AI融合，探索跨学科前沿发展路径'],
    ['TOP2', '着力大模型系统架构钻研，推动创新应用落地各行业领域'],
    ['TOP3', '深入研发新型光学材料，开拓隐形技术与成像领域新可能'],
    ['TOP4', '全力推进软体机器人技术革新，结合新兴材料实现突破'],
    ['TOP5', '深耕智能网联汽车技术，打造"车路云一体化"智慧出行'],
    ["TOP6","加速纳米酶增强假体研究，助力产业化进程服务医疗需求"],
    ["TOP7","攻坚量子材料与器件开发，挖掘独特物理内涵引领变革"],
    ["TOP8","围绕新能源利用与储能，契合国家战略开展深度技术研发"]
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