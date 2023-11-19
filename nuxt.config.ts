export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
    secretKey: process.env.OPENAI_API_KEY
  },
  css: ['~/assets/main.css']
})
