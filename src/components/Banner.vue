<template>
  <div class="video-wrapper">
    <div class="tab-nav">
      <div class="tab-logo">
        <div class="logo">Logo</div>
      </div>
      <div class="tab-content">111</div>
      <div class="tab-content">222</div>
    </div>
    <div class="video">
      <!-- <video src="../video/movie.mp4" muted autoplay loop/> -->
      <el-image 
          style="width: 100%; height: 100%"
          :fit="fill"
          :src="require('../static/images/header.png')" z-index=1>
        </el-image>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.video-wrapper {
  width: 100vw;
  height: 100vh;
}

.tab-nav {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: space-between;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}

.tab-content {
  flex: 1;
  background-color:white;
  opacity: 0.5;
  height: 25vh;
}

.tab-logo {
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: center;
}

.logo {
  margin-top: 2%;
  background-color: wheat;
  height: 100%;
  width: 100px;
  opacity: 0.5;
  text-align: center;
  line-height: 50px;
}

.video{
  width: 100vw;
  height: 100vh;
}

video{  
    width: 100vw;
    height: 100vh;
    object-fit: fill;
}  
</style>