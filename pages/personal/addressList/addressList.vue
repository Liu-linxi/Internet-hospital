<template>
	<view>
		<view class="" style="padding-bottom: 150rpx;">
			<address-manage @toEdit="toEdit" :addList="3"></address-manage>
		</view>
		<view class="position-fixed bottom-0 w-100 border-top bg-white" style="height: 150rpx;">
			<button type="primary" class="mx-4 mt-3"@click="toEdit()" >新增收货地址</button>
		</view>
	</view>
</template>

<script>
	import addressManage from '@/components/address-manage/address-manage'
	export default {
		components:{
			addressManage
		},
		data() {
			return {
				
			}
		},
		methods: {
			toEdit(item){
				uni.navigateTo({
					url:"/pages/personal/addressList/addressEdit?item="+item,
					events: {
						// 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
						addressEditChange: (data)=> {
							// 刷新
							console.log("刷新",data)
						},
					},
				})
			},
		}
	}
</script>

<style>

</style>
