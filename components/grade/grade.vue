<template>
	<!-- 评分 -->
	<view>
		<view class="rate">
			<uni-icons type="star-filled" color="#FFD211" size="24"></uni-icons>
			<view class="txt">{{rate}}({{rateTotal}})</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "grade",
		props:{
			rate:{
				default:"0.0",
			},
			rateTotal:{
				default:"0"
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.rate {
		display: flex;
		align-items: center;

		.txt {
			color: #99a6b8;
			font-weight: 500;
			font-size: 22upx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
</style>
