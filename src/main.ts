import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router' 

import 'beercss'
import 'material-dynamic-colors'

const app = createApp(App)

app.use(router)

app.mount('#app')
