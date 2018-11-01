<template>
    <div>
        <div class="top">
            <h3 :title='title'></h3>
            <span :content='content'></span>
        </div>
        <div class="bottom">
            <p></p>
        </div>
    </div>
</template>
<script>
export default {
  name: "k-dialog",
  props: {
    type: {
      default: "success"
    }
  },
  data() {
    return {
      h3: ["添加成功", "提示", "添加失败"],
      content: []
    };
  }
};
</script>
