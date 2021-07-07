<template>
  <div class="mode">
    <!-- 播放方式 -->
    <el-popover
      placement="top"
      trigger="hover"
    >
      <p>循环播放</p>
      <span slot="reference">
        <i class="iconfont mode-item">&#xe608;</i>
      </span>
    </el-popover>
    <!-- 播放列表 -->
    <el-popover
      placement="top"
      trigger="hover"
    >
      <p>已更新列表</p>
      <span slot="reference">
        <i class="iconfont mode-item">&#xe634;</i>
      </span>
    </el-popover>
    <!-- 音量 -->
    <div class="volume">
      <i class="iconfont">&#xe753;</i>
      <el-slider v-model="value3" :show-tooltip="false"></el-slider>
    </div>
    <i class="iconfont mode-item">&#xe629;</i>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value3: 50,
    }
  }
}
</script>
<style lang="scss" scoped>
  .mode{
    width: 50%;
    height: 42px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .mode-item{
      font-size: 20px;
      display: block;
      margin-right: 20px;
      cursor: pointer;
    }
    .volume{
      display: flex;
      width: 160px;
      align-items: center;
      margin-right: 20px;
      i{
        display: block;
        margin-right: 10px;
        font-size: 20px;
        cursor: pointer;
      }
    }
    .volume ::v-deep .el-slider{
      flex: 1;
      .el-slider__runway{
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
      
    }
  }
</style>