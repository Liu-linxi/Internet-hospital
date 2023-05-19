<template>
	<view class="" style="width: 490rpx;">
		<view class="d-flex j-sb">
			<view class="">
				小微为您推荐以下医生
			</view>
			<view class="font-sm d-flex a-center" @click="changeList">
				<image src="@/static/intelligent-guidance/change.png" class="mr-1 icon-image-small" mode=""></image>换一批
			</view>
		</view>
		<view class="mt-2 p-1 font bg-white rounded-md d-flex a-center position-relative overflow-hidden" v-for="li in 3" @click="detail(li)">
			<view class="mr-1">
				<image src="/static/icon/manDoc.png" style="width: 100rpx;" mode="widthFix"></image>
			</view>
			<view class="">
				<view class="">
					张青 平顶山微医医院
				</view>
				<view class=" main--color">
					<text class="border px-1 rounded-xs input-border-color mr-2">内科</text>
					<text class="border px-1 rounded-xs input-border-color">副主任医师</text>
				</view>
			</view>
			<view class="position-absolute bottom-0 right-0 main-bg-color text-white px-1 line-h-md font-sm" style="border-radius:15rpx 0 15rpx 0 ;">
				立即咨询
			</view>
		</view>
	</view>	
</template>

<script>
	export default {
		name: 'docCard',
		data() {
			return {
			
			}
		},
		mounted() {
			console.log("获取数据");
		},
		methods: {
			changeList(){
				console.log("切换数据");
			},
			detail(li){
				console.log("详情"+li);
			}
		},
	}
</script>

<style>
</style>