<template>
	<view>
		<view class="intelligen" @click="toIntellig" @touchmove.prevent="touchmove"
			:style="{ left: `${positionX}%`, top: `${positionY}%` }">
			<image src="@/static/intelligent-guidance/Intelligent-logo.png" mode="widthFix" class="image"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: "intelligent",
		data() {
			return {
				positionX: 78,
				positionY: 72,
				screenW:window.innerWidth,
				screenH:window.innerHeight,
			};
		},
		mounted() {
		},
		methods:{
			toIntellig(){
				uni.navigateTo({
					url:"/pages/intelligent-guidance/intelligent-guidance"
				})
			},
			touchmove(e) {
				const { pageX, pageY } = e.changedTouches[0];
				let precentX= ((pageX/this.screenW)*100).toFixed(2);
				let precentY= ((pageY/this.screenH)*100).toFixed(2);
				this.positionX=precentX<0?0:precentX<84?precentX:84;
				this.positionY = precentY<0?0:precentY<91?precentY:91;;
			}
		}
	}
</script>

<style scoped lang="scss">
	.intelligen {
		position: fixed;
		z-index: 99999;
		.image{
			width: 120rpx;
			height: 120rpx;
			border-radius: 50%;
			box-shadow: 0rpx 8rpx 32rpx 0rpx RGBA(66, 124, 252, 0.5);
		}
	}
</style>