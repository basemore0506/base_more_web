<template>
  <el-footer class="footer-style" height="20vh">
    <el-row type="flex" justify="center" style="height:10vh;color:green;line-height:10vh">
      <el-col :span="24">BASEMORE O I PRRORDER COMING SOON</el-col>
    </el-row>
    <el-row type="flex" justify="center" style="height:5vh;color:white;border: 1px solid gray;line-height:5vh">
      <el-col :span="6">Contact with us:</el-col>
    </el-row>
    <el-row type="flex" justify="center" style="height:5vh;line-height:5vh">
      <el-col :span="2" style="border: 1px solid gray;padding-top: 0.5vh;">
        <font-awesome-icon :icon="['fab', 'weibo']" size="2x" inverse/>
      </el-col>
      <el-col :span="2" style="border: 1px solid gray;padding-top: 0.5vh;">
        <el-popover trigger="click" placement="top">
          <el-image
            style="width: 100px; height: 100px"
            :src="picSrc"
            :fit="fit"></el-image>
          <font-awesome-icon :icon="['fab', 'weixin']" size="2x" slot="reference" style="cursor:pointer" inverse/>
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
  background-color: black;
  text-align: center;
}
</style>