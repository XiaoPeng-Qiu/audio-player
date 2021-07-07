<template>
  <el-table
    :data="songs"
    class="song-table"
    style="width: 100%"
    @row-click="playMusic"
  >
    <el-table-column width="70">
      <template slot-scope="scope">
        <div class="index-wrap">
          {{pad(scope.$index + 1)}}
          <!-- <i class="iconfont">&#xe753;</i> -->
        </div>
      </template>
    </el-table-column>
    <el-table-column width="100">
      <template slot-scope="scope">
        <div class="img-wrap">
          <div class="img-wrap-icon"><i class="el-icon-caret-right"></i></div>
          <el-image :src="scope.row.imgUrl + '?param=80y80'" lazy></el-image>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="音乐标题">
      <template slot-scope="scope">
        <div class="name">
          {{scope.row.name}}
          <router-link tag="i" :to="'/mv/' + scope.row.mvId" class="iconfont" v-if="scope.row.mvId">&#xe7c7;</router-link>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="歌手" prop="singerText" />
    <el-table-column label="专辑" prop="album" />
    <el-table-column label="时长" width="100">
      <template slot-scope="scope">
        {{formatTime(scope.row.duration)}}
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { formatTime, pad } from '@/utils'
import { mapMutations } from '@/store/helper/music'
export default {
  props: {
    songs: Array
  },
  methods: {
    formatTime,
    pad,
    ...mapMutations(['setCurrentSong']),
    playMusic(e){
      this.setCurrentSong(e)
    }
  }
}
</script>
<style lang="scss">
  .song-table{
    background: transparent;
    .title-td {
      color: var(--font-color-white);
      border: none !important;
    }
    th.is-leaf {
      font-size: 100%;
      font-weight: normal;
      border: none !important;
      background: transparent !important;
    }
    tr{
      background-color: var(--body-bgcolor) !important;
      // border: none !important;
      cursor: pointer;
      &:hover{
        background-color: var(--playlist-hover-bgcolor) !important;
      }
    }
    td{
      background: transparent !important;
      border-bottom: none !important;
      font-size: 12.5px;
      color: #606266;
      
    }
    .index-wrap{
      @include flex-center();
      color: var(--font-color-grey-shallow);
      i{
        font-size: 16px;
        color: $theme-color;
      }
    }
    .name{
      display: flex;
      align-items: center;
      color: var(--font-color-white);
      font-size: 13px;
      i{
        padding-left: 5px;
        font-size: 16px;
        color: $theme-color;
      }
    }
    .img-wrap{
      position: relative;
      width: 64px;
      height: 64px;
      .img-wrap-icon{
        @include flex-center();
        @include abs-center();
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: rgba(255, 255, 255, .5);
        i{
          font-size: 16px;
          color: $theme-color;
        }
      }
      img{
        border-radius: 4px;
        width: 100%;
      }
    }
    .has-gutter tr:hover{
      background:var(--body-bgcolor) !important;
    }
    &::before{
      display: none;
    }
  }
</style>