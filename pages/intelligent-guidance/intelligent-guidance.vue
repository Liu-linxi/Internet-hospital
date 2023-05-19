<template>
	<view class="">
		<view class="position-relative">
			<image src="@/static/intelligent-guidance/bg1.png" mode="widthFix"></image>
			<view class="position-absolute text-white line-h" style="left: 276rpx;top: 30rpx;">
				<view class="font-lg line-h-lg font-weight">
					Hi，您好
				</view>
				<view class="w-90 line-h-md">
					2000余名医师资源，已帮助众多患者解决问题，快来试试吧！
				</view>
			</view>
		</view>
		<view class="position-relative mt--4 bg-white overflow-hidden" style="border-radius: 16rpx 16rpx 0rpx 0rpx;">
			<view class="d-flex px-3 mt-3">
				<image src="@/static/intelligent-guidance/avatar.png" style="flex-shrink: 0; width: 88rpx;"
					class="rounded-circle" mode="widthFix"></image>
				<!-- 文本消息 -->
				<view class="px-2 py-1 rounded-lg mx-2 docbg" style="margin-right:85rpx">
					你好，我是小微助手，您可选用智能对话模式或者选择您身体不舒服的部位，小微将为您推荐合适的医生为您提供健康咨询服务，快来试试吧！
				</view>
			</view>
		</view>
		<view class="d-flex mt-3" style="margin-left: 90rpx;">
			<!-- <image src="@/static/intelligent-guidance/icon1.png" mode=""></image> -->
			<view class="hospital-shadow ml-3 px-2 pt-3 text-center rounded-lg" v-for="(li,index) in catoList" :key="index" @click="toRoom(li)">
				<image :src="require(`@/static/intelligent-guidance/icon${index+1}.png`)" style="width: 88rpx;" mode="widthFix"></image>
				<view class="">{{li}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				catoList:["智能问诊","选择部位","智能问药"]
			}
		},
		methods: {
			toRoom(type){
				if(type==="智能问药") return uni.showToast({icon:"none",mask:true,title:"暂未开通"})
				if(type==="智能问诊")uni.navigateTo({url:"smart-room/smart-room"})
				if(type==="选择部位")uni.navigateTo({url:"select-region/select-region"})
			}
		}
	}
</script>

<style scoped>
	.docbg {
		background-color: #F2F6FE;
	}
</style>