import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  // 这个玩意儿会自动找到/demo/目录下的read文件，然后读取title和语言等等
  // "/demo/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "Java",
        icon: "pen-to-square",
        prefix: "Java/",
        children: [
          { text: "Spring", icon: "pen-to-square", link: "Spring6" },
          { text: "SpringMVC", icon: "pen-to-square", link: "SpringMVC" },
          {
            text: "Spring Security",
            icon: "pen-to-square",
            link: "SpringSecurity",
          },
        ],
      },
      {
        text: "LaTeX",
        icon: "pen-to-square",
        prefix: "LaTeX/",
        children: [{ text: "LaTeX", icon: "pen-to-square", link: "latex" }],
      },
      {
        text: "Linux",
        icon: "pen-to-square",
        prefix: "Linux/",
        children: [{ text: "Linux", icon: "pen-to-square", link: "linux" }],
      },
    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
