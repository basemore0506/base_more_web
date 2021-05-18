<template>
  <div>
  <Banner />
  <el-main class="remove_padding">
    <el-row type="flex" justify="center" style="font-family:AlexBrush">
      <el-col :span="5" style="height:30vh;line-height:30vh;text-align:center; font-size:4vw">FUN</el-col>
      <el-col :span="5" style="height:30vh;line-height:30vh;text-align:center; font-size:4vw">BEAUTY</el-col>
      <el-col :span="5" style="height:30vh;line-height:30vh;text-align:center; font-size:5vw">TECH</el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="24" style="height:30vh;text-align:center;font-size:2vw">Basemore vehcles would like to bring you more fun through technology and design</el-col>
    </el-row>
    <el-row>
      <el-col :span="12" class="mono">Mono 1</el-col>
      <el-col :span="12" class="mono">Mono 2</el-col>
    </el-row>
    <el-row>
      <el-col :span="24" style="height:10vh;line-height:10vh;text-align:center;">@Basemore</el-col>
    </el-row>
    <el-row type="flex" style="width:100vw; flex-wrap:wrap" justify="center">
      <el-col :span="7" sm="" class="pic-div">
        <el-image 
          style="width: 100%; height: 100%"
          :fit="fill"
          :src="require('../static/images/gallery1.jpg')" 
          :preview-src-list="[require('../static/images/gallery1.jpg')]" lazy>
        </el-image>
      </el-col>
      <el-col :span="7" class="pic-div">
        <el-image 
          style="width: 100%; height: 100%"
          :fit="fill"
          :src="require('../static/images/gallery2.jpg')" 
          :preview-src-list="[require('../static/images/gallery2.jpg')]" lazy>
        </el-image>
      </el-col>
      <el-col :span="7" class="pic-div">
        <el-image 
          style="width: 100%; height: 100%"
          :fit="fill"
          :src="require('../static/images/gallery3.jpg')" 
          :preview-src-list="[require('../static/images/gallery3.jpg')]" lazy>
        </el-image>
      </el-col>
      <el-col :span="7" class="pic-div">
        <el-image 
          style="width: 100%; height: 100%"
          :fit="fill"
          :src="require('../static/images/gallery4.jpg')" 
          :preview-src-list="[require('../static/images/gallery4.jpg')]" lazy>
        </el-image>
      </el-col>
      <el-col :span="7" class="pic-div">
        <el-image 
          style="width: 100%; height: 100%"
          :fit="fill"
          :src="require('../static/images/gallery5.jpg')" 
          :preview-src-list="[require('../static/images/gallery5.jpg')]" lazy>
        </el-image>
      </el-col>
      <el-col :span="7" class="pic-div">
        <el-image 
          style="width: 100%; height: 100%"
          :fit="fill"
          :src="require('../static/images/gallery6.jpg')" 
          :preview-src-list="[require('../static/images/gallery6.jpg')]" lazy>
        </el-image>
      </el-col>
    </el-row>
  </el-main>
  </div>
</template>

<script>
import Banner from "./Banner.vue"

export default {
  components: {
    Banner
  }
}
</script>

<style>
.remove_padding{
  padding:0 0 0 0 !important
}

.mono{
  height:40vh;
  border: 1px solid black;
}

.pic-div {
  margin: 1vh 1vw;
}
</style>