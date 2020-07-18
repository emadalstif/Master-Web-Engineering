import Vue from 'vue'
import App from './App.vue'
import Counter from './counter.vue';
Vue.component('button-counter', Counter)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')