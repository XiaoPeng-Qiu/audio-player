<template>
  <div class="song">
    <div class="img-wrap">
      <img :src="song.imgUrl" alt="">
      <div class="player-control">
        <i class="el-icon-d-arrow-left"></i>
      </div>
    </div>
    <div class="content">
      <div class="name">
        {{song.name}}<span> - {{song.singerText}}</span>
      </div>
      <div class="time">
        02:28 / {{formatTime(song.duration)}}
      </div>
    </div>
  </div>
</template>
<script>
import { formatTime } from '@/utils'
export default {
  props: {
    song: Array
  },
  computed:{
    
  },
  methods: {
    formatTime
  }
}
</script>
<style lang="scss" scoped>
  .song{
    width: 50%;
    height: 42px;
    display: flex;
    .img-wrap{
      height: 100%;
      position: relative;
      border-radius: 3px;
      overflow: hidden;
      img{
        height: 100%;
        filter: blur(1.5px);
        display: block;
      }
      .player-control{
        @include abs-center(3);
        i{
          font-size: 26px;
          transform: rotate(90deg);
          color: #fff;
        }
      }
      &::after{
        content: "";
        @include abs-paved();
        background: rgba(0,0,0,.2);
      }
    }
    .content{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding-left: 15px;
      .name{
        font-size: 16px;
        color: var(--font-color-white);
        span{
          font-size: 13px;
          color: var(--font-color);
        }
      }
      .time{
        color: var(--font-color-grey);
        font-size: 13px;
      }
    }
  }
</style>