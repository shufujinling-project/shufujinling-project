<template>
<div class="content">
  <div class="wrapper">
    <div class="grid">
      <div class="item">
        <text style="color: white">“我的南京”线上渠道受理<text style="color: gold">67.45</text>万件</text>
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