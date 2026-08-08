// 游戏数值配置
// 阶段 1 只用到界面占位，完整数值会在阶段 2/3 陆续接入
export const GAME_CONFIG = {
  // 初始金币与等级
  initialCoins: 100,
  initialLevel: 1,
  initialXp: 0,
  // 每级所需经验：等级 × 20（阶段 2 使用）
  xpPerLevel: (level) => level * 20,
  // 田地块数（阶段 2 会随农场等级解锁）
  plotCount: 12,
  // 玩家昵称默认值
  defaultNickname: '星际开拓者',
}

// 阶段 1 的占位示例宠物
// 目的是让界面骨架看起来完整；阶段 3 会换成真实宠物数据
export const SAMPLE_PETS = [
  {
    id: 'pet_demo_1',
    typeId: 'cat',
    name: '团子',
    gender: 'female',
    stage: 2, // 0=蛋 1=幼崽 2=成年 3=完全体
    hunger: 80,
    mood: 70,
  },
  {
    id: 'pet_demo_2',
    typeId: 'cat',
    name: '星星',
    gender: 'male',
    stage: 1,
    hunger: 55,
    mood: 90,
  },
]
