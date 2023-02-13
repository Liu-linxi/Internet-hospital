<template>
	<view class="page bg-primary">
		<view class="m-userInfo position-relative d-flex">
			<view class="avatar rounded-circle overflow-hidden">
				<image src="/static/icon/avatar.png" style="width: 260upx;height: 260upx;" mode=""></image>
			</view>
			<view class="detail text-white">
				<view class="b-name">张青</view>
				<view class="b-position">
					<text>副主任医师</text>
					<text class="ml-2">中医科门诊</text>
				</view>
				<view class="b-field">
					擅长：<text>慢性病</text>
				</view>
				<view class="b-score line-h-md">
					<grade rate="4.8" rateTotal="456评论"></grade>
				</view>
			</view>
		</view>
		<view class="m-main bg-white overflow-hidden">
			<view class="b-tabs">
				<view class="tabs d-flex j-sb">
					<view @click="tabIndex = 0" class="tab box-border position-relative line-h d-inline-flex flex-column j-sb a-center text-primary" :class="{active: tabIndex === 0}">
						<uni-icons class="text-primary" type="image" size="55"></uni-icons>
						<text class="name text-dark font-weight">图文问诊</text>
						<view class="price red-text font-weight">￥20/次</view>
					</view>
					<view @click="tabIndex = 1" class="tab box-border position-relative line-h d-inline-flex flex-column j-sb a-center text-primary" :class="{active: tabIndex === 1}">
						<uni-icons class="text-primary" type="phone" size="55"></uni-icons>
						<text class="name text-dark font-weight">电话问诊</text>
						<view class="price red-text font-weight">￥20/次</view>
					</view>
					<view @click="tabIndex = 2" class="tab box-border position-relative line-h d-inline-flex flex-column j-sb a-center text-primary" :class="{active: tabIndex === 2}">
						<uni-icons class="text-primary" type="videocam" size="55"></uni-icons>
						<text class="name text-dark font-weight">视频问诊</text>
						<view class="price red-text font-weight">￥20/次</view>
					</view>
				</view>
				<view class="b-intro box-border" v-if="tabIndex === 0">
					<view class="tit">用户通过文字、图片的方式和医生沟通</view>
					<view class="cont">
						医生接诊后24小时内可不限次数交流
						医生24小时未接诊，自动退款
					</view>
				</view>
				<view class="b-intro box-border" v-if="tabIndex === 1">
					<view class="tit">用户通过电话的方式和医生沟通</view>
					<view class="cont">
						通过电话和医生进行沟通、诊断治疗等建议。
						如未建立医患沟通，可申请退款。
					</view>
				</view>
				<view class="b-intro box-border" v-if="tabIndex === 2">
					<view class="tit">“面对面”和医生沟通，堪比“赴院就诊”</view>
					<view class="cont">
						通过视频和医生沟通检查、诊断、治疗等建议，那里不适看哪里。
						如未建立医患沟通，可申请退款。
					</view>
				</view>
			</view>
			<view class="mt-4">
				<view class="font-weight">个人介绍</view>
				<view class="text-inquiries">
					张青专注于中医科，尤其是在糖尿病领域超过七 年。他参加了专业培训课程。最主要专注于中医学。
				</view>
			</view>
			<view class="mt-2">
				<view class="font-weight line-h-lgder">出诊信息</view>
				<view class="border rounded-lg px-4 py-3 mt-1">
					<view class="d-flex a-center">
						<image src="/static/icon/nav.png" style="width: 55rpx;" mode="widthFix"></image>
						<text class="ml-2 main--color">地址</text>
					</view>
					<view class="line-h-lgder text-inquiries">
						北京市丰台区南四环西路119号
					</view>
					<view class="d-flex a-center mt-2">
						<image src="/static/icon/icon5.png" style="width: 55rpx;" mode="widthFix"></image>
						<text class="ml-2 main--color">上班时间</text>
					</view>
					<view class="mt-1 text-inquiries">
						周一至周五:
						<view class="">
							上午 8:00-12:00 & 下午 13:00-20:00
						</view>
						周一至周五:
						<view class="">
							上午 8:00-12:00 & 下午 13:00-20:00
						</view>
					</view>
				</view>
			</view>
			<view class="b-comment">
				<view class="tit text-primary">评论</view>
				<view class="line"></view>
				<view class="comment-list">
					<view class="comment d-flex" v-for="(li,index) in 2" :key="index">
						<view class="avatar rounded-circle flex-shrink">
							<img src="/static/icon/avatar.png" alt="">
						</view>
						<view class="detail d-inline-flex flex-1 flex-column">
							<view class="name">张XXsss</view>
							<view class="symptom d-inline-flex a-center">
								<text class="mr-2">甲状腺机能亢进备份</text>
								<uni-rate readonly="true" size="14" class="d-inline-block" :value="5"></uni-rate>
							</view>
							<view class="val">感谢张医生的接诊，使我尽早的得到了一直，感谢张医生的接诊，使我尽早的得到了一直，备份</view>
						</view>
					</view>
					
				</view>
			</view>
		</view>
		<view class="m-consul box-border position-fixed bg-white">
			<button @click="submit" class="btn text-white bg-primary">问诊</button>
		</view>
		<consultation-son ref="popid"></consultation-son>
		
	</view>
</template>

<script>
	import consultationSon from './consultationSon.vue';

	export default {
		components:{
			consultationSon
		},
		data() {
			return {
				tabIndex: 0,
			}
		},
		methods: {
			
			submit() {
				this.$refs.popid.open();
			},
			
		}
	}
</script>

<style scoped lang="scss">
	.page {
		padding: 40upx 0 120upx 0;

		

		.m-userInfo {
			z-index: 1;
			padding: 0 18upx;

			.avatar {
				margin-right: 60upx;
				height: 260upx;
				width: 260upx;
				border: 8upx solid white;
				box-shadow: 0px 2px 13px 0px rgba(48, 71, 122, 0.65);
			}

			.detail {
				font-size: 28upx;
				line-height: 1;
				padding-bottom: 16upx;

				.b-name {
					font-size: 54upx;
					font-weight: bold;
				}

				.b-position,
				.b-field{
					margin-top: 22upx;
				}

				.b-score {
					::v-deep .txt{
						color: #ffffff;
						font-size: 28rpx;
					}
				}
			}
		}

		.m-main {
			margin-top: -27upx;
			border-top-right-radius: 48upx;
			border-top-left-radius: 48upx;
			padding: 80upx 46upx;
			box-shadow: 0rpx -10rpx 32rpx 0rpx rgba(54,75,119,0.53);

			.b-tabs {
				.tab {
					border-radius: 32upx;
					width: 184upx;
					height: 224upx;
					border: 4upx solid var(--border);
					padding: 10upx 0 20upx;
					box-shadow: 0 4upx 8upx 0 #9CDFFF;
					--border: var(--white);

					&.active {
						--border: var(--primary);

						&::after {
							content: "";
							position: absolute;
							top: calc(100% + 23upx);
							display: block;
							width: 30upx;
							height: 30upx;
							border-width: 4upx;
							border-style: solid;
							border-color: var(--primary);
							border-right-color: transparent;
							border-bottom-color: transparent;
							transform: rotate(45deg);
							background-color: #fff;
							box-sizing: border-box;
							border-top-left-radius: 8upx;
						}
					}

					.name {
						font-size: 20upx;
					}

					.price {
						font-size: 30upx;
					}
				}

				.b-intro {
					padding: 40upx 34upx;
					margin-top: 30upx;
					border-radius: 12upx;
					border: 4upx solid var(--primary);
					width: 100%;

					.tit {
						line-height: 1;
						font-size: 28upx;
						color: #292E3B;
					}

					.cont {
						margin-top: 22upx;
						font-size: 24upx;
						color: #666B6E;
						white-space: pre-line;
					}
				}
			}

			.b-comment {
				margin-top: 44upx;

				.tit {
					padding-left: 34upx;
					font-size: 34upx;
					font-weight: bold;
				}

				.line {
					margin: 8upx -46upx;
					height: 8upx;
					border-top: 1upx solid #F2F4F5;
					border-bottom: 1upx solid #F2F4F5;
				}

				.comment {
					margin-top: 22upx;

					.avatar {
						margin-right: 32upx;
					}

					.detail {
						.name {
							font-size: 28upx;
							color: #646369;
						}

						.symptom {
							font-size: 24upx;
							color: #8D8D8D;
						}

						.val {
							color: #646369;
							font-size: 28upx;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							text-overflow: ellipsis;
							overflow: hidden;
						}
					}
				}
			}
		}

		.m-consul {
			width: 100%;
			padding: 32upx 48upx 0;
			bottom: 0;
			height: 140upx;
			border-top: 1upx solid #F2F4F5;

			.btn {
				font-size: 34upx;
			}
		}
	}
</style>
