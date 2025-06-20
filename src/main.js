import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";


const pinia = createPinia();
pinia.use(piniaPluginPersistedState)

createApp(App).use(router).use(pinia).mount("#app");
