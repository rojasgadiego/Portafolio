import { createApp } from 'vue'
import { createPinia } from 'pinia' 
import App from './App.vue'
import router from './router'
import { tilt, magnetic } from './animations/directives'

const app = createApp(App)

app.use(createPinia()) 
app.use(router)
app.directive('tilt', tilt)
app.directive('magnetic', magnetic)
app.mount('#app')
