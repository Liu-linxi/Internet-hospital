<template>
	<view class="page d-flex flex-column bg-primary">
		<navigator class="m-back text-white d-flex a-center" open-type="navigateBack">
			<uni-icons type="left" color="white" size="30"></uni-icons>
			<text class="txt">订单详情</text>
		</navigator>
		<view class="m-status d-flex flex-column j-center a-center">
			<img class="icon flex-shrink" src="/static/order/order.png" alt="">
			<view class="d-flex status a-center">
					<text class="txt text-white">提交成功</text>
					<img class="icon flex-shrink" src="/static/order/check.png" alt="">
			</view>
		</view>
		<view class="main flex-1">
			<view class="delivery box-border d-flex flex-column a-center j-sb">
				<view class="txt">预计配送</view>
				<uni-dateformat class="date" date="2022/11/22"/>
				<button class="btn d-flex text-primary a-center j-center" :plain="true">
					<text>订单状态</text>
					<uni-icons color="#427CFC" type="right" size="20"></uni-icons>
				</button>
			</view>
			<view class="detail">
				<view class="item d-flex a-start">
					<img class="icon" src="/static/icon/number.png" alt="">
					<view class="cont">
						<view class="key">订单编号</view>
						<view class="val text-primary">#21091995</view>
					</view>
				</view>
				<view class="item d-flex a-start">
					<img class="icon" src="/static/icon/clock.png" alt="">
					<view class="cont">
						<view class="key">下单时间</view>
						<view class="val text-primary">#11:45 AM</view>
					</view>
				</view>
				<view class="item d-flex a-start">
					<img class="icon" src="/static/icon/compass.png" alt="">
					<view class="cont">
						<view class="key">支付方式</view>
						<view class="val text-primary">微信支付</view>
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
				paytype: "wechat"
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
.page {
	height: 100%;
	.m-back {
		.txt {
			font-size: 48upx;
			margin-left: 26upx;
		}
	}
	.m-status {
		padding-bottom: 50upx;
		.icon {
			width: 300upx;
			height: 300upx;
		}
		.status {
			.txt {
				margin-right: 20upx;
				font-size: 48upx;
			}
			.icon {
				width: 40upx;
				height: 40upx;
			}
		}
	}
	.main {
		border-top-right-radius: 48upx;
		background-color: #fff;
		line-height: 1;
		.delivery {
			padding: 64upx 0;
			height: 364upx;
			border-bottom: 2upx solid #F2F4F5;
			.txt {
				font-size: 28upx;
				color: #8E9AAB;
			}
			.date {
				font-size: 34upx;
				color: #112950;
			}
			.btn {
				width: 654upx;
				height: 108upx;
				border-color: #E5E5E5;
			}
		}
		.detail {
			padding: 8upx 48upx 48upx;
			.item {
				margin-top: 40upx;
				.icon {
					width: 32upx;
					height: 32upx;
					margin-right: 20upx;
				}
				.cont {
					.key {
						color: #112950;
						font-size: 28upx;
					}
					.val {
						margin-top: 20upx;
						font-size: 34upx;
					}
				}
			}
		}
	}
}
</style>
