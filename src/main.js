import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Globally import the CSS file
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
