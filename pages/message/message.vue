<template>
	<view class="page">
		<view class="m-nav d-flex a-center j-sb">
			<uni-badge size="small" :text="99" absolute="rightTop">
				<view class="tab position-relative" @click="tabIndex = 0" :class="{active: tabIndex === 0}">
					<image :src="`/static/message/server${['_active',''][tabIndex]}.png`" style="width: 80rpx;" mode="widthFix"></image>
					<view class="txt text-center">服务</view>
				</view>
			</uni-badge>
			<uni-badge size="small" :text="0" absolute="rightTop">
				<view class="tab" @click="tabIndex = 1" :class="{active: tabIndex === 1}">
					<image :src="`/static/message/system${['','_active'][tabIndex]}.png`" style="width: 80rpx;" mode="widthFix"></image>
					<view class="txt text-center">系统</view>
				</view>
			</uni-badge>
			
		</view>
		<view class="m-links" v-if="tabIndex === 0">
			<view class="link d-flex a-center">
				<view class="b-icon flex-shrink line-h position-relative has-message">
					<uni-badge size="normal" :is-dot="true" :text="0" absolute="rightTop" >
						<image src="/static/message/msg.png" class="icon-lg" mode="widthFix"></image>
					</uni-badge>
				</view>
				<view class="flex-1 b-cont d-inline-flex flex-column j-center">
					<view class="d-flex a-center j-sb">
						<text class="tit">问诊结束通知</text>
						<uni-dateformat class="date" date="2022-04-02" format="yyyy-MM-dd日" />
					</view>
					<view class="val">向（刘医生）的的问诊已结束。</view>
				</view>
			</view>
			<view class="link d-flex a-center">
				<view class="b-icon flex-shrink line-h position-relative">
					<image src="/static/message/msg.png" class="icon-lg" mode="widthFix"></image>
				</view>
				<view class="flex-1 b-cont d-inline-flex flex-column j-center">
					<view class="d-flex a-center j-sb">
						<text class="tit">问诊受理通知</text>
						<uni-dateformat class="date" date="2022-04-02" format="yyyy-MM-dd日" />
					</view>
					<view class="val truncate">你好，您的问诊已被医生受理，请及时查看。</view>
				</view>
			</view>
			<view class="link d-flex a-center">
				<view class="b-icon flex-shrink line-h position-relative">
					<image src="/static/message/msg.png" class="icon-lg" mode="widthFix"></image>
				</view>
				<view class="flex-1 b-cont d-inline-flex flex-column j-center">
					<view class="d-flex a-center j-sb">
						<text class="tit">处方开具成功通知</text>
						<uni-dateformat class="date" date="2022-04-02" format="yyyy-MM-dd日" />
					</view>
					<view class="val">你好，医生为您开具了电子处方，请及时查看。</view>
				</view>
			</view>
			<view class="link d-flex a-center">
				<view class="b-icon flex-shrink line-h position-relative">
					<image src="/static/message/tips.png" class="icon-lg" mode="widthFix"></image>
				</view>
				<view class="flex-1 b-cont d-inline-flex flex-column j-center">
					<view class="d-flex a-center j-sb">
						<text class="tit">订单</text>
						<uni-dateformat class="date" date="2022-04-02" format="yyyy-MM-dd日" />
					</view>
					<view class="val">您的订单已生成</view>
				</view>
			</view>
		</view>
		<view class="m-links" v-else>
			<view class="link d-flex a-center">
				<view class="b-icon flex-shrink line-h position-relative has-message">
					<image src="/static/message/notice.png" class="icon-lg" mode="widthFix"></image>
				</view>
				<view class="flex-1 b-cont d-inline-flex flex-column j-center">
					<view class="d-flex a-center j-sb">
						<text class="tit">系统公告</text>
						<uni-dateformat class="date" date="2022-04-02" format="yyyy-MM-dd日" />
					</view>
					<view class="val">4月22日02:00将暂停服务进行维护</view>
				</view>
			</view>
			<view class="link d-flex a-center">
				<view class="b-icon flex-shrink line-h position-relative">
					<image src="/static/message/notice.png" class="icon-lg" mode="widthFix"></image>
				</view>
				<view class="flex-1 b-cont d-inline-flex flex-column j-center">
					<view class="d-flex a-center j-sb">
						<text class="tit">系统升级</text>
						<uni-dateformat class="date" date="2022-04-02" format="yyyy-MM-dd日" />
					</view>
					<view class="val truncate">新版本已升级</view>
				</view>
			</view>
		</view>
		<tabbar activeIndex="2" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex: 0
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.page {
		.m-nav {
			height: 180upx;
			padding: 0 148upx;
			box-shadow: 0px 2px 24px 0px rgba(208, 215, 229, 0.6);
			.tab {
				width: 80upx;
				--fontColor: #7F7F7F;

				&.active {
					--fontColor: #1C2023;
				}
				.txt {
					font-size: 30upx;
					color: var(--fontColor);
				}
			}
		}

		.m-links {
			padding: 0 30upx;

			.link {
				height: 130upx;

				.b-icon {
					margin-right:20upx;
					width: 80upx;
					height: 80upx;

					&.has-message::before {
						content: "";
						position: absolute;
						top: 0;
						right: 0;
						display: block;
						width: 20upx;
						height: 20upx;
						border-radius: 20upx;
						background-color: #e43d33;
					}
				}

				.b-cont {
					height: 100%;
					border-bottom: 2upx solid #E3E4E5;

					.tit {
						font-size: 28upx;
						color: #1C2023;
					}

					.date,
					.val {
						font-size: 24upx;
						color: #C5C8CB;
					}
				}
			}
		}
	}
</style>
