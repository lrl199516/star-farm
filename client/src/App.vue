<script setup>
import { ref } from 'vue'
import TopBar from './components/TopBar.vue'
import FarmPanel from './components/FarmPanel.vue'
import PetPanel from './components/PetPanel.vue'
import ShopDrawer from './components/ShopDrawer.vue'
import SettingsModal from './components/SettingsModal.vue'
import Onboarding from './components/Onboarding.vue'

// 界面开关状态：哪个弹层当前是打开的
const shopOpen = ref(false)
const settingsOpen = ref(false)
const showOnboarding = ref(true)
// 窄屏下宠物栏是否折叠（宽屏始终并排显示）
const petCollapsed = ref(false)
</script>

<template>
  <div class="app">
    <!-- 顶部信息栏 -->
    <TopBar @open-shop="shopOpen = true" @open-settings="settingsOpen = true" />

    <!-- 主区域：田地在左（宽），宠物在右；窄屏时上下排列 -->
    <main class="main-area">
      <section class="panel farm">
        <FarmPanel />
      </section>

      <section class="panel pets" :class="{ collapsed: petCollapsed }">
        <button class="pet-toggle" @click="petCollapsed = !petCollapsed">
          {{ petCollapsed ? '▼ 展开宠物栏' : '▲ 收起宠物栏' }}
        </button>
        <PetPanel v-show="!petCollapsed" />
      </section>
    </main>

    <!-- 弹层：商店抽屉、设置、开场引导 -->
    <ShopDrawer :open="shopOpen" @close="shopOpen = false" />
    <SettingsModal :open="settingsOpen" @close="settingsOpen = false" />
    <Onboarding v-if="showOnboarding" @start="showOnboarding = false" />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.main-area {
  flex: 1;
  display: flex;
  gap: 16px;
  padding: 16px;
}
.panel {
  padding: 16px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
}
/* 田地占满剩余宽度 */
.farm { flex: 1 1 auto; min-width: 0; }
/* 宠物栏固定宽度，窄屏变上下 */
.pets {
  flex: 0 0 300px;
  display: flex;
  flex-direction: column;
}
.pet-toggle {
  display: none;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.08);
  color: #e8f0ff;
}

@media (max-width: 768px) {
  .main-area { flex-direction: column; }
  .pets { flex: none; }
  .pet-toggle { display: block; }
}
</style>
