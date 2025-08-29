import type { WorkerConfig, MaintenanceConfig } from './src/types';

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
  notification: {}, // 不发送通知
  callbacks: {}     // 不使用回调
};

const maintenances: MaintenanceConfig[] = [];

export { workerConfig, maintenances };
