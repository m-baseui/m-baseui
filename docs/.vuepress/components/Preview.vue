<template>
  <div class="pre-code-box">
    <transition name="slide-fade">
      <pre
        class="language-html"
        v-if="showCode"
        v-highlight
      >
        <code class="language-html">{{ sourceCode }}</code>
      </pre>
    </transition>
    <div class="showCode" @click="showOrhideCode">
      <i :class="iconClass"></i>
      <span>{{ showCode ? "隐藏代码" : "显示代码" }}</span>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
export default {
  props: {
    compName: {
      type: String,
      default: "",
      require: true,
    },
    demoName: {
      type: String,
      default: "",
      require: true,
    }
  },
  setup(props) {
    const showCode = ref(false);
    const sourceCode = ref("");

    const iconClass = computed(() => {
      return [
        'iconfont',
        showCode.value ? 'icon-arrow-up-filling' : 'icon-arrow-down-filling'
      ]
    })

    const showOrhideCode = () => {
      showCode.value = !showCode.value;
    }

    const getSourceCode = async () => {
      let msg = await import(/* @vite-ignore */ `./${props.compName}/${props.demoName}.vue?raw`)
      sourceCode.value = msg.default
    }

    onMounted(() => {
      getSourceCode()
    })
    return {
      showCode,
      sourceCode,
      iconClass,
      showOrhideCode
    }
  }
}
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.1s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0.5;
}
.pre-code-box{
  width: 100%;
  height: auto;
  overflow: hidden;
  border-top: 0;
  margin: 10px 0 15px 0;
  position: relative;
  transition: all 0.15s ease-out;
  &:hover {
    box-shadow: 0px 16px 15px -16px rgb(0 0 0 / 10%);
  }
  pre{
    padding: 0 15px;
    margin-top: 0;
  }
  .showCode{
    width: 100%;
    line-height: 40px;
    font-size: 14px;
    text-align: center;
    background: #f9f9f9;
    box-shadow: 0px 16px 15px -16px rgb(0 0 0 / 10%);
    color: #666;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background: #f9f9f9;
      color: #0e80eb;
    }
    span{
      margin-left: 10px;
    }
  }
}
</style>
