<template>
    <div class="with">
        <h1>这个能去哪里</h1>
        <k-button size='mini' type='default' @click="go()">按钮</k-button>
       <router-view></router-view>
    </div>
</template>
<script>
import kButton from "@/button/index";
export default {
  components: {
    kButton
  },
  data() {
    return {};
  },
  methods: {
      go(){
          this.$router.push({
              name:'home'
          })
      }
  },
  watch:{}
};


</script>