// <reference types="vitest">
import { defineVitestConfig } from '@nuxt/test-utils/config'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { Vuetify3Resolver } from 'unplugin-vue-components/resolvers'
import { fileURLToPath } from 'node:url'

export default defineVitestConfig({
  plugins: [
    AutoImport({
      dirs: ['utils', 'composables'],
      imports: ['vue', 'vue-router', 'vitest'],
      dts: 'test/auto-imports.d.ts'
    }),
    Components({
      dirs: ['components'],
      resolvers: [Vuetify3Resolver()],
      directoryAsNamespace: true,
      dts: 'test/components.d.ts'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
      '~': fileURLToPath(new URL('./', import.meta.url))
    }
  },
  test: {
    root: '.',
    globals: true,
    environment: 'happy-dom',
    coverage: {
      provider: 'v8',
      enabled: true
    }
  }
})
