<template>
  <div>
    <el-container style="min-width: 1200px; margin: 0 10px">
      <el-header style="height: 80px;background-color: white;">
        <HeadBar style="padding: 10px"/>
<!--        <div style="width: 96%; margin: 0 2%">-->
<!--          <el-divider></el-divider>-->
<!--        </div>-->
      </el-header>
      <el-container>
        <el-aside width="250px">
          <div class="nav-bar">
            <div style="font-size: x-large; font-weight: bold; padding: 20px 40px">离散数学</div>
            <div style="width: 90%; margin: 0 5%">
              <el-divider></el-divider>
            </div>
            <el-menu default-active="1" style="padding: 0 20px">
              <el-menu-item index="1" @click="showPage('/video')">
                <span class="content-text" slot="title">录播课程</span>
              </el-menu-item>
              <el-menu-item index="2" @click="showPage('/document')">
                <span  class="content-text" slot="title">课程资料下载</span>
              </el-menu-item>
              <el-menu-item index="3" @click="showPage('/discuss')">
                <span  class="content-text" slot="title">讨论</span>
              </el-menu-item>
            </el-menu>
          </div>
        </el-aside>
        <el-main style="padding: 0">
          <div class="pages">
            <iframe :src="src" scrolling="auto" frameborder="0" class="frame" name="frame"></iframe>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HeadBar from '@/components/HeadBar'

export default {
  name: 'Learning',
  components: {
    HeadBar
  },
  data () {
    return {
      src: window.location.href + '/video'
    }
  },
  mounted () {
    document.querySelector('body').setAttribute('style', 'background-color:#f7f7f7')
  },
  beforeDestroy () {
    document.querySelector('body').removeAttribute('style')
  },
  methods: {
    showPage (url) {
      this.src = window.location.href + url
    }
  }
}
</script>

<style scoped>
.frame {
  width: 100%;
  height: 100%;
}
.content-text {
  font-size: large;
}
.nav-bar {
  margin: 20px 10px 0 0;
  height: 800px;
  border-radius: 20px;
  background-color: white;
  text-align: left
}
.pages {
  margin: 20px 0 0 10px;
  padding: 15px;
  height: 770px;
  border-radius: 20px;
  background-color: white;
}
.el-divider--horizontal {
  margin: 3px 0;
}
</style>
