<!--
 * @Description: 自定义 悬浮异形 tabbar 
 * 底部导航
-->
<template>
	<view class="tabbar-body">
		<view class="tabbar-item" v-for="(item, index) in tabBarList" :key="index" @click="switchClick(item, index)">
			<view class="tabbar-item-body" :class="activeIndex == index ? 'active  animate__animated animate__heartBeat' : ''">
				<view class="tabbar-item-icon">
					<image :src="activeIndex == index ? item.selectedIconPath : item.iconPath" style="width: 50rpx; height: 50rpx;"></image>
				</view>
				<view class="tab-bar-text" :class="activeIndex == index ? 'actives' : ''">{{ item.text }}</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: ['activeIndex'],
	data() {
		return {
			tabBarList: [{
				text: '首页',
				iconPath: '/static/tabbar/home_off.png',
				selectedIconPath: '/static/tabbar/home_on.png',
				pagePath: '/pages/home/index/index',
			}, {
				text: '健康专栏',
				iconPath: '/static/tabbar/health_off.png',
				selectedIconPath: '/static/tabbar/health_on.png',
				pagePath: '/pages/health-column/health-column',
			},{
				text: '消息',
				iconPath: '/static/tabbar/info_off.png',
				selectedIconPath: '/static/tabbar/info_on.png',
				pagePath: '/pages/message/message',
			}, {
				text: '我的',
				iconPath: '/static/tabbar/user_off.png',
				selectedIconPath: '/static/tabbar/user_on.png',
				pagePath: '/pages/personal/personal',
			}],
		}
	},
	methods: {
		switchClick(data, index) {
			if (index == this.activeIndex) {
				return
			}
			uni.reLaunch({
				url: data.pagePath
			})
		},
	}
}
</script>

<style lang="scss" scoped>

.tabbar-body {
	background: #ffffff;
	position: fixed;
	height: 140rpx;
	border-radius: 70rpx;
	bottom: 40rpx;
	width: 670rpx;
	left: 40rpx;
	z-index: 1001;
	box-shadow: 0rpx 0rpx 22rpx 9rpx rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: space-around;
	align-items: center;
	.tabbar-item-body  {
		text-align: center;
		width: 100rpx;
		height: 100rpx;
		white-space: nowrap;
		display: flex;
		flex-direction: column;
		justify-content:center;
		border-radius: 50%;
		line-height: 1;
		.tab-bar-text{
			line-height: 1;
			color: #626A7D;
			font-weight: bold;
			font-size: 16rpx !important;
		}
		.actives{
			color: #427CFC;
		}
	}
	.active{
		background-color: #AFC6FE;
		color: #427CFC;
	}
}
</style>
