module.exports = {
  apps: [{
    name: 'immo-annonces-website',
    cwd: '/var/www/immo-annonces-website/apps/web',
    script: 'node_modules/.bin/next',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      PORT: '3007',
      HOSTNAME: '127.0.0.1'
    },
    instances: 1,
    exec_mode: 'fork',
    watch: false,
    max_memory_restart: '1G',
    error_file: '/var/www/immo-annonces-website/logs/pm2-error.log',
    out_file: '/var/www/immo-annonces-website/logs/pm2-out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    autorestart: true,
    max_restarts: 10,
    min_uptime: '10s'
  }]
};

