<template>
<div class="wrapper">
  <div class="head">
    <div style="display: flex; height: 100%; gap: 24px">
      <DvDecoration8/>
      <div class="text-wrapper" style="flex-shrink: 0;">
        南京市智慧民生建设情况
      </div>
      <DvDecoration8 :reverse="true"/>
    </div>
  </div>

  <div class="grid">

    <div class="col1">
      <img class="simple-img-title" src="../assets/4-1-1.png"></img>
      <DvBorderBox12>
        <div class="cell-col">
          <Bing/>
        </div>
      </DvBorderBox12>
      <DvBorderBox12>
        <div class="cell-col">
          <Zhuzhuang/>
        </div>
      </DvBorderBox12>
      <DvBorderBox12>
        <div class="cell-col" style="gap: 16px">
          <TextBox style="height: 15%; background-color: transparent;" text="居民健康水平"/>
          <img style="height: 120px; object-fit: contain;" src="../assets/4-1-3.png"></img>
          <Gun/>
        </div>
      </DvBorderBox12>
    </div>
    
    <div class="col2">
      <DvBorderBox8 >
        <div class="cell">
          <ScatterMap3D optionfile="ScatterMap3D04a.json"/>
        </div>
      </DvBorderBox8>
    </div>

    <div class="col3">
      <img class="simple-img-title" src="../assets/4-3-1.png"></img>
      <DvBorderBox12>
        <div class="cell">
          <Shiyan/>
        </div>
      </DvBorderBox12>
      <DvBorderBox12>
        <div class="cell-col">
          <TextBox style="height: 15%" text="“智慧南京”购物模式发展情况"/>
          <div class="cell--dense">
            <Zhuyinying/>
            <img style="width: 200px; object-fit: contain; background-color: rgba(255, 255, 255, 0.1);" src="../assets/4.4.png"></img>
          </div>
        </div>
      </DvBorderBox12>
      <DvBorderBox12>
        <div class="cell-col">
          <TextBox text="南京市线下购物中心销售额(2024年)"/>
          <Youxia/>
        </div>
      </DvBorderBox12>
    </div>

    <div class="footer">  
      <DvBorderBox12>
        <div class="cell-col" style="justify-content: space-around;">
          <TextBox style="height: 1%; background-color: transparent;" text="智慧医疗平台建设"/>
          <img style="width: 280px; object-fit: contain;" src="../assets/4-2-3-1.png"></img>
        </div>
      </DvBorderBox12>
      <DvBorderBox12>
        <div class="cell-col" style="justify-content: space-around;">
          <TextBox style="height: 15%; background-color: transparent;" text="“健康南京”APP开发"/>
          <img style="width: 350px; object-fit: contain;" src="../assets/4-2-3-2.png"></img>
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
import TextBox from '@/charts/TextBox.vue';
import Bing from '@/charts/page4/bing.vue';
import Zhuzhuang from '@/charts/page4/zhuzhuang.vue';
import Zhuyinying from '@/charts/page4/zhuyinying.vue';
import Shiyan from '@/charts/page4/shiyan.vue';
import Gun from '@/charts/page4/gun.vue';
import Youxia from '@/charts/page4/youxia.vue';

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

    .box {
      grid-area: box;
      display: flex;
      flex-direction: column;
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
