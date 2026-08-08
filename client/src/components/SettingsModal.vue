<script setup>
import { ref } from 'vue'
import { game, setNickname } from '../stores/game.js'

defineProps({
  open: Boolean,
})
const emit = defineEmits(['close'])

const nicknameInput = ref('')

// 把玩家 ID 复制到剪贴板（换设备找回存档用，阶段 5 生效）
async function copyId() {
  try {
    await navigator.clipboard.writeText(game.playerId)
  } catch (e) {
    // 某些环境剪贴板不可用，忽略即可
  }
}

function saveNickname() {
  setNickname(nicknameInput.value)
  nicknameInput.value = ''
}
</script>

<template>
  <transition name="fade">
    <div v-if="open" class="modal-wrap">
      <div class="mask" @click="emit('close')"></div>
      <div class="modal">
        <h2 class="panel-title">⚙️ 设置</h2>

        <div class="row">
          <span>玩家 ID</span>
          <code>{{ game.playerId }}</code>
          <button @click="copyId">复制</button>
        </div>

        <div class="row">
          <span>昵称</span>
          <input v-model="nicknameInput" :placeholder="game.nickname" />
          <button @click="saveNickname">保存</button>
        </div>

        <div class="row disabled">
          <span>存档导出 / 导入</span>
          <button disabled>阶段 5 开放</button>
        </div>

        <button class="close-btn" @click="emit('close')">关闭</button>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.modal-wrap { position: fixed; inset: 0; z-index: 20; display: flex; align-items: center; justify-content: center; }
.modal {
  position: relative;
  width: min(420px, 90vw);
  padding: 20px;
  border-radius: 16px;
  background: #141a3a;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
}
.row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 12px;
  font-size: 14px;
}
.row code {
  flex: 1;
  padding: 6px 8px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.35);
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.row input {
  flex: 1;
  padding: 6px 8px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(0, 0, 0, 0.35);
  color: #e8f0ff;
}
.row button {
  padding: 6px 10px;
  border: none;
  border-radius: 8px;
  background: #4fc3f7;
  color: #0b1026;
  font-weight: bold;
}
.row.disabled { color: #9fb0d8; }
.row.disabled button { background: rgba(255, 255, 255, 0.15); color: #9fb0d8; }
.close-btn {
  margin-top: 16px;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.15);
  color: #e8f0ff;
}
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
