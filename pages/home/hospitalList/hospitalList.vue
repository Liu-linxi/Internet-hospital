<template>
	<view>
		<divider states="1"/>
		<!-- 主内容列表 -->
		<view class="pb-16">
			<!-- 标题-->
			<view class="ml-4">
				<view class="font-lg line-h-lg">
					医院
				</view>
				<view class="text-secondary line-h-md">
					找到您想去的医院
				</view>
			</view>
			
			<!-- 医生列表 -->
			<view class="mt-2 mx-4">
				<!-- 医生卡片 -->
				<view class="border rounded-big mb-4 p-3 pb-0 position-relative" :class="chooseIndex==index?'border-check':''" v-for="(li, index) in 10" :key="index" @click="chooseIndex=index">
					<!-- 上 -->
					<view class="">
						<image style="height: 400rpx;" class="rounded-lg bg-primary" src="" mode=""></image>
					</view>
					<!-- 下 -->
					<view class="">
						<view class=" d-flex a-center line-h-lg">
							<view class="font-weight font-md">
								平顶山第一人民医院
							</view>
							<view class="ml-2 px-1 rounded-md main--color line-h-md font-sm border-check">
								互联网医院
							</view>
						</view>
						<view class="text-subheading">
							<text>平顶山新华区</text>
							<text class="ml-1">三级甲等</text>
						</view>
						<view class="d-flex a-center j-sb">
							<grade rate="4.8" class="" rateTotal="253评论"/>
							<view class="d-flex a-center" @click="hosDetail(index)">
								<text class="mr-1 main--color">详情</text>
								<uni-icons type="arrow-right" color="#427CFC" size="20"></uni-icons>
							</view>
						</view>
					</view>
					<view class="position-absolute top-0 right-0 bg-white rounded-circle mr-5 mt-5 icon-lg d-flex a-center j-sa" @click.stop="collection(index)">
							<uni-icons type="heart" size="20" color="#b2bac6"></uni-icons>
					</view>
				</view>
			</view>
		</view>
		<!-- 下一步按钮 -->
		<view class="position-fixed bottom-0 w-100 pt-1 pb-3 bg-white">
			<button class="rounded-md py-2 mx-4" type="primary" @click="next">下一步</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				chooseIndex:0,
			};
		},
		onReachBottom(){
			uni.showToast({
				title: '触底加载',
				icon: 'none'
			})
		},
		methods:{
			next(){
				uni.showToast({
					title: '下一步',
					icon: 'none'
				})
			},
			collection(e){
				uni.showToast({
					title: '收藏测试按钮'+e,
					icon: 'none'
				})
			},
			hosDetail(e){
				uni.navigateTo({
					url:"/pages/home/hospitalDetail/hospitalDetail?obj="+e
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
