<script setup lang="ts">
import { useRoute, useRouter } from "vue-router"
import { onMounted, ref } from "vue"
import { ChatService, enumType, uniqueId } from "../services/ChatService"
import ChatMessage from "../components/ChatMessage.vue"

const route = useRoute()
const router = useRouter()
const chat = ref({
  key: "",
  title: "",
  messages: [
    {
      id: 0,
      data: "",
      type: "",
    },
  ],
})
const text = ref("")

onMounted(async () => {
  const found = await ChatService.getChatDetails(`@${route.params.id}`)
  if (!found) {
    await router.push("not-found")
    return
  }
  chat.value = found
})

function send() {
  chat.value.messages.push({
    id: uniqueId(),
    data: text.value,
    type: enumType.Out,
  })
  text.value = ""
}
function onKeyUp(ev: KeyboardEvent) {
  if (ev.key === "Enter") {
    send()
  }
}
</script>

<template>
  <main>
    <ul>
      <li v-for="message in chat.messages" :key="message.id">
        <ChatMessage :message="message" />
      </li>
    </ul>
    <footer>
      <el-input v-model="text" placeholder="Type here..." @keyup="onKeyUp" />
      <el-button type="primary" @click="send">Send</el-button>
    </footer>
  </main>
</template>
<style scoped>
main {
  position: relative;
  height: calc(100vh - 60px);
}
ul {
  margin: 0;
  padding: 10px;
  list-style-type: none;
}
footer {
  position: absolute;
  display: flex;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 5px;
}
button {
  margin-left: 5px;
}
</style>
