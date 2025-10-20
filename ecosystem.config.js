// apps/web/ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "reception-house-frontend",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      cwd: __dirname,
      env: {
        PORT: process.env.PORT || 3000,
        NODE_ENV: "production"
      },
      instances: "1",
      autorestart: true,
      watch: false,
      max_memory_restart: "512M"
    }
  ]
};
