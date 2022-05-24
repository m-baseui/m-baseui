<template>
  <m-input v-model="value" placeholder="请输入密码" showPassword></m-input>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const value = ref('')
    return {
      value
    }
  }
}
</script>
