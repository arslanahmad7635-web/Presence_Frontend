import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(async ({ command }) => {
  const isBuild = command === 'build'

  const buildPlugins = []
  if (isBuild) {
    const { reactCompilerPreset } = await import('@vitejs/plugin-react')
    const { default: babel } = await import('@rolldown/plugin-babel')
    buildPlugins.push(babel({ presets: [reactCompilerPreset()] }))
  }

  return {
    plugins: [react(), tailwindcss(), ...buildPlugins],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "./src"),
      },
    },
    server: {
      warmup: {
        clientFiles: ['./src/main.jsx', './src/App.jsx'],
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes('node_modules')) return;
            if (id.includes('recharts')) return 'charts';
            if (id.includes('framer-motion')) return 'motion';
            if (
              id.includes(`${path.sep}react${path.sep}`) ||
              id.includes(`${path.sep}react-dom${path.sep}`) ||
              id.includes(`${path.sep}react-router-dom${path.sep}`)
            ) {
              return 'react';
            }
          },
        },
      },
    },
  }
})