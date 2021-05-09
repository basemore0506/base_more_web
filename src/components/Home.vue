<template>
  <div id="home_page">
    <Banner />
    <el-main class="remove_padding">
      <el-row>
        <el-col :span="24">bbb</el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
import Banner from "./Banner.vue"

export default {
name: 'home_page',
  components: {
    Banner
  }
}
</script>

<style>
.remove_padding{
  padding:0 0 0 0 !important
}
</style>