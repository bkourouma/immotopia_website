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
