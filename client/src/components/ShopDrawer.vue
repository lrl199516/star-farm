<script setup>
defineProps({
  open: Boolean,
})
const emit = defineEmits(['close'])

// 商店占位商品（阶段 2/3 接入真实商品与购买逻辑）
const goods = [
  { id: 'seed_radish', emoji: '🥕', name: '星光萝卜种子', price: 2, tag: '种子' },
  { id: 'seed_tomato', emoji: '🍅', name: '火星番茄种子', price: 5, tag: '种子' },
  { id: 'egg_cat', emoji: '🥚', name: '星猫蛋', price: 50, tag: '星宠蛋' },
]
</script>

<template>
  <transition name="slide">
    <div v-if="open" class="drawer-wrap">
      <!-- 点击遮罩层关闭抽屉 -->
      <div class="mask" @click="emit('close')"></div>
      <aside class="drawer">
        <h2 class="panel-title">🛒 星际补给站</h2>
        <div class="goods">
          <div v-for="item in goods" :key="item.id" class="good">
            <span class="good-emoji">{{ item.emoji }}</span>
            <div class="good-info">
              <div class="good-name">{{ item.name }}</div>
              <div class="good-tag">{{ item.tag }} · 🪙 {{ item.price }}</div>
            </div>
            <button class="buy-btn" disabled>开发中</button>
          </div>
        </div>
        <button class="close-btn" @click="emit('close')">关闭</button>
      </aside>
    </div>
  </transition>
</template>

<style scoped>
.drawer-wrap { position: fixed; inset: 0; z-index: 20; }
.drawer {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: min(360px, 85vw);
  padding: 20px;
  background: #141a3a;
  box-shadow: -8px 0 24px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
}
.goods { flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; }
.good {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);
}
.good-emoji { font-size: 26px; }
.good-info { flex: 1; }
.good-name { font-size: 14px; }
.good-tag { font-size: 12px; color: #9fb0d8; }
.buy-btn {
  padding: 6px 12px;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.15);
  color: #9fb0d8;
}
.close-btn {
  margin-top: 12px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background: #4fc3f7;
  color: #0b1026;
  font-weight: bold;
}
/* 抽屉滑入动画 */
.slide-enter-active, .slide-leave-active { transition: transform 0.25s; }
.slide-enter-from, .slide-leave-to { transform: translateX(100%); }
</style>
