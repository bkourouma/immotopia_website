/**
 * PM2 Ecosystem Configuration
 * Manages the Fastify API process
 */

module.exports = {
  apps: [
    {
      name: 'immotopia-api',
      script: './apps/api/dist/index.js',
      cwd: '.',
      instances: 1, // Single instance for small VPS
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3002,
        HOST: '0.0.0.0',
        DATABASE_URL: 'postgresql://immotopia_user:SecurePassword123!@localhost:5432/immotopia',
        ADMIN_EMAIL: 'admin@immotopia.com',
        ADMIN_PASSWORD: 'AdminPassword123!',
        PUBLIC_SITE_URL: 'https://immotopia.immo-annonces.fr',
        ADMIN_PANEL_URL: 'https://immotopia.immo-annonces.fr/admin',
        FRONTEND_URL: 'https://immotopia.immo-annonces.fr',
        SMTP_HOST: 'smtp.hostinger.com',
        SMTP_PORT: 587,
        SMTP_SECURE: false,
        SMTP_USER: 'courriels@immo-annonces.fr',
        SMTP_PASS: '[zA1=fet=&45',
        SMTP_FROM: 'courriels@immo-annonces.fr',
        EMAIL_TO: 'agent@immo-annonces.fr',
        EMAIL_SERVICE: 'nodemailer',
      },
      error_file: './logs/api-error.log',
      out_file: './logs/api-out.log',
      log_file: './logs/api-combined.log',
      time: true,
      merge_logs: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      max_memory_restart: '500M', // Restart if memory exceeds 500MB
      watch: false,
      ignore_watch: ['node_modules', 'logs', 'dist'],
    },
  ],
};
