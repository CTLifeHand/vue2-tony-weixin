<template>
    <section>
		<!-- 头部 -->
		<Nav logo-part="true" search-part="true" add="true"></Nav>
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
  components: {
    Nav,
    findMe,
    TarBar
  }
}
</script>

<style lang="scss">
	@import "../../style/public";
	.router-show-enter-active,.router-show-leave-active{
		transition: all .4s;
	}
	.router-show-enter,.router-show-leave-active{
		transform:translateX(100%)
	}
</style>
