<template>
	<!-- 选择取药方式组件 -->
	<view class="position-absolute w-100 bottom-0 bg-white">
		<view class="position-relative rounded-top hospital-shadow px-4 pt-1 pb-2 animate__animated" :class="hide?'animate__fadeOutDown':'animate__slideInUp'" v-if="hideEle" style="height: 510rpx;">
			<view class="position-absolute top-0 right-0 mr-3 mt-1 d-flex a-center j-end w-30" @click="handelLocal">
				<view class="mr-2 font-sm text-inquiries truncate">
					老城区南…
				</view>
				<view class="icon-image-small">
					<image src="/static/icon/location.png" class="icon-image-small" mode=""></image>
				</view>
			</view>
			<view class="main-bg-color text-white rounded-lg line-h-big text-center w-41 ml-auto mr-auto mt-2 py" @click="handelTake">
				选择取药方式
			</view>
			<view class="">
				<pharmacy-list :drugstore="2"></pharmacy-list>
			</view>
		</view>
	</view>
</template>

<script>
	import pharmacyList from '@/components/pharmacy-list/pharmacy-list.vue';
	export default {
		name:"chooseTakeMedicine",
		components:{
			pharmacyList
		},
		data() {
			return {
				hide:false,
				hideEle:true,
			}
		},
		methods: {
			handelTake(){
				// 数据调用父组件数据内容
				let parentThis=this.$parent.$parent.$parent;
				// 执行处方笺滚动到顶部状态始
				// 解决view层不同步的问题
				parentThis.prescribeScrollTop = parentThis.prescribeOld.prescribeScrollTop;
				this.$nextTick(() =>{
					parentThis.prescribeScrollTop = 0;
				});
				// 执行处方笺滚动到顶部状态末
				
				// 动画效果页面滚动
				parentThis.takeChoose=true;//三种取药方式弹出开始
				// 执行动画效果两种形式判断，多写了一部页面滚动到顶部样式。机型太小高度不适配ipone5以下
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 200,
					success:()=>{
						this.hide=true;
						setTimeout(()=>{
							this.hideEle=false;
						},200)
					}
				});
			},
			handelLocal(){
				uni.showToast({
					title:"选择地址",
					icon:'none'
				})
			}
		}
	}
</script>

<style>
</style>