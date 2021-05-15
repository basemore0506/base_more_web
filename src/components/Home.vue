<template>
  <el-main class="remove_padding">
    <Banner />
    <RightNav />
    <el-row>
      <el-col :span="24" style="height:60vh">Slogan</el-col>
    </el-row>
    <el-row>
      <el-col :span="12" class="mono">Mono 1</el-col>
      <el-col :span="12" class="mono">Mono 2</el-col>
    </el-row>
    <el-row>
      <el-col :span="24" style="height:40vh">Gallery</el-col>
    </el-row>
    <el-row type="flex" style="height:60vh; width:100vw; flex-wrap:wrap" justify="center">
      <el-col :span="7" style="margin: 10px;">pic 1</el-col>
      <el-col :span="7" style="margin: 10px;">pic 2</el-col>
      <el-col :span="7" style="margin: 10px;">pic 3</el-col>
      <el-col :span="7" style="margin: 10px;">pic 4</el-col>
      <el-col :span="7" style="margin: 10px;">pic 5</el-col>
      <el-col :span="7" style="margin: 10px;">pic 6</el-col>
    </el-row>
  </el-main>
</template>

<script>
import Banner from "./Banner.vue"
import RightNav from "./RightNav.vue"

export default {
  components: {
    Banner,
    RightNav,
  }
}
</script>

<style>
.remove_padding{
  padding:0 0 0 0 !important
}

.mono{
  height:40vh;
}
</style>