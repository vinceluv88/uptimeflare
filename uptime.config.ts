import type { WorkerConfig, MaintenanceConfig } from './src/types';
import nodemailer from 'nodemailer';

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
  notification: {}, // 我们用回调发送邮件
  callbacks: {
    afterCheck: async (result, monitor) => {
      // Gmail SMTP 配置
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'vinceluv@gmail.com',    // 发件邮箱
          pass: 'vince83875673'           // Gmail App Password
        }
      });

      // 邮件内容
      const mailOptions = {
        from: 'vinceluv@gmail.com',
        to: 'vinceluv@gmail.com',         // 收件邮箱改成你自己
        subject: `[UptimeFlare] ${monitor.name} 检查结果`,
        text: `访问 ${monitor.name} 状态: ${result.status.toUpperCase()}\nHTTP 响应码: ${result.code}\n时间: ${new Date().toLocaleString()}`
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log('邮件已发送给自己 ✅');
      } catch (err) {
        console.error('发送邮件失败 ❌', err);
      }
    }
  }
};

const maintenances: MaintenanceConfig[] = [];

export { workerConfig, maintenances };
