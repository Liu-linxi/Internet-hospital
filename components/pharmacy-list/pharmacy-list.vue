<template>
	<!-- 药房列表数据 -->
	<view class="pt-2">
		<!-- <view class="d-flex a-center position-relative my-2 mx-3 hospital-shadow rounded-md p-2" v-for="li in total">
			<view class="main--color font-weight font-big">
				{{li}}
			</view>
			<view class="ml-2 d-flex a-center">
				<image src="" class="main-bg-color rounded-md doctor-image" mode=""></image>
			</view>
			<view class="ml-2 w-70">
				<view class="position-relative">
					<view class="truncate font-weight font-md w-90">
						张仲景大药房（建设路店）
					</view>
					<view class="flex-nowrap font-sm position-absolute mt-1 top-0 right-0 mt--3">
						>100m
					</view>
				</view>
				<view class="truncate2 line-h-md">
					地址：老城区南四环西路119号
				</view>
			</view>
		</view> -->
		<view class="d-flex a-center position-relative mb-2 hospital-shadow rounded-md p-2" v-for="(li,index) in drugstore" :key="index" @click="byVal(li)">
			<view class="main--color font-weight font-big">
				{{li}}
			</view>
			<view class="ml-2 d-flex a-center">
				<image src="" class="main-bg-color rounded-md doctor-image" mode=""></image>
			</view>
			<view class="ml-2 w-70">
				<view class="position-relative">
					<view class="truncate font-weight font-md w-90">
						张仲景大药房（建设路店）
					</view>
					<view class="flex-nowrap font-sm position-absolute mt-1 top-0 right-0 mt--3 pr">
						>100m
					</view>
				</view>
				
				<view class="truncate2 line-h-md">
					地址：老城区南四环西路119号
				</view>
			</view>
			<view v-show="showTotal" class="position-absolute right-0 bottom-0 main-bg-color text-white font-sm" style="border-radius: 15rpx 0 15rpx 0;">
				总计:￥246.26
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			// 数据列表
			drugstore: {
				// type: Array,
			},
			//1处方笺点击执行事件
			type:{
				type:Number,
				default:1
			},
			//是否显示总价
			showTotal:{
				type:Boolean,
				default:false
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			byVal(val){
				switch (this.type){
					case 0://订单详情药房点击返回所调用事件
						this.$emit('handelDetailShow');
						break;
					case 1://处方笺点击药房执行数据传输
						uni.$emit('prePharmacy',{type:true,data:val});
						break;
					default:
						break;
				}
			},
		}
	}
</script>

<style>
</style>