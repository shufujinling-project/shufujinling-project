<template>
<div class="wrapper">
  <div class="head">
    <div style="display: flex; height: 100%; gap: 24px">
      <DvDecoration8/>
      <div class="text-wrapper" style="flex-shrink: 0;">
        南京市智慧治理进程现状
      </div>
      <DvDecoration8 :reverse="true"/>
    </div>
  </div>

  <div class="grid">
    <div class="col1">
      <img class="simple-img-title" src="../assets/2-1-1.png"/>
      <DvBorderBox12>
        <div class="cell-col">
          <TextBox style="height: 15%;" text="网格化管理优化"/>
          <div class="cell--dense">
              <DoughnutChart optionfile="DoughnutChart02a.json"/>
              <MyChart01/>
            <!-- <div class="cell-col" style="background-color: rgb(255, 255, 255, 0.1);">
              <img style="height: 150px; width: 200px" src="../assets/2-1-1-1.png"></img>
            </div> -->
          </div>
          <div class="cell--dense">
            <TextBox style="height: 20px;" text="2022年"/><TextBox style="height: 20px;" text="2023年"/>
          </div>
        </div>
      </DvBorderBox12>
      <DvBorderBox12>
        <div class="cell-col">
          <TextBox style="height: 15%;" text="区域治理体系建设"/>
          <div class="cell--dense">
            <StackedColumnChart optionfile="StackedColumnChart02a.json"/>
            <StackedColumnChart optionfile="StackedColumnChart02b.json"/>
          </div>
        </div>
      </DvBorderBox12>
      <img class="simple-img-title" src="../assets/2-1-3.png"/>
      <DvBorderBox12>
        <div class="cell-col">
          <TextBox style="height: 15%; background-color: transparent;" text="刑事案件侦破情况"/>
          <img style="height: 240px; object-fit: contain;" src="../assets/2-1-3-1.png"/>
        </div>
      </DvBorderBox12>
    </div>
    
    <div class="col2">
      <DvBorderBox8 >
        <div class="cell">
          <ScatterMap3D optionfile="ScatterMap3D02a.json"/>
        </div>
      </DvBorderBox8>
    </div>

    <div class="col3">
    <img class="simple-img-title" src="../assets/2-3-1.png"/>
      <DvBorderBox12>
        <div class="cell-col">
          <TextBox text="12345政务热线服务状况(截至2020年)" style="height: 15%;"/>
          <div class="cell--dense" style="background-color: rgb(255, 255, 255, 0.1);">
            <div class="cell-col">
              <MyChart03/>
              <img style="object-fit: contain; width:150px;" src="../assets/2-3-1-1.png"/>
            </div>
            <img style="object-fit: contain; width:280px;" src="../assets/2-3-1-2.png"/>
          </div>          
        </div>
      </DvBorderBox12>
      <DvBorderBox12>
        <div class="cell-col">
          <TextBox style="height: 15%;" text="“我的南京”APP（截至2024年）"/>
          <div class="cell--dense">
            <div class="cell-col" style="background-color: rgb(255, 255, 255, 0.1);">
              <img style="object-fit: contain; height:200px;" src="../assets/2-3-2.png"/>
            </div>
            <div class="cell--dense">
              <MyChart02/>
            </div>
          </div>          
        </div>
      </DvBorderBox12>
      <DvBorderBox12>
        <div class="cell-col">
          <PieChart optionfile="PieChart02a.json"/>
          <!-- <TextBox style="height: 15%;" text=""/> -->
        </div>
      </DvBorderBox12>
    </div>

    <div class="footer">  
      <DvBorderBox12>
        <div class="cell-col" >
          <TextBox style="height: 15%; background-color: transparent;" text="政务服务"/>
          <PieChart optionfile="PieChart02b.json"/>
          <img style="width: 300px; object-fit: contain;" src="../assets/2-2-3-1.png"></img>
        </div>
      </DvBorderBox12>
      <DvBorderBox12>
        <div class="cell-col" style="justify-content: space-between;">
          <TextBox style="height: 15%; background-color: transparent;" text="应急管理体系"/>
          <img style="height: 200px; width: 300px ;" src="../assets/2-2-3-2.png"></img>
        </div>
      </DvBorderBox12>
    </div>
  </div>
</div>
</template>

<script setup>
import '@/styles/ui.css';
import StackedLineChart from '@/charts/StackedLineChart.vue';
import GEOSVGScatter from '@/charts/GEOSVGScatter.vue';
import PieChart from '@/charts/PieChart.vue';
import BasicBar from '@/charts/BasicBar.vue';
import WordCloud from '@/charts/WordCloud.vue';
import ScatterMap3D from '@/charts/ScatterMap3D.vue';
import StackedColumnChart from '@/charts/StackedColumnChart.vue';
import DoughnutChart from '@/charts/DoughnutChart.vue';
import DoughnutChart01 from '@/charts/DoughnutChart01.vue';
import HorizonalBar from '@/charts/HorizonalBar.vue';

import ImageText from '@/charts/ImageText.vue';
import MyChart01 from '@/charts/MyChart01.vue';
import MyChart02 from '@/charts/MyChart02.vue';
import MyChart03 from '@/charts/MyChart03.vue';
import TextBox from '@/charts/TextBox.vue'; 

</script>

<style lang="scss" scoped>
.wrapper {
  height: 1080px;
  width: 1728px;
  display: flex;
  flex-direction: column;
  padding: 10px 30px 30px 30px;
  box-sizing: border-box;
  gap: 16px;
  
  .head {
    font-size: 36px;
    color: white;
    height: 5%;
    box-sizing: border-box;
    
    .text-wrapper {
      height: 100%;
      display: flex;
      align-items: center;    
      justify-content: center;
    }
  }

  .grid {
    height: 95%;
    width: 100%;
    display: grid;
    grid-template-areas:
      "col1 col2 col3"
      "col1 col2 col3"
      "col1 footer col3";
    grid-template-columns: 28% 42% 28%;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 16px;
    
    .col1 {
      grid-area: col1;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .col2 {
      grid-area: col2;
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 16px;
    }

    .col3 {
      grid-area: col3;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .footer {
      grid-area: footer;
      display: flex;
      gap: 16px;
    }
    @mixin cell($direction: row, $pad: 16px) {
      height: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      flex-direction: $direction;
      @if $pad != 0 { padding: $pad; }
    }    
    .cell {
      @include cell;
    }
    .cell--dense {
      @include cell(row, 0);
    }
    .cell-col {
      @include cell(column);    // 列布局，仍带 20px
    }
    .cell-col--dense {
      @include cell(column, 0); // 列布局，无 padding
    }
  }
}


</style>
