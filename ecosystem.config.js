module.exports = {
  apps: [
    {
      name: '',
      // script: '/home/ubuntu/learn/FlagList/app/app.js',
      // cwd: '/home/ubuntu/learn/FlagList/',
      script: './app/app.js',
      cwd: './',
      instances: 1,
      watch: [
        // 'src',
        // 'build',
      ],
      ignore_watch: [
        // 'node_modules',
        // 'logs',
        // 'public',
      ],
      node_args: '--harmony',
      env: {
        // NODE_ENV: 'development',
        // ORIGIN_ADDR: 'http://www.yoduao.com'
      },
      env_production: {
        // NODE_ENV: 'production',
      },
      out_file: './logs/out.log', // 普通日志路径
      error_file: './logs/err.log', // 错误日志路径
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm Z',
    },
  ],
};
