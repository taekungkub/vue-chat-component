import { createRouter, createWebHistory } from "vue-router";
import StartView from "./views/StartView.vue";
import MessagesView from "./views/MessageView.vue";
import ChatView from "./views/ChatView.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: MessagesView,
    },
    {
      path: "/start",
      component: StartView,
    },
    {
      path: "/@:id",
      component: ChatView,
    },
  ],
});

export default router;
