<template>
  <div class="songs-card">
    <div class="img-wrap">
      <img :src="imgUrl+'?param=120y120'" lazy="loaded">
      <div><i class="el-icon-caret-right"></i></div>
    </div>
    <div class="song-content">
      <p class="song-name">{{title}}</p>
      <p class="singer">{{singer}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    singer: String,
    imgUrl: String
  }
}
</script>
<style lang="scss" scoped>
  .songs-card{
    width: calc(33.33% - 12px);
    margin: 6px;
    display: flex;
    transition: .3s all;
    border-radius: 5px;

    .img-wrap{
      width: 64px;
      position: relative;
      img{
        border-radius: 5px;
        display: block;
        width: 100%;
      }
      div{
        @include flex-center();
        @include abs-center();
        width: 24px;
        height: 24px;
        background: rgba(255,255,255,1);
        border-radius: 50%;
        i{
          font-size: 16px;
          color: $theme-color;
        }
      }
    }
    .song-content{
      font-size: 15px;
      padding: 4px 15px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .song-name{
        width: 100%;
        color: var(--font-color-white);
      }
    }
    &:hover{
      background: var(--light-bgcolor);
    }
  }
</style>