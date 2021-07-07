<template>
  <div id="app">
    <layout/>
  </div>
</template>
<script>
import layout from './views/layout/Index'
export default {
  components: {
    layout
  }
}
</script>
<style lang="scss">
  #app{
    line-height: 1.2;
    background-color: var(--body-bgcolor);
    color: var(--font-color);
    min-width: $body-min-width;
  }
  
</style>
