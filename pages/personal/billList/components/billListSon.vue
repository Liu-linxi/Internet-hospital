<template>
	<view>
		<!-- 订单列表 -->
		<view class="mx-3">
			<view class="px-4 py-2 bg-circle mt-3 rounded-md" v-for="(item, index) in dataList" :key="index">
				<view class="d-flex a-center">
					<image src="/static/order/doc.png" mode="widthFix" style="width: 50rpx;"></image>
					<view class="ml-2">
						<view class="line-h-md">订单信息</view>
						<view class="line-h font-sm text-subheading">订单描述</view>
					</view>
				</view>
				<view class="d-flex j-sb mt-2">
					<view class="truncate">
						<view class="truncate">
							订单号:
							<text class="ml-1">12313</text>
						</view>
						<view class="truncate">
							内容:
							<text class="ml-2" v-show="active==0">张青医生开具的处方单</text>
							<text class="ml-2" v-show="active==1">阿莫西林、连花清瘟等药品订单</text>
							<text class="ml-2" v-show="active==2">上门核酸</text>
						</view>
						<view class="truncate">
							订单日期:
							<text class="ml-1">2008-07-21</text>
						</view>
					</view>
					<view class="btn">
						<button type="primary" size="mini" class="rounded-circle text-nowrap" style="background-color: #427CFC;" @click="detail(item)">申请开票</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			//数据列表
			dataList: {
				// type:Array,
			},
			// 标头选中
			active: {
				type: Number
			}
		},
		data() {
			return {}
		},
		methods: {
			detail(item) {
				uni.navigateTo({
					url:"/pages/personal/billList/billDetail"
				})
			},
		},
	}
</script>

<style scoped lang="scss">
	.bg-circle {
		background-size: calc(100% - 50rpx) 50rpx;
		background-position: left, right;
		background-image: radial-gradient(circle at left center,
				transparent,
				transparent 16rpx,
				#fff 16rpx),
			radial-gradient(circle at right center,
				transparent,
				transparent 16rpx,
				#fff 16rpx);
		background-repeat: repeat-y;
		filter: drop-shadow(0rpx 4rpx 6rpx #a9b6c3);
	}
</style>
