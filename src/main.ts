import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

const app = createApp(App)

import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'
app.use(createVuestic())

app.mount("#app");
