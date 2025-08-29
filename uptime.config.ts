import type { WorkerConfig, MaintenanceConfig } from './src/types';

// ============================================
// Worker 配置：定时访问 Hugging Face Space
// ============================================
const workerConfig: WorkerConfig = {
  passwordProtection: '', // 留空表示状态页公开
  monitors: [
    {
      id: 'vinceluv_jupyter',
      name: 'vinceluv JupyterLab',
      method: 'GET',
      target: 'https://vinceluv-233.hf.space/lab?token=test', // 带 token 的 URL
      headers: { 'User-Agent': 'UptimeFlare' },
      expectedCodes: [200],
      responseKeyword: 'JupyterLab',
      timeout: 10000
    }
  ],
  notification: {}, // 不发送邮件或其他通知
  callbacks: {}     // 不使用回调
};

// ============================================
// 维护计划（可选，当前为空）
// ============================================
const maintenances: MaintenanceConfig[] = [];

// ============================================
// 前端配置，保证 Next.js 编译不报错
// ============================================
const pageConfig = {}; // 前端组件 Header.tsx 需要导出 pageConfig

export { workerConfig, maintenances, pageConfig };
