<template>
  <el-footer class="footer-style" height="20vh">
    <el-row type="flex" justify="center">
      <el-col :span="6">Contact with us:</el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="2">
        <font-awesome-icon :icon="['fab', 'weibo']" size="2x"/>
      </el-col>
      <el-col :span="2">
        <el-popover trigger="click" placement="top">
          <el-image
            style="width: 100px; height: 100px"
            :src="picSrc"
            :fit="fit"></el-image>
          <font-awesome-icon :icon="['fab', 'weixin']" size="2x" slot="reference" style="cursor:pointer"/>
        </el-popover>
      </el-col>
    </el-row>
  </el-footer>
</template>

<script>
export default {
    data() {
      return {
        picSrc: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
      };
    }
}
</script>

<style>
.footer-style{
  padding:0 0 0 0 !important;
  background-color: gainsboro;
  text-align: center;
}
</style>