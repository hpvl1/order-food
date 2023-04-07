import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'vue-select/dist/vue-select.css';
import vSelect from "vue-select";


createApp(App).component("v-select", vSelect).mount('#app');
