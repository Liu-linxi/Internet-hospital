<template>
	<view class="mx-3 pt-1">
		<view class="hospital-shadow mt-2 rounded-md px-2 py-2 d-flex a-center" v-for="(li,index) in 15" :key="index" @click="toPrescription(li)">
			<view class="text-center">
				<view class="line-h0">
					<image src="" class="rounded-circle main-bg-color close-image" mode=""></image>
				</view>
				<view class="line-h mt-1 font-weight">
					张三三
				</view>
			</view>
			<view class="ml-2 w-100 truncate">
				<view class="d-flex a-center j-sb">
					<view>
						问诊医生：刘医生
					</view>
					<view class="">
						8454164
					</view>
				</view>
				<view class="truncate2">
					科室诊断：中医科-上呼吸道感染
				</view>
				<view class="d-flex a-center j-sb">
					<view class="line-h mt-1">
						就诊时间：2022-12-08
					</view>
					<view class="d-flex flex a-center text-white mt-1">
						<view class="red font line-h-md rounded px-1" :class="index==1?'mr-1':''"  v-if="index==1">
							未交费
						</view>
						<view class="green font line-h-md rounded px-1" :class="" v-if="index==2">
							已缴费
						</view>
						<view class="red font text-center line-h-md rounded px-1" v-if="index==3" style="width: 80rpx;">
							退回
						</view>
						<view class="yellow font line-h-md rounded px-1" v-if="index==4">
							未审核
						</view>
						<view class="main-bg-color font line-h-md rounded px-1" v-if="index==1">
							已审核
						</view>
					</view>
				</view>
			</view>
		</view>
		<uni-load-more :status="status" />
	</view>
</template>

<script>
	export default {
		data(){
			return{
				status: 'more',//more loading noMore
			}
		},
		methods:{
			toPrescription(item){
				if(item==2){
					item={
						type:1
					};
				}else{
					item={
						type:0
					};
				}
				uni.navigateTo({
					url:"/pages/personal/prescription/prescription?obj="+JSON.stringify(item)
				})
			}
		},
		onReachBottom() {
			uni.showToast({
				icon:'none',
				title:"触底加载",
			})
			this.status="loading";
			setTimeout(()=>{
				this.status="noMore";
			},2000)
		}
	}
</script>

<style>
	.green{
		background-color: #31C794;
	}
	.yellow{
		background-color: #FFD479;
	}
	.red{
		background-color: #E84848;
	}
</style>