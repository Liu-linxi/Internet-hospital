<template>
	<!-- 分割线 -->
	<view class="divider">
		<view class="type1" v-show="states=='1'">
			<view class="block1"></view>
			<view class="block2"></view>
		</view>
		<view class="type2" v-show="states=='2'">
			<view class="block"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"divider",
		props:{
			states:{
				type: String,
				default: '2'//1蓝色左侧分割线 2纯色分割线
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.divider{
		.type1{
			display: flex;
			.block1{
			  background-color: rgba(66, 124, 252, 1);
			  width: 150rpx;
			  height: 4rpx;
			}
			.block2{
			  background-color: #F2F6FE;
			  width: 600rpx;
			  height: 4rpx;
			}
		}
		.type2{
			.block{
			  background-color: #F2F6FE;
			  width: 100%;
			  height: 4rpx;
			}
		}
		
	}
</style>