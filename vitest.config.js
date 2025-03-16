import { loadEnvConfig } from '@next/env'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

loadEnvConfig(process.cwd())

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    setupFiles: './tests/vitest-setup.ts',
    environment: 'jsdom',
    exclude: ['tests/e2e/**/*', 'node_modules/**/*'],
  },
})
