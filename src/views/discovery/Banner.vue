<template>
  <el-carousel :interval="4000" type="card" height="200px" class="banner">
    <el-carousel-item v-for="item of banners" :key="item.scm">
       <el-image :src="item.imageUrl+'?param=1000y400'"></el-image>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
import { getBanner } from '@/api'
export default {
  data () {
    return {
      banners: []
    }
  },
  created () {
    getBanner().then(res => {
      this.banners = res.banners
    })
  }
}
</script>
<style lang="scss" scoped>
  .banner{
    margin: 0 6px;
  }
  .el-image{
    height: 100%;
  }
  .banner ::v-deep .el-image__inner {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    
  }
  .banner ::v-deep .is-active button{
    background-color: $theme-color
  }
</style>