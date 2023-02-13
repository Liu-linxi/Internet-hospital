<template>
	<!-- 购药卡片列表 -->
	<view>
		<!-- <view class="rounded-circle border d-flex a-center line-h-lgder px-2 my-2" style="margin-left: -20rpx;">
			<image src="/static/icon/radio.png" class="icon-image-small" mode=""></image>
			<view class="main--color font-weight ml-1">
				全选
			</view>
			<view class="main--color font-weight ml-3">
				选择退款内容
			</view>
		</view> -->
		<view v-for="(li,index) in drugList" :key="index">
			<view class="px-2  d-flex a-center" :class="bottomDiv?'py-3':'py-1'">
				<view class="">
					<image src="/static/icon/emptyMedicine.png" class="rounded main-bg-color icon-big"
						mode=""></image>
				</view>
				<view class="ml-2 truncate w-100">
					<view class="truncate font-weight">
						香砂养胃丸
					</view>
					<view class="truncate text-subheading font line-h-lg">
						片剂 • 60粒
					</view>
					<view class="d-flex a-center j-sb">
						<view class="d-flex a-center">
							<image src="/static/icon/bag.png" class="icon-image-small" mode=""></image>
							<view class="ml-1">数量:2</view>
						</view>
						<view class="main--color font-weight" :class="bottomDiv?'':'mr-3'">
							￥12.00
						</view>
					</view>
				</view>
			</view>
			<divider v-show="bottomDiv"></divider>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			drugList: {
				// type: Array,
			},
			bottomDiv:{
				type:Boolean,
				default:true,
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
		}
	}
</script>

<style>
</style>