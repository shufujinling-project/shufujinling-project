<template>
<div class="wrapper">
  <div class="head">
    <DvBorderBox7>
      <div class="text-wrapper">
        南京市智慧经济发展状况
      </div> 
    </DvBorderBox7>
  </div>
  <div class="grid">
    <div class="col1">
        <DvBorderBox9>
          <div class="cell">
            <PieChart optionfile="PieChart01.json"/>
          </div>
        </DvBorderBox9>
        <DvBorderBox9>
          <div class="cell">
            <PieChart optionfile="PieChart01.json"/>
          </div>
        </DvBorderBox9>
        <DvBorderBox9>
          <div class="cell">
            <StackedLineChart optionfile="StackedLineChart01.json"/>
          </div>
        </DvBorderBox9>
    </div>
    <div class="col2">
      <DvBorderBox8>
        <div class="cell">
          <ScatterMap3D optionfile="ScatterMap3D02.json"/>
        </div>
      </DvBorderBox8>
    </div>
    <div class="col3">
      <DvBorderBox9>
        <div class="cell">
          <StackedLineChart optionfile="StackedLineChart01.json"/>
        </div>
      </DvBorderBox9>
      <DvBorderBox9>
        <div class="cell">
          <StackedLineChart optionfile="StackedLineChart01.json"/>
        </div>
      </DvBorderBox9>
      <DvBorderBox9>
        <div class="cell">
          <StackedLineChart optionfile="StackedLineChart01.json"/>
        </div>
      </DvBorderBox9>
    </div>
    <div class="footer">
      <DvBorderBox12>

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

</script>

<style scoped>
.wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 30px 30px 30px;
  box-sizing: border-box;
  gap: 16px;
}
.head {
  font-size: 36px;
  color: white;
  height: 5%;
  box-sizing: border-box;
}

.head .text-wrapper {
  height: 100%;
  display: flex;
  align-items: center;    
  justify-content: center;
}
.grid {
  flex: 1;
  width: 100%;
  display: grid;
  grid-template-areas:
    "col1 col2 col3"
    "col1 footer col3";
  grid-template-columns: 28% 42% 28%;
  grid-template-rows: 67% 1fr;
  gap: 1%;
}
.grid .col1 {
  grid-area: col1;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 16px;
}
.grid .col2 {
  grid-area: col2;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 16px;
}
.grid .col3 {
  grid-area: col3;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 16px;
}
.grid .footer {
  grid-area: footer;
  display: flex;
  flex: 1;
}
.grid .cell{
  /* background-color: yellow; */
  min-height: 0;
  min-width:  0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
}
</style>
