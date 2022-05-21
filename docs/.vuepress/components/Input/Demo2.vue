<template>
  <m-input v-model="value" placeholder="禁用状态" disabled></m-input>
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
