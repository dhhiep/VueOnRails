import Vue from 'vue'
import App from '../App.vue'

import TurbolinksAdapter from 'vue-turbolinks'
Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {  const app = new Vue({
    render: h => h(App),
    el: '#vue_app'
  }).$mount()
    console.log(app)
})
