<template>
	<view>
		<view class="d-flex">
			<view style="width: 33.33%;">
				<scroll-view scroll-y="true" style="height:83vh">
					<view class="shadow mx-3 py-3" style="border-radius: 0 0 10rpx 10rpx;">
						<view :class="{'main-bg-color text-white':leftCheck==li}" class=" text-center rounded-circle " v-for="li in 3" @click="leftCheck=li">
							{{li}}
						</view>
					</view>
				</scroll-view>
			</view>
			<view style="width: 66.66%;">
				<scroll-view scroll-y="true" style="height:83vh">
					<uni-row class="demo-uni-row pb-2" :gutter="20">
						<uni-col :span="12" v-for="li in list" class="m-auto">
							<view class="mt-2 d-flex j-sa">
								<text class="shadow text-center rounded-md py px-5" :class="{'main-bg-color text-white':rightCheck==li}" @click="choosesym(li)">
									症状{{li}}
								</text>
							</view>
						</uni-col>
					</uni-row>
				</scroll-view>
			</view>
		</view>
		<view class="d-flex j-sa mt-20 animate__animated animate__fadeIn mt-3 ">
			<view class="shadow rounded-md w-20 px-4 py-1 text-center" @click="backStep">
				返回上一步
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				leftCheck:-1,//部位
				rightCheck:-1,
				list:66,
				area:null,//区域
			}
		},
		onLoad(qury) {
			if(qury?.area){
				this.area=qury.area;
				this.leftCheck=qury.part;
			}
		},
		methods: {
			choosesym(li){
				this.rightCheck=li;
				uni.navigateTo({
					url:`/pages/intelligent-guidance/smart-room/smart-room?area=${this.area}&part=${this.leftCheck}&sym=${li}`
				})
			},
			backStep(){
				uni.navigateBack()
			},
		}
	}
</script>

<style>

</style>
