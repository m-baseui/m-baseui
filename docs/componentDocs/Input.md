# Input 输入框

<br/>

## 基本使用

#### input 的基础用法
<br/>
<div class="source">
  <Input-Demo1 />
</div>
<details>

```vue
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

<summary>查看代码</summary>
</details>


## 禁用状态

#### 通过 _disabled_ 属性指定是否禁用 input 组件 
<br/>
<div class="source">
  <Input-Demo2 />
</div>
<details>

```vue
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

<summary>查看代码</summary>
</details>


## 可清空数据

#### 使用 _clearable_ 属性即可得到一个可清空的输入框
<br/>
<div class="source">
  <Input-Demo3 />
</div>
<details>

```vue
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

<summary>查看代码</summary>
</details>

## 带图标

#### 可使用 _leftIcon_ 或者 _rightIcon_ 来定义显示图标并确定显示的位置。
<br/>
<div class="source">
  <Input-Demo4 />
</div>
<details>

```vue
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
```

<summary>查看代码</summary>
</details>

## 不同大小

#### 通过设置 _size_ 属性来适应不同大小
<br/>
<div class="source">
  <Input-Demo5 />
</div>
<details>

```vue
<template>
  <m-row>
    <m-input v-model="value1" placeholder="请输入"></m-input>
    <m-input v-model="value2" placeholder="请输入" size="medium"></m-input>
    <m-input v-model="value3" placeholder="请输入" size="small"></m-input>
    <m-input v-model="value4" placeholder="请输入" size="mini"></m-input>
  </m-row>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const value1 = ref('')
    const value2 = ref('')
    const value3 = ref('')
    const value4 = ref('')
    return {
      value1,
      value2,
      value3,
      value4
    }
  }
}
</script>
```

<summary>查看代码</summary>
</details>


## 密码类型

#### 密码类型的输入框，可通过 _showPassword_ 来启用是否开启显示密码
<br/>
<div class="source">
  <Input-Demo6 />
</div>
<details>

```vue
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
```

<summary>查看代码</summary>
</details>


## 复合型输入框

#### 可通过 _slot_ 来指定在 input 中前置或者后置内容。
<br/>
<div class="source">
  <Input-Demo7 />
</div>
<details>

```vue
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
```

<summary>查看代码</summary>
</details>


### Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| type         | 类型   | string  | text | text |
| value / v-model | 绑定值           | string / number  | — | — |
| placeholder   | 输入框占位文本    | string          | — | — |
| clearable     | 是否可清空        | boolean         | — | false |
| showPassword  | 是否显示切换密码图标| boolean         | — | false |
| disabled      | 禁用             | boolean         | — | false   |
| size          | 尺寸大小          | string          | medium / small / mini  | — |
| readonly | 原生属性，是否只读 | boolean | — | false |
| autofocus | 原生属性，自动获取焦点 | boolean | true, false | false |


### Events
| 事件名 | 说明 | 回调参数 |  示例  |
|----------|--------|---------|--------|
| blur   | 在 Input 失去焦点时触发 | (event: Event) | blur=(e)=>{console.log(e.target.value)} |
| focus  | 在 Input 获得焦点时触发 | (event: Event) | focus=(e)=>{console.log(e.target.value)} |
| change | 在 Input 失去焦点或用户按下回车时触发 | (event: Event) | change=(e)=>{console.log(e.target.value)} |
| input  | 在 Input 值改变时触发 | (value: string \| number) | input=(e)=>{console.log(e)} |
| clear  | 在点击由 `clearable` 属性生成的清空按钮时触发 | — |  — | 