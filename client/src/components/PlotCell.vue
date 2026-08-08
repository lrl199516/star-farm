<script setup>
defineProps({
  plot: { type: Object, required: true },
})
// 阶段 2：点击格子会弹出"种植 / 收获"操作卡
</script>

<template>
  <div class="plot" :title="'地块 ' + (plot.id + 1)">
    <div class="plot-soil">🟫</div>
    <span class="plot-label">空地</span>
  </div>
</template>

<style scoped>
.plot {
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: transform 0.15s;
}
.plot:hover { transform: translateY(-2px); }
.plot-soil { font-size: 30px; }
.plot-label { font-size: 12px; color: #9fb0d8; }
</style>
