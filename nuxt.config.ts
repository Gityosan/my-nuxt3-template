import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      charset: 'utf-8',
      meta: [
        { name: 'description', content: '' },
        { name: 'viewport', content: 'width=device-width' },
        { name: 'format-detection', content: 'telephone=no' }
      ]
    }
  },

  typescript: { shim: false, strict: true },
  css: ['@/assets/index.scss'],
  modules: ['vuetify-nuxt-module', '@nuxt/icon', '@nuxtjs/critters', '@nuxt/test-utils/module', '@nuxt/eslint', '@formkit/auto-animate/nuxt'],
  critters: { config: { preload: 'swap', pruneSource: true } },
  vite: {
    plugins: [vanillaExtractPlugin({})]
  },
  runtimeConfig: {
    app: {
      name: 'Nuxt',
      version: '1.0.0',
      baseURL: '/',
      host: 'localhost',
      port: 3000
    }
  },

  devtools: { enabled: true },

  eslint: {
    checker: true,
    config: {
      stylistic: {
        commaDangle: 'never'
      }
    }
  },

  icon: {
    customCollections: [
      {
        prefix: 'custom-icon',
        dir: './assets/icons'
      }
    ]
  },

  compatibilityDate: '2024-08-05'
})
