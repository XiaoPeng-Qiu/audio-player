<template>
  <div class="theme">
    <el-popover
    placement="bottom"
    width="200"
    trigger="click"
    popper-class="themes"
  >
    <div class="theme-weapper">
      <div
        class="theme-item"
        v-for="(item, key, index) of themes"
        @click="changeTheme(key)"
        :key="index"
      >
        <div :style="item.style"></div>
        {{item.title}}
      </div>
    </div>
    <el-button slot="reference"><i class="iconfont">&#xe625;</i></el-button>
  </el-popover>
    
  </div>
</template>
<script>
import variables from 'styles/themes/variables.js'
import variablesWhite from 'styles/themes/variables-white.js'
import variablesRed from 'styles/themes/variables-red.js'
export default {
  created () {
    this.themes = {
      dark: {
        title: "深色",
        file: variables,
        style: {
          backgroundColor: "#202020"
        }
      },
      white: {
        title: "浅色",
        file: variablesWhite,
        style: {
          backgroundColor: "#F6F6F6",
          border: "1px solid #EBEAEA"
        }
      },
      red: {
        title: "红色",
        file: variablesRed,
        style: {
          backgroundColor: "#D33A31"
        }
      }
    }
    this.changeTheme(localStorage.getItem('__theme__') || 'white')
  },
  methods: {
    changeTheme (theme) {
      Object.keys(this.themes[theme].file).forEach(key => {
        document.documentElement.style.setProperty(key, this.themes[theme].file[key])
      })
      localStorage.setItem('__theme__', theme)
    }
  }
}
</script>
<style lang="scss">
  .theme{
    .el-button{
      width: 25px;
      height: 25px;
      background: transparent;
      border: 0;
      padding: 0;
      border-radius: 50%;
      margin-left: 20px;
      @include flex-center();
      &:focus{
        color: #000;
        border-color: var(--round-hover-bgcolor);
        background-color: var(--round-hover-bgcolor);
      }
      &:hover{
        background: var(--round-hover-bgcolor);
      }
      i{
        color: var(--header-font-color);
      }
    }
  }
  .themes{
    .theme-weapper{
      @include flex-center();
      .theme-item{
        text-align: center;
        cursor: pointer;
        div{
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background: red;
          margin: 0 auto 4px;
        }
        + div{
          margin-left: 15px;
        }
      }
    }
  }
</style>