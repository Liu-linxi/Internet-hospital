<template>
	<view>
		<view class="mx-3 pt-3 pb-14">
			<view class="d-flex a-center">
				<image src="/static/order/doc.png" style="width: 45rpx ; height: 56rpx;margin-right: 10rpx;" mode=""></image>
				<text class="ml-1 font-weight">医护订单信息</text>
			</view>
			<public-item :model="2"></public-item>
		</view>
		<public-buttons :status="status" :model='2' @toPay="toPay" @toCancel="toCancel"  @toEvaluate="toEvaluate" @toConsult="toConsult"></public-buttons>
	</view>
</template>

<script>
	import publicItem from "./components/publicItem"
	import publicButtons from "./components/publicButtons"
	export default {
		name: '',
		components: {
			publicItem,
			publicButtons
		},
		data() {
			return {
				status:0,
			}
		},
		onLoad() {
			// 模拟生成订单随机状态
			this.status=Math.floor(Math.random()*4);
			console.log(this.status)
		},
		methods: {
			toPay(){
				uni.showToast({
					title:"去支付"
				})
			},
			toCancel(){
				uni.showToast({
					title:"取消订单"
				})
			},
			toEvaluate(){
				uni.showToast({
					title:"去评价"
				})
			},
			toConsult(){
				uni.showToast({
					title:"再次咨询"
				})
			},
		},
	}
</script>

<style>
</style>
