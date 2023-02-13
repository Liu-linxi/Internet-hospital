<template>
	<view>
		<uni-segmented-control :current="tabIndex" :values="tabs" @clickItem="onClickItem" styleType="text"
			activeColor="#427CFC" class="position-fixed w-100 bg-white" style="z-index: 1;"></uni-segmented-control>
		<view style="height: 100rpx;"></view>
		<view class="px-4 pb-3" v-show="tabIndex === 0">
			<add-healthCard-son></add-healthCard-son>
		</view>
		<view class="px-4 pb-3" v-show="tabIndex === 1">
			<view class="position-relative">
				<uni-file-picker limit="1" v-model="fontCard" @select="select" @progress="progress" @success="success"
					@fail="fail" :image-styles="imageStyles">
					<image src="/static/personalCenter/healthCard/shangchuan.png" class="w-100" mode="widthFix"></image>
						<view class="position-absolute bottom-0 text-center w-100">
							<view class="mb-1  bg-white m-auto rounded-circle" style="width: 150rpx; height: 150rpx;" >
								<uni-icons type="upload" size="40" color="#a7c5dc"></uni-icons>
							</view>
							<view class="mb-5 pb-4 text-white">
								点击上传身份证人像面
							</view>
						</view>
				</uni-file-picker>
			</view>
			<view class="mt-2 ml-3">
				<view>拍照要求：</view>
				<view>1.请上传您的身份证正面照</view>
				<view>2.垂直拍摄，证件边框完整</view>
				<view>3.避免证件反光，模糊</view>
				<view>4.如果识别错误的，请重新拍照识别身份证信息</view>
			</view>
			<button class="main-bg-color rounded-circle mx-3 my-2" type="primary" @click="submit">识别身份证信息</button>
		</view>
	</view>
</template>

<script>
	import addHealthCardSon from "./addHealthCardSon"
	export default {
		components: {
			addHealthCardSon
		},
		data() {
			return {
				tabs: ['电子健康卡', '就诊人列表'],
				tabIndex: 0,
				fontCard: [],
				imageStyles: {
					border:false,
					width: "100%",
					height:	210,
				},
			}
		},
		methods: {
			// 切换模式
			onClickItem(e) {
				if (this.tabIndex != e.currentIndex) {
					this.tabIndex = e.currentIndex;
				}
			},
			// 获取上传状态
			select(e) {
				console.log('选择文件：', e)
			},
			// 获取上传进度
			progress(e) {
				console.log('上传进度：', e)
			},
			// 上传成功
			success(e) {
				console.log('上传成功')
			},
			// 上传失败
			fail(e) {
				console.log('上传失败：', e)
			}
		}
	}
</script>

<style scoped>
</style>
