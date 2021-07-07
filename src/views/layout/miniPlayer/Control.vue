<template>
  <div class="control">
    <i class="iconfont arrow">&#xe6ac;</i>
    <div @click="switchState">
      <i class="el-icon-caret-right" v-show="!playing"></i>
      <i class="iconfont" v-show="playing">&#xe607;</i>
    </div>
    <i class="iconfont arrow">&#xe6a9;</i>
  </div>
</template>
<script>
import {mapMutations,mapState} from '@/store/helper/music'
export default {
  computed: {
    ...mapState(['playing'])
  },
  methods: {
    ...mapMutations(['setPlaying']),
    switchState(){
      this.setPlaying(!this.playing)
    }
  }
}
</script>

<style lang="scss" scoped>
  .control{
    position: fixed;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 210px;
    height: 64px;
    padding-bottom: 2px;
    div{
      @include flex-center;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: $theme-color;
      cursor: pointer;
      i{
        font-size: 27px;
        color: #fff;
      }
    }
    .arrow{
      cursor: pointer;
      color: $theme-color;
      font-size: 27px;
    }
  }
</style>