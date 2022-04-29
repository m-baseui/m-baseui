# Button 按钮

#### 常用 button 按钮

## 基本使用

#### button 按钮的基本使用
<br/>
<Button></Button>

使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

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
    <m-button type="text" round>文本按钮</m-button>
  </m-row>
</template>
```