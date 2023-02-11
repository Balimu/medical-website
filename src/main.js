import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import "@/index.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

library.add(faPhone);
//component('font-awesome-icon', FontAwesomeIcon);

createApp(App)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon) //Globally register the font-awesome-icon component
    .mount("#app");
