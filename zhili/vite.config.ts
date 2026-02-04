
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // 注入 API Key，优先从环境变量读取
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || ''),
    
    // 设置中转服务器地址为用户指定的域名
    'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL || 'https://api.nuwaflux.com'),
  },
  base: './',
  build: {
    outDir: 'dist',
    target: 'esnext',
    assetsDir: 'assets',
    emptyOutDir: true
  }
});
