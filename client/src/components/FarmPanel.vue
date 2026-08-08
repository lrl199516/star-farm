<script setup>
import PlotCell from './PlotCell.vue'
import { game } from '../stores/game.js'
</script>

<template>
  <div class="farm-panel">
    <h2 class="panel-title">🌱 种植舱</h2>
    <!-- v-for 把数组里的每个地块渲染成一个格子 -->
    <div class="plot-grid">
      <PlotCell v-for="plot in game.plots" :key="plot.id" :plot="plot" />
    </div>
  </div>
</template>

<style scoped>
.plot-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
@media (max-width: 768px) {
  .plot-grid { grid-template-columns: repeat(3, 1fr); }
}
</style>
