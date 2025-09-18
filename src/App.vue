<template>
  <div class="layout">
    <div class="sidebar">
      <div class="wrapper">
        <div class="menu">
          <button v-for="value in memuBtn" :key="value.name" :class="{ active: currentPage === value.name }" @click="() => {current = value.page; currentPage = value.name}">{{ value.name }}</button>
        </div>
      </div>
    </div>
    <div class="main">
      <Transition name="fade" mode="out-in">
        <component :is="current"/>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import '@/styles/reset.css';
import '@/styles/ui.css';
import { shallowRef, ref } from 'vue'

import Page01 from '@/pages/Page01.vue'
import Page02 from '@/pages/Page02.vue'

const current = shallowRef(Page01)
const currentPage = ref("Page01")

const memuBtn = [
  {
    name: "页面一",
    page: Page01
  },
  {
    name: "页面二",
    page: Page02
  }
]
</script>

<style scoped>
.layout{
  background-color: #100C2A;
  height: 100%;
  margin: 0;
  display: grid;
  grid-template-areas:
    "sidebar main";
  grid-template-columns: 10vw 1fr;
  grid-template-rows: 1fr;
}
.sidebar {
  grid-area: sidebar;
  padding-top: 20px;
  padding-right: 16px;
}
.sidebar .wrapper {
  height: 100%;
}
.sidebar .menu {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.main {
  grid-area: main;
  /* padding: 20px; */
}
/* 页面切换淡入淡出效果 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
</style>
