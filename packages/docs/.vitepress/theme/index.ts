import DefaultTheme from "vitepress/theme";
import { type App } from "vue";
import RearUI, { zhCn } from "rear-ui";
import { ElementPlusContainer } from "@vitepress-preview/component";

import "@vitepress-preview/component/style.css";
import "rear-ui/dist/index.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component("demo-preview", ElementPlusContainer);
    app.use(RearUI, { locale: zhCn });
  },
};
