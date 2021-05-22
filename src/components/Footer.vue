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
      <el-col :span="4" style="border: 1px solid gray">
        <font-awesome-icon :icon="['fab', 'weibo']" size="2x" inverse class="icon-md icon-sm"/>
      </el-col>
      <el-col :span="4" style="border: 1px solid gray;">
        <el-popover trigger="click" placement="top">
          <el-image
            style="width: 10vmax; height: 10vmax; text-align: center"
            :src="picSrc"
            fit="fill"></el-image>
          <font-awesome-icon :icon="['fab', 'weixin']" slot="reference" style="cursor:pointer" inverse class="icon-md icon-sm"/>
        </el-popover>
      </el-col>
      <el-col :span="4" style="border: 1px solid gray;">
        <font-awesome-icon :icon="['fab', 'tiktok']" size="2x" inverse class="icon-md icon-sm"/>
      </el-col>
      <el-col :span="4" style="border: 1px solid gray;">
        <svg t="1621665246495" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1304" width="100%" height="100%"><path d="M450.803484 456.506027l-120.670435 23.103715 10.333298 45.288107 119.454151-23.102578-9.117014-45.289244z m65.04448 120.060586c-29.483236 63.220622-55.926329 15.502222-55.926328 15.502223l-19.754098 12.768142s38.90176 53.192249 75.986489 12.764729c43.770311 40.42752 77.203911-13.068516 77.203911-13.068516l-17.934791-11.55072c0.001138-0.304924-31.305956 44.983182-59.575183-16.415858z m59.57632-74.773617L695.182222 524.895573l10.029511-45.288106-120.364373-23.103716-9.423076 45.289245z m237.784178-88.926436c-1.905778-84.362809-75.487004-100.540871-75.487004-100.540871s-57.408853-0.316302-131.944676-0.95232l54.237867-52.332089s8.562916-10.784996-6.026809-22.834062c-14.592-12.051342-15.543182-6.660551-20.615396-3.487289-4.441884 3.169849-69.462471 66.920676-80.878933 78.340551-29.494613 0-60.2624-0.319716-90.075591-0.319716h10.466418s-77.705671-76.754489-82.781298-80.241777c-5.075627-3.488427-5.709369-8.56064-20.616533 3.487289-14.589724 12.05248-6.026809 22.8352-6.026809 22.8352l55.504213 53.919288c-60.261262 0-112.280462 0.319716-136.383147 1.268623-78.025387 22.521173-71.99744 100.859449-71.99744 100.859449s0.950044 168.100978 0 253.103217c8.562916 85.00224 73.899804 98.636231 73.899805 98.636231s26.007324 0.63488 45.357511 0.63488c1.900089 5.391929 3.486151 32.034133 33.302756 32.034134 29.495751 0 33.30048-32.034133 33.30048-32.034134s217.263218-0.950044 235.340231-0.950044c0.953458 9.196658 5.394204 33.619058 35.207395 33.303893 29.494613-0.636018 31.714418-35.20512 31.714418-35.20512s10.151253-0.95232 40.280747 0c70.413653-13.005938 74.534684-95.468658 74.534684-95.468657s-1.265209-169.689316-0.312889-254.056676zM752.628622 681.8304c0 13.319964-10.467556 24.102684-23.471218 24.102684H300.980907c-13.003662 0-23.47008-10.78272-23.47008-24.102684V397.961671c0-13.32224 10.467556-24.106098 23.47008-24.106098h428.176497c13.003662 0 23.471218 10.783858 23.471218 24.106098v283.868729z" p-id="1305" fill="#ffffff"></path></svg>
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

@media screen and (min-width: 375px){
  .icon-md{
    padding-top: 0.5vh;
    font-size: 2em;
  }
}

@media screen and (max-width: 375px){
  .icon-sm{
    font-size: 1.5em;
  }
}

</style>