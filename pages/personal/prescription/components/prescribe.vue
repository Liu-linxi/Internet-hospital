<template>
	<!-- 处方笺组件 -->
	<view class="">
		<view class="text-inquiries mb-2">
			处方编号:825
		</view>
		<divider></divider>
		<!-- 患者信息 -->
		<view class="py-1">
			<view class="d-flex a-center j-sb truncate text-inquiries mt-1">
				<view class="truncate">
					姓名：<span class="text-dark font-weight">张三</span>
				</view>
				<view class="truncate">
					性别：<span class="text-dark font-weight">男</span>
				</view>
				<view class="truncate">
					年龄：<span class="text-dark font-weight">30</span>
				</view>
			</view>
			<view class="d-flex a-center truncate text-inquiries mt-1">
				<view class="truncate w-50">
					科室：<span class="text-dark font-weight">内科</span>
				</view>
				<view class="truncate">
					病人ID：<span class="text-dark font-weight">8413131</span>
				</view>
			</view>
			<view class="truncate mt-1 mb-2">
				<span class="truncate text-inquiries">诊断：</span>
				<span class="text-dark font-weight">消化不良</span>
			</view>
			<divider></divider>
		</view>

		<!-- 处方内容 -->
		<view class="">
			<view class="text-inquiries font-md mt-2">
				Rp
			</view>
			<view class="mb-2" v-for="(li,index) in 3" :key="index">
				<view class="d-flex a-center j-sb font-weight">
					<view class="truncate">
						维生素B1片 10mg*100
					</view>
					<view class="truncate">
						X3
					</view>
				</view>
				<view class="text-inquiries line-h-lg ml-2 truncate">
					用法：每次 1mg 口服 一日三次
				</view>
				<view class="text-inquiries line-h-lg ml-2 truncate">
					下次最早开药时间：2022-12-11
				</view>
			</view>
			<divider></divider>
		</view>
		<view class="mt-3 position-relative">
			<view class="truncate line-h-sm mb-2">
				<span class="truncate text-inquiries">医师：</span>
				<span class="text-dark font-weight">张三</span>
			</view>
			<view class="truncate line-h-sm mb-2">
				<span class="truncate text-inquiries">审核药师：</span>
				<span class="text-dark font-weight">唯一</span>
			</view>
			<view class="truncate line-h-sm mb-2">
				<span class="truncate text-inquiries">处方时间：</span>
				<span class="text-dark font-weight">2022-11-21 09:45:32</span>
			</view>
			<view class="position-absolute" style="top: -39rpx;left: 35%;">
				<image src="/static/icon/pdswy.png" style="width: 165rpx;height: 165rpx;" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: '',
		props: {
			paint: {
				type: Object,
			},
		},
		data() {
			return {

			}
		},
		onLoad() {
			console.log(this.paint)
		},
		methods: {

		},
	}
</script>

<style>
</style>
