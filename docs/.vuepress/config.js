// const navbar = require('./config/navbar')
// const sidebar = require('./config/sidebar')

const { defaultTheme } = require('@vuepress/theme-default')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { path } = require('@vuepress/utils')

module.exports = {
  title: 'm-baseui',
  description: 'm-baseui Component library with Vue3',
  base: '/', // 这是部署到github相关的配置
  theme: defaultTheme({
    // 在这里进行配置
    navbar: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '组件',
        link: '/componentDocs/Install'
      },
      {
        text: 'github',
        link: 'https://github.com/m-baseui/m-baseui'
      }
    ],
    sidebar: [
      {
        text: '快速上手',
        children: [
          {
            text: '安装使用',
            link: '/componentDocs/Install'
          }
        ]
      },
      {
        text: '常规',
        children: [
          {
            text: 'Layout 布局',
            link: '/componentDocs/Layout'
          }
        ]
      },
      {
        text: '通用',
        children: [
          {
            text: 'Button 组件',
            link: '/componentDocs/Button'
          },
          {
            text: 'Input 组件',
            link: '/componentDocs/Input'
          }
        ]
      }
    ]
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    })
  ]
}