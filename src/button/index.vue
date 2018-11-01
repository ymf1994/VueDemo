<template>
  <button
  class="btn"
  :size='size'
  :type='type'
  :disabled='disabled'
  @click="$emit('click')"
  >
  <slot></slot>
  </button>
</template>
<script>
export default {
  name: "k-button",
  props: {
    size: {
      default: "small"
    },
    type: {
      default: "default"
    },
    disabled: {
      default: false
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang='less' scoped>
@import "./style.less";
</style>
