import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'primevue/resources/themes/lara-light-teal/theme.css'
import PrimeVue from 'primevue/config';
createApp(App).mount('#app')
const app = createApp(App);
app.use(PrimeVue);
//confac
import '/node_modules/primeflex/primeflex.css';
import 'primeflex/themes/primeone-light.css';
import 'primeflex/themes/primeone-dark.css';