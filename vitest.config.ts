import { loadEnvConfig } from '@next/env'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

loadEnvConfig(process.cwd())

export default defineConfig(async () => {
  const tsconfigPaths = (await import('vite-tsconfig-paths')).default

  return {
    plugins: [tsconfigPaths(), react()],
    test: {
      setupFiles: './tests/vitest-setup.ts',
      environment: 'jsdom',
      exclude: ['tests/e2e/**/*', 'node_modules/**/*'],
    },
  }
})
