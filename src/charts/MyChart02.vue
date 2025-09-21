<template>
<div class="content">
  <div class="wrapper">
    <div class="grid">
      <div class="item">
        <text style="color: white">实名注册用户数超<text style="color: gold">1125</text>万</text>
      </div>
      <div class="item">
        <text style="color: white">月均活跃度近<text style="color: gold">400</text>万</text>
      </div>
      <div class="item">
        <text style="color: white">在线服务功能超<text style="color: gold">4000</text>项</text>
      </div>
      <div class="item">
        <text style="color: white">视频号播放量超<text style="color: gold">223.4</text>万次</text>
      </div>
    </div>
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
    display: flex;
    box-sizing: border-box;
    gap:12px;
  }

  .grid {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    text-align: center;
    .item {
      height: 100%;
      
    }
  }
}
</style>