<template>
  <div id="app">
    <RightNav />
    <el-container>
      <Home />
    </el-container>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import RightNav from "./components/RightNav.vue"

export default {
  name: 'app',
  components: {
    Home,
    RightNav
  }
}
</script>

<style>
body{
  margin: 0 0 0 0;
  background-color: #fff;
}

/* Temp for see the border */
.el-col {
  border: 1px solid royalblue;
}
</style>
