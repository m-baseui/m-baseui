<template>
  <button 
    class="m-button" 
    :class="styleClass"
    :disabled="disabled"
    :round="round">
    <i class="iconfont icon-loading" v-if="loading"></i>
    <i :class="isIconClass" v-if="leftIcon && !loading"></i>
    <span ref="slotRef" :style="slotStyle" :class=" isHaveSlot ? 'noText': '' ">
      <slot></slot>
    </span>
    <i :class="isIconClass" v-if="rightIcon"></i>
  </button>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
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
    circle: {
      type: Boolean,
      default: false
    },
    leftIcon: String,
    rightIcon: String,
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const slotRef = ref(null)
    const isHaveSlot = ref(null)
    const styleClass = computed(() => {
      return {
        [`m-button--${props.type}`]: props.type,
        'is-disabled': props.disabled,
        'is-round': props.round,
        'is-circle': props.circle
      }
    })

    const isIconClass = computed(() => {
      return [
        'iconfont',
        props.leftIcon || props.rightIcon
      ]
    })

    const slotStyle = computed(() => {
      return {
        'margin-left': props.leftIcon ? '4px' : '0',
        'margin-right': props.rightIcon ? '4px' : '0'
      }
    })

    onMounted(() => {
      if(!slotRef.value.innerText) {
        isHaveSlot.value = true
      }
    })

    return {
      styleClass,
      isIconClass,
      slotRef,
      slotStyle,
      isHaveSlot
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/components/button.scss';
</style>