import Vue from 'vue';
import Vuetify from 'vuetify';
import NodeCGVue from 'nodecg-vue';
 
import 'vuetify/dist/vuetify.min.css';
 
Vue.use(Vuetify);
Vue.use(NodeCGVue);
 
import Names from './components/names.vue';
 
new Vue({
    render: h => h(Names)
}).$mount('#app');