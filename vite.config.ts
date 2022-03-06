import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import svgrPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    /**Passamos as configurações de dentro de svgrPlugin */
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ]
})