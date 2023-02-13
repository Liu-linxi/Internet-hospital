<template>
	<!-- 配送公共组件 -->
	<view>
		<view class="mt-2 ml-2 pl-2">
			<view class="d-flex a-center">
				<image src="/static/icon/clock.png" mode="" class="icon-image-small mr-2"></image>
				<view class="line-h-sm">预计配送时间</view>
			</view>
			<view class="ml-5 pl-1 line-h-lg main--color font-weight"  v-show="stateDelivery=='配送中'">
				2022-10-29 11:58
			</view>
		</view>
		<view class="text-subheading mt-2 font-weight border text-center rounded-md  line-h-big" v-show="stateDelivery=='未配送'||status==0||status==3">
			配送状态
			<uni-icons type="forward" size="18" color="#99a6b8"></uni-icons>
		</view>
		<view class="main--color mt-2 font-weight border text-center rounded-md  line-h-big" v-show="stateDelivery=='配送中'&&(status==1||status==2)" @click="tologisti">
			配送状态
			<uni-icons type="forward" size="14" color="#427CFC"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			stateDelivery:{
				type:String,
				default:"未配送",
			},
			status:{
				type:Number,
				default:0,
			},
		},
		data() {
			return {
				
			}
		},
		methods: {
			tologisti(){
				uni.navigateTo({
					url:"/pages/personal/orderList/logisticsStatus"
				})
			}
		},
	}
</script>

<style>
</style>