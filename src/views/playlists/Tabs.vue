<template>
  <div class="tabs">
    <ul>
      <li
        v-for="(item, index) of tabs"
        :key="index"
        :ref="index"
        @click="handleLiClick(index)"
      >
        {{item}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    tabs: Array,
    activeTabIndex: Number
  },
  mounted () {
    this.handleTabsClick(0)
  },
  methods: {
    handleLiClick(index){
      this.handleTabsClick(index)
      this.$emit('changeTabIndex', index)
    },
    handleTabsClick (index) {
      for(let item in this.$refs){
        this.$refs[item][0].className = ''
      }
      this.$refs[index][0].className='active'
    }
  }
}
</script>
<style lang="scss" scoped>
  .tabs{
    display: flex;
    padding: 0 6px;
    flex-direction: row-reverse;
    ul{
      display: flex;
      li{
        margin: 13px;
        font-size: 13px;
        color: var(--tab-item-color);
        cursor: pointer;
        &:hover{
          color: var(--tab-item-hover-color);
        }
      }
      li.active{
        color: $theme-color;
      }
    }
  }
</style>