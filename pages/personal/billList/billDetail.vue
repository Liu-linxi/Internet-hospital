<template>
	<view class="mx-2 pt-3">
		<view class="bg-circles rounded-lg px-2 py-3">
			<view class="d-flex a-center mt-2">
				<image src="/static/order/doc.png" mode="widthFix" style="width: 45rpx;"></image>
				<view class="ml-1 font-weight">开票信息</view>
			</view>
			<view class="mt-1 line-h-lgder">
				<view class="d-flex a-center">
					<view class="w-22 text-right font-weight">
						姓名：
					</view>
					<view class="border-dott pl-1">
						李安元
					</view>
				</view>
				<view class="d-flex a-center">
					<view class="w-22 text-right font-weight">
						税号：
					</view>
					<view class="border-dott pl-1">
						02325633233332323652
					</view>
				</view>
				<view class="d-flex a-center">
					<view class="w-22 text-right font-weight">
						商品名称：
					</view>
					<view class="border-dott pl-1">
						阿莫西林、连花清瘟药品订单
					</view>
				</view>
				<view class="d-flex a-center">
					<view class="w-22 text-right font-weight">
						挂号费：
					</view>
					<view class="border-dott pl-1">
						10 元
					</view>
				</view>
				<view class="d-flex a-center">
					<view class="w-22 text-right font-weight">
						药品费：
					</view>
					<view class="border-dott pl-1">
						63 元
					</view>
				</view>
				<view class="d-flex a-center">
					<view class="w-22 text-right font-weight">
						检查费：
					</view>
					<view class="border-dott pl-1">
						20 元
					</view>
				</view>
				<view class="d-flex a-center">
					<view class="w-22 text-right font-weight">
						化验费：
					</view>
					<view class="border-dott pl-1">
						50 元
					</view>
				</view>
				<view class="d-flex a-center">
					<view class="w-22 text-right font-weight">
						诊断费：
					</view>
					<view class="border-dott pl-1">
						10 元
					</view>
				</view>
				<view class="d-flex a-center">
					<view class="w-22 text-right font-weight">
						邮箱：
					</view>
					<view class="border-dott pl-1">
						108561314565@163.com 
					</view>
				</view>
				<view class="d-flex a-center">
					<view class="w-22 text-right font-weight">
						总计费用：
					</view>
					<view class="border-dott red pl-1">
						153 元
					</view>
				</view>
			</view>
			<view class="mt-2">
				<button type="primary" class="roun text-no123wrap" @click="subTicket">确认开票</button>
			</view>
		</view>
		<uni-popup ref="popup">
			<view class="bg-white rounded-big position-relative" style="padding: 70rpx 50rpx;width: 70vw;">
				<view class="text-center main--color font-weight text-letter1 font-big">
					您的发票申请已提交
				</view>
				<view class="font line-h-big py-2">
					温馨提示
				</view>
				<view class="font-md line-h-md font-weight" style="color: #FF2507;">
					发票稍后会发送到您的邮箱 
					<view class="">
						请注意查收
					</view>
				</view>
				<view class="position-absolute" style="top: -55rpx;right: -38rpx;">
					<uni-icons type="closeempty" color="#fff" size="28" @click="close"></uni-icons>
				</view>
			</view>
		</uni-popup>
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
			subTicket() {
				this.open()
			},
			open() {
				this.$refs.popup.open()
			},
			close() {
				this.$refs.popup.close();
			}
		},
	}
</script>

<style scoped>
	
	uni-button[type=primary]{
		background-color: #427CFC;
	}
	.bg-circles{
		background-size: 62rpx calc(100% - 50rpx);
		background-position: top, bottom;
		background-image: radial-gradient(
		    circle at top center,
		    transparent,
		    transparent 20rpx,
		    #fff 20rpx
		  ),
		  radial-gradient(
		    circle at bottom center,
		    transparent,
		    transparent 20rpx,
		    #fff 20rpx
		  );
		background-repeat: repeat-x;
		filter: drop-shadow(0rpx 4rpx 6rpx #a9b6c3);
	}
	.border-dott{
		border-bottom: 2rpx dashed #979797;
		width: 78%;
	}
	.red{
		color: #CA282D;
		font-weight: bold;
	}
</style>