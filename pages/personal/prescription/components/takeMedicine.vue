<template>
	<!-- 取药方式 -->
	<view class="position-absolute w-100 bottom-0 w-100 bg-white animate__animated" :class="animateShow?'animate__slideInUp':'animate__slideOutDown'" style="margin-top: 12vh;z-index: 0;">
		<view class="rounded-top hospital-shadow">
			<view class="position-relative pt-3 mb-2">
				<view class="position-absolute top-0 right-0 mr-4 mt-1 d-flex a-center j-end w-30" @click="handelLocal">
					<view class="mr-2 font-sm text-inquiries truncate">
						老城区南…
					</view>
					<view class="icon-image-small">
						<image src="/static/icon/location.png" class="icon-image-small" mode=""></image>
					</view>
				</view>
				<view class="main-bg-color rounded-lg line-h-big text-center w-20 ml-auto mr-auto py pt-1" @click="handelClose">
				</view>
			</view>
			
			
			<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="text" activeColor="#427CFC" class="w-60"></uni-segmented-control>
			<divider></divider>
			<scroll-view class="maxheight" scroll-y="true">
				<view v-show="current === 0" class="pb-2">
					<view class="px-3" v-show="preDetailShow">
							<pharmacy-list :drugstore="10" :showTotal="true" :class="preDetailShow?'animate__animated animate__fadeIn':''"></pharmacy-list>
					</view>
					<prescribe-details v-show="!preDetailShow" :class="preDetailShow?'':'animate__animated animate__fadeIn'"></prescribe-details>
				</view>
				<view v-show="current === 1" class="pb-2">
					<view class="px-3" v-if="preDetailShow">
							<pharmacy-list :drugstore="1" :showTotal="true" :class="preDetailShow?'animate__animated animate__fadeIn':''"></pharmacy-list>
					</view>
					<prescribe-details v-else :class="preDetailShow?'':'animate__animated animate__fadeIn'"></prescribe-details>
				</view>
				<view v-show="current === 2" class="pb-2">
					<prescribe-delivery-details></prescribe-delivery-details>
				</view>
			</scroll-view>
				
		</view>
	</view>
</template>

<script>
	import pharmacyList from '@/components/pharmacy-list/pharmacy-list.vue';
	import prescribeDetails from './prescribeDetails.vue';
	import prescribeDeliveryDetails from './prescribeDeliveryDetails.vue';
	export default {
		components:{
			pharmacyList,
			prescribeDetails,
			prescribeDeliveryDetails
		},
		data() {
			return {
				items: ['自选', '院内自取', '配送'],
				current: 0,
				animateShow:true,//产生动画效果
				preDetailShow:true,// 处方下单详情界面判定条件
			}
		},
		mounted() {
			uni.$emit("currentWat",this.current);
			// 监听点击后的显示界面数据内容
			uni.$on('prePharmacy',(data)=>{
				if(data.data){
					this.preDetailShow=false;
				}
			})
			uni.$on('detailShow',(data)=>{
				if(data){
					this.preDetailShow=data;
				}
			})
		},
		methods: {
			// 切换模式
			onClickItem(e) {
				if (this.current != e.currentIndex) {
					this.current = e.currentIndex;
					uni.$emit("currentWat",this.current)
					this.preDetailShow=true;
				}
			},
			handelLocal(){
				uni.showToast({
					title:"选择地址",
					icon:'none'
				})
			},
			//父组件关闭数据显示内容
			handelClose(){
				this.$parent.$parent.handelCloseDeatail();
			},
			
		}
	}
</script>

<style scoped>
	.maxheight{
		height: 74vh;
	}
	::v-deep .uni-popup uni-view[name=mask] {
		top: -100vh !important;
		z-index: 9 !important;
	}
	
	::v-deep uni-view[name=content] {
		border-radius: 50rpx 50rpx 0 0;
		overflow: hidden;
		z-index: 10 !important;
	}
</style>
