<template>
  <router-link class="mv-card" tag="div" :to="'/mv/'+id">
    <div class="img-wrap">
      <img :src="imgUrl+ '?param=500y260'" lazy="loaded">
      <div class="play-count-wrap">
        <i class="el-icon-caret-right"></i>{{playCountResult}}
      </div>
      <div class="play-icon"><i class="el-icon-caret-right"></i></div>
    </div>
    <p class="name">{{title}}</p>
    <p class="author">{{author}}</p>
  </router-link>
</template>
<script>
import { formatNumber } from '@/utils'
export default {
  props: {
    id: Number,
    title: String,
    author: String,
    imgUrl: String,
    playCount: Number
  },
  computed: {
    playCountResult () {
      return formatNumber(this.playCount)
    }
  }
}
</script>
<style lang="scss" scoped>
  .mv-card{
    width: calc(25% - 12px);
    margin: 4px 6px 30px;
    cursor: pointer;
    .img-wrap{
      position: relative;

      img{
        width: 100%;
        border-radius: 5px;
        display: block;
      }

      .play-count-wrap{
        position: absolute;
        right: 5px;
        top: 5px;
        color: #fff;
        font-size: 14px;
        text-shadow: 0px 0px 3px #333;
        @include flex-center();
        i{
          padding-right: 5px;
          font-size: 17px;
        }
      }
      .play-icon{
        @include abs-center();
        @include flex-center();
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: rgba(255,255,255,.5);
        transition: .3s all;
        opacity: 0;
        i{
          font-size: 36px;
          color: $theme-color;
        }
      }
      &:hover
        .play-icon{
          opacity: 1;
        }
    }

    .name{
      padding-top: 9px;
      font-size: 15px;
      @include text-ellipsis();
    }

    .author{
      padding-top: 4px;
      font-size: 15px;
      color: var(--font-color-grey-shallow);
      @include text-ellipsis();
    }
  }

</style>