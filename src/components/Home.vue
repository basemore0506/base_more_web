<template>
  <div>
  <Banner />
  <el-main class="remove_padding">
    <el-row type="flex" justify="center">
      <el-col :span="7" class="slogan">FUN</el-col>
      <el-col :span="7" class="slogan">BEAUTY</el-col>
      <el-col :span="7" class="slogan">TECH</el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="24" class="slogan-paragraph-sm slogan-paragraph-md slogan-paragraph-lg">
        <div>Basemore vehicles would like to bring you more fun through technology and design</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" class="mono">
        <el-image
          style="width:100%; height:100%"
          fit="contain"
          :src="require('../static/images/mono.png')">
        </el-image>
      </el-col>
      <el-col :span="12" class="mono">
        <el-image
          style="width: 100%; height: 100%"
          fit="contain"
          :src="require('../static/images/mono2.png')">
        </el-image>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" style="height:10vh;line-height:10vh;text-align:center;">@Basemore</el-col>
    </el-row>
    <el-row type="flex" style="width:100vw; flex-wrap:wrap" justify="center">
      <el-col :span="7" class="pic-div" v-for="n in 6" :key="n">
        <el-image 
          style="width: 100%; height: 100%"
          fit="fill"
          :src="getSrc(n)" 
          :preview-src-list="getAllPics(n,6)" lazy>
        </el-image>
      </el-col>
      <!-- <el-col :span="7" class="pic-div">
        <el-image 
          style="width: 100%; height: 100%"
          fit="fill"
          :src="require('../static/images/gallery1.jpg')" 
          :preview-src-list="getAllPics(1,6)" lazy>
        </el-image>
      </el-col>
      <el-col :span="7" class="pic-div">
        <el-image 
          style="width: 100%; height: 100%"
          fit="fill"
          :src="require('../static/images/gallery2.jpg')" 
          :preview-src-list="getAllPics(2,6)" lazy>
        </el-image>
      </el-col>
      <el-col :span="7" class="pic-div">
        <el-image 
          style="width: 100%; height: 100%"
          fit="fill"
          :src="require('../static/images/gallery3.jpg')" 
          :preview-src-list="getAllPics(3,6)" lazy>
        </el-image>
      </el-col>
      <el-col :span="7" class="pic-div">
        <el-image 
          style="width: 100%; height: 100%"
          fit="fill"
          :src="require('../static/images/gallery4.jpg')" 
          :preview-src-list="getAllPics(4,6)" lazy>
        </el-image>
      </el-col>
      <el-col :span="7" class="pic-div">
        <el-image 
          style="width: 100%; height: 100%"
          fit="fill"
          :src="require('../static/images/gallery5.jpg')" 
          :preview-src-list="getAllPics(5,6)" lazy>
        </el-image>
      </el-col>
      <el-col :span="7" class="pic-div">
        <el-image 
          style="width: 100%; height: 100%"
          fit="fill"
          :src="require('../static/images/gallery6.jpg')" 
          :preview-src-list="getAllPics(6,6)" lazy>
        </el-image>
      </el-col> -->
    </el-row>
  </el-main>
  </div>
</template>

<script>
import Banner from "./Banner.vue"

export default {
  data() {
    return {
      imgList : [
        require('../static/images/gallery1.png'),
        require('../static/images/gallery2.png'),
        require('../static/images/gallery3.png'),
        require('../static/images/gallery4.png'),
        require('../static/images/gallery5.png'),
        require('../static/images/gallery6.png')
      ],
      imgListMicro : [
        require('../static/images/gallery1-micro.png'),
        require('../static/images/gallery2-micro.png'),
        require('../static/images/gallery3-micro.png'),
        require('../static/images/gallery4-micro.png'),
        require('../static/images/gallery5-micro.png'),
        require('../static/images/gallery6-micro.png')
      ]
    }
  },
  components: {
    Banner
  },
  computed: {
    getSrc() {
      return(order) => {
        return this.imgListMicro[order-1]
      }
    },
    getAllPics() {
      return (order,number) => {
        var ary = new Array()
        var i = order;
        var times = 1;
        while(i <= number && times <= number) {
          ary.push(this.imgList[i-1])
          if (i == number) {
            i = 0;
          }
          i++
          times++
        }
        return ary
      }
    }
  }
}
</script>

<style>
.remove_padding{
  padding:0 0 0 0 !important
}

.slogan{
  height:30vh;
  line-height:30vh;
  text-align:center; 
  font-size:4vw;
  letter-spacing: 2vw;
}

.slogan-paragraph-lg{
  height:30vh;
  text-align:center;
  font-size: 1.2vw;
  letter-spacing: 0.3vw;
}

@media screen and (max-width: 375px){
  .slogan-paragraph-sm{
    height:30vh;
    text-align:center;
    font-size: 3vw;
    letter-spacing: 0.8vw;
    padding: 1vmin 1vmin;
  }
}

@media screen and (min-width: 376px) and (max-width: 1024px){
  .slogan-paragraph-md{
    height:30vh;
    text-align:center;
    font-size: 1.5vw;
    letter-spacing: 0.4vw;
  }
}

.mono{
  height:40vh;
  border: 1px solid black;
}

.pic-div {
  margin: 1vh 1vw;
}
</style>