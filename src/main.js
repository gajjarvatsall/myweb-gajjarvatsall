import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// CSS
import "@/assets/index.scss";

const app = createApp(App);

import Title from "@/components/Title.vue";
import Card from "@/components/Card.vue";
import Image from "@/components/Image.vue";

app.component("Title", Title).component("Card", Card).component("Image", Image);

app.use(router);

app.mount("#app");
