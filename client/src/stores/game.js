import { reactive } from 'vue'
import { GAME_CONFIG, SAMPLE_PETS } from '../data/config.js'

// 单一数据源：整个游戏的进度都存在这一个对象里
// 组件只读它、通过下面的方法改它；数据一变，界面自动更新
export const game = reactive({
  // 玩家信息（真正的匿名 ID 在阶段 5 接入后端时生成）
  playerId: 'P-' + Math.random().toString(36).slice(2, 8).toUpperCase(),
  nickname: GAME_CONFIG.defaultNickname,

  // 经济与等级
  coins: GAME_CONFIG.initialCoins,
  level: GAME_CONFIG.initialLevel,
  xp: GAME_CONFIG.initialXp,

  // 田地：先造出 12 个空地块（阶段 2 接种植逻辑）
  plots: Array.from({ length: GAME_CONFIG.plotCount }, (_, i) => ({
    id: i,
    cropId: null, // 种植后这里存作物类型
  })),

  // 宠物栏（阶段 1 用示例数据占位）
  pets: SAMPLE_PETS,
})

// 修改昵称
export function setNickname(name) {
  if (name && name.trim()) {
    game.nickname = name.trim()
  }
}
