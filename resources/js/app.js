
import './bootstrap'
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/app.sass";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
import AOS from "aos";
import "aos/dist/aos.css";
import "mosha-vue-toastify/dist/style.css";
import router from "./router/router";
import store from "./store/index";
import PrimeVue from "primevue/config";
import VueGtag from "vue-gtag-next";
import ConfirmationService from 'primevue/confirmationservice';

const app = createApp(App);

app.use(ConfirmationService);
app.AOS = new AOS.init({ disable: "phone" });
app.use(PrimeVue);
app.use(router);
app.use(store);
app.use(VueGtag, {
    config: { id: "UA-206527349-1" },
    appName: 'Superior Homes',
    pageTrackerScreenviewEnabled: true
}, router);
app.mount("#app");
