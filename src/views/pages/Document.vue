<template>
  <div class="document">
    <el-row :gutter="100">
      <el-col :span="12">
        <div style="text-align: left">
          <span style="font-size: xx-large; font-weight: bold">课程PPT</span>
        </div>
        <el-divider></el-divider>
        <div>
          <el-table
            :data="pptList"
            style="width: 100%"
            row-key="id"
            :tree-props="{children: 'content'}">
            <el-table-column
              prop="label"
              label="文件名">
            </el-table-column>
            <el-table-column
              label="下载链接"
              width="100">
              <template slot-scope="scope">
                <el-button v-if="('url' in scope.row)" @click="handleDownload(scope.row)" type="text" size="small">下载</el-button>
                <div v-if="!('url' in scope.row)">—</div>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :span="12">
        <div style="text-align: left">
          <span style="font-size: xx-large; font-weight: bold">教材勘误</span>
        </div>
        <el-divider></el-divider>
        <div>
          <el-table
            :data="errateList"
            style="width: 100%"
            row-key="id">
            <el-table-column
              prop="label"
              label="文件名">
            </el-table-column>
            <el-table-column
              label="下载链接"
              width="100">
              <template slot-scope="scope">
                <el-button v-if="('url' in scope.row)" @click="handleDownload(scope.row)" type="text" size="small">下载</el-button>
                <div v-if="!('url' in scope.row)">—</div>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import {documentList} from '@/assets/datas/document'
export default {
  name: 'Document',
  data () {
    return {
      pptList: documentList.ppt,
      errateList: documentList.errata
    }
  },
  methods: {
    handleDownload (row) {
      window.open(row.url)
    }
  }
}
</script>

<style scoped>
.document {
  margin: 20px 8%;
}

</style>
