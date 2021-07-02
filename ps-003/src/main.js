import Vue from 'vue'
import App from './App.vue'
import './index.css'
import 'ant-design-vue/dist/antd.css';
import Steps from 'ant-design-vue/lib/steps';
import Icon from 'ant-design-vue/lib/icon';
import store from './store/index'
Vue.prototype.$store= store
import { Button, Layout,Input,FormModel,Slider,Statistic,Row,Dropdown,Menu,Radio,Table } from 'ant-design-vue';
Vue.use(Button);
Vue.use(Layout);
Vue.use(Input);
Vue.use(FormModel);
Vue.use(Slider);
Vue.use(Statistic);
Vue.use(Row);
Vue.use(Dropdown);
Vue.use(Menu);
Vue.use(Radio);
Vue.use(Table);
Vue.config.productionTip = false

Vue.component(Steps.name, Steps);
Vue.component(Icon.name, Icon);
Vue.component(Steps.Step.name, Steps.Step);
new Vue({
  el: '#app',
  render: h => h(App)
})
