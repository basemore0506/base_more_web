<template>
  <el-footer class="footer-style" height="20vh" style="margin-top:3vh">
    <el-row class="roll-outer-wrapper">
      <el-col :span="24" class="roll-inner-wrapper">
        <div class="first-roll-sm first-roll-md">BASEMORE 01 PREORDER COMING SOON</div>
        <div class="second-roll-sm second-roll-md">BASEMORE 01 PREORDER COMING SOON</div>
        <div class="third-roll-sm third-roll-md">BASEMORE 01 PREORDER COMING SOON</div>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" style="height:5vh;color:white;border: 1px solid gray;line-height:5vh">
      <el-col :span="12">Contact with us:</el-col>
    </el-row>
    <el-row type="flex" justify="center" style="height:5vh;line-height:5vh">
      <el-col :span="4" style="border: 1px solid gray;padding-top: 0.5vh;">
        <font-awesome-icon :icon="['fab', 'weibo']" size="2x" inverse/>
      </el-col>
      <el-col :span="4" style="border: 1px solid gray;padding-top: 0.5vh;">
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

@keyframes sm-marquee {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(-300vw, 0, 0);
    transform: translate3d(-300vw, 0, 0);
    display: none;
  }
}

@keyframes md-marquee {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(-150vw, 0, 0);
    transform: translate3d(-150vw, 0, 0);
    display: none;
  }
}

.roll-outer-wrapper {
  color:green;
}

.roll-inner-wrapper {
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  height:9vh;
  line-height:9vh;
  margin: 0 auto;
}

.roll-inner-wrapper div {
  position: absolute;
  top: 0;
  left: 100%;
  height: 100%;
}
@media screen and (min-width: 768px){
  .first-roll-md {
    animation: 24s md-marquee linear infinite normal;
  }

  .second-roll-md {
    animation: 24s md-marquee linear 8s infinite normal;
  }

  .third-roll-md {
    animation: 24s md-marquee linear 16s infinite normal;
  }
}

@media screen and (max-width: 768px){
  .first-roll-sm {
    animation: 30s sm-marquee linear infinite normal;
  }

  .second-roll-sm {
    animation: 30s sm-marquee linear 10s infinite normal;
  }

  .third-roll-sm {
    animation: 30s sm-marquee linear 20s infinite normal;
  } 
}

</style>