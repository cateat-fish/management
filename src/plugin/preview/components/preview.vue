<template>
  <el-dialog
    :visible.sync="dialogVisible"
    :append-to-body="true"
    :show-close="false"
    @close="close"
    class="image">
    <div v-if="dialogVisible">
      <el-image :src="dialogImageUrl" fit="fill" @click.native="$open(dialogImageUrl)"/>
    </div>
  </el-dialog>
</template>

<script>
import util from '@/utils/util'

export default {
  name: 'preview',
  data() {
    return {
      dialogVisible: false,
      dialogImageUrl: ''
    }
  },
  methods: {
    getImageUrl(image) {
      let result = []
      if (Array.isArray(image)) {
        // eslint-disable-next-line no-unused-vars
        for (let item of image) {
          result.push(util.checkUrl(item))
        }
      } else {
        result.push(util.checkUrl(image))
      }

      return result
    },
    show(image) {
      this.$nextTick(() => {
        this.dialogVisible = true
        this.dialogImageUrl = Array.isArray(image) ? image[0] : image
      })
    },
    close() {
      this.dialogVisible = false
      this.dialogImageUrl = ''
    }
  }
}
</script>

<style scoped>
  .image {
    text-align: center;
    line-height: 0;
  }
  .image >>> img {
    vertical-align: middle;
    cursor: pointer;
  }
  .image >>> .el-dialog__header {
    display: none;
  }
  .image >>> .el-dialog__body {
    padding: 10px;
    background-color: #F5F7FA;
  }
</style>
