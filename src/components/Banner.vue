<template>
  <div class="video-wrapper">
    <div class="tab-nav">
      <div class="tab-logo">
        <div class="logo-sm logo-md">
          <el-image
            style="width:100%;"
            fit="fill"
            :src="require('../static/images/logo.png')">
          </el-image>
        </div>
      </div>
      <div class="tab-content-wrapper-md tab-content-wrapper-sm">
        <div class="tab-content">
          <div class="tab-content-img">
            <el-image
              style="width:100%;"
              fit="fill"
              :src="require('../static/images/mono.png')">
            </el-image>
          </div>
          <div>Basemore 01</div>
        </div>
        <div class="tab-content">
          <div class="tab-content-img">
            <el-image
              style="width:100%;"
              fit="fill"
              :src="require('../static/images/mono2.png')">
            </el-image>
          </div>
          <div>Basemore 02</div>
        </div>
      </div>
    </div>
    <div class="video-sm video-md">
      <div>
        <video src="../video/movie.mp4" autoplay muted loop playsinline class="thisVideo-sm thisVideo-md"/>
      </div>
      <!-- <el-image 
        style="height: 100vh"
        :fit="none"
        :src="require('../static/images/header.png')">
      </el-image> -->
      <!-- <div class="header-img"></div> -->

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

.header-img{
    width:100vw;
    height:100vh;
    overflow:hidden;
    background-image:url(../static/images/header.png);
    background-position: center center;
    background-repeat: no-repeat;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    background-size:cover;
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
  background-color:rgba(255, 255, 255, 0.5);
  /* opacity: 0.5; */
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}

.tab-content-img {
  width: 40%;
}

.tab-logo {
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: center;
}

@media screen and (min-width: 768px){
  .logo-md {
    margin-top: 5vh;
    text-align: center;
    width: 15vmin;
    height: 15vmin;
  }

  .tab-content-wrapper-md {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-start;
    width: 100vw;
    height: 25vh;
  }

  .video-md{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  .thisVideo-md{
    width: 100vw;
    height: 100vh;
    object-fit: fill !important;
  }  
}

@media screen and (max-width: 768px){
  .logo-sm {
    margin-top: 5vh;
    text-align: center;
    width: 20vmin;
    height: 20vmin;
  } 

  .tab-content-wrapper-sm {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-start;
    width: 100vw;
    height: 40vh;
  }

  .video-sm{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center
  }

  .thisVideo-sm{  
      height: 100vh;
      object-fit: cover !important;
  }  
}
</style>