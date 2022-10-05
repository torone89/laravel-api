
// IMPORT VUE E VUE ROUTER
import Vue from 'vue'
import VueRouter from 'vue-router'

// IMPORTO I COMPONENTI DELLLE PAGINE
import HomePage from './components/pages/HomePage.vue'
import AboutPage from './components/pages/AboutPage.vue'
import ContactsPage from './components/pages/ContactsPage.vue'

//DICO A VUE DI USARE VUEROUTER
Vue.use(VueRouter)


//DEFINZIONE DELLE ROTTE
const routes = new VueRouter({
    mode:'history',
    routes:[
        {  path: '/', component: HomePage },
        {  path: '/about', component: AboutPage },
        {  path: '/contacts', component: ContactsPage },
    ]
});

export default routes;