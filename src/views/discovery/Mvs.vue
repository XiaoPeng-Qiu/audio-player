<template>
  <div class="playlists">
    <div class="title">推荐MV</div>
    <div class="mvs-wrap">
      <mv-card
        v-for="item of mvs"
        :key="item.id"
        :id="item.id"
        :title="item.name"
        :author="item.artistName"
        :imgUrl="item.picUrl"
        :playCount="item.playCount"
      >
      </mv-card>
    </div>
  </div>
</template>
<script>
import MvCard from '@/components/MvCard'
import { getRecMv } from '@/api'
export default {
  data () {
    return {
      mvs: []
    }
  },
  created () {
    getRecMv().then(res => {
      this.mvs = res.result
    })
  },
  components: {
    MvCard
  }
}
</script>
<style lang="scss" scoped>
  .title{
    color: red;
    padding: 12px 6px 15px;
    font-size: 20px;
    color: var(--font-color-white);
  }
  .mvs-wrap{
    display: flex;
    flex-wrap: wrap;
  }
</style>