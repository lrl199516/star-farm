<script setup>
import PetCard from './PetCard.vue'
import { game } from '../stores/game.js'
</script>

<template>
  <div class="pet-panel">
    <h2 class="panel-title">🐾 饲养舱</h2>
    <!-- 有宠物时逐个显示，没有时显示空状态 -->
    <div v-if="game.pets.length" class="pet-list">
      <PetCard v-for="pet in game.pets" :key="pet.id" :pet="pet" />
    </div>
    <div v-else class="empty">还没有星宠，去商店领养一颗蛋吧</div>
  </div>
</template>

<style scoped>
.pet-list { display: flex; flex-direction: column; gap: 10px; }
.empty {
  padding: 20px 10px;
  text-align: center;
  color: #9fb0d8;
  border: 1px dashed rgba(255, 255, 255, 0.2);
  border-radius: 12px;
}
</style>
