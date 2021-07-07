<template>
  <div>
    <el-input
      v-model.trim="inputValue"
      placeholder="搜索"
      prefix-icon="el-icon-search"
      @focus="handleFocus"
      @blur="handleBlur"
      @keyup.enter.native="handleKeyup(inputValue)"
    >
    </el-input>
  </div>
</template>
<script>
import { debounce } from '@/utils'
export default {
  data () {
    return {
      inputValue: '',
      debounce: debounce(this.search, 500)
    }
  },
  watch: {
    inputValue () {
      this.debounce()
    }
  },
  methods: {
    search () {
      this.$emit('handleChange', this.inputValue)
    },
    handleFocus () {
      this.$emit('handleFocus')
    },
    handleBlur () {
      this.$emit('handleBlur')
    },
    handleKeyup () {
      this.$emit('handleKeyup')
    }
  }
}
</script>
<style lang="scss" scoped>
  div ::v-deep .el-input .el-input__inner{
    width: 150px;
    height: 24px;
    line-height: 24px;
    font-size: 13px;
    background: var(--header-input-bgcolor);
    border: none;
    color: var(--header-input-color) !important;
    &::placeholder{
      color: var(--header-input-color) !important;
    }
  }
  div ::v-deep .el-input i{
    color: var(--header-input-color);
    line-height: 24px;
  }
</style>