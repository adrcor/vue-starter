import App from "./App.vue";
import "./style.css";
import { useRouter } from "@/router";
import { createPinia } from "pinia";
import Button from "primevue/button";
import PrimeVue from "primevue/config";
import "primevue/resources/primevue.min.css";
// Core styles
import "primevue/resources/themes/aura-dark-noir/theme.css";
import { createApp } from "vue";

const app = createApp(App);

const router = useRouter();
app.use(router);

const pinia = createPinia();
app.use(pinia);

app.use(PrimeVue);
app.component("Button", Button);

app.mount("#app");
