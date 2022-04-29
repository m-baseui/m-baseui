import { defineClientAppEnhance } from '@vuepress/client'

// 导入组件库
import mBaseui from '../../packages'

export default defineClientAppEnhance(({ app }) => {
  // app 是由 createApp 创建的 Vue 应用实例
  app.use(mBaseui)
})