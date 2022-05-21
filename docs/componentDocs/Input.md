# Input 输入框

<br/>

## 基本使用

#### input 的基础用法
<br/>
<Input-Demo1 />

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

## 禁用状态

#### 通过 _disabled_ 属性指定是否禁用 input 组件 
<br/>
<Input-Demo2 />

```html
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
```

## 可清空数据

#### 使用 _clearable_ 属性即可得到一个可清空的输入框
<br/>
<Input-Demo3 />

```html
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
```