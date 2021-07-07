<template>
  <div class="searchList">
    <div class="search-hots" v-show="showHots">
      <div>
        <div class="title">热门搜索</div>
        <div class="tags">
          <div v-for="(item, inedx) of searchHot" :key="inedx">{{item.first}}</div>
        </div>
      </div>
      <div>
        <div class="title">搜索历史</div>
        <div class="tags" v-show="!showEmpty">
          <div>执迷不悟</div>
          <div>经济舱</div>
          <div>不完美人生指南</div>
          <div>说散就散</div>
          <div>会不会</div>
          <div>张杰</div>
          <div>薛之谦</div>
          <div>游京</div>
          <div>偏爱小鬼</div>
          <div>欢</div>
        </div>
        <div class="empty" v-show="showEmpty">暂无搜索记录</div>
      </div>
    </div>
    <div class="search-list" v-show="!showHots">
      <div v-show="songsShow">
        <div class="title"><i class="iconfont">&#xe699;</i>单曲</div>
        <ul class="list">
          <li class="item" v-for="item of searchInfo.songs" :key="item.id">{{item.name}}</li>
        </ul>
      </div>
      <div v-show="playlistsShow">
        <div class="title"><i class="iconfont">&#xe611;</i>歌单</div>
        <ul class="list">
          <li class="item" v-for="item of searchInfo.playlists" :key="item.id">{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { getSearchHos } from '@/api'
export default {
  data () {
    return {
      showEmpty: true,
      searchHot: []
    }
  },
  props: {
    showHots: Boolean,
    searchInfo: Object
  },
  created () {
    getSearchHos().then(res => {
      this.searchHot = res.result.hots
    })
  },
  computed: {
    songsShow () {
      return this.searchInfo.songs.length !== 0
    },
    playlistsShow () {
      return this.searchInfo.playlists.length !== 0
    }
  }
}
</script>
<style lang="scss" scoped>
  .searchList{
    position: fixed;
    top: $header-height;
    bottom: $miniPlayer-height;
    right: 0;
    width: 370px;
    background: var(--search-bgcolor);
    z-index: $search-panel-z-index;
    font-size: 13px;
    overflow-y: auto;
    box-shadow: 0 6px 3px 0 rgba(0, 0, 0, 0.2);
    .search-hots{
      > div{
        padding: 17px 25px;
        .title{
          color: var(--font-color-grey);
          margin-bottom: 20px;
        }
        .tags{
          div{
            margin-bottom: 12px;
            margin-right: 6px;
            font-size: 13px;
            display: inline-block;
            padding: 5px 16px;
            border: 1px solid var(--button-border-color);
            border-radius: 3px;
            text-align: center;
            cursor: pointer;
            transition: .3s;
            &:hover{
              background: var(--button-hover-bgcolor);
            }
          }
        }
        .empty{
          color: var(--font-color-grey);
          font-size: 14px;
          line-height: 100px;
          text-align: center;
        }
      }
    }
    .search-list{
      .title{
        color: var(--font-color-grey-shallow);
        display: flex;
        align-items: center;
        padding: 17px 20px 10px;
        .iconfont{
          padding-right: 5px;
        }
      }
      ul{
        li{
          padding: 12px 30px;
          cursor: pointer;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          &:hover{
            background: var(--light-bgcolor);
          }
          span{
            color: #517eaf;
          }
        }
      }
    }
  }
</style>