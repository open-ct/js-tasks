import Vue from 'vue'
import App from './App.vue'
import './index.css'
import 'ant-design-vue/dist/antd.css';
import Icon from 'ant-design-vue/lib/icon';
import { Button, Layout,Divider,Steps,Table,Dropdown,Menu,Input,Checkbox,Slider,FormModel,Radio } from 'ant-design-vue';
Vue.use(Button);
Vue.use(Layout);
Vue.use(Divider);
Vue.use(Steps);
Vue.use(Table);
Vue.use(Dropdown);
Vue.use(Menu);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(Slider);
Vue.use(FormModel);
Vue.use(Radio);
Vue.config.productionTip = false

Vue.component(Icon.name, Icon);
Vue.component(Steps.Step.name, Steps.Step);
new Vue({
  el: '#app',
  render: h => h(App)
})
