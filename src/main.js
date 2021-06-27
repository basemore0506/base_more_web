import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import './common/font.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faWeixin,faWeibo,faTiktok} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Icon from 'vue-svg-icon/Icon.vue';

library.add(faBars,faWeixin,faWeibo,faTiktok)

Vue.component('icon', Icon);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
