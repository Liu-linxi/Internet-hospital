<template>
	<!-- 选择取药方式组件 -->
	<view class="position-absolute w-100 bottom-0 bg-white">
			<view class="position-relative rounded-top hospital-shadow pt-1 px-3 pb-2 animate__animated overflow-hidden animate__slideInUp">
					<view class="font-weight mt-2">
						选择身体部位
					</view>
					<scroll-view :scroll-y="showAll?true:false" style="max-height:60vh" scroll-with-animation>
						<uni-row class="demo-uni-row pb-2" :gutter="20">
							<uni-col :span="8" v-for="li in list" class="m-auto">
								<view class="mt-2 d-flex j-sa">
									<text class="shadow text-center rounded-md py px-5" :class="{'main-bg-color text-white':choose==li}" @click="chooseReg(li)">
										部位{{li}}
									</text>
								</view>
							</uni-col>
						</uni-row>
					</scroll-view>
					<view class="text-center main--color mt-2" @click="showAll=!showAll;showAll?list=56:list=3">
						{{showAll?"返回缩略":"查看全部"}}
					</view>
			</view>
	</view>
</template>

<script>
	export default {
		name:"popupRegion",
		data() {
			return {
				list:3,
				choose:-1,
				showAll:false,
			}
		},
		methods: {
			chooseReg(item){
				if(item==this.choose) return this.choose=-1;
				this.choose=item;
				this.$emit("stepNext",{step:3,posi:"部位"+item})
			}
		}
	}
</script>

<style scoped>
	 .rounded-top{
		 border-radius: 30rpx 30rpx 0rpx 0rpx;
	 }
	 .w-33{
		 width: 33.3333%;
	 }
	 .choose{
		 color: #fff;
		 background-color: ;
	 }
	 .scrollClass {
		 height: 60vh;
	 }
</style>