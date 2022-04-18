import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/global.css"
import 'boxicons'
import store from "./store"
import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App)
app.use(store)
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDIAstBGOBQqm98Lt2C2SU1QSTL-jQvkhM',
    },})
app.mount('#app')
