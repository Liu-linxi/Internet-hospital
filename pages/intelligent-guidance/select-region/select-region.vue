<template>
	<view>
		<view class="position-relative">
			<view class="pt-4 ml-4">
				<view class="w-20 choose font-weight  d-flex a-center">
					<view class="w-50 px-2 py-1 " :class="{'main-bg-color text-white':sex}" @click="step=1;sex=true;">男</view>
					<view class="w-50 px-2 py-1" :class="{'main-bg-color text-white ':!sex}" @click="step=1;sex=false">女</view>
				</view>
				<view class="w-20 choose font-weight  d-flex a-center mt-3">
					<view class="w-50 px-2 py-1 " :class="{'main-bg-color text-white':front}" @click="step=1;front=true">前</view>
					<view class="w-50 px-2 py-1" :class="{'main-bg-color text-white ':!front}" @click="step=1;front=false">后</view>
				</view>
			</view>
		</view>
		<body-com v-show="step==1" :sex="sex" :front="front" @setpartDom="setpartDom"></body-com>
		<select-part v-show="step==2" :partDom="partDom" :area="area" @backBody="backBody"></select-part>
		<!-- <view class="position-fixed shadow rounded-md px-4 py-1" v-if="step==2" style="bottom: 100rpx;left: 300rpx;" @click="backBody">
			返回全身
		</view> -->
		<view class="d-flex j-sa mt-20 animate__animated animate__fadeIn mt-5 ">
			<view class="shadow rounded-md w-20 px-4 py-1 text-center" v-if="step==2" @click="backBody">
				返回全身
			</view>
		</view>
	</view>
</template>

<script>
	import bodyCom from '../components-svg/body-com.vue';
	import selectPart from './components/select-part.vue';
	export default {
		components:{
			bodyCom,
			selectPart
		},
		data() {
			return {
				sex:true,//true男false女
				front:true,
				step:1,//1全身2局部
				partDom:null,
				area:null,
			}
		},
		onReady() {
		},
		methods: {
			setpartDom(step,dom,area){
				this.step=step;
				this.partDom=dom;
				this.area=area;
			},
			backBody(){
				this.step=1;
			},
			
		}
	}
</script>

<style scoped lang="scss">
.choose{
	background-color: #F1F1F1;
	border-radius: 30rpx;
	.w-50{
		border-radius: 30rpx;
		text-align: center;
		line-height: 1.4;
	}
	.main-bg-color{
		transition:background-color .6s ease-in-out ;
	}
}

</style>
