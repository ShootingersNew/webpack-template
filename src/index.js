import Vue from 'vue';
import Example from './js/components/Example.vue';
// SCSS
import './assets/scss/main.scss';

// CSS (example)
// import './assets/css/main.css'
// Vue components (for use in html)
Vue.component('example-component', Example);

// Vue init
const app = new Vue({
  el: '#app',
});
export default app;
