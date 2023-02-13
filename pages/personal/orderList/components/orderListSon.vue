<template>
	<view>
		<!-- 订单列表 -->
		<view class="ordList">
			<view class="list" v-for="(li,index) in dataList" :key="index" @click="detail(li)">
				<view class="l-top">
					<view class="l-top1">
						<view class="l-top11">
							<view>
								<image src="/static/order/doc.png"
									style="width: 55rpx ; height: 65rpx;margin-right: 10rpx;" mode=""></image>
							</view>
							<view class="ml-1">
								<view class="line-h-sm f-weight">订单信息</view>
								<view class="cititle">订单描述</view>
							</view>
						</view>
						<view class="l-top1r" v-show="li==1" @click.stop="topay">
							去支付
						</view>
					</view>
					<view class="line-h-sm truncate" style="margin-top: 10rpx;">
						订单号：12233220322323232332
					</view>
				</view>
				<view class="l-btm">
					<view class="ll-left">
						<view class=" truncate">
							内容：
							<text v-show="active==0">张青医生开具的处方单</text>
							<text v-show="active==1">阿莫西林、连花清瘟等药品订单</text>
							<text v-show="active==2">上门核酸</text>
						</view>
						<view class="">
							2022-07-11 00:00
						</view>
					</view>
					<!-- 条件按钮 -->
					<view v-show="active!=2">
						<view class="ll-right" v-show="li==1" :class="li==1?'green':''">自取订单</view>
						<view class="ll-right" v-show="li==2">配送订单</view>
						<view class="ll-right" v-show="li==3" :class="li==3?'yellow':''">院内自取</view>
						<view class="ll-right" v-show="li==4" :class="li==4?'green':''">自取订单</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			dataList:{
				// type:Array,
			},
			active:{
				type:Number
			}
		},
		data() {
			return {
			}
		},
		methods: {
			topay() {
				uni.showModal({
					title:"支付了"
				})
			},
			detail(obj) {
				switch (parseInt(this.active)) {
					case 0:
						//咨询订单跳转详情
						uni.navigateTo({
							url:"/pages/personal/orderList/consultingDetail"
						})
						break;
					case 1:
						//购药订单跳转详情
						uni.navigateTo({
							url:"/pages/personal/orderList/drugDetail"
						})
						break;
					case 2:
						//医护订单跳转详情
						uni.navigateTo({
							url:"/pages/personal/orderList/nurseDetail"
						})
						break;
					default:
						// 未知错误返回界面
						uni.navigateBack({
							delta:1
						})
						break;
				}
			},
		},
	}
</script>

<style scoped lang="scss">
	.ordList {
		margin-top: 20rpx;
		padding-bottom: 20rpx;
		font-size: 28rpx;

		.cititle {
			font-size: 24rpx;
			color: #B8C3CF;
		}

		.line-h-sm {
			line-height: 1.5;
		}

		.line-h-md {
			line-height: 1.7;
		}

		.f-weight {
			font-weight: bold;
		}

		.truncate {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		.list {
			padding: 30rpx;
			margin: 30rpx 35rpx 0;
			background: #FFFFFF;
			box-shadow: 0rpx 6rpx 10rpx 6rpx #bed5eb;
			border-radius: 8rpx;

			.l-top {
				.l-top1 {
					display: flex;
					align-items: center;
					justify-content: space-between;

					.l-top11 {
						display: flex;
						align-items: center;
					}

					.l-top1r {
						border-radius: 14rpx;
						padding: 0 20rpx;
						border: 1rpx solid #427CFC;
						color: #427CFC;
						line-height: 1.8;
					}
				}
			}

			.l-btm {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-top: 10rpx;

				.ll-left {}

				.ll-right {
					background: #427CFC;
					width: 60rpx;
					padding:12rpx 20rpx;
					border-radius: 25rpx;
					color: #FFFFFF;
					line-height: 1.2;
				}

				.green {
					background-color: #31C794;
				}

				.yellow {
					background-color: #FFD479;
				}
			}
		}
	}
</style>
