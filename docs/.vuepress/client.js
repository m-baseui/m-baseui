import { defineClientConfig  } from '@vuepress/client'

// 导入组件库
import mBaseui from '../../packages';
import './public/iconfont/iconfont.css';

import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
//color-brewer

export default defineClientConfig ({
  enhance({ app }){
    // app 是由 createApp 创建的 Vue 应用实例
    app.use(mBaseui)
    app.directive("highlight", function (el) {
      const blocks = el.querySelectorAll("pre code");
      
      blocks.forEach((block) => {
        console.log(block)
        hljs.highlightBlock(block);
      });
    });
  }
})