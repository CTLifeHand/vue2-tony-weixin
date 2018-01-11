<template>
    <section>
		<!-- 头部 -->
		<Nav logo-part="true" search-part="true" add="true"></Nav>
    <!-- <h1>通讯录</h1>
    <h2>发现</h2> -->
		<find-me></find-me>
		<!-- 底部导航 -->
		<TarBar></TarBar>
    <transition name="router-show">
		    <router-view></router-view>
		</transition>
	</section>
</template>

<script>
import Nav from '../../components/Nav'
import findMe from '../../components/Setting'
import TarBar from '../../components/TarBar'
export default {
  data () {
    return {
      newtext: true
    }
  },
  components: {
    Nav,
    findMe,
    TarBar
  }
}
</script>

<style lang="scss">

</style>
