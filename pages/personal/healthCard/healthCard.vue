<template>
	<!--  电子健康卡/添加就诊人  -->
	<view>
		<uni-segmented-control :current="tabIndex" :values="tabs" @clickItem="onClickItem" styleType="text"
			activeColor="#427CFC" class="position-fixed w-100 bg-white" style="z-index: 1;"></uni-segmented-control>
		<view style="height: 100rpx;"></view>
		<!-- 电子健康卡 -->
		<view v-show="tabIndex === 0" class="px-4">
			<view class="">
				<health-card v-if="showEmpty" :cardList="2" @getData="getData"></health-card>
				<view class="text-center" v-if="!showEmpty">
					<image src="/static/personalCenter/healthCard/nocard.png" style="width: 200rpx;height: 260rpx;" mode=""></image>
					<view class="text-inquiries">
						暂无电子健康卡
					</view>
				</view>
			</view>
			
			<navigator url="/pages/personal/healthCard/addHealthCard" hover-class="navigator-hover">
				<button type="primary" class="rounded-circle">
					<uni-icons type="plusempty" size="18" color="#FFFFFF" class="mr-2"></uni-icons>
					添加电子健康卡
				</button>
			</navigator>
			<view class="text-letter1 text-center line-h-big font-md">
				您还可以添加<text class="text-danger font-weight">5</text>张卡
			</view>
			<view class="underline text-letter1 text-center main--color font-weight">
				<view class="">	已有电子健康卡，点击一键授权</view>
				<view class="mt-2" @click="tabIndex=1">选择就诊人</view>
				<navigator url="/pages/home/index/index" open-type="redirect" hover-class="other-navigator-hover">
					<view class="mt-2 pb-2">返回首页</view>
				</navigator>
			</view>
		</view>
		<!-- 就诊人列表 -->
		<view v-show="tabIndex === 1">
			<view class="mx-2">
				<healthCard-son :peoList="4"></healthCard-son>
			</view>
		</view>
	</view>
</template>

<script>
	import healthCard from "@/components/health-card/health-card"
	import healthCardSon from "./healthCardSon"
	export default {
		components:{
			healthCard,
			healthCardSon
		},
		data() {
			return {
				tabs: ['电子健康卡', '就诊人列表'],
				tabIndex: 0,
				showEmpty:true,
			}
		},
		methods: {
			// 切换模式
			onClickItem(e) {
				if (this.tabIndex != e.currentIndex) {
					this.tabIndex = e.currentIndex;
				}
			},
			// 健康卡点击事件勿改名字
			getData(item){
				uni.showToast({
					title: "点击了"+item,
					duration: 2000
				});
			},
		}
	}
</script>

<style scoped>
	.underline{
		text-decoration: underline;
	}
	.relap{
		border: 2rpx solid #427CFC;
		line-height: 1;
		padding: 5rpx 10rpx;
		color: #427CFC;
		margin-left: 20rpx;
	}
</style>
