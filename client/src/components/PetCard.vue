<script setup>
import { computed } from 'vue'

const props = defineProps({
  pet: { type: Object, required: true },
})

// 阶段名称与宠物形象（阶段 6 会把 emoji 换成 AI 生成的图片）
const STAGE_NAMES = ['蛋', '幼崽', '成年', '完全体']
const PET_EMOJI = { cat: '🐱' }

const stageName = computed(() => STAGE_NAMES[props.pet.stage] ?? '未知')
</script>

<template>
  <div class="pet-card">
    <div class="pet-head">
      <span class="pet-emoji">{{ PET_EMOJI[pet.typeId] ?? '❓' }}</span>
      <div>
        <div class="pet-name">
          {{ pet.name }}
          <span class="pet-gender">{{ pet.gender === 'female' ? '♀' : '♂' }}</span>
        </div>
        <div class="pet-stage">{{ stageName }}</div>
      </div>
    </div>
    <div class="pet-bar">
      <span>饱食</span>
      <div class="bar"><div class="fill" :style="{ width: pet.hunger + '%' }"></div></div>
    </div>
    <div class="pet-bar">
      <span>心情</span>
      <div class="bar"><div class="fill mood" :style="{ width: pet.mood + '%' }"></div></div>
    </div>
  </div>
</template>

<style scoped>
.pet-card {
  padding: 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
}
.pet-head { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
.pet-emoji { font-size: 30px; }
.pet-name { font-weight: bold; }
.pet-gender { color: #ff9ff3; font-size: 13px; }
.pet-stage { font-size: 12px; color: #9fb0d8; }
.pet-bar { display: flex; align-items: center; gap: 8px; margin-top: 6px; font-size: 12px; }
.bar {
  flex: 1;
  height: 8px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.15);
  overflow: hidden;
}
.fill {
  height: 100%;
  background: linear-gradient(90deg, #ffd166, #ff9f43);
}
.fill.mood { background: linear-gradient(90deg, #6dd5ed, #7c6cf0); }
</style>
