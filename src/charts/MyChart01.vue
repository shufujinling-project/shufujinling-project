<template>
<div class="content">
  <div class="wrapper">
    <div class="title">全面实施“精网微格”工程</div>
    <div class="grid">
      <div class="item">
        <icon-grid-nine theme="outline" size="50" fill="#eee"/>
        <text style="color: white">微网格</text>
        <text style="color: gold">41149个</text>
      </div>
      <div class="item">
        <icon-user-business theme="outline" size="50" fill="#eee"/>
        <text style="color: white">网格员</text>
        <text style="color: gold">44688名</text>
      </div>
      <div class="item">
        <icon-wechat theme="outline" size="50" fill="#eee"/>
        <text style="color: white">联络群</text>
        <text style="color: gold">13175个</text>
      </div>
    </div>
    <div class="title">区域覆盖率达<text style="color: gold">100%</text></div>
  </div>
</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.content{
  padding:16px;
  background-color: rgb(255, 255, 255, 0.1);
  .wrapper {
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 2fr;
    grid-template-columns: 1fr;
    box-sizing:border-box;
    gap:12px;
  }

  .title {
    color:#fff;
    font-size:18px;
    font-weight: 900;
    text-align: center;
  }

  .grid {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    text-align: center;
    .item {
      height: 100%;
      
    }
  }
}
</style>