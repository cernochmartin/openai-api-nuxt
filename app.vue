<script setup lang="ts">
useSeoMeta({
  title: 'OpenAI API - Nuxt 3',
  ogTitle: 'OpenAI API - Nuxt 3',
  description: 'OpenAI API integrated with a front end framework Nuxt 3.',
  ogDescription: 'OpenAI API integrated with a front end framework Nuxt 3.'
})

const msg = ref('')

function sendMsg() {
  const { data } = useFetch('/api/openai.ts', {
    method: 'POST',
    body: msg
  })
}
</script>
<template>
  <h1>OpenAI API - Nuxt 3</h1>
    <section>
        <textarea v-model="msg" type="textarea" placeholder="Ask AI something..."></textarea>
        <button @click="sendMsg()">ASK ME!</button>
    </section>
    <!-- <p v-for="message in message.content">{{ message.content }}</p> -->
</template>