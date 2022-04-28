import { createApp } from 'vue'
import App from './App.vue'

// 导入组件库
import mBaseui from '../packages'

const app = createApp(App)

app.use(mBaseui)
app.mount('#app')
