import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
import "@fortawesome/fontawesome-svg-core"
import "@fortawesome/free-regular-svg-icons"
import "@fortawesome/free-solid-svg-icons"


const app = createApp(App)

app.use(router)

app.mount('#app')
