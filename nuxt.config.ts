// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ['@nuxtjs/tailwindcss'],
  typescript: {
    strict: true,
  },

  app: {
    head: {
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-AMS-MML_HTMLorMML&delayStartupUntil=configured',
        },
      ],
    },
  }
})