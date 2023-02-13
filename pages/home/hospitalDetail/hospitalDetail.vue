<template>
	<view>
		<!-- 顶部轮播图 -->
		<view class="position-relative">
			<uni-swiper-dot :info="info" :current="current" field="content" mode="dot" :dotsStyles="dotsStyles">
				<swiper class="swiper-box" :autoplay="true" :circular="true" :interval="3000" @change="change"
					style="height: 50vh">
					<swiper-item v-for="(item ,index) in info" :key="index">
						<view class="swiper-item">
							{{item.content}}
							<image src="" style="width: 100%; height: 50vh" class="bg-primary" mode=""></image>
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
			<!-- 关闭页面图标 -->
			<view
				class="position-absolute top-0 right-0 bg-white rounded-circle mr-5 mt-5 close-image d-flex a-center j-sa"
				@click="closePage">
				<uni-icons type="closeempty" size="28" color="#000000"></uni-icons>
			</view>
			<!-- 收藏图标 -->
			<view
				class="position-absolute bottom-0 right-0 bg-white rounded-circle mr-5 mt-5 icon-lg d-flex a-center j-sa"
				@click="collection" style="margin-bottom: 120rpx;">
				<uni-icons type="heart" size="20" color="#b2bac6"></uni-icons>
			</view>
		</view>
		<!-- 详情页面 -->
		<view class="position-relative bg-white mt--7 py-5  rounded-bottom animate__animated animate__bounceInUp" style="border-radius: 50rpx 50rpx 0 0;">
			<!-- 上 -->
			<view class="px-4">
				<view class="font-weight font-big line-h-sm">
					平顶山第一人民医院
				</view>
				<view class="mt-2">
					<grade rate="4.8" class="" rateTotal="253评论" />
				</view>
				<view>
					医院规格
				</view>
				<view class="d-flex a-center j-sb mt-3 pb-2">
					<view class="" v-for="(item,index) in specList" :key="index">
						<view class=" d-flex a-center">
							<image class="icon-image-small mr-1" :src="item.icon" mode=""></image>
							<text>{{item.total}}</text>
						</view>
						<view class="text-subheading">
							{{item.name}}
						</view>
					</view>
				</view>
			</view>
			<divider states="2" />
			<!-- 中 -->
			<view class="px-4">
				<view class="my-2">
					医院信息
				</view>
				<view class="border rounded-md p-4">
					<view class="main--color d-flex a-center">
						<image src="/static/icon/icon4.png" class="icon-image-small mr-1" mode="">
						</image>
						地址
					</view>
					<view class="text-inquiries mt-1">
						老城区南四环西路119号
					</view>
					<view class="main--color d-flex a-center mt-3">
						<image src="/static/icon/icon5.png" class="icon-image-small mr-1" mode="">
						</image>
						上班时间
					</view>
					<view class="text-inquiries mt-1">
						<view class="">
							周一至周五:
						</view>
						<view class="">
							上午 8:00-12:00 & 下午 13:00-20:00
						</view>
						<view class="">
							周六-周日:
						</view>
						<view class="">
							上午 8:00-12:00 & 下午 13:00-20:00
						</view>
					</view>
				</view>
			</view>
			<!-- 下 -->
			<view class="mt-3 ">
				<view class="px-4">
					<uni-segmented-control :current="panleCur" :values="panleList" @clickItem="onClickItem"
						styleType="text" activeColor="#427CFC"></uni-segmented-control>
				</view>
				<divider states="2" style="margin-top: -13rpx; line-height: 0;" />
				<view class="px-4 mt-2 text-subheading">
					<view v-show="panleCur === 0">
						平顶山市第一人民医院位于河南省平顶山市优越路117号，占地面积4万平方米，建筑面积10万余平方米，始建于1956年，是一所集医疗、教学、科研、预防、保健、康复为一体的三级综合医院，是平顶山市医保定点医院。
					</view>
					<view v-show="panleCur === 1">
						选项卡2的内容
					</view>
					<view v-show="panleCur === 2">
						选项卡3的内容
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: [{
					content: '医院简介'
				}, {
					content: '医院服务'
				}, {
					content: '评论'
				}],
				current: 0,
				dotsStyles: {
					width: 10,
					height: 10,
					bottom: 80,
					border: 'none',
					selectedBackgroundColor: "rgba(255, 255, 255, 1)",
					backgroundColor: "rgba(255, 255, 255,0.3)",
					selectedBorder: "none"
				},
				specList: [{
					icon: "/static/icon/icon1.png",
					total: "340",
					name: "病房 (间)"
				}, {
					icon: "/static/icon/icon2.png",
					total: "134",
					name: "医生 (人)"
				}, {
					icon: "/static/icon/icon3.png",
					total: "4万平方米",
					name: "面积 (平方米)"
				}],
				panleList: ['医院简介', '医院服务', '评论'],
				panleCur: 0
			};
		},
		onLoad(params) {
			// console.log(params.obj);
		},
		methods: {
			//轮播切换
			change(e) {
				this.current = e.detail.current;
			},
			// 关闭当前页
			closePage() {
				uni.navigateBack({
					delta: 1
				})
			},
			// 收藏
			collection() {
				uni.showToast({
					title: '收藏测试按钮',
					icon: 'none'
				})
			},
			onClickItem(e) {
				if (this.panleCur != e.currentIndex) {
					this.panleCur = e.currentIndex;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	/deep/ .uni-swiper__dots-box {
		justify-content: flex-start;
		margin-left: 50rpx;
	}
	/deep/ .segmented-control{
		display: block;
	}
	/deep/ .segmented-control__item{
		margin-right: 40rpx;
	}
</style>
