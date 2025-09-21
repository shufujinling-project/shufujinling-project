<template>
<div class="wrapper">
  <div class="head">
    <div style="display: flex; height: 100%; gap: 24px">
      <DvDecoration8/>
      <div class="text-wrapper" style="flex-shrink: 0;">
        南京市智慧环境检测发展状况
      </div>
      <DvDecoration8 :reverse="true"/>
    </div>
  </div>

  <div class="grid">
    <div class="col1">
      <img class="simple-img-title" src="../assets/6-1-1.png"></img>
      <DvBorderBox12>
        <div class="cell-col">
          <TextBox text="2025年8月南京空气质量详细指标" style="height: 15%; background-color: transparent;"/>
          <img style="height: 240px; object-fit: contain;" src="../assets/6.3.png"></img>
        </div>
      </DvBorderBox12>
      <DvBorderBox12>
        <div class="cell-col">
          <TextBox text="2015-2025年空气质量月度等级分布对比" style="height: 15%;"/>
          <div class="cell--dense">
            <Bingtu/>
            <Bingtu1/>
          </div>
        </div>
      </DvBorderBox12>
      <DvBorderBox12>
        <div class="cell">
          <Zhexianzhu/>
        </div>
      </DvBorderBox12>
    </div>
    
    <div class="col2">
      <img style="width: 560px; " src="../assets/6-2-1.png"></img>
      <DvBorderBox12>
        <div class="cell">
          <img style="object-fit: contain; width: 600px;" src="../assets/6.4.png"></img>
        </div>
      </DvBorderBox12>
      <DvBorderBox12>
        <div class="cell">
          <Zhexian1/>
        </div>
      </DvBorderBox12>
      <DvBorderBox12>
        <div class="cell-col">
          <TextBox style="width: 100%;" text="主要水质监测中心/站"/>
          <div class="cell--dense">
            <TextBox :font-size="14" style="width: 10%;" text="序号"/><TextBox :font-size="14" style="width: 15%;" text="设立时间"/><TextBox :font-size="14" style="width: 75%;" text="主要水质监测站"/>
          </div>
          <div class="cell--dense">
            <TextBox :font-size="14" style="width: 10%;" text="1"/><TextBox :font-size="14" style="width: 15%;" text="2018"/><TextBox :font-size="14" style="width: 75%;" text="滁河陈浅国家水质自动监测站"/>
          </div>
          <div class="cell--dense">
            <TextBox :font-size="14" style="width: 10%;" text="2"/><TextBox :font-size="14" style="width: 15%;" text="1992"/><TextBox :font-size="14" style="width: 75%;" text="南京水务集团有限公司水质监测中心"/>
          </div>
          <div class="cell--dense">
            <TextBox :font-size="14" style="width: 10%;" text="3"/><TextBox :font-size="14" style="width: 15%;" text="2006"/><TextBox :font-size="14" style="width: 75%;" text="南京夹江饮用水源地水质自动监测站"/>
          </div>
          <div class="cell--dense">
            <TextBox :font-size="14" style="width: 10%;" text="4"/><TextBox :font-size="14" style="width: 15%;" text="1995"/><TextBox :font-size="14" style="width: 75%;" text="南京市城市排水监测站"/>
          </div>
          <div class="cell--dense">
            <TextBox :font-size="14" style="width: 10%;" text="5"/><TextBox :font-size="14" style="width: 15%;" text="1979"/><TextBox :font-size="14" style="width: 75%;" text="南京市环境监测中心站（国家水质国控网络监测站）"/>
          </div>
          <div class="cell--dense">
            <TextBox :font-size="14" style="width: 10%;" text="6"/><TextBox :font-size="14" style="width: 15%;" text="1957"/><TextBox :font-size="14" style="width: 75%;" text="江苏省水环境监测中心"/>
          </div>
        </div>
      </DvBorderBox12>      
    </div>

    <div class="col3">
      <img class="simple-img-title" src="../assets/6-3-1.png"></img>
      <DvBorderBox12>
        <div class="cell">
          <Hengzhutu/>
        </div>
      </DvBorderBox12>
      <DvBorderBox12>
        <div class="cell-col">
          <TextBox text="人居城市整体满意度对比" style="height: 15%;"/>
          <div class="cell--dense">
            <Bingtu2/>
            <Bingtu3/>
          </div>          
        </div>
      </DvBorderBox12>
      <DvBorderBox12>
        <div class="cell-col">
          <TextBox text="人居城市环境建设意见词云图" style="height: 15%;"/>
          <WordCloud optionfile="WordCloud05a.json"/>
        </div>
      </DvBorderBox12>
    </div>
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

import Bingtu from '@/charts/page5/bingtu.vue';
import Bingtu1 from '@/charts/page5/bingtu1.vue';
import Zhexianzhu from '@/charts/page5/zhexianzhu.vue';
import Zhexian1 from '@/charts/page5/zhexian1.vue';
import TextBox from '@/charts/TextBox.vue';
import Hengzhutu from '@/charts/page5/hengzhutu.vue';
import Bingtu2 from '@/charts/page5/bingtu2.vue';
import Bingtu3 from '@/charts/page5/bingtu3.vue';

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

  .grid {
    height: 95%;
    width: 100%;
    display: grid;
    grid-template-areas:
      "col1 col2 col3"
      "col1 col2 col3"
      "col1 col2 col3";
    grid-template-columns: 28% 42% 28%;
    grid-template-rows: 30% 35% 35%;
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
