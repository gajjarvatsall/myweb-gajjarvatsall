import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// CSS
import "@/assets/index.scss";

const app = createApp(App);

import Title from "@/components/Title.vue";
import Card from "@/components/Card.vue";

app.component("Title", Title).component("Card", Card);

app.use(router);

app.mount("#app");
