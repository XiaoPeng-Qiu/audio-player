<template>
  <div class="router-view-center playlists" ref="playlists">
    <top-card
      :id="playlistTop.id"
      :name="playlistTop.copywriter"
      :desc="playlistTop.description"
      :imgUrl="playlistTop.coverImgUrl"
    ></top-card>
    <Tabs :tabs="tabs" :activeTabIndex="activeTabIndex" @changeTabIndex="handleTabChange"></Tabs>
    <div class="playlists-wrap">
      <playlists-card
        v-for="item of playlists"
        :key="item.id"
        :id="item.id"
        :title="item.name"
        :desc="item.description"
        :imgUrl="item.coverImgUrl"
      ></playlists-card>
    </div>
    <div class="page">
      <el-pagination
        :page-size="50"
        :pager-count="7"
        :current-page="currentPage"
        :total="total"
        layout="prev, pager, next"
        @current-change="handlePageChange"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import TopCard from './TopCard'
import Tabs from './Tabs'
import PlaylistsCard from '@/components/PlaylistsCard'
import { getTopPlaylists, getPlaylists } from '@/api'
import { scrollInto } from '@/utils'
export default {
  data () {
    return {
      activeTabIndex: 0,
      playlistTop: {},
      playlists: [],
      currentPage: 0,
      total: 0,
    }
  },
  methods: {
    handleTabChange (index) {
      this.activeTabIndex = index
      this.currentPage = 0
      this.initData()
    },
    handlePageChange (index) {
      this.currentPage = index
      this.getPlaylistsInfo()
      console.log(this.$refs.playlists)
      scrollInto(this.$refs.playlists)
    },
    initData () {
      this.getTopPlaylistsInfo()
      this.getPlaylistsInfo()
    },
    getTopPlaylistsInfo () {
      let params = {limit:1,cat:this.tabs[this.activeTabIndex]}
      getTopPlaylists(params).then(res => {
        this.playlistTop = res.playlists[0]
      })
    },
    getPlaylistsInfo () {
      let params = {
        limit: 50,
        offset: (this.currentPage-1) * 50,
        cat:this.tabs[this.activeTabIndex]
      }
      getPlaylists(params).then(res => {
        this.playlists = res.playlists
        this.total = res.total
      })
    }
  },
  created () {
    this.tabs = ["全部", "民谣", "华语", "流行", "摇滚", "电子", "轻音乐", "影视原声", "ACG", "怀旧", "治愈", "快乐", "蓝调"] 
    this.initData()
  },
  components: {
    TopCard,
    Tabs,
    PlaylistsCard
  }
}
</script>
<style lang="scss" scoped>
  .playlists{
    padding: 20px 30px;
    .playlists-wrap{
      display: flex;
      flex-wrap: wrap;
    }
    .page{
      display: flex;
      justify-content: flex-end;
    }
  }
</style>