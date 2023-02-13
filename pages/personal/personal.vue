<template>
	<view class="min-page">
		<!-- 底部导航栏 -->
		<tabbar activeIndex="3" />
		<!-- 页面主内容 -->
		<view class="pb-2">
			<!-- 顶部卡个人信息 -->
			<view class="main-bg-color p-3 pb-22 rounded-bottom d-flex a-center j-sb">
				<view class="d-flex a-center">
					<view>
						<image class="doctor-image rounded-circle" style="background-color: #55aaff;" src="" mode="">
						</image>
					</view>
					<view class="ml-3 text-white font-weight text-letter1">
						<view class="font-md">
							张三
						</view>
						<view class="">
							15137111111
						</view>
					</view>
				</view>
				<view class="d-flex a-center" @click="tohealCard">
					<view class="text-letter1 text-white font">
						<view class="line-h-md">
							电子健康卡
						</view>
						<view class="line-h-md">
							添加就诊人
						</view>
					</view>
					<image  style="width: 90rpx;height: 90rpx;" src="/static/personalCenter/icon1.png" mode=""></image>
				</view>
			</view>
			<!-- 我的问诊 -->
			<view class="mx-3 p-3 mt--18 rounded-md user-shadow" style="background-color: #F5FAFD;">
				<view class="border-left pl-1 line-h mt-1 mb-3 ">
					我的问诊
				</view>
				<!-- <uni-section style="background-color: #F5FAFD;" title="我的问诊" type="line" titleFontSize="18px">
					<template v-slot:right>
						<view class="d-flex a-center" @click="tohealCard">
							<image class="mr-2 icon-image-small" src="/static/personalCenter/icon1.png" mode=""></image>
							电子健康卡
						</view>
					</template>
				</uni-section> -->
				<view class="d-flex a-center j-sa mb-3">
					<view class="text-center" v-for="(order,index) in orderStatusList" :key="index"
						@click="assort(order.url)">
						<view>
							<image class="icon-lg" :src="order.icon" mode=""></image>
						</view>
						<view class=" text-main">
							{{order.name}}
						</view>
					</view>
				</view>
				<view class="d-flex a-center j-sb mb-1">
					<view class="w-48 mainLight-bg-color line-h-big d-flex"  v-for="(small,smallIndex) in smallList" :key="smallIndex" @click="smallAssort(small.url)">
						<view class="d-flex a-center py-1" style="margin:0 auto;">
							<image class="icon-image mr-2" :src="small.icon" mode=""></image>
							{{small.name}}
						</view>
					</view>
				</view>
			</view>
			<!-- 订单管理 -->
			<view class="mx-3 py-2 px-4 mt-4 rounded-md user-shadow">
				<view class="" v-for="(choose1,chooseIndex) in chooseList1" :key="chooseIndex" @click="choose1Assort(choose1.url,chooseIndex)">
					<view class="d-flex a-center my-1 line-h-big">
						<image class="icon-image mr-2" :src="choose1.icon" mode=""></image>
						{{choose1.name}}
					</view>
					<divider states="2" v-show="chooseIndex!=chooseList1.length-1"/>
				</view>
			</view>
			<!-- 关于 -->
			<view class="mx-3 py-2 px-4 mt-4 rounded-md user-shadow">
				<view class="" v-for="(choose2,chooseIndex) in chooseList2" :key="chooseIndex" @click="choose2Assort(choose2.url)">
					<view class="d-flex a-center my-1 line-h-big">
						<image class="icon-image mr-2" :src="choose2.icon" mode=""></image>
						{{choose2.name}}
					</view>
					<divider states="2" v-show="chooseIndex!=chooseList2.length-1"/>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		orderStatusList,
		smallList,
		chooseList1,
		chooseList2
	} from './personal.js';
	export default {
		data() {
			return {
				orderStatusList,
				smallList,
				chooseList1,
				chooseList2,
			};
		},
		methods: {
			assort(url) {
				uni.navigateTo({
					url,
				})
			},
			smallAssort(url) {
				uni.navigateTo({
					url,
				})
			},
			choose1Assort(url,index) {
				uni.navigateTo({
					url,
				})
			},
			choose2Assort(url) {
				uni.navigateTo({
					url,
				})
			},
			// 跳转电子健康卡
			tohealCard(){
				uni.navigateTo({
					url:"/pages/personal/healthCard/healthCard"
				})
			},
		}
	}
</script>

<style scoped>
	.min-page {
		height: calc(100vh - 270rpx);
		overflow: scroll;
	}
	.border-left{
		border-width: 4rpx;
		border-color: #427CFC;
	}
</style>
