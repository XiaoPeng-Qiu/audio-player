<template>
  <div class="mini-player">
    <Song :song="currentSong" />
    <Control/>
    <Mode/>
    <audio 
      controls 
      class="player" 
      src="https://music.163.com/song/media/outer/url?id=1463165983.mp3"
      ref="player"
    />
    <div class="schedule">
      <el-slider v-model="value" :show-tooltip="false"></el-slider>
    </div>
  </div>
</template>
<script>
import Song from './Song'
import Control from './Control'
import Mode from './Mode'
import { mapState } from '@/store/helper/music'
export default {
  data () {
    return {
      value: 0
    }
  },
  components: {
    Song,
    Control,
    Mode
  },
  computed: {
    ...mapState(['playing','currentSong'])
  },
  watch:{
    playing(newVal){
      // this.$nextTick(()=>{
        console.log('1111')
        newVal ? this.$refs.player.play() : this.$refs.player.pause()
      // })
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
  .mini-player{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: $mini-player-z-index;
    height: $miniPlayer-height;
    background: var(--body-bgcolor);
    display: flex;
    padding: 9px 40px 9px 20px;
    border-top: 1px solid #01a8a1;
    .schedule{
      position: absolute;
      top: -2px;
      left: 0;
      right: 0;
    }
    .schedule ::v-deep .el-slider__runway{
      margin: 0;
      height: 2px;
      background: var(--progress-bgcolor);
      .el-slider__bar{
        height: 2px;
        background: $theme-color;
      }
      .el-slider__button-wrapper{
        width: 32px;
        height: 32px;
        cursor: pointer;
        .el-slider__button{
          width: 13px;
          height: 13px;
          border: 0;
          background: $theme-color;
          cursor: pointer;
          &:hover{
            transform: scale(1.1);
          }
        }
      }
    }
    .player{
      position: fixed;
      top: 200px;
      right: 20px;
      background: red;
    }
  }
</style>