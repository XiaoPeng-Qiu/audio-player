<template>
  <div class="history">
    <div @click="$router.go(-1)"><i class="el-icon-arrow-left"></i></div>
    <div class="offset" @click="$router.go(1)"><i class="el-icon-arrow-right"></i></div>
    <!-- <div><i class="el-icon-arrow-down"></i></div> -->
  </div>
</template>
<style lang="scss" scoped>
  .history{
    @include flex-center();
    padding-left: 60px;
    width: 130px;
    div{
      &:hover{
        background: var(--round-hover-bgcolor); 
      }
      width: 25px;
      height: 25px;
      border-radius: 50%;
      transition: .3s;
      @include flex-center();
      i{
        font-size: 16px;
        color: var(--header-font-color);
      }
    }
    .offset{
      margin-left: 16px;
    }
  }
</style>