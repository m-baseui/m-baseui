<template>
  <button 
    class="m-button" 
    :class="styleClass"
    :disabled="disabled"
    :round="round">
    <slot></slot>
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
    }
  },
  setup(props) {

    const styleClass = computed(() => {
      return {
        [`m-button--${props.type}`]: props.type,
        'is-disabled': props.disabled,
        'is-round': props.round
      }
    })

    return {
      styleClass
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/components/button.scss';
</style>