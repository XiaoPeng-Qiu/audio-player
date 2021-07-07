<template>
  <div class="tab">
    <ul>
      <li
        :class="{active:showTabItem}"
        @click="switchTab(true)"
      >歌曲列表</li>
      <li
        :class="{active:!showTabItem}"
        @click="switchTab(false)"
      >评论(10)</li>
    </ul>
    <Search v-if="showTabItem"></Search>
  </div>
</template>
<script>
import Search from '@/components/Search'
export default {
  data () {
    return {
      showTabItem: this.showTable
    }
  },
  props: {
    showTable: Boolean
  },
  methods:{
    switchTab (status) {
      this.showTabItem = status
      this.$emit('changeTabStatus', status)
    }
  },
  components: {
    Search
  }
}
</script>
<style lang="scss" scoped>
  .tab{
    margin: 0 40px;
    height: 44px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--border);
    ul{
      display: flex;
      li{
        font-size: 16px;
        color: var(--tab-item-color);
        margin: 0 12px;
        line-height: 40px;
        border-bottom: 2.5px solid transparent;
        cursor: pointer;
      }
      li.active{
        font-weight: blod;
        border-bottom: 2px solid #d33a31;
        color: #d33a31;
      }
    }

  }
  .tab ::v-deep .el-input .el-input__inner{
    background: var(--input-bgcolor) !important;
    color: var(--input-color) !important;
    &::placeholder{
      color: var(--input-color) !important;
    }
  }
  .tab ::v-deep .el-input i{
    color: var(--input-color);
  }
</style>