import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    css: [
        '@/assets/bulma-config.scss'
    ],
    meta: {
        script: [
            {
                src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-AMS-MML_HTMLorMML&delayStartupUntil=configured',
            },
        ],
    },
    typescript: {
        strict: true,
    },
})
