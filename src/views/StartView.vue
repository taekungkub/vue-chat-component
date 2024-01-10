<template>
  <div class="start">
    <el-input type="email" size="large" v-model="email" placeholder="Email address" />
    <el-button size="large" :disabled="!email" type="primary" @click="login">Start</el-button>
  </div>
</template>

<script setup>
import { useMemberStore } from "../stores/member";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
const router = useRouter();
const member = useMemberStore();
const email = ref("");
onMounted(() => {
  if (member.isAuthenticated) {
    router.push("/");
  }
});
function login() {
  member.authenticate(email.value);
  router.push("/");
}
</script>

<style lang="scss" scoped>
.start {
  margin-top: 20px;
}
</style>
