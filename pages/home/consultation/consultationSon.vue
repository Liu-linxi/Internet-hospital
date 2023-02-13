<template>
	<view>
		<uni-popup ref="popup" :mask-click="false">
			<view class="m-popup box-border rounded-lg d-flex flex-column">
				<view class="title red-text text-center flex-shrink">在线问诊用户须知</view>
				<scroll-view scroll-y="true" class="cont" @scrolltolower="lower">
					{{protocol}}
				</scroll-view>
				<view class="ctrl flex-shrink">
				<uni-data-checkbox class="check d-block" multiple v-model="agree" :localdata="range"></uni-data-checkbox>
					<!-- <checkbox-group class="check d-block" @change="changeAgree">
						<label>
							<checkbox value="true" :checked="protocolIsAgree" /><text>同意并接受以上协议</text>
						</label>
					</checkbox-group> -->
					<button :disabled="!countdown" @click="next" class="btn text-white rounded-circle bg-primary">
						下一步
					</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import {
		protocol
	} from "./protocol.json"
	export default {
		data() {
			return {
				protocol,
				countdown: false,
				agree: [],
				range: [{"value": 0,"text": "同意并接受以上协议"	}]
			}
		},
		methods: {
			open() {
				this.countdown=false;
				this.agree=[];
				this.$refs.popup.open('center')
			},
			next() {
				if (!this.agree.length) {
					uni.showToast({
						title: "请先同意并接受协议",
						icon: "error",
						duration:1500
					})
					return false
				}
				uni.navigateTo({
					url: "/pages/home/medicalHistory/index",
					success: () => this.$refs.popup.close()
				})
			},
			changeAgree() {
				this.protocolIsAgree = !this.protocolIsAgree
			},
			// 滚动到底部触发
			lower(e) {
				console.log(e)
				this.countdown=true;
			},
		}
	}
</script>

<style scoped lang="scss">
	.m-popup {
		width: calc(100vw - 92upx);
		height: 60vh;
		background-color: #fff;
		padding: 0 32upx 32upx;

		.title {
			font-size: 32upx;
			font-weight: 700;
			line-height: 3;
		}

		.cont {
			height: calc(60vh - 310rpx);
			font-size: 26upx;
			white-space: pre-wrap;
		}

		.ctrl {
			.check {
				padding: 20upx 0 20rpx;
				color: #000;
				font-weight: 700;
			}

			.btn {
				height: 80upx;
				font-size: 24upx;
				line-height: 80upx;

				&[disabled] {
					background-color: skyblue !important;
				}
			}
		}
	}
</style>
