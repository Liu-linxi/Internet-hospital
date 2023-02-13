<template>
	<!-- 电子健康卡列表组件-->
	<view class="">
		<view class="card" v-for="(li,index) in cardList " :key="index" @click="hadelData(li)">
			<view class="faka">
				平顶山市卫生健康委员会
			</view>
			<image src="/static/personalCenter/healthCard/icon2.png" class="image" mode=""></image>
			<view class="biaoshi">
				电子健康卡
			</view>
			<view class="xingming">
				{{nameVague("张三")}}
			</view>
			<view class="shenfenzheng">
				{{idCardVague("112231245654544454")}}
			</view>
			<image src="" class="qrcode" mode=""></image>
			<view class="jianzhi">
				中华人民共和国国家卫生健康委员会监制
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
		props: {
			// 数据列表
			cardList: {
				// type: Array,
			},
		},
		data() {
			return {
				nameVague,
				idCardVague,
			}
		},
		methods: {
			hadelData(item){
				this.$emit("getData",item)
			},
		}
	}
</script>

<style scoped lang="scss">
	.card {
		width: 620rpx;
		height: 350rpx;
		border-radius: 10rpx;
		overflow: hidden;
		margin-bottom: 20rpx;
		position: relative;
		margin-left: 25rpx;
		background-image: url("@/static/personalCenter/healthCard/cardnewbg.png");
		background-repeat: no-repeat;
		background-size: 100% 100%;
		font-weight: bold;
		.faka{
			position: absolute;
			font-size:18rpx ;
			left: 34rpx;
			top: 35rpx;
			line-height: 25rpx;
		}
		.image{
			width: 55rpx;
			height: 55rpx;
			position: absolute;
			top: 23rpx;
			left: 380rpx;
		}
		.biaoshi{
			position: absolute;
			top: 23rpx;
			left: 442rpx;
			font-size: 30rpx;
		}
		.xingming{
			color: #2B2B2B;
			position: absolute;
			top: 202rpx;
			left: 35rpx;
			font-size: 36rpx;
			line-height: 50rpx;
		}
		.shenfenzheng{
			color: #2B2B2B;
			position: absolute;
			left: 35rpx;
			top: 254rpx;
			font-size: 30rpx;
			line-height: 42rpx;
		}
		.qrcode{
			width: 162rpx;
			height: 162rpx;
			position: absolute;
			left: 442rpx;
			top: 124rpx;
			background-color: #427CFC;
		}
		.jianzhi{
			color: #2B2B2B;
			position: absolute;
			bottom:10rpx;
			font-size: 18rpx;
			line-height: 42rpx;
			text-align: center;
			width: 100%;
		}
	}
</style>
