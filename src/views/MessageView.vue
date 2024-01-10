<template>
  <ul>
    <li v-for="chat in chats" :key="chat.key">
      <router-link :to="chat.key">{{ chat.title }} </router-link>
    </li>
  </ul>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useMemberStore } from "../stores/member";
import { useRouter } from "vue-router";
import { ChatService } from "../services/ChatService";
const member = useMemberStore();
const router = useRouter();
const chats = ref([]);

onMounted(async () => {
  if (!member.isAuthenticated) {
    await router.push("/start");
    return;
  }
  chats.value = await ChatService.getChatList();
});
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
a {
  display: block;
  padding: 10px;
  border-bottom: 1px solid rgba(84, 84, 84, 0.12);
  text-decoration: none;
  color: #181818;
  transition: all 0.25s;
}
@media (hover: hover) {
  a:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
}
</style>
