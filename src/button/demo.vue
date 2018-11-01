<template>
    <ul>
        <li> <k-button size='mini' type='default'>按钮</k-button></li>
        <li> <k-button size='small' type='default'>按钮</k-button></li>
        <li> <k-button size='medium' type='default'>按钮</k-button></li>
        <li> <k-button size='large' type='default'>按钮</k-button></li>
        <li> <k-button size='large' type='default' disabled>按钮</k-button></li>
        <br>  
        <li> <k-button size='mini' type='black'>按钮</k-button></li>  
        <li> <k-button size='small' type='black'>按钮</k-button></li>  
        <li> <k-button size='medium' type='black'>按钮</k-button></li>  
        <li> <k-button size='large' type='black' >按钮</k-button></li>  
        <li> <k-button size='large' type='black' disabled>按钮</k-button></li>  
    </ul>
</template>
<script>
import kButton from "@/button/index";
export default {
  name: "k-button-demo",
  components: {
    kButton
  },
  data() {
    return {};
  }
};
</script>
 <style scoped>
li {
  margin: 20px;
  list-style-type: none;
}
</style>

