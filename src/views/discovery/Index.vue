<template>
  <div class="router-view-center discovery">
    <Banner/>
    <Playlists/>
    <Songs/>
    <Mvs/>
    <div @click="click">
      点击事件
    </div>
  </div>
</template>
<script>
import Banner from './Banner'
import Playlists from './Playlists'
import Songs from './Songs'
import Mvs from './Mvs'
export default {
  components: {
    Banner,
    Playlists,
    Songs,
    Mvs
  },
  methods:{
    click(){
      console.log(1562)
    }
  }
}
</script>
<style lang="scss" scoped>
  .discovery{
    padding: 20px 30px;
  }
</style>