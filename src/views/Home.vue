<template>
  <div>
    <div class="head-intro">
      <div>
        <HeadBar style="padding: 10px"/>
      </div>
      <div style="width: 96%; margin: 0 2%">
        <el-divider></el-divider>
      </div>
      <div style="padding: 10px;">
        <el-row style="height: 400px">
          <el-col :span="12">
            <el-image class="course-img" :src="require('@/assets/course.jpg')"></el-image>
          </el-col>
          <el-col :span="12">
            <div style="text-align: left; margin: 35px 20px 20px 20px">
              <span style="font-size: xxx-large;font-weight: bold">离散数学</span>
            </div>
            <div style="text-align: left; margin: 10px 20px 15px 23px">
              <span style="font-size: medium">大连理工大学 软件学院</span>
            </div>
            <div style="width: 96%; margin: 0 2%">
              <el-divider></el-divider>
            </div>
            <div style="text-align: left; margin: 15px 20px 10px 23px">
              <span style="font-size: medium">授课老师：陈志奎，赵亮，高静</span>
            </div>
            <div style="text-align: left; margin: 110px 20px 10px 20px">
              <el-button style="width: 150px" type="primary" round @click="directToLearning">开 始 学 习</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="detail-intro">
      <el-row :gutter="20">
        <el-col span="16">
          <div class="course-intro">
            <span style="font-size: xx-large; font-weight: bold">课程简介</span>
            <div style="margin: 20px 0">
              <el-divider></el-divider>
            </div>
            <div>
              <p>离散数学是计算机专业的一门重要基础课程，它所研究的对象是离散数量关系和离散结构数学模型。离散数学课程主要介绍离散数学的各个分支的基本概念、基本理论和基本方法。这些概念、理论以及方法大量地应用在数字电路、编译原理、数据结构、操作系统、数据库系统、算法的分析与设计、人工智能、计算机网络等专业课程中。同时，该课程所提供的训练十分有益于学生概括抽象能力、逻辑思维能力、归纳构造能力的提高，有益于学生严谨、完整、规范的科学态度的培养。 </p>
              <h4>课程设置</h4>
              <p>每年秋季学期开课，共64学时，每周4学时；春季学期中日班开课，共32学时，每周4学时。</p>
              <h4>考核方式</h4>
              <p>平时成绩：30%  作业、出勤</p>
              <p>期末成绩：70%  闭卷考试</p>
              <h4>教材及资料</h4>
              <p>主讲教材：《离散数学》 陈志奎 周勇 高静 编著  清华大学出版社</p>
              <el-image :src="require('@/assets/textbook.jpg')"></el-image>
              <p>其他参考书：</p>
              <p>-《DISCRITE MATHEMATICAL STRUCTURES》Bernard Kolman Robert C. Busby, ShronCutler Ross 高等教育出版社</p>
              <p>-《DISCRITE MATHEMATICS and its applications》Rosen 华章出版社</p>
              <p>-《离散数学与算法》曹晓东 原旭 编著  机械工业出版社</p>
              <p>-《离散数学》曲婉玲 耿素云 张立昂著  高等教育出版社</p>
            </div>
          </div>
        </el-col>
        <el-col span="8">
          <div class="teacher-into">
            <span style="font-size: xx-large; font-weight: bold">讲师</span>
            <div style="margin: 20px 0">
              <el-divider></el-divider>
            </div>
            <div>
              <el-row style="margin: 20px 0">
                <el-col :span="8">
                  <el-avatar :src="require('@/assets/chenzhikui.jpg')" :size="90"></el-avatar>
                </el-col>
                <el-col :span="16">
                  <div style="font-size: x-large;font-weight: bold; margin: 15px 0 10px 0">陈志奎</div>
                  <div>教授</div>
                </el-col>
              </el-row>
              <el-row style="margin: 20px 0">
                <el-col :span="8">
                  <el-avatar :src="require('@/assets/zhaoliang.jpg')" :size="90"></el-avatar>
                </el-col>
                <el-col :span="16">
                  <div style="font-size: x-large;font-weight: bold; margin: 15px 0 10px 0">赵亮</div>
                  <div>副教授</div>
                </el-col>
              </el-row>
              <el-row style="margin: 20px 0">
                <el-col :span="8">
                  <el-avatar :src="require('@/assets/gaojing.png')" :size="90"></el-avatar>
                </el-col>
                <el-col :span="16">
                  <div style="font-size: x-large;font-weight: bold; margin: 15px 0 10px 0">高静</div>
                  <div>讲师</div>
                </el-col>
              </el-row>

            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import HeadBar from '@/components/HeadBar'
export default {
  name: 'Home',
  components: {
    HeadBar
  },
  mounted () {
    document.querySelector('body').setAttribute('style', 'background-color:#f7f7f7')
  },
  beforeDestroy () {
    document.querySelector('body').removeAttribute('style')
  },
  methods: {
    directToLearning () {
      let path = '/learning'
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
p {
  text-indent: 2em;
  line-height: 25px;
}
.course-intro {
  background-color: white;
  border-radius: 10px;
  height: 1300px;
  padding: 20px 40px;
  text-align: left;
}
.teacher-into {
  background-color: white;
  border-radius: 10px;
  height: 800px;
  padding: 20px;
  text-align: left;
}
.course-img {
  margin: 45px 0;
  height: 300px;
  border-radius: 20px;
}
.head-intro {
  width: 70%;
  min-width: 1200px;
  background-color: white;
  margin: auto;
}
.detail-intro {
  width: 70%;
  min-width: 1200px;
  margin: auto;
  padding: 30px 0 20px 0;
}
.el-divider--horizontal {
  margin: 3px 0;
}
</style>
