<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from 'components/my-header/my-header'
import Tab from 'components/tab/tab'
import Player from 'components/player/player'
export default {
  components: {
    MHeader, Tab,Player
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
