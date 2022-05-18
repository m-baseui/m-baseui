const navbar = require('./config/navbar')
const sidebar = require('./config/sidebar')

const { defaultTheme } = require('vuepress')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { path } = require('@vuepress/utils')

module.exports = {
  title: 'm-baseui',
  description: 'm-baseui Component library with Vue3',
  base: '/m-baseui/', // 这是部署到github相关的配置
  markdown: {
    code: {
      lineNumbers: false // 代码块显示行号
    }
  },
  theme: defaultTheme({
    // 在这里进行配置
    navbar,
    sidebar
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    })
  ]
}