module.exports = {
  apps: [
    {
      name: 'web3ite-frontend',
      script: 'npm',
      args: 'start',
      cwd: '/home/ubuntu/web3ite',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      log_file: './logs/combined.log',
      out_file: './logs/out.log',
      error_file: './logs/error.log',
      time: true
    }
  ]
}; 