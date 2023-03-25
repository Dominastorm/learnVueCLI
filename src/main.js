import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Globally import the SCSS file
import './assets/styles/style.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')
