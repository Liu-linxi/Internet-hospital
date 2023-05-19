<template>
	<view class="">
		<view class="animate__animated animate__zoomIn scaleBig">
			<!-- #ifdef H5 -->
			<svg width="200px" height="200px" viewBox="0 0 312 524" version="1.1" xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink">
				<g id="male-human-body" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					<rect fill="#FFFFFF" x="0" y="0" width="200" height="200"></rect>
					<g id="part" transform="translate(8.000000, 7.000000)" v-html="partDom"></g>
				</g>
			</svg>
			<!-- #endif -->
		</view>
		<view class="animate__animated animate__fadeIn">
			<view class="text-center font-weight  text-center mt-5">
				请点击不舒服的位置
			</view>
			<view class="px-3 mt-2">
				<scroll-view scroll-y="true" style="height:calc(35vh - 100rpx)">
					<uni-row class="demo-uni-row pb-2" :gutter="20">
						<uni-col :span="8" v-for="li in list" class="m-auto">
							<view class="mt-2 d-flex j-sa">
								<text class="shadow text-center rounded-md py px-5" :class="{'main-bg-color text-white':choose==li}" @click="chooseReg(li)">
									区域{{li}}
								</text>
							</view>
						</uni-col>
					</uni-row>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'selectPart',
		props:["partDom","area"],//partDom  svgDom  area//选择区域
		data() {
			return {
				choose:-1,
				list:8,
			}
		},
		created() {

		},
		methods: {
			chooseReg(item){
				this.choose=item;
				setTimeout(()=>{
					uni.navigateTo({
						url:`/pages/intelligent-guidance/select-region/symptoms?area=${this.area}&part=${item}`,
						success: () => {
							this.choose=-1;
							this.$emit("backBody")
						}
					})
				},100)
			}
		},
	}
</script>

<style scoped lang="scss">
	@import url("./scale.scss");

	.scaleBig {
		width: 400rpx;
		height: 400rpx;
		border: 2rpx solid #427CFC;
		border-radius: 50%;
		overflow: hidden;
		margin: 0 auto;
	}
</style>