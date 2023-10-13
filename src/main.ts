import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
// import components from '@/components/UI'
import components from '@/components/UI'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import 'remixicon/fonts/remixicon.css'


const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
})
console.log(components);

app.use(store).use(router).mount('#app')
