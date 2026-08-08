<script setup>
const emit = defineEmits(['start'])
</script>

<template>
  <div class="onboard">
    <div class="card">
      <div class="story-emoji">🚀🪐🌱</div>
      <h1>欢迎来到希望星</h1>
      <p>
        星际开拓者，你的任务是重建这颗星球的生态：<br />
        种植太空作物、饲养外星宠物，把荒芜变成绿洲。
      </p>
      <button class="start-btn" @click="emit('start')">开始星际之旅</button>
    </div>
  </div>
</template>

<style scoped>
.onboard {
  position: fixed;
  inset: 0;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(5, 8, 24, 0.92);
}
.card {
  max-width: 460px;
  padding: 32px;
  text-align: center;
  border-radius: 20px;
  background: #141a3a;
  border: 1px solid rgba(255, 255, 255, 0.15);
}
.story-emoji { font-size: 44px; }
h1 { margin: 12px 0; font-size: 24px; }
p { color: #9fb0d8; line-height: 1.7; }
.start-btn {
  margin-top: 18px;
  padding: 12px 28px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(90deg, #7c6cf0, #4fc3f7);
  color: #fff;
  font-size: 16px;
  font-weight: bold;
}
</style>
