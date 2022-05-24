<template>
  <m-row>
    <m-input v-model="value1" placeholder="请输入" leftIcon="icon-search"></m-input>
    <m-input v-model="value2" placeholder="请输入" rightIcon="icon-calendar"></m-input>
  </m-row>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const value1 = ref('')
    const value2 = ref('')
    return {
      value1,
      value2
    }
  }
}
</script>