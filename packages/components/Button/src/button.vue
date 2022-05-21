<template>
  <button 
    class="m-button" 
    :class="styleClass"
    :disabled="disabled"
    :round="round">
    <i :class="isIconClass" v-if="leftIcon"></i>
    <span :style="{
      'margin-left': leftIcon ? '4px' : '0',
      'margin-right':rightIcon ? '4px' : '0'
      }">
      <slot></slot>
    </span>
    <i :class="isIconClass" v-if="rightIcon"></i>
  </button>
</template>

<script>
import { computed } from 'vue';
export default {
  name: 'm-button',
  props: {
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default','primary', 'success', 'info', 'warning', 'danger','text'].indexOf(value) > -1;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    leftIcon: String,
    rightIcon: String,
  },
  setup(props) {
    const styleClass = computed(() => {
      return {
        [`m-button--${props.type}`]: props.type,
        'is-disabled': props.disabled,
        'is-round': props.round
      }
    })

    const isIconClass = computed(() => {
      return [
        'iconfont',
        props.leftIcon || props.rightIcon
      ]
    })

    return {
      styleClass,
      isIconClass
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/components/button.scss';
</style>