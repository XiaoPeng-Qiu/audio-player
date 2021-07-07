<template>
  <router-link tag="div" :to="'/playlist/' + id" class="playlists-card">
    <div class="img-wrap">
      <el-image :src="imgUrl + '?param=400y400'" lazy></el-image>
      <div class="desc">
        <p>{{desc}}</p>
      </div>
      <div class="play-icon"><i class="el-icon-caret-right"></i></div>
    </div>
    <p class="title">{{title}}</p>
  </router-link>
</template>
<script>
export default {
  props: {
    id: Number,
    title: String,
    desc: String,
    imgUrl: String
  }
}
</script>
<style lang="scss" scoped>
  .playlists-card{
    width: calc(20% - 12px);
    margin: 4px 6px 30px;
    cursor: pointer;
    
    .img-wrap{
      position: relative;
      border-radius: 5px;
      overflow: hidden;
      margin-bottom: 8px;
      height: 0;
      padding-bottom: 100%;
      img{
        display: block;
        width: 100%;
      }

      .desc{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.4);
        transition: .3s;
        transform: translateY(-100%);
        padding: 6px;

        p{
          font-size: 13px;
          color: #fff;
          @include text-ellipsis-multi(3);
        }
      }
      .play-icon{
        position: absolute;
        right: 5px;
        bottom: 5px;
        border-radius: 50%;
        background: rgba(255,255,255,.5);
        width: 33px;
        height: 33px;
        @include flex-center;
        opacity: 0;
        transition: .3s ease opacity;

        i{
          font-size: 20px;
          color: $theme-color;
        }
      }
      
      &:hover
        .desc{
          transform: translateY(0);
        }
      
      &:hover
        .play-icon{
          opacity: 1;
        }
    }

    .title{
      font-size: 14px;
      @include text-ellipsis();
    }
  }
</style>