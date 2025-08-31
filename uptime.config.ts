import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

// ===============================
// 前端配置，保证 Next.js 编译零报错
// ===============================
const pageConfig: PageConfig = {
  title: "UptimeFlare Status Page", // 必须有
  links: [],                        // 空数组即可
  group: {}                         // 空对象即可，兼容 MonitorList.tsx
}

// ===============================
// Worker 配置：定时访问 Hugging Face Space
// ===============================
const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 3,       // KV 写入冷却，保持默认
  monitors: [
    {
      id: 'vinceluv_jupyter',
      name: 'vinceluv JupyterLab',
      method: 'GET',
      target: 'https://vinceluv-123.hf.space/lab?token=test', // 带 token 的 URL
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'UptimeFlare' }
    }
  ],
  notification: {}, // 不发送任何通知
  callbacks: {}     // 不使用回调
}

// ===============================
// 维护计划（可选，当前为空）
// ===============================
const maintenances: MaintenanceConfig[] = []

export { pageConfig, workerConfig, maintenances }
