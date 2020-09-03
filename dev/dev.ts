import Vue from "vue"
import ElementUI from 'element-ui'
import Dev from "@dev/Dev.vue"

import 'normalize.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  render: h => h(Dev)
}).$mount("#app")
