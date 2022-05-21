<template>
  <i class="iconfont" :class="'m-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'm-icon',
    props: {
      name: String
    }
  };
</script>