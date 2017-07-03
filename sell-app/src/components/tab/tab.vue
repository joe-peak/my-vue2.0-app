<template>
  <div class='tab'>
    <router-link class="tab-item" tag='p' :to="{'name':'goods'}">商品</router-link>
    <router-link class="tab-item" tag='p' :to="{'name':'ratings'}">评价</router-link>
    <router-link class="tab-item" tag='p' :to="{'name':'sellers'}">商家</router-link>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  .tab
    width 100%
    height 40px
    font-size 1.4rem
    display flex
    border-bottom 1px solid red
    align-items center
    .tab-item
      flex 1
      &.router-link-active
        color red
</style>
