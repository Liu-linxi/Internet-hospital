<template>
	<view style="height: 100rpx;" class="w-100 position-fixed bottom-0  border-top bg-white">
		<view class="d-flex a-center mx-3 border-bottom">
			<input type="text" v-model.trim="message" class="flex-1 rounded" style="padding: 5rpx;" :focus="focus" placeholder="请输入症状" @focus="focusInput" confirm-type="send" @confirm="submit" />
			<view class="d-flex a-center j-sa" style="width: 100rpx;" @click="submit">
				<uni-icons type="paperplane" color="#427CFC" size="28"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			focus: {
				type: Boolean,
				default: true
			},
		},
		data() {
			return {
				message: "",
				words: false,
			}
		},
		methods: {
			focusInput() {
				this.words = false
			},
			submit() {
				this.words = false
				// 是否为空
				if (this.message === '') {
					return uni.showToast({
						title: '发送症状信息不能为空',
						icon: 'none'
					});
				}
				this.$emit('listPush',"self",this.message,3,true)
				// 清空输入框
				this.message = ''
			}
		},
	}
</script>

<style scoped>
	.offenchat {
		border: 4rpx solid #5e6f88;
		color: #5e6f88;
		border-radius: 12rpx;
		padding: 8rpx;
		line-height: 1;
		position: relative;
	}

	.tips {
		height: 20vh;
		position: absolute;
		top: calc(-20vh - 72rpx);
		background-color: #FFFFFF;
		width: 60vw;
		padding: 20rpx;
		border-radius: 20rpx;
		border-width: 4rpx;
		left: -10rpx;
	}

	.tips::after {
		content: "";
		position: absolute;
		top: calc(100% - 12upx);
		left: 42rpx;
		display: block;
		width: 24upx;
		height: 24upx;
		border-width: 4rpx;
		border-style: solid;
		border-color: var(--borderColor);
		border-left-color: transparent;
		border-top-color: transparent;
		transform: rotate(45deg);
		background-color: #fff;
		box-sizing: border-box;
		border-top-left-radius: 8upx;
	}
</style>
