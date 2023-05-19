<template>
	<view class="">
		<man-front @bodyEmit="bodyEmit" v-if="sex&&front" class=" man animate__animated animate__fadeIn"></man-front>
		<woman-front @bodyEmit="bodyEmit" v-if="!sex&&front" class="woman1 animate__animated animate__fadeIn"></woman-front>
		<man-back @bodyEmit="bodyEmit" v-if="sex&&!front"  class="man animate__animated animate__fadeIn"></man-back>
		<woman-back @bodyEmit="bodyEmit" v-if="!sex&&!front" class="woman2 animate__animated animate__fadeIn"></woman-back>
	</view>
</template>

<script>
	import manFront from './man-front.vue';
	import womanFront from './woman-front.vue';
	import manBack from './man-back.vue';
	import womanBack from './woman-back.vue';
	export default {
		name: 'bodyCom',
		props:{
			sex:{
				type:Boolean,
				default:true,
			},
			front:{
				type:Boolean,
				default:true,
			}
		},
		components: {
			manFront,
			womanFront,
			manBack,
			womanBack,
		},
		data() {
			return {
			
			}
		},
		methods: {
			bodyEmit(type,id){
				//正面 head头部	neck颈部		left-arm左手臂		right-arm右手臂	chest胸部	abdomen腹部	pelvis骨盆		left-leg左腿		right-leg右腿
				//背部 head头	dorsum背部		left-arm左手臂		right-arm右手臂	pelvis骨盆		left-leg左腿		right-leg右腿
				let dom
				// #ifdef H5
				dom=document.getElementById(id).outerHTML;
				// #endif
				if(!dom)return uni.showToast({title:"此功能仅支持H5",mask:true,icon:'none'});
				
				this.$emit("setpartDom",2,dom,this.changebody(type))
			},
			changebody(type){
				switch (type){
					case "head":
						return "头部";
					case "neck":
						return "颈部";
					case "chest":
						return "胸部"
					case "abdomen":
						return "腰腹部"
					case "dorsum":
						return "背部"
					case "left-arm":
					case "right-arm":
						return "上肢";
					case "left-leg":
					case "right-leg":
						return "下肢";
					default:
						if(this.front)return"骨盆区";
						return"臀部"
				}
			},
		},
	}
</script>

<style scoped>
	.man{
		margin-left: 92rpx;
	}
	.woman1{
		margin-left: 137rpx;
	}
	.woman2{
		margin-left: 127rpx;
	}
</style>