import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/Blog/",

  locales: {
    "/en/": {
      lang: "en-US",
      // title: "Blog Demo",
      // description: "A blog demo for vuepress-theme-hope",
    },
    "/": {
      lang: "zh-CN",
      // title: "博客演示",
      // description: "vuepress-theme-hope 的博客演示",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
