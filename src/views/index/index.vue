<template>
  <cs-container>
    <cs-page-cover
      title="CareyShop Admin"
      sub-title="后台管理模板">
      <img src="~@/assets/image/logo@2x.png" alt="logo">
    </cs-page-cover>
  </cs-container>
</template>

<script>
import CsPageCover from './components/cs-page-cover'

export default {
  components: {
    CsPageCover
  }
}
</script>

<style lang="scss" scoped>
  .index-btn-group {
    color: $color-text-placehoder;
    span {
      color: $color-text-sub;
      &:hover {
        color: $color-text-main;
        cursor: pointer;
      }
    }
  }
</style>
