
import 'babel-polyfill'
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes/router';
import mvui from '../src/index';

Vue.use(VueRouter);
Vue.use(mvui);

Vue.config.debug=true;
const router=new VueRouter({
	routes
});



const app=new Vue({
	router
}).$mount('#app');