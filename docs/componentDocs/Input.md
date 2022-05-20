# Input 输入框

<br/>

## 基本使用

#### input 的基础用法
<br/>
<Input></Input>

```html
<template>
  <m-input v-model="value" placeholder="基本使用"></m-input>
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
```