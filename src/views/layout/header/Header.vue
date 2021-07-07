<template>
  <div class="header">
    <div>
      <div class="buttons">
        <div>
          <router-link tag="div" to="/discovery">
            <i class="iconfont">&#xe657;</i>
          </router-link>
          <div><i class="iconfont">&#xe63b;</i></div>
          <div><i class="iconfont">&#xe63f;</i></div>
        </div>
      </div>
      <header-history/>
    </div>
    <div class="right">
      <Search 
        @handleFocus="handleInputFocus" 
        @handleBlur="handleInputBlur"
        @handleChange="handleInputChange"
        @handleKeyup="handleInputKeyup"
      ></Search>
      <search-panel
        v-show="showPanel"
        :showHots="showHots"
        :searchInfo="searchInfo"
      ></search-panel>
      <header-theme></header-theme>
    </div>
  </div>
</template>
<script>
import HeaderHistory from './HeaderHistory'
import Search from '@/components/Search'
import SearchPanel from './SearchPanel'
import HeaderTheme from './HeaderTheme'
import { getSearchSuggest } from '@/api'
export default {
  data () {
    return {
      showPanel: false,
      showHots: true,
      searchInfo: {
        songs: [],
        playlists: []
      }
    }
  },
  components: {
    HeaderHistory,
    Search,
    SearchPanel,
    HeaderTheme
  },
  methods: {
    handleInputFocus () {
      // console.log('handleInputFocus')
      this.showPanel = true
    },
    handleInputBlur () {
      // console.log('handleInputBlur')
      this.showPanel = false
    },
    handleInputChange (key) {
      // console.log('handleInputChange')
      if(key){
        getSearchSuggest(key).then(res =>{
          if(res.result.songs || res.result.playlists){
            this.showHots = false
            this.searchInfo.songs = res.result.songs || []
            this.searchInfo.playlists = res.result.playlists || []
          }else{
            this.showHots = true
          }
        })
      }else{
        this.showHots = true
      }
    },
    handleInputKeyup () {
      console.log('handleInputKeyup')
    }
  }
}
</script>
<style lang="scss" scoped>
  .header{
    height: $header-height;
    background: var(--header-bgcolor);
    display: flex;
    justify-content: space-between;
    > div{
      display: flex
    }
    .buttons{
      padding: 10px;
      > div{
        display: flex;
        div{
          width: 13px;
          height: 13px;
          @include flex-center;
          background: #ed655a;
          border-radius: 50%;
          margin-right: 8px;
          cursor: pointer;
          i{
            opacity: 0;
            font-size: 8px;
            transform: scale(0.75);
            transition: .3s;
            color: #000;
          }
          &:nth-child(2){
            background: #e0c04c;
          }
          &:nth-child(3){
            background: #72be47;
          }
        }
        &:hover
          i{
            opacity: 1;
          }
      }
    }
    .right{
      padding-right: 30px;
      display: flex;
      align-items: center;
    }
  }
</style>