<template>
  <div>
    <div class="title">最新音乐</div>
    <div class="songs-wrap">
      <songs-card
        v-for="item of songs"
        :key="item.id"
        :title="item.name"
        :singer="item.songName"
        :imgUrl="item.picUrl"
      ></songs-card>
    </div>
  </div>
</template>
<script>
import SongsCard from './SongsCard'
import { getNewSong } from '@/api'
export default {
  data () {
    return {
      songs: []
    }
  },
  components: {
    SongsCard
  },
  created () {
    getNewSong().then(res => {
      this.songs = res.result.map(item=>({
        id: item.id,
        name: item.name,
        picUrl: item.picUrl,
        songName: item.song.artists[0].name
      }))
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
  .songs-wrap{
    display: flex;
    flex-wrap: wrap;
  }
  
</style>