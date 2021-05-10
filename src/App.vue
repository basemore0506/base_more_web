<template>
  <div id="app">
    <el-container>
      <Home />
    </el-container>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home,
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
