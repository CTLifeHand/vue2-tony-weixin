<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
			<keep-alive>
				<router-view v-if="$route.meta.keepAlive"></router-view>
			</keep-alive>
		</transition>
		<transition name="router-fade" mode="out-in">
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		</transition>
  </div>
</template>

<script>
/* 这个组件是Router使用的 */
export default {
  name: 'app'
}
</script>

<style lang="scss">
/* 这个style应该不会作用于外面index的 */
#app {
  .router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .2s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
}
</style>
