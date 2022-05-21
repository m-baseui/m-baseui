<template>
  <div class="m-input-default">
    <input 
      class="m-input"
      :class="styleClass"
      type="text" 
      :placeholder="placeholder" 
      :value="modelValue"
      @input="iptChange"
      :disabled="disabled">
    <span class="m-icon-close" v-if="clearable && modelValue" @click="clear">x</span>
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  name: 'm-input',
  props: {
    modelValue: String | Number,
    placeholder: {
      type: String,
      default: '请输入'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  emits:['update:modelValue'],
  setup(props,{ emit }) {
    const styleClass = computed(() => {
      return {
        'm-input-disabled': props.disabled,
      }
    })
    const iptChange = (e) => {
      emit('update:modelValue',e.target.value)
    }
    const clear = () => {
      emit('update:modelValue', '')
    }
    return {
      styleClass,
      iptChange,
      clear
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/components/input.scss';
</style>
