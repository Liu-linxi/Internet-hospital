<template>
	<view>
		<uni-segmented-control :current="tabIndex" :values="tabs" @clickItem="onClickItem" styleType="text"
			activeColor="#427CFC" class="position-fixed w-100 bg-white" style="z-index: 1;"></uni-segmented-control>
		<view style="height: 100rpx;"></view>
		<view class="px-4 pb-3" v-show="tabIndex === 0">
			<view class="d-flex j-sa">
				<w-qrcode ref="qrcode" :options="options" @generate="aleard" @press="longtap" @error="handleError"></w-qrcode>
			</view>
			<view class="text-center font-weight mt-1 text-letter1">
				出行时请出示健康码
			</view>
			<view class="">
				<view class="d-flex a-center j-sb line-h-big border-bottom">
					<view>姓名</view>
					<view class="text-subheading">
						{{nameVague("张三三")}}
					</view>
				</view>
				<view class="d-flex a-center j-sb line-h-big border-bottom">
					<view>身份证号</view>
					<view class="text-subheading">
						{{idCardVague("112231245654544454")}}
					</view>
				</view>
				<view class="d-flex a-center j-sb line-h-big border-bottom">
					<view>家庭住址</view>
					<view class="text-subheading">
						XX省XX市XX县
					</view>
				</view>
				<view class="d-flex a-center j-sb line-h-big border-bottom">
					<view>手机号</view>
					<view class="text-subheading">
						13111111111
					</view>
				</view>
				<view class="d-flex a-center j-sb line-h-big border-bottom">
					<view>患者ID</view>
					<view class="text-subheading">
						2020144
					</view>
				</view>
			</view>
			<button type="primary" class="rounded-circle mt-3">
				进入卡包
			</button>
			<view class="w-30 text-center main--color border-bottom line-h-sm input-border-color m-auto mt-3">
				解除健康卡绑定
			</view>
		</view>
		<view class="px-4 pb-3 animate__animated animate__fadeIn" v-if="tabIndex === 1">
			<view class="d-flex j-sa">
				<w-barcode ref="barcode" :options="optionsbar" @generate="aleard" @press="longtap" @error="handleError">
				</w-barcode>
			</view>
			<view class="d-flex j-sa mt-3">
				<w-qrcode ref="qrcode" :options="options" @generate="aleard" @press="longtap" @error="handleError"></w-qrcode>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		nameVague,
		idCardVague
	} from "@/common/lib/filter.js"
	export default {
		components: {
			
		},
		data() {
			return {
				nameVague,
				idCardVague,
				tabs: ['健康码', '就诊码'],
				tabIndex: 0,
				options: {
					code: '电子健康卡', //必传
					level: 4, //纠错等级 0~4 默认4 非必传
					type: 'none', // 码点 目前只支持 none 其它暂不支持 非必传
					src: '', //画布背景 非必传
					padding: 0, //二维码margin Number 单位rpx 默认0 非必传
					border: { //二维码边框配置 非必传
						color: ['#F27121', '#8A2387', '#1b82d2'], //边框颜色支持渐变色 最多10种颜色 如果默认黑色此属性不需要传
						opacity: 0.6, //边框透明度 默认为1不透明 0~1
						lineWidth: 6, //边框宽度
						degree: 15 //边框圆角度数 默认5
					},
					img: { // 二维码log配置 非必传
						src: '/static/logo.png', // 图片地址
						size: 40, // 图片大小
						degree: 15, // 圆角大小 如果type为round生效
						type: '', //图片展示类型 默认none 可选值  round圆角  circle圆 如果为round 可以传入degree设置圆角大小 默认 5
						color: '#ffffff', //图片周围的白色边框
						width: 8 //图片周围白色边框的宽度 默认5
					},
					color: [ '#196f39'], //二维码颜色支持渐变 最多10种颜色 默认黑色 非必传
					bgColor: "#FFFFFF", //二维码背景色 默认白色 非必传
					size: 350, // 二维码大小 Number 单位rpx 必传
				},
				optionsbar: {
					code: 'E01181016286106',
					// color: ['#', '#00c3ff', '#ee0979', '#e96443', '#904e95'], // 条形码的颜色
					bgColor: '#FFFFFF', // 背景色
					width: 670, // 宽度
					height: 200, // 高度
					// orient:'horizontal',//	否	string	 水平 垂直 默认水平 horizontal ｜vertical
					text: {
						content: 'E01181016286106',
						color: ['#ee0979', '#45B649', '#00c3ff'],
						position: 'bottom', //bottom,top
						size: 32,
						padding: 30
					}
				},
			}
		},
		methods: {
			aleard(res) { // 条形码创建成功的回调 修改参数同样触发
				console.log(res)
			},
			longtap(e) { //长按安事件
				console.log(e);
			},
			handleError(e) { //当发生错误时触发
				console.log(e);
				uni.showToast({
					title: '条码加载失败!',
					icon: 'error'
				})
			},
			
			// 切换模式
			onClickItem(e) {
				if (this.tabIndex != e.currentIndex) {
					this.tabIndex = e.currentIndex;
				}
			},
		}
	}
</script>

<style scoped>
</style>
