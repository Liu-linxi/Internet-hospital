<template>
	<view>
		<view class="">
			<image src="/static/introduce.jpg" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(obj) {
			if(obj.title){
				//修改导航页面
				uni.setNavigationBarTitle({
					title:obj.title
				});
			}
		},
		onReady() {
			
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	uni-app, uni-page-head .uni-page-head{
	content: attr(data-text) !important;
	color: green !important;
	-webkit-mask-image: -webkit-gradient(linear, 4 0, 0 bottom, from(#008000), to(rgba(240, 255, 255, 0.4))) !important;
}
</style>
