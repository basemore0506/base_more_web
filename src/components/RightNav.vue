<template>
  <div class="rightNavi">
      <font-awesome-icon icon="bars" inverse size="lg" @click="drawer = true"/>
      <el-drawer
        title="我是标题"
        :visible.sync="drawer"
        :direction="direction"
        :before-close="handleClose">
        <span>我来啦!</span>
      </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      direction: 'rtl',
    };
  },
  methods: {
    
  }
}
</script>

<style>
.rightNavi {
    position:fixed;
    right: 5vw;
    top: 5vh;
    z-index: 5;
    cursor: pointer;
}
</style>