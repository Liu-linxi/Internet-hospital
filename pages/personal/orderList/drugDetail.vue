<template>
	<view>
		<view class="mx-3 pt-3 pb-14">
			<view class="d-flex a-center">
				<image src="/static/order/doc.png" style="width: 45rpx ; height: 56rpx;margin-right: 10rpx;" mode=""></image>
				<text class="ml-1 font-weight">{{stateType}}订单信息</text>
			</view>
			<!-- 配送显示内容 -->
			<public-delivery v-show="stateType=='配送'" :stateDelivery="stateDelivery" :status="status"></public-delivery>	
			<public-item :status="status" :model="1"></public-item>
		</view>
		<public-buttons :stateType="stateType" :status="status" :model='1' @toPay="toPay" @toCancel="toCancel" @toConsult="toConsult"></public-buttons>
	</view>
</template>

<script>
	import publicDelivery from "./components/publicDelivery"
	import publicItem from "./components/publicItem"
	import publicButtons from "./components/publicButtons"
	export default {
		name: '',
		components: {
			publicDelivery,
			publicItem,
			publicButtons
		},
		data() {
			return {
				stateType:"配送",
				stateDelivery:"配送中",
				status:0,
			}
		},
		onLoad() {
			// 模拟生成"自取/配送"随机状态
			this.stateType=Boolean(Math.floor(Math.random()*2)) ? "自取":"配送";
			console.log(this.stateType)
			// 配送状态控制
			this.stateDelivery=Boolean(Math.floor(Math.random()*2)) ? "未配送":"配送中";
			console.log(this.stateDelivery)
			// 模拟生成订单随机状态
			this.status=Math.floor(Math.random()*4);
			console.log(this.status)
		},
		methods: {
			toPay(){
				uni.showToast({
					title:this.stateType+"去支付"
				})
			},
			toCancel(){
				uni.showToast({
					title:this.stateType+"取消订单"
				})
			},
			toConsult(){
				uni.showToast({
					title:this.stateType+"再次咨询"
				})
			},
		},
	}
</script>

<style>
</style>
