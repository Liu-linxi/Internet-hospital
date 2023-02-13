<template>
	<!-- 详情各项列表 -->
	<view>
		<view class="ml-2 my-4 pl-2">
			<view class="mt-2">
				<view class="d-flex a-center">
					<image src="/static/icon/number.png" class="icon-image-small mr-2"  mode=""></image>
					<view class="line-h-sm">订单编号</view>
				</view>
				<view class="ml-5 pl-1 line-h-lg main--color font-weight">
					#21091995
				</view>
			</view>
			<view class="mt-2">
				<view class="d-flex a-center">
					<image src="/static/icon/clock.png" class="icon-image-small mr-2" mode=""></image>
					<view class="line-h-sm">下单时间</view>
				</view>
				<view class="ml-5 pl-1 line-h-lg main--color font-weight">
					11:45 AM
				</view>
			</view>
			<view class="mt-2"  :class="status==0?'mb-5':''">
				<view class="d-flex a-center">
					<image src="/static/icon/cart.png" class="icon-image-small mr-2" mode=""></image>
					<view class="line-h-sm">支付方式</view>
				</view>
				<view class="ml-5 pl-1 line-h-lg main--color font-weight" v-show="status!=0">
					微信支付
				</view>
			</view>
			<view class="mt-2">
				<view class="d-flex a-center">
					<image src="/static/icon/order.png" class="icon-image-small mr-2" mode=""></image>
					<view class="line-h-sm">订单内容</view>
				</view>
				<public-consulting-son :medList="2" v-if="model==0"></public-consulting-son>
				<drug-purchase-card :drugList="2" :bottomDiv="false" v-if="model==1"></drug-purchase-card>
				<div class="ml-5 pl-1 line-h-lg main--color font-weight" v-if="model==2">
					PCC护理
				</div>
			</view>
			<view class="" v-if="model==2">
				<div class="mt-2" :class="status==0?'mb-5':''">
					<div class="d-flex a-center">
						<image src="/static/icon/group.png" class="icon-image-small mr-2" mode=""></image>
						<div class="line-h-sm">服务团队</div>
					</div>
					<div class="ml-5 pl-1 line-h-lg main--color font-weight" v-show="status!=0">
						XXX医护服务团队
					</div>
				</div>
				<div class="mt-2">
					<div class="d-flex a-center">
						<image src="/static/icon/clock.png" class="icon-image-small mr-2" mode=""></image>
						<div class="line-h-sm">预约服务时间</div>
					</div>
					<div class="ml-5 pl-1 line-h-lg main--color font-weight">
						2022-10-29 09:00—11:00
					</div>
				</div>
			</view>
		</view>
	</view>
</template>

<script>
	import publicConsultingSon from "./publicConsultingSon"
	import drugPurchaseCard from "@/components/drug-purchase-card/drug-purchase-card.vue"
	export default {
		components:{
			publicConsultingSon,
			drugPurchaseCard
		},
		props:{
			//0咨询 1购药 2医护
			model:{
				type:Number,
				default:0,
			},
			status:{
				type:Number,
				default:0,
			},
			// stateDelivery:{
			// 	type:String,
			// 	default:"未配送",
			// },
		},
		data() {
			return {
				
			}
		},
		methods: {
		},
	}
</script>

<style>
</style>