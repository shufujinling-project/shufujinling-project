import { createApp } from 'vue'
import App from './App.vue'
import DataVVue3 from '@kjgl77/datav-vue3'
import { install } from '@icon-park/vue-next/es/all'

const app = createApp(App)
install(app, 'icon')
app.use(DataVVue3)
app.mount('#app')