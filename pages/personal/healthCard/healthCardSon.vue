<template>
	<view>
		<!-- 就诊人列表 -->
		<view class="hospital-shadow rounded-md mb-2 p-2 px-3 d-flex a-center j-sb" v-for="(li,index) in peoList"
			:key="index">
			<view class="">
				<view class="d-flex a-center">
					<view>张三丰</view>
					<view class="relap">
						本人
					</view>
				</view>
				<view class="mt-1 text-subheading">
					{{idCardVague("112231245654544454")}}
				</view>
			</view>
			<view class="">
				<view v-if="li==1">
					<switch checked color="#427CFC" @change="switch1Change" style="transform:scale(0.7)" />
					<view class="text-inquiries font">
						设为默认
					</view>
				</view>
				<view v-if="li==2">
					<switch color="#427CFC" @change="switch1Change" style="transform:scale(0.7)" />
					<view class="text-inquiries font">
						设为默认
					</view>
				</view>
				<view v-if="li==3" class="text-center">
					<view class="line-h">
						<uni-icons type="minus-filled" color="#E96E57" size="35"></uni-icons>
					</view>
					<view class="line-h-sm font" style="color: #E96E57;">
						审核未通过
					</view>
				</view>
				<view v-if="li==4" class="text-center mr-2">
					<image src="/static/personalCenter/healthCard/clock.png" style="width: 55rpx;height: 55rpx;"
						mode=""></image>
					<view class="line-h-sm font text-inquiries" style="color: #C6D68C;">
						待审核
					</view>
				</view>
			</view>
		</view>
		<view class="text-danger">
			*最多可添加五位就诊人
		</view>
		<button type="primary" class="rounded-circle mt-4" @click="addPaint">
			<uni-icons type="plusempty" size="18" color="#FFFFFF" class="mr-2"></uni-icons>
			添加就诊人
		</button>
	</view>
</template>

<script>
	import {
		idCardVague
	} from "@/common/lib/filter"
	export default {
		props:{
			peoList:{
				// type:Array,
			}
		},
		data() {
			return {
				idCardVague,
			}
		},
		methods: {
			switch1Change(e) {
				console.log('switch1 发生 change 事件，携带值为', e.detail.value)
			},
			// 添加就诊人
			addPaint() {
				uni.navigateTo({
					url: "/pages/personal/healthCard/addPatient"
				})
			}
		}
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
