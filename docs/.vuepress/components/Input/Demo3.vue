<template>
  <m-input v-model="value" placeholder="可清空" clearable></m-input>
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
