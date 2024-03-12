import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),Unocss()],
  server: {
    host: '0.0.0.0',
    port: '8080'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@use "~/styles/_main.scss" as *;`,
        additionalData: `@import "@/assets/css/variables";`
        // additionalData: `@import "@/assets/css/variables.module.scss";`
      }
    }
  }
});
