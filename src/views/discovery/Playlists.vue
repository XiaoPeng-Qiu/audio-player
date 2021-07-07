<template>
  <div class="playlists">
    <div class="title">推荐歌单</div>
    <div class="playlists-wrap">
      <playlists-card
        v-for="item of recPlaylist"
        :key="item.id"
        :id="item.id"
        :title="item.name"
        :desc="item.copywriter"
        :imgUrl="item.picUrl"
      />
    </div>
  </div>
</template>
<script>
import PlaylistsCard from '@/components/PlaylistsCard'
import { getRecPlaylist } from '@/api'
export default {
  data () {
    return {
      recPlaylist: []
    }
  },
  components: {
    PlaylistsCard
  },
  created () {
    getRecPlaylist().then(res => {
      this.recPlaylist = res.result
    })
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
  .playlists-wrap{
    display: flex;
    flex-wrap: wrap;
  }
</style>