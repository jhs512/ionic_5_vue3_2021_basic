/* 폰트어썸 */
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEdit,
  faMinus,
  faPlus,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { IonicVue } from "@ionic/vue";
/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";
import "@ionic/vue/css/display.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/float-elements.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
/* Optional CSS utils that can be commented out */
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/typography.css";
/* 피니아 */
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
/* Theme variables */
import "./theme/variables.css";

// 폰트어썸 아이콘 등록 시작, 여기서 등록된 것만 사용가능
library.add(faUserSecret);
library.add(faPlus);
library.add(faMinus);
library.add(faEdit);
// 폰트어썸 아이콘 등록 끝

const app = createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(createPinia())
  .use(IonicVue)
  .use(router);

router.isReady().then(() => {
  app.mount("#app");
});
