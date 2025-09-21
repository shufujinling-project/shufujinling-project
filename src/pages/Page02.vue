<template>
<div class="wrapper">
  <div class="head">
    <div style="display: flex; height: 100%; gap: 24px">
      <DvDecoration8/>
      <div class="text-wrapper" style="flex-shrink: 0;">
        南京市智慧经济发展状况
      </div>
      <DvDecoration8 :reverse="true"/>
    </div>
  </div>

  <div class="row">
    <img style="height: 50px;" src="../assets/6-1-1-2.png"></img>
    <img style="height: 50px;" src="../assets/arrow.png"></img>
    <img style="height: 50px;" src="../assets/6-2-1-2.png"></img>
    <img style="height: 50px;" src="../assets/arrow.png"></img>
    <img style="height: 50px;" src="../assets/6-3-1-1.png"></img>
  </div>

  <div class="grid">
    <div class="col1">
      <DvBorderBox12>
        <div class="cell">
          <Zhu/>
        </div>
      </DvBorderBox12>
      <DvBorderBox12>
        <div class="cell">
          <Bingtu/>
        </div>
      </DvBorderBox12>
      
      <DvBorderBox12>
        <div class="cell-col">
          <TextBox style="height:15%" text="当前研究热点"/>
          <!-- <Liebiao/> -->
          <Gun/>
        </div>
      </DvBorderBox12>      
    </div>
    
    <div class="col2">
      <DvBorderBox8>
        <div class="cell">
          <ScatterMap3D optionfile="ScatterMap3D06a.json"/>
        </div>
      </DvBorderBox8>
      <DvBorderBox12>
        <div class="cell-col" style="align-items: center;">
          <TextBox style="height: 15%" text="科技研发支出和研发活动人员变化趋势(含预测)"/>
          <Zhexian/>
        </div>
      </DvBorderBox12>      
    </div>

    <div class="col3">
      <DvBorderBox12>
        <div class="cell">
          <Duidie/>
        </div>
      </DvBorderBox12>
      <img style="height: 50px;" src="../assets/2-3-2-1.png"></img>
      <DvBorderBox12>
        <div class="cell-col">
          <TextBox style="height:15%" text="南京市居民人均可支配收入"/>
          <Zheixian1/>
          <div class="cell--dense" style="height: 15%; background-color: rgb(255, 255, 255, 0.1);">
            <Zheixian1chart1/>
            <Zheixian1chart2/>
          </div>
          <Zheixian1chart3/>
        </div>
      </DvBorderBox12>
    </div>

    <!-- <div class="footer">  
      <DvBorderBox12>
        <div class="cell-col" style="align-items: center;">
          <TextBox style="height: 15%" text="科技研发支出和研发活动人员"/>
          <Zhexian/>
        </div>
      </DvBorderBox12>
    </div> -->
  </div>
</div>
</template>

<script setup>
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
import TextBox from '@/charts/TextBox.vue';
import Zhu from '@/charts/page6/zhu.vue';
import Bingtu from '@/charts/page6/bingtu.vue';
import Liebiao from '@/charts/page6/liebiao.vue';
import Gun from '@/charts/page6/gun.vue';
import Zhexian from '@/charts/page6/zhexian.vue';
import Duidie from '@/charts/page6/duidie.vue';
import Zheixian1 from '@/charts/page6/zheixian1.vue';
import Zheixian1chart1 from '@/charts/page6/zheixian1chart1.vue';
import Zheixian1chart2 from '@/charts/page6/zheixian1chart2.vue';
import Zheixian1chart3 from '@/charts/page6/zheixian1chart3.vue';


</script>

<style lang="scss" scoped>
.wrapper {
  height: 1080px;
  width: 1728px;
  display: flex;
  flex-direction: column;
  padding: 10px 30px 30px 30px;
  box-sizing: border-box;
  
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
  .row {
    height: 5%;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .grid {
    height: 90%;
    width: 100%;
    display: grid;
    grid-template-areas:
      "col1 col2 col3"
      "col1 col2 col3"
      "col1 col2 col3";
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
