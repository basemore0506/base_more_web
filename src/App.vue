<template>
  <div id="app">
    <el-container direction="vertical">
      <Home />
      <Footer />
    </el-container>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    Home,
    Footer
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
