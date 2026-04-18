import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(({command}) => {
  return{
  base: command === 'build' ? '/20260318my_noteproject/' : '/',
  plugins: [vue()],

  build: {
      outDir: 'docs' // 這是為了讓 GitHub Pages 好讀取而改的輸出資料夾
    }
  }
})
