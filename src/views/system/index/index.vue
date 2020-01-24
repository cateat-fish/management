<template>
  <cs-container>
    <page-navi class="cs-m" v-model="root"/>

    <!-- <cs-photo v-model="slidePicture">
      <template slot="upload">
        <div
          tabindex="0"
          style="margin-bottom: 8px;"
          class="el-upload el-upload--picture-card"
          @click="handleUpload(_getAttachmentFileList, 'photo', 'upload')"
        >
          <cs-icon name="image" />
        </div>
      </template>
    </cs-photo>
    <el-button @click="handleUpload(_getAttachmentFileList, 'photo', 'upload')" size="small">
      <cs-icon name="upload" />上传图片
    </el-button>
    <cs-upload
      style="display: none"
      ref="upload"
      type="slot"
      :multiple="true"
      accept="image/*"
      :limit="2"
      @confirm="uploadCallback"
    ></cs-upload> -->
  </cs-container>
</template>

<script>
import util from '@/utils/util'
export default {
  name: 'system-index',
  components: {
    csUpload: () => import('@/components/cs-upload'),
    csPhoto: () => import('@/components/cs-photo'),
    PageNavi: () => import('@/layout/header-aside/components/header-navi')
  },
  data() {
    return {
      root: '/system',
      slidePicture: [],
      uploadCallback: ''
    }
  },
  methods: {
    // 打开上传对话框
    handleUpload(callback, type, source) {
      if (type === 'photo') {
        this.uploadConfig = {
          accept: 'image/*',
          multiple: true,
          limit: 9
        }
      }
      this.uploadCallback = callback
      this.$refs.upload.handleUploadDlg(source)
    },
    // 筛选过滤选择的资源
    _getFileList(files, source) {
      if (!source) {
        return files
      }

      let fileList = []
      for (const value of files) {
        const response = value.response
        if (!response || response.code !== 200) {
          continue
        }

        if (response.result) {
          fileList.push(response.result.url)
        }
      }

      return fileList
    },
    _getAttachmentFileList(files, source, res) {
      if (!files.length) {
        return
      }
      const fileList = this._getFileList(files, source)
      fileList.forEach(value => {
        this.slidePicture.push(value)
      })
    }
  }
}
</script>
