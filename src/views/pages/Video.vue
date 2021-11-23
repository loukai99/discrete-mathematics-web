<template>
  <div class="videos">
    <div style="text-align: left; margin-bottom: 20px">
      <el-select v-model="src">
        <el-option
          v-for="item in videos"
          :key="item.id"
          :label="item.label"
          :value="item.url">
          <span style="float: left">{{ item.label }}</span>
        </el-option>
      </el-select>
    </div>
    <iframe class="frame" :src="src" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
  </div>
</template>

<script>
import {videoList} from '@/assets/datas/videos'
export default {
  name: 'Video',
  data () {
    return {
      src: '',
      videos: videoList
    }
  },
  created () {
    this.src = this.videos[0].url
  }
}
</script>

<style scoped>
.videos {
  width: 85%;
  margin: auto;
}
.frame {
  width: 100%;
  height: 680px;
}
</style>
