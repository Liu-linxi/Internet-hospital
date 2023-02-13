<template>
	<view class="px-2 pt-2">
		<view class="hospital-shadow rounded-sm pt-2 p-2 px-3">
			<view class="d-flex a-center">
				<view class="font-weight">张三丰</view>
				<view class="relap">
					本人
				</view>
			</view>
			<view class="mt-1 text-subheading">
				{{idCardVague("112231245654544454")}}
			</view>
		</view>
		<view class="font-weight mt-2 font-md">
			已缴费项目
		</view>
		<view class="hospital-shadow rounded-sm mt-2 p-2 px-3">
			<view class="d-flex a-center j-sb font-weight">
				<view class="">张三丰</view>
				<view class="red-text">
					￥540
				</view>
			</view>
			<view class="d-flex a-center j-sb text-subheading">
				<view class="">西药</view>
				<view class="">
					2瓶
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		idCardVague
	} from "@/common/lib/filter"
	export default {
		data() {
			return {
				idCardVague,
			}
		},
		methods: {

		},
	}
</script>

<style scoped>
	.relap {
		border: 2rpx solid #427CFC;
		line-height: 1;
		padding: 5rpx 10rpx;
		color: #427CFC;
		margin-left: 20rpx;
	}
</style>
