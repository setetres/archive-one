<template>
  <Nuxt />
</template>
<script>
export default {
  beforeRouteLeave(to, from, next) {
    this.$nextTick(() => {
      next()
    })
  },

  head() {
    return {
      title: 'Sete Três — Archive One',
    }
  },

  mounted() {
    this.$nextTick(() => {})
  },
}
</script>
