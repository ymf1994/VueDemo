<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <buttonComponent /> 
    <!-- <dialogDemo/> -->

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import buttonComponent from "@/button/demo.vue";
import dialogDemo from "@/dialog/demo1.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    buttonComponent,
    dialogDemo
  }
};
</script>
