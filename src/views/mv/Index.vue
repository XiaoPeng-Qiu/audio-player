<template>
  <div>
    mv id {{id}}
  </div>
</template>
<script>
export default {
  computed: {
    id () {
      return this.$route.params.id 
    }
  }
}
</script>