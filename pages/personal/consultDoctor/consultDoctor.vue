<template>
	<view class="">
		<divider states="1"/>
		<!-- 主内容列表 -->
		<view class="mx-4 font-lg line-h-big">
			咨询过的医生
		</view>
		<view class="mx-4">
			<!-- 医生卡片 -->
			<view class="border rounded-big mb-4" v-for="(li, index) in 5" :key="index" @click="toEvaluate(li)">
				<!-- 上 -->
				<view class="p-2 pb-1">
					<view class="d-flex a-center">
						<image class="doctor-image rounded-md" src="/static/home/doc1.png" mode=""></image>
						<view class="ml-3">
							<view class="font-lg font-weight line-h-md">
								张青
							</view>
							<view class="text-subheading font-md d-flex a-center line-h-sm">
								中医科
								<grade rate="4.8" class="ml-2" rateTotal="253评论"/>
							</view>
						</view>
					</view>
					<view class="text-subheading line-h-lg d-flex a-center">
						<image src="/static/personalCenter/clock.png" class="icon-image-small mr-1" mode=""></image>
						<text class="mr-2">问诊时间：</text>
						<text class="text-inquiries">2022-08-22 12:12:12</text>
					</view>
				</view>
				<divider states="2"/>
				<!-- 下 -->
				<view class="d-flex a-center j-sb p-2">
					<view class="">
						<view v-show="li==1" class="d-flex a-center">
							<image style="width: 45rpx;" src="/static/personalCenter/image.png" mode="widthFix"></image>
							<view class="text-inquiries ml-1">图文问诊 </view>
						</view>
						<view v-show="li==2" class="d-flex a-center">
							<image style="width: 45rpx;" src="/static/personalCenter/phone.png" mode="widthFix"></image>
							<view class="text-inquiries ml-1">电话问诊 </view>
						</view>
						<view v-show="li==3" class="d-flex a-center">
							<image style="width: 45rpx;" src="/static/personalCenter/video.png" mode="widthFix"></image>
							<view class="text-inquiries ml-1">视频问诊 </view>
						</view>
					</view>
					<view class="main--color d-flex a-center">
						<text class="mr-1">去评价</text>
						<uni-icons type="arrow-right" color="#427CFC" size="18"></uni-icons>
					</view>
				</view>
			</view>
		</view>
	<uni-load-more :status="status" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: 'more',//more loading noMore
			};
		},
		onReachBottom(){
			uni.showToast({
				title: '触底加载',
				icon: 'none'
			})
			this.status="loading";
			setTimeout(()=>{
				this.status="noMore";
			},2000)
		},
		methods:{
			toEvaluate(){
				uni.navigateTo({
					url:'/pages/personal/evaluate/evaluate'
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
</style>
