<template>
  <div class="user">
    <div class="noLogin">
      <i class="el-icon-user-solid"></i>
      <span>未登录</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .user{
    padding: 16px 16px 12px;
    .noLogin{
      height: 30px;
      display: flex;
      align-items: center;
      i{
        font-size: 25px;
        padding-right: 6px;
      }
    }
  }
</style>