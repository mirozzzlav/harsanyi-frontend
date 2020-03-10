import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
//Pages
import Home from './pages/Home' 
import ONadacii from './pages/ONadacii'
import StefanHarsanyi from './pages/StefanHarsanyi'
import Podpora from './pages/Podpora'
import PomohliSme from './pages/PomohliSme'
import Kontakt from './pages/Kontakt'
import OchranaOsobnychUdajov from './pages/OchranaOsobnychUdajov'

import configHelper from './modules/configHelper';

import './scss/global.scss';


Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.prototype.configHelper = configHelper;
Vue.config.productionTip = false

const menuItems = configHelper.get('menuItems');



const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_ROUTE || "/",
  routes: [
    { path: menuItems.home.path, component: Home, name: menuItems.home.name},
    { path: menuItems.about.path, component: ONadacii, name: menuItems.about.name},
    { path: menuItems.stefan.path, component: StefanHarsanyi, name: menuItems.stefan.name},
    { path: menuItems.weHelped.path, component: PomohliSme, name: menuItems.weHelped.name},
    { path: menuItems.contact.path, component: Kontakt, name: menuItems.contact.name},
    { path: menuItems.support.path + menuItems.support.queryString, component: Podpora},
    { path: menuItems.protection.path, component: OchranaOsobnychUdajov, name: menuItems.protection.name},
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
});

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: router,
  template: '<App header-fixed="true" />',
  components: { App },
});