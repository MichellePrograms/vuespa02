import Vue from 'vue'
import AppLayout from './theme/Layout.vue'

console.log(AppLayout)
const app = new Vue({
  //  render: h => h(AppLayout)
  //  use the new spread syntax
  ...AppLayout
})

export { app }
