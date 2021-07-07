<template>
  <div>
    <Header/>
    <div class="main">
      <div class="main-menu">
        <Menu/>
      </div>
      <div class="main-content">
        <router-view/>
      </div>
    </div>
    <mini-player></mini-player>
  </div>
</template>
<script>
import Header from './header/Header'
import Menu from './menu/Menu'
import MiniPlayer from './miniPlayer/MiniPlayer'
export default {
  components: {
    Header,
    Menu,
    MiniPlayer
  }
}
</script>
<style lang="scss" scoped>
  .main{
    position: fixed;
    top: $header-height;
    left: 0;
    right: 0;
    bottom: $miniPlayer-height;
    display: flex;
    min-width: $body-min-width;
    .main-menu{
      width: $menu-width;
    }
    .main-content{
      flex: 1;
      background: var(--body-bgcolor);
      overflow-y: auto
    }
  }
</style>