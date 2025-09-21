<template>
<div class="content">
  <div class="title"> {{ props.title }} </div>
  <div class="image-wrap">
    <img :src="props.image"/>
  </div>
  <div class="text"> {{ props.text }} </div>    
</div>
</template>

<script setup>

const props = defineProps({
  title: { type: String },
  image: { type: String, required: true },
  text: { type: String}
})

</script>

<style lang="scss" scoped>
.content{
  background-color: rgb(255, 255, 255, 0.1);
  height:100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 2fr 3fr;
  grid-template-columns: 1fr;
  padding:16px;
  box-sizing:border-box;
  gap:12px;

  .title {
    color:#fff;
    font-size:24px;
    text-align:center;
  }

  .image-wrap {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 100px;
    }
  }

  .text {
    color:#fff;
    font-size:18px;
    text-align:center;
  }
}

</style>