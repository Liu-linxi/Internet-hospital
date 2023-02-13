<template>
	<view>
		<view class="bg-white w-100 p-2 d-flex a-center">
			<image src="" class="close-image main-bg-color rounded-circle mr-2" mode=""></image>
			<uni-rate :value="value" @change="onChange" />
		</view>
		<view class="w-100">
			<textarea class="bg-white border-top p-2" placeholder="请填写您的评价,允许输入200字符" maxlength="200" style="width: calc(100vw - 40rpx);"/>
		</view>
		<button style="background-color: #427CFC;" type="primary" class="rounded-circle mx-5 mt-4" @click="toRelease">发布</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: 5
			}
		},
		methods: {
			toRelease(){
				uni.showToast({
					icon:'none',
					title:"发布"
				})
			}
		}
	}
</script>

<style scoped>
	page{
		background-color: #f9f9f9;
	}
</style>
