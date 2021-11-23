<template>
  <div>
    <el-row class="head">
      <el-col :span="3">
        <el-image style="height: 50px; float: right" :src="require('@/assets/logo1.png')" fit="contain"></el-image>
      </el-col>
      <el-col :span="1">
        <el-divider direction="vertical"></el-divider>
      </el-col>
      <el-col :span="20">
        <span class="title">离散数学课程线上平台</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HeadBar'
}
</script>

<style scoped>
.head{
  margin: 5px 10px 5px 10px;
}
.title{
  float: left;
  font-size: xx-large;
}

.el-divider--vertical {
  height: 50px;
}
</style>
