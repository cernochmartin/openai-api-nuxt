<script setup>
const msg = ref('')

const sendMsg = async () => {
  const question = {
    msg: msg
  }
  const { data } = await useFetch('/api/openai', {
    method: 'POST',
    body: question
  })
  console.log(data)
}
</script>
<template>
  <h1>OpenAI API - Node.js</h1>
    <section>
        <textarea v-model="msg" type="textarea" placeholder="Ask AI something..."></textarea>
        <button @click="sendMsg">ASK ME!</button>
    </section>
    {{ msg }}
</template>