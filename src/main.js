import Vue from 'vue';
import App from './App';

require('./bootstrap');
require('./components');

// eslint-disable-next-line 
new Vue({
  el: '#app',
  render: h => h(App),
});
