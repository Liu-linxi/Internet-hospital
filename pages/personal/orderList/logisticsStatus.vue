<template>
	<view class="main-bg-color">
		<!-- 图片内容 -->
		<view class="bg-white bg-white animate__animated animate__slideInUp" style="border-radius: 0 30rpx 0 0;">
			<view class="pt-4">
				<view class="border-radi py-3 line-h-md ">
					<text class="main--color mr-1 font-weight">配送中</text>
				</view>
			</view>
			<!-- 物流列表 -->
			<view class="mx-5 my-4 ">
				<view class="logistics">
					<view class="log-item" v-for="(li,index) in initList" :key="index">
						<view class="log-title">
							<image :src="li.logo" class="icon-image"  mode=""></image>
							<text class="font-md font-weight ml-3">{{li.title}}</text>
						</view>
						<view class="log-detail">
							<view class="main--color font line-h-lg">
								{{li.endTime}}
							</view>
							<view class="text-subheading font line-h-lg position-relative ">
								<view :class="index==initList.length-1?'ellipsis':''">
									{{li.logDec}}
								</view>
								<view class="circle-dot line-h-lg"></view>
							</view>
							<view class="main--color font line-h-lg position-relative">
								{{li.beginTime}}
								<view class="circle-dot-btm line-h-lg" v-show="index==initList.length-1"></view>
							</view>
						</view>
					</view>
					
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				logistList:[{
					logo:"/static/personalCenter/logistics1.png",
					title:'订单提交成功',
					beginTime:"2022-10-06 02:09",
					logDec:"您提交了订单，请等待第三方配送系统配送",
					endTime:"2022-10-06 02:09"
				},{
					logo:"/static/personalCenter/logistics2.png",
					title:'配送员已接单',
					beginTime:"2022-10-06 02:09",
					logDec:"配送员卢深已接单，正在前往药店。",
					endTime:"2022-10-06 02:09"
				},{
					logo:"/static/personalCenter/logistics3.png",
					title:'配送员已到店',
					beginTime:"2022-10-06 02:09",
					logDec:"配送员卢深已到店取药",
					endTime:"2022-10-06 02:09"
				},{
					logo:"/static/personalCenter/logistics4.png",
					title:'配送员已取货',
					beginTime:"2022-10-06 02:09",
					logDec:"配送员卢深取药成功，正在赶往指定地点",
					endTime:"2022-10-06 02:09"
				},{
					logo:"/static/personalCenter/logistics5.png",
					title:'配送员完成',
					beginTime:"2022-10-06 02:09",
					logDec:"配送员卢深已到达用户指定地点，完成配送",
					endTime:"2022-10-06 02:09"
				}],
				initList:[],
			}
		},
		onLoad() {
			this.logistList=this.logistList.slice(0,Math.floor(Math.random()*6));//随机截取数据内容
			// this.logistList=this.logistList.slice(0,5);//随机截取数据内容
			this.initList=this.logistList.reverse();//倒叙显示其上
		},
		methods: {
		},
	}
</script>

<style scoped lang="scss">
.border-radi {
		border-radius: 12rpx;
		border: 1rpx solid #E5E5E5;
		width: 85vw;
		margin: 0 auto;
		text-align: center;
	}
	.logistics{
		.log-item{
			.log-title{
				display: flex;
				align-items: center;
			}
			.log-detail{
				margin-left: 30rpx;
				position: relative;
				padding-left: 60rpx;
				border-left: 1rpx solid #000000;
				.circle-dot{
					width: 24rpx;
					height: 24rpx;
					background-color: #112950;
					border-radius: 50%;
					border: 5rpx solid #ffffff;
					position: absolute;
					top: calc(50% - 12rpx);
					left: -76.5rpx;
				}
				.circle-dot-btm{
					width: 24rpx;
					height: 74rpx;
					background-color: #ffffff;
					position: absolute;
					top: -9rpx;
					left: -72.5rpx;
				}
			}
		}
	}
</style>
