# Button 按钮

#### 常用 button 按钮

## 基本使用

#### button 按钮的基本使用
<br/>
<div class="source">
  <Button-Demo1 />
</div>
<details>

```html
<template>
  <m-row>
    <m-button>默认按钮</m-button>
    <m-button type="primary">主要按钮</m-button>
    <m-button type="success">成功按钮</m-button>
    <m-button type="danger">危险按钮</m-button>
    <m-button type="info">信息按钮</m-button>
    <m-button type="warning">警告按钮</m-button>
    <m-button type="text">文本按钮</m-button>
  </m-row>
  <m-row>
    <m-button round>默认按钮</m-button>
    <m-button type="primary" round>主要按钮</m-button>
    <m-button type="success" round>成功按钮</m-button>
    <m-button type="danger" round>危险按钮</m-button>
    <m-button type="info" round>信息按钮</m-button>
    <m-button type="warning" round>警告按钮</m-button>
  </m-row>
  <m-row>
    <m-button leftIcon="icon-home"></m-button>
    <m-button type="primary" leftIcon="icon-edit"></m-button>
    <m-button type="success" leftIcon="icon-smile"></m-button>
    <m-button type="danger" leftIcon="icon-add-circle" circle></m-button>
    <m-button type="info" leftIcon="icon-telephone" circle></m-button>
    <m-button type="warning" leftIcon="icon-image-text" circle></m-button>
    <m-button type="text" leftIcon="icon-ashbin">删除</m-button>
  </m-row>
</template>
```

<summary>查看代码</summary>
</details>


## 禁用状态

#### 按钮不可用状态，通过 _disabled_ 属性设置实现
<br/>
<div class="source">
  <Button-Demo2 />
</div>
<details>

```html
<template>
  <m-row>
    <m-button disabled>默认按钮</m-button>
    <m-button type="primary" disabled>主要按钮</m-button>
    <m-button type="success" disabled>成功按钮</m-button>
    <m-button type="danger" disabled>危险按钮</m-button>
    <m-button type="info" disabled>信息按钮</m-button>
    <m-button type="warning" disabled>警告按钮</m-button>
    <m-button type="text" disabled>文本按钮</m-button>
  </m-row>
  <m-row>
    <m-button round disabled>默认按钮</m-button>
    <m-button type="primary" round disabled>主要按钮</m-button>
    <m-button type="success" round disabled>成功按钮</m-button>
    <m-button type="danger" round disabled>危险按钮</m-button>
    <m-button type="info" round disabled>信息按钮</m-button>
    <m-button type="warning" round disabled>警告按钮</m-button>
  </m-row>
</template>
```

<summary>查看代码</summary>
</details>

## 带图标

#### 带图标类型的按钮，通过 leftIcon 或者 rightIcon 属性设置实现并确定 icon 出现的位置
<br/>
<div class="source">
  <Button-Demo3 />
</div>
<details>

```html
<template>
  <m-row>
    <m-button leftIcon="icon-home">主页</m-button>
    <m-button type="primary" leftIcon="icon-edit">编辑</m-button>
    <m-button type="success" leftIcon="icon-upload">上传</m-button>
    <m-button type="danger" rightIcon="icon-add-circle">危险</m-button>
    <m-button type="info" rightIcon="icon-telephone">信息</m-button>
    <m-button type="warning" rightIcon="icon-image-text">警告</m-button>
    <m-button type="text" leftIcon="icon-ashbin">删除</m-button>
  </m-row>
  <m-row>
    <m-button leftIcon="icon-home" circle></m-button>
    <m-button type="primary" leftIcon="icon-edit" circle></m-button>
    <m-button type="success" leftIcon="icon-smile" circle></m-button>
    <m-button type="danger" leftIcon="icon-add-circle" circle></m-button>
    <m-button type="info" leftIcon="icon-telephone" circle></m-button>
    <m-button type="warning" leftIcon="icon-image-text" circle></m-button>
  </m-row>
</template>
```

<summary>查看代码</summary>
</details>

## 加载状态

#### 正在加载中的状态按钮，通过 _loading_ 属性设置实现
<br/>
<div class="source">
  <Button-Demo4 />
</div>
<details>

```html
<template>
  <m-button type="primary" loading>加载中</m-button>
</template>
```

<summary>查看代码</summary>
</details>