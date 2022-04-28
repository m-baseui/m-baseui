import mButton from './src/button.vue';

mButton.install = (Vue) => {
  Vue.component(mButton.name,mButton)
}

export default mButton;