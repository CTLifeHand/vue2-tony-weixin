<template>
    <section>
		<!-- 头部 -->
		<Nav logo-part="true" search-part="true" add="true"></Nav>
    <h1>通讯录</h1>
    <h2>传送文件</h2>
		<!-- 底部导航 -->
		<TarBar></TarBar>
	</section>
</template>

<script>
import Nav from '@/components/Nav'
import TarBar from '@/components/TarBar'
export default {
  components: {
    Nav,
    TarBar
  }
}
</script>

<style lang="scss">

</style>
