import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "materialize-css/dist/js/materialize.min";
import currencyFilter from '@/filters/currency.filter';
import "moment";
import messagePlugin from "@/utils/message.plugin";
import Loader from '@/components/app/Loader'

import firebase from "firebase/app";
Vue.config.productionTip = false;
Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.component('Loader', Loader)
Vue.filter('currency',currencyFilter)

import "firebase/auth";
import "firebase/database";


firebase.initializeApp({
  apiKey: "AIzaSyBLQ7hdqakyvJvKvWQc9tSJDFDLljyo9yA",
  authDomain: "vue-progect-brnohxz-2.firebaseapp.com",
  projectId: "vue-progect-brnohxz-2",
  storageBucket: "vue-progect-brnohxz-2.appspot.com",
  messagingSenderId: "168317743085",
  appId: "1:168317743085:web:4b0b42d8efb79274d841e4",
  measurementId: "G-HFN34D76NW",
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
