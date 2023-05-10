import { createApp } from 'vue';
import App from './App.vue';
import 'uno.css';
import ElementPlus from 'element-plus';
import './style/index.scss';
import { createPinia } from 'pinia';
import router from '@/router';

// import BlueWhaleUI from 'hhbluewhale-ui';
// import BlueWhaleUI from '@/bw-cowave-ui';

const app = createApp(App);
app.use(ElementPlus);
app.use(createPinia());
app.use(router);

// app.use(BlueWhaleUI);

app.mount('#app');
