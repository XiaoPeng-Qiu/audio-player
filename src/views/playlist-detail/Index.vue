<template>
  <div>
    <detail-header :playlist="playlist"></detail-header>
    <Tab :showTable="showTable" @changeTabStatus = "handleTab"/>
    <songs-table v-if="showTable" :songs="songs"></songs-table>
    <Comment v-if="!showTable"></Comment>
    <h1>chao</h1>
    <h1>chao</h1>
    <h1>chao</h1>
    <h1>chao</h1>
    <h1>chao</h1>
  </div>
</template>
<script>
import DetailHeader from './DetailHeader'
import Tab from './Tab'
import SongsTable from '@/components/SongsTable'
import Comment from '@/components/Comment'
import { getPlaylistDetail, getSongsDetail } from '@/api'
import { createSong } from '@/utils'
export default {
  data () {
    return {
      showTable: true,
      playlist: {
        creator: {}
      },
      songs: []
    }
  },
  methods: {
    handleTab (status) {
      this.showTable = status
    },
    async initData () {
      let { playlist } = await getPlaylistDetail(this.id)
      this.playlist = playlist
      this.getSongsList(playlist.trackIds)
    },
    async getSongsList (ids) {
      const trackIds = ids.map(item => item.id)
      const songsDetails = await getSongsDetail(trackIds.slice(0, 500))
      const songs = songsDetails.songs.map(({id, al, name, ar, dt, mv}) => 
        createSong({
          id,
          imgUrl: al.picUrl,
          name,
          singer: ar,
          album: al.name,
          duration: dt,
          mvId: mv
        })
      )
      this.songs = songs
    }
  },
  watch: {
    id: {
      handler() {
        this.initData()
      },
      immediate: true,
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  components: {
    DetailHeader,
    Tab,
    SongsTable,
    Comment
  }
}
</script>
<style lang="scss">

</style>