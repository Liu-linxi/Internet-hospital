<template>
	<view class="">
		<!-- 药品列表 -->
		<view class="ml-5 pl-1" v-for="(li,index) in medList" :key="index">
			<view class="font-weight d-flex a-center j-sb line-h-lg">
				<view>
					<text class="mr-1">维生素B1片</text>
					<text>10mg*100</text>
				</view>
				<view class="text-letter1 mr-3">
					X3
				</view>
			</view>
			<view class="ml-1 text-subheading">
				<view class="line-h-md">
					用法：每次&nbsp;1mg&nbsp;口服&nbsp;一日三次
				</view>
				<view class="line-h-md">
					下次最早开药时间：2022-11-24
				</view>
			</view>
		</view>
		<!-- 药品审核 -->
		<view class="ml-5 pl-1 mt-2">
			<view class="line-h-md">
				<text class="text-subheading">医师：</text>
				<text class="font-weight">刘丽霞</text>
			</view>
			<view class="line-h-md">
				<text class="text-subheading">审核药师：</text>
				<text class="font-weight">微医医院</text>
			</view>
			<view class="line-h-md">
				<text class="text-subheading">处方时间：</text>
				<text class="font-weight">2022-11-09 11:20:00</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			medList:{
				// type:Array,
			},
		},
		data() {
			return {
				
			}
		},
		methods: {
		},
	}
</script>

<style>
</style>