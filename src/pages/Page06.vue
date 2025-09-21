<template>
<div class="wrapper">
  <div class="head">
    <div style="display: flex; height: 100%; gap: 24px">
      <DvDecoration8/>
      <div class="text-wrapper" style="flex-shrink: 0;">
        南京市智慧化城市建设政策文件词云图
      </div>
      <DvDecoration8 :reverse="true"/>
    </div>
  </div>

  <div class="grid">
    <div class="col1">
      <div class="cell">
        <HorizonalBar optionfile="HorizonalBar03a.json"/>
      </div>
    </div>
    <div class="col2">
      <div class="cell">
        <WordCloud optionfile="WordCloud03a.json"/>
      </div>
    </div>

    <div class="col3">

    </div>

    <div class="footer">
      <div class="cell-col">
        <div class="cell--dense">
          <TextBox style="width: 150px;" text="日期"/>
          <TextBox  style="width: 593px;" text="政策文件名称"/>
          <TextBox  style="width: 150px;" text="日期"/>
          <TextBox  style="width: 593px;" text="政策文件名称"/>
        </div>
        <div class="cell--dense">
          <TextBox :font-size="18" style="width: 150px;" text="2011年12月31日"/>
          <TextBox :font-size="18"  style="width: 593px;" text="《南京市人民政府关于印发南京市“十二五”智慧城市发展规划的通知》"/>
          <TextBox :font-size="18" style="width: 150px;" text="2013年1月17日"/>
          <TextBox href="https://www.nanjing.gov.cn/zdgk/201302/t20130204_1055903.html" :font-size="18" style="width: 593px;" text="《市政府关于印发南京市创建国家级智慧城市试点示范工作方案的通知》"/>
        </div>
        <div class="cell--dense">
          <TextBox :font-size="18" style="width: 150px;" text="2014年5月21日"/>
          <TextBox href="https://www.nanjing.gov.cn/zdgk/201406/t20140606_1056157.html" :font-size="18" style="width: 593px;" text="《市政府关于批转市教育局南京市教育信息化两年行动计划（2014—2015年）的通知》"/>
          <TextBox :font-size="18" style="width: 150px;" text="2020年4月29日"/>
          <TextBox href="https://www.nanjing.gov.cn/zdgk/202005/t20200511_1871923.html" :font-size="18" style="width: 593px;" text="《市政府关于印发南京市数字经济发展三年行动计划（2020—2022年）的通知》"/>
        </div>
        <div class="cell--dense">
          <TextBox :font-size="18" style="width: 150px;" text="2021年9月27日"/>
          <TextBox href="https://www.nanjing.gov.cn/zdgk/202111/t20211111_3187004.html" :font-size="18" style="width: 593px;" text="《市政府办公厅关于印发《南京市“十四五”数字经济发展规划》的通知》"/>
          <TextBox :font-size="18" style="width: 150px;" text="2021年11月8日"/>
          <TextBox href="https://www.nanjing.gov.cn/zdgk/202111/t20211111_3187159.html" :font-size="18" style="width: 593px;" text="《市政府办公厅关于印发南京市制造业数字化转型实施方案（2021—2023年）的通知》"/>
        </div>
        <div class="cell--dense">
          <TextBox :font-size="18" style="width: 150px;" text="2021年12月30日"/>
          <TextBox href="https://www.nanjing.gov.cn/zdgk/202201/t20220129_3280857.html" :font-size="18" style="width: 593px;" text="《市政府办公厅关于印发《南京市整体推进城市数字化转型“十四五”规划》的通知》"/>
          <TextBox :font-size="18" style="width: 150px;" text="2022年2月22日"/>
          <TextBox href="https://www.nanjing.gov.cn/zdgk/202203/t20220304_3310265.html" :font-size="18" style="width: 593px;" text="《市政府办公厅关于印发南京市制造业智能化改造和数字化转型实施方案（2022—2024年）的通知》"/>
        </div>
        <div class="cell--dense">
          <TextBox :font-size="18" style="width: 150px;" text="2022年3月8日"/>
          <TextBox href="https://www.nanjing.gov.cn/zdgk/202203/t20220310_3314689.html" :font-size="18" style="width: 593px;" text="《市政府关于印发南京市全力打造五千亿级智能电网产业集群行动计划的通知》"/>
          <TextBox :font-size="18" style="width: 150px;" text="2025年5月10日"/>
          <TextBox href="https://www.nanjing.gov.cn/zdgk/202502/t20250228_5085372.html" :font-size="18" style="width: 593px;" text="《南京市城市数字治理若干规定》"/>
        </div>
      </div>
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
      "footer footer footer";
    grid-template-columns: 15% 75% 10%;
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
