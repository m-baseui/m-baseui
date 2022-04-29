<template>
  <div class="row-default">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'm-row',
  setup() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.row-default{
  width:100%;
  height:auto;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
