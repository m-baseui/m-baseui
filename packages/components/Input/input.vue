<template>
  <div class="m-input-default">
    <input 
      class="m-input" 
      type="text" 
      :placeholder="placeholder" 
      :value="modelValue"
      @input="iptChange">
  </div>
</template>

<script>
export default {
  name: 'm-input',
  props: {
    modelValue: String | Number,
    placeholder: {
      type: String,
      default: '请输入'
    }
  },
  emits:['update:modelValue'],
  setup(props,{ emit }) {
    const iptChange = (e) => {
      emit('update:modelValue',e.target.value)
    }
    return {
      iptChange
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/components/input.scss';
</style>
