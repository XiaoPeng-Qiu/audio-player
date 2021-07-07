<template>
  <div class="header">
    <div class="img-wrap">
      <el-image :src="playlist.coverImgUrl+'?param=400y400'"></el-image>
    </div>
    <div class="content">
      <p class="title">{{playlist.name}}</p>
      <div class="creator-wrap">
        <img :src="playlist.creator.avatarUrl + '?param=80y80'">
        <!-- playlist.creator.nickname+  -->
        <span class="creator">{{playlist.creator.nickname}}</span>
        <span class="create-time">{{formatDate(playlist.createTime, 'yyyy-MM-dd')}}<span>创建</span></span>
      </div>
      <div class="play-wrap">
        <i class="iconfont">&#xe600;</i>
        播放全部
      </div>
      <p class="desc">标签：华语/流行/治愈</p>
      <p class="desc">简介：{{ playlist.description }}</p>
    </div>
  </div>
</template>
<script>
import { formatDate } from '@/utils'
export default {
  props: {
    playlist: Object
  },
  methods: {
    formatDate
  }
}
</script>
<style lang="scss" scoped>
  .header{
    padding: 40px;
    display: flex;
    .img-wrap{
      width: 215px;
      height: 215px;
      margin-right: 25px;
      img{
        display: block;
        width: 100%;
      }
    }
    .content{
      flex: 1;
      min-width: 0;
      .title{
        padding-bottom: 13px;
        font-size: 17px;
        color: var(--font-color-white);
        @include text-ellipsis();
      }
      .creator-wrap{
        display: flex;
        align-items: center;
        padding-bottom: 18px;
        img{
          width: 32px;
          border-radius: 50%;
          margin-right: 9px;
        }
        .creator{
          font-size: 15px;
          padding-right: 9px;
        }
        .create-time{
          font-size: 13px;
          span{
            font-size: 15px;
            padding-left: 9px;
          }
        }
      }
      .play-wrap{
        width: 116px;
        height: 30px;
        @include flex-center();
        background: linear-gradient(to right, #fa5143, #f44d41, #d53b32);
        color: #fbdfdd;
        font-size: 15px;
        border-radius: 3px;
        cursor: pointer;
        margin-bottom: 20px;
        i{
          font-size: 17px;
          padding-right: 5px;
        }
      }
      .desc{
        font-size: 15px;
        @include text-ellipsis-multi(3);
      }
      .desc + .desc{
        padding-top: 9px;
      }
    }
  }
</style>