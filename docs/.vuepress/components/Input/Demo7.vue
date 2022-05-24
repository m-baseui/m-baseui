<template>
  <m-row>
    <m-input v-model="value1" clearable>
      <template #prepend>
        <m-button type="primary" leftIcon="icon-search">搜索</m-button>
      </template>
    </m-input>
    <m-input v-model="value2" clearable>
      <template #append>
        <m-button type="primary" leftIcon="icon-search">搜索</m-button>
      </template>
    </m-input>
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