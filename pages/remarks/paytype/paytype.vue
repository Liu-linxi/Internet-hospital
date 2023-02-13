<template>
	<view class="page d-flex flex-column bg-primary">
		<view class="main flex-1 box-border">
			<navigator open-type="navigateBack"><uni-icons type="left" size="30"></uni-icons></navigator>
			<view class="b-tit">
				<view class="mt">选择支付方式</view>
				<view class="st">选择您的支付方式</view>
			</view>
			<view class="b-types">
				<view class="d-flex item a-center" @click="paytype = 'wechat'" :class="{active: paytype === 'wechat'}">
					<img class="icon flex-shrink" src="/static/order/wechat.png" alt="">
					<text class="txt">微信支付</text>
					<view class="radio ml-auto d-inline-flex a-center j-center flex-shrink rounded-circle">
						<view class="circle rounded-circle"></view>
					</view>
				</view>
				<view class="d-flex item a-center" @click="paytype = 'shebao'" :class="{active: paytype === 'shebao'}">
					<img class="icon flex-shrink" src="/static/order/sb.png" alt="">
					<text class="txt">社保卡支付</text>
					<view class="radio ml-auto d-inline-flex a-center j-center flex-shrink rounded-circle">
						<view class="circle rounded-circle"></view>
					</view>
				</view>
				<view class="d-flex item a-center" @click="paytype = 'bank'" :class="{active: paytype === 'bank'}">
					<img class="icon flex-shrink" src="/static/order/bank.png" alt="">
					<text class="txt">银行卡支付</text>
					<view class="radio ml-auto d-inline-flex a-center j-center flex-shrink rounded-circle">
						<view class="circle rounded-circle"></view>
					</view>
				</view>
			</view>
		</view>
		<view class="footer bg-white d-flex a-center j-center flex-shrink">
			<button class="btn bg-primary text-white">确定</button>
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
	.main {
		padding: 32upx 24upx 0;
		height: 100%;
		border-top-right-radius: 48upx;
		background-color: #fff;
		line-height: 1;
		.b-tit {
			margin: 48upx 0;
			.mt {
				font-size: 48upx;
				color: #112950;
			}
			.st {
				margin-top: 20upx;
				font-size: 30upx;
				color: #B2BAC6;
			}
		}
		.b-types {
			.item {
				--color: #e5e5e5;
				margin-top: 24upx;
				border-radius: 24upx;
				height: 112upx;
				padding: 0 32upx;
				border: 2upx solid var(--color);
				&.active {
					background-color: #F2F6FE;
					--color: var(--primary);
				}
				.icon {
					width: 48upx;
				}
				.txt {
					margin-left: 24upx;
					font-size: 28upx;
					color: #112950;
				}
				.radio {
					width: 40upx;
					height: 40upx;
					background-color: var(--color);
					.circle {
						width: 12upx;
						height: 12upx;
						background-color: #fff;
					}
				}
			}
		}
	}
	.footer {
		height: 140upx;
		border-top: 2upx solid #F2F4F5;
		.btn {
			width: 654upx;
			height: 108upx;
			line-height: 108upx;
		}
	}
}
</style>
