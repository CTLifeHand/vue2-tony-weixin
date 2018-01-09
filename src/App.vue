<template>
  <div id="app">
    <!-- 所以可以配合 <transition> 和 <keep-alive> 使用
      https://router.vuejs.org/zh-cn/api/router-view.html -->
    <transition name="router-fade" mode="out-in">
			<keep-alive> <!-- 需要缓存数据 -->
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
