<template>
	<view>
		<view class="position-fixed w-100 bg-white">
			<pay-record-list-son></pay-record-list-son>
			<view class="d-flex a-center ">
				<view class="rounded-circle ml-2 px-2" :class="dateIndex==index?'main-bg-color text-white':'border'"
					hover-class="animate__animated animate__shakeX" v-for="(li,index) in dateList" :key="index"
					@click="dateChange(li,index)">
					{{li}}
				</view>
			</view>
			<view class="mt-2 mx-2 animate__animated animate__fadeIn" v-show="dateIndex==2">
				<uni-datetime-picker v-model="range" type="daterange" @maskClick="maskClick" @change="change" />
			</view>
		</view>
		<view :style="{height:dateIndex==2?'340rpx':'240rpx'}"></view>
		<view class="mx-2">
			<view class="px-2 py-1 hospital-shadow mt-2 rounded-sm" v-for="(li,index) in 5" :key="index" @click="payDatil(li)">
				<view class="d-flex a-center j-sb border-bottom line-h-lgder">
					<view>内科门诊</view>
					<view class="main--color font-weight">缴费成功</view>
				</view>
				<view class="d-flex j-sb mt-2 pb-1">
					<view class="text-subheading">
						<view>
							张三
						</view>
						<view class="line-h">
							2023-01-21
						</view>
					</view>
					<view class="red-text font-weight">
						￥456
					</view>
				</view>
			</view>
		</view>
		<uni-load-more :status="status" />
	</view>
</template>

<script>
	import payRecordListSon from "./components/payRecordListSon"
	export default {
		components: {
			payRecordListSon,
		},
		data() {
			return {
				dateList: ['近三月', '近半年', '自定义日期'],
				dateIndex: 0,
				range: [],
				status: 'more',//more loading noMore
			}
		},
		watch: {
			range(newval) {
				console.log(newval);
				console.log('范围选:', this.range);
			},
		},
		methods: {
			dateChange(li, index) {
				this.dateIndex = index;
			},
			change(e) {
				this.single = e;
				console.log("-change事件:", e);
			},
			maskClick(e) {
				console.log('maskClick事件:', e);
			},
			payDatil(item){
				uni.navigateTo({
					url:"/pages/personal/payRecordList/payRecDetail"
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
</style>
