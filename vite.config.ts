import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  build: {
    outDir: 'dist',
    assetsDir: 'dist/static',
    target: 'esnext',
    cssTarget: 'esnext',
    cssCodeSplit: true,
    cssMinify: true,
    minify: true,
    sourcemap: true,
    rollupOptions: {
      output: {
        entryFileNames: 'static/js/[name]-[hash:8].js',
        chunkFileNames: 'static/js/[name]-[hash:8].js',
        assetFileNames: 'static/css/[name]-[hash:8].[ext]'
      }
    }
  }
})
