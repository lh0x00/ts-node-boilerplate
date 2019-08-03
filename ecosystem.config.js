module.exports = {
  apps: [
    {
      name: "Server",
      script: "build/server.js",
      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      args: "one two",
      instances: 2,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
