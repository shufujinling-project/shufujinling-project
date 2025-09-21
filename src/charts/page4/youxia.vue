<template>
  <div class="content">
    <div w50rem h25rem flex="~ col" justify-center items-center bg-dark>
      <dv-capsule-chart :config="config" style="width:28rem;height:12rem;bottom:15px" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const addData = () => {
  config.data.push({
    name: '测试' + Math.floor(Math.random() * 100),
    value: Math.floor(Math.random() * 100)
  });
};

const config = 
reactive({
  data: [
  
    {
      name: '南京德基广场',
      value: 265
    },
    {
      name: '南京新街口中央广场',
      value: 95
    },
    {
      name: '南京华采天地',
      value: 85
    },
     {
      name: '南京新百中心店',
      value: 49
    },
    {
      name: '南京金鹰新街口店',
      value: 49
    },
    
    
  ],
  colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
  unit: '亿元',
  labelNum: 5,   
});
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