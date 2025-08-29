import type { WorkerConfig, MaintenanceConfig } from './src/types';

// Worker 配置
const workerConfig: WorkerConfig = {
  passwordProtection: '',
  monitors: [
    {
      id: 'vinceluv_jupyter',
      name: 'vinceluv JupyterLab',
      method: 'GET',
      target: 'https://vinceluv-233.hf.space/lab?token=test',
      headers: { 'User-Agent': 'UptimeFlare' },
      expectedCodes: [200],
      responseKeyword: 'JupyterLab',
      timeout: 10000
    }
  ],
  notification: {},
  callbacks: {}
};

// 维护计划
const maintenances: MaintenanceConfig[] = [];

// 前端配置，保证 Next.js 编译通过
const pageConfig = {
  links: [
    {
      link: '',       // URL
      label: '',      // 显示名称
      highlight: false
    }
  ]
};

export { workerConfig, maintenances, pageConfig };
