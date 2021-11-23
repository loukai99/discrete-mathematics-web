<template>
  <div id="discuss"></div>
</template>

<script>
import Valine from 'valine'
export default {
  name: 'Discuss',
  data () {
    return {
      valine: null
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.valine = new Valine({
        el: '#discuss',
        appId: 'FF9b2lUsKuL2U0sQ6B0264y0-gzGzoHsz',
        appKey: '6ydS2JnQiC4C5ktlRysFg4wa',
        path: this.$route.path
      })
    })
  },
  watch: {
    $route (to, from) {
      if (from.path !== to.path) {
        this.valine && this.valine.setPath(to.path)
      }
    }
  }
}
</script>

<style scoped>

</style>
