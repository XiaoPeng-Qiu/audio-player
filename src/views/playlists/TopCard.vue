<template>
  <div class="top-wrap">
    <router-link tag="div" :to="'/playlist/'+id" class="top-card">

      <div class="img-wrap">
        <img :src="imgUrl+'?param=280y280'">
      </div>
      <div class="content">
        <span>精品歌单</span>
        <h3>{{name}}</h3>
        <p>{{desc}}</p>
      </div>

    </router-link>
    <div class="background" :style="{backgroundImage: 'url('+imgUrl+'?param=280y280)'}"></div>
  </div>
</template>
<script>
export default {
  props: {
    id:Number,
    name: String,
    desc: String,
    imgUrl: String
  }
}
</script>
<style lang="scss" scoped>
  .top-wrap{
    position: relative;
    margin: 0 6px;
    border-radius: 6px;
    overflow: hidden;
    margin-bottom: 17px;
    .background{
      @include abs-paved(1);
      background-repeat: no-repeat;
      background-size: cover;
      filter: blur(15px);
    }
    .top-card{
      cursor: pointer;
      position: relative;
      z-index: 3;
      display: flex;
      padding: 16px;
      .img-wrap{
        width: 160px;
        padding-right: 10px;
        img{
          width: 100%;
          display: block;
        }
      }
      .content{
        flex: 1;
        span{
          display: inline-block;
          padding: 5px 17px;
          margin-bottom: 15px;
          color: #e7aa5a;
          border: 1px solid currentColor;
          border-radius: 5px;
        }
        h3{
          margin-bottom: 10px;
          font-size: 17px;
          font-weight: normal;
          color: #fff;
          width: 300px;
          @include text-ellipsis;
        }
        p{
          @include text-ellipsis-multi(4);
          font-size: 13.5px;
          line-height: 1.4;
          color: rgba(255,255,255,.5)
        }
      }
    }
    &::after{
      content: '';
      @include abs-paved(2);
      background: rgba(0,0,0,0.5);
    }
  }
</style>