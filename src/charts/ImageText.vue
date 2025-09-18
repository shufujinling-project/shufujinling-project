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

<style scoped>
.content{
  height:100%;
  display:flex;
  flex-direction:column;
  padding:16px;
  box-sizing:border-box;
  gap:12px;
}
.title{
  flex:0 0 auto;
  color:#fff;
  font-size:24px;
  text-align:center;
}
.img-wrap {
  flex:1 1 0;
  display:flex;
  align-items:center;
  justify-content:center;
  min-height:0;
}
.img-wrap img{
  max-width:100%;
  max-height:100%;
  object-fit:contain;
}
.text{
  flex:0 0 auto;
  color:#fff;
  font-size:18px;
  text-align:center;
}
/* .content {
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 4fr 5fr;
  padding: 16px;
  box-sizing: border-box;
  gap: 20px;
} 
/* .content .title {
  color: white;
  font-size: 24px;
  font-weight: 900;
  width: 100%;
  text-align: center;
} 
.content .image-grid {
  width: 100%;
  display: flex;
  justify-content: center;
}
.content .image-grid img {
  min-height: 0;
  min-width: 0;
  width: 100px;
  height: 60px;
  object-fit: contain;
}
.content .text {
  color: white;
  font-size: 18px;
  width: 100%;  
  text-align: center;
}*/
</style>