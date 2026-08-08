<script setup>
import { computed } from 'vue'
import { game } from '../stores/game.js'

// 计算属性：经验进度百分比（阶段 2 接升级逻辑）
const xpPercent = computed(() => {
  const need = game.level * 20
  return Math.min(100, Math.round((game.xp / need) * 100))
})

// 通知父组件打开商店 / 设置
const emit = defineEmits(['open-shop', 'open-settings'])
</script>

<template>
  <header class="top-bar">
    <div class="brand">
      <span class="logo">🚀</span>
      <div>
        <div class="title">星际农场</div>
        <div class="nickname">{{ game.nickname }}</div>
      </div>
    </div>

    <div class="stats">
      <span class="stat">🪙 {{ game.coins }}</span>
      <div class="level-block">
        <span class="stat">Lv.{{ game.level }}</span>
        <div class="xp-bar">
          <div class="xp-fill" :style="{ width: xpPercent + '%' }"></div>
        </div>
      </div>
    </div>

    <div class="actions">
      <button class="icon-btn" title="商店" @click="emit('open-shop')">🛒</button>
      <button class="icon-btn" title="设置" @click="emit('open-settings')">⚙️</button>
    </div>
  </header>
</template>

<style scoped>
.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 20px;
  background: rgba(8, 12, 34, 0.85);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.brand { display: flex; align-items: center; gap: 10px; }
.logo { font-size: 28px; }
.title { font-size: 18px; font-weight: bold; }
.nickname { font-size: 12px; color: #9fb0d8; }
.stats { display: flex; align-items: center; gap: 16px; }
.stat { font-size: 15px; }
.level-block { display: flex; align-items: center; gap: 8px; }
.xp-bar {
  width: 90px;
  height: 8px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.15);
  overflow: hidden;
}
.xp-fill {
  height: 100%;
  background: linear-gradient(90deg, #7c6cf0, #4fc3f7);
  transition: width 0.3s;
}
.actions { display: flex; gap: 8px; }
.icon-btn {
  font-size: 20px;
  padding: 6px 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.08);
}
.icon-btn:hover { background: rgba(255, 255, 255, 0.18); }
</style>
