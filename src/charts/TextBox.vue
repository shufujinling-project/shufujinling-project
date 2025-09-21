<template>
<div class="content">
  <a :href="href" target="_blank" rel="noopener">
    <div class="text" :style="{ '--fs': fontSize + 'px' }"> {{ props.text }} </div>
  </a>
</div>
</template>

<script setup>

const props = defineProps({
  text: { type: String},
  fontSize: { type: Number, default: 20 },
  href: { type: String},
})

</script>

<style lang="scss" scoped>
.content{
  background-color: rgb(255, 255, 255, 0.1);
  height:100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing:border-box;

  .text {
    color:#fff;
    font-size: var(--fs);
    font-weight: 900;
    text-align: center;
  }
}

</style>