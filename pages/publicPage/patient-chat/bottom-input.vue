<template>
	<view :style="modelPheon?'height: 140rpx;':'height: 100rpx;'"
		class="w-100 position-fixed bottom-0  border-top bg-white">
		<view class="d-flex a-center mx-3 border-bottom">
			<view class="offenchat" hover-class="main--color" @click="words=!words;">
				常用语
				<uni-transition mode-class="fade" :show="words">
					<scroll-view scroll-y="true" class="tips border">
						<view class="line-h-lg border-bottom" v-for="(li,index) in 20" :key="index"
							@click.stop="wordsClick(li)">
							{{li}}
						</view>
					</scroll-view>
				</uni-transition>
			</view>
			<uni-icons class="line-h0" color="#5e6f88" type="image" size="43" @click="chooseImg"></uni-icons>
			<input type="text" v-model="content" class="flex-1 rounded" style="padding: 5rpx;" :focus="focus"
				placeholder="输入内容..." @focus="focusInput" confirm-type="send" @confirm="submit" />
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
				default: false
			},
			modelPheon: {
				type: Boolean,
				default: false
			},
		},
		data() {
			return {
				content: "",
				fileList: [],
				words: false,
			}
		},
		methods: {
			chooseImg() {
				this.words = false;
				uni.chooseImage({
					count: 1, //默认9
					success: (res) => {
						console.log(res)
						console.log(JSON.stringify(res.tempFilePaths));
						this.$emit('submit', {
							img: res.tempFilePaths[0]
						})
						// uni.uploadFile({
						// 	url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
						// 	filePath: res.tempFilePaths[0],
						// 	name: 'file',
						// 	formData: {
						// 		'user': 'test'
						// 	},
						// 	success: (uploadFileRes) => {
						// 		console.log(uploadFileRes);
						// 	}
						// });
					}
				});
			},
			wordsClick(item) {
				this.content = item;
				this.words = false;
				this.submit();
			},
			focusInput() {
				this.words = false
			},
			submit() {
				this.words = false
				// 是否为空
				if (this.content === '') {
					return uni.showToast({
						title: '发送信息不能为空',
						icon: 'none'
					});
				}
				this.$emit('submit', {
					content: this.content
				})
				// 清空输入框
				this.content = ''
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
