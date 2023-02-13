<template>
	<view>
		<view class="font-lg font-weight line-h-big mx-5">
			订单支付成功
		</view>
		<view class="mx-5 position-relative">
			<image src="/static/icon/payBg.png" class="w-100" mode="widthFix"></image>
			<view class="position-absolute top">
				<view class="d-flex a-center">
					<image src="/static/icon/number.png" class="icon-image-small mr-2" mode=""></image>
					订单编号
				</view>
				<view class="main--color ml-5 pl-1 font-weight">
					#204512021
				</view>
			</view>
			<view class="position-absolute btm">
				<view class="d-flex a-center">
					<image src="/static/icon/compass.png" class="icon-image-small mr-2" mode=""></image>
					订单编号
				</view>
				<view class="main--color ml-5 pl-1 font-weight">
					微信支付
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.top{
	top: 17%;
	left: 17%;
}
.btm{
	top: 57%;
	left: 17%;
}
</style>
