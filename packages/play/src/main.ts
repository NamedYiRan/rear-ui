import { createApp } from "vue";
import App from "./App.vue";
import RearUI from "rear-ui";

import "rear-ui/dist/index.css";

const app = createApp(App);
app.use(RearUI);
app.mount("#app");
