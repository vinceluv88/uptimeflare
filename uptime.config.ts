import type { WorkerConfig, MaintenanceConfig } from './src/types';

// ===============================
// Worker 配置：定时访问 Hugging Face Space
// ===============================
const workerConfig: WorkerConfig = {
  passwordProtection: '', // 空表示公开页面
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
  notification: {}, // 不发送通知
  callbacks: {}     // 不使用回调
};

// ===============================
// 维护计划（可选，当前为空）
// ===============================
const maintenances: MaintenanceConfig[] = [];

// ===============================
// 前端配置，保证 Next.js 编译零报错
// ===============================
const pageConfig = {
  title: 'UptimeFlare',  // 页面标题，必须有
  links: [
    {
      link: '',
      label: '',
      highlight: false
    }
  ],
  group: {} as { [key: string]: string[] } // 空对象，兼容 MonitorList.tsx
};

export { workerConfig, maintenances, pageConfig };
