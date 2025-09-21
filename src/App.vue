<template>
  <VScaleScreen>
    <div id="index">
      <div class="sidebar">
        <div class="wrapper">
          <div class="menu">
            <button 
              v-for="value in memuBtn" 
              :key="value.name" 
              :class="{ active: currentPage === value.name }" 
              @click="() => {current = value.page; currentPage = value.name}"
              :style="btnTexture(value.name)">
              
            </button>
          </div>
        </div>
      </div>
      <div class="main">
        <Transition name="fade" mode="out-in">
          <component :is="current"/>
        </Transition>
      </div>
    </div>
  </VScaleScreen>
</template>

<script setup>
import '@/styles/reset.css';
import '@/styles/ui.css';
import { shallowRef, ref } from 'vue'
import VScaleScreen from 'v-scale-screen'

import Page01 from '@/pages/Page01.vue'
import Page02 from '@/pages/Page02.vue'
import Page03 from '@/pages/Page03.vue'
import Page04 from '@/pages/Page04.vue'
import Page05 from '@/pages/Page05.vue'
import Page06 from '@/pages/Page06.vue'

import { computed } from 'vue'

const current = shallowRef(Page01)
const currentPage = ref("")

const memuBtn = [
  {
    name: "1",
    page: Page01
  },
  {
    name: "2",
    page: Page02
  },
  {
    name: "3",
    page: Page03
  },
  {
    name: "4",
    page: Page04
  },
  {
    name: "5",
    page: Page05
  },
  {
    name: "6",
    page: Page06
  }  
]

const btnTexture = computed(() => (name) => ({
  background: `url('/buttons/${name}.png') center/cover no-repeat`
}))
</script>

<style lang="scss" scoped>
#index {
  background-color: #100C2A;
  background-image: url('@/assets/pageBg.png');
  width: 1920px;
  height: 1080px;
  margin: 0;
  display: grid;
  grid-template-areas:
    "sidebar main";
  grid-template-columns: 10vw 90vw;
  grid-template-rows: 1fr;

  .sidebar {
    grid-area: sidebar;
    padding-top: 20px;
    padding-right: 16px;
    
    .wrapper {
      height: 100%;
    }

    .menu {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
  .main {
    grid-area: main;
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
}
</style>
