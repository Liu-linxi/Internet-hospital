<template>
	<view>
		<template v-if="!showTake">
			<view @tap.stop="" class="position-fixed w-100" style="height: 94.5vh;overflow: hidden;">
				<!-- 处方标题 -->
				<view class="text-center font-md font-weight h-12" @click="handelCloseDeatail">
					<view class="pt-2">平顶山微医医院</view>
					<view>互联网医院<span class="ml-1">电子处方笺</span> </view>
				</view>
				<!-- 处方编号 -->
				<view class="px-4 position-relative">
					<scroll-view :scroll-top="prescribeScrollTop" @scroll.stop="scroll" scroll-y="true" style="height: calc(80vh - 520rpx);-webkit-overflow-scrolling: touch;">
						<prescribe :paint="inItObj"></prescribe>
					</scroll-view>
					<!-- <view @touchmove.stop=""  style="height: calc(80vh - 520rpx);overflow-y: scroll; -webkit-overflow-scrolling: touch;">
						<prescribe :paint="inItObj"></prescribe>
					</view> -->
				</view>
				<!-- 选择取药方式 -->
				<choose-take-medicine ref="takeMed"></choose-take-medicine>
				<!-- 三种取药方式页面 -->
				<take-medicine v-show="takeChoose" ref="medPage"></take-medicine>
			</view>
		</template>
		
		<template v-if="showTake" >
			<view  class="text-center font-md font-weight h-12" @click="handelCloseDeatail">
				<view class="pt-2">平顶山微医医院</view>
				<view>互联网医院<span class="ml-1">电子处方笺</span> </view>
			</view>
			<view class="px-4 pb-3">
				<prescribe :paint="inItObj"></prescribe>
			</view>
		</template>
	</view>
</template>

<script> 

	import prescribe from './components/prescribe.vue';
	import chooseTakeMedicine from './components/chooseTakeMedicine.vue';
	import takeMedicine from './components/takeMedicine.vue';
	export default {
		components:{
			prescribe,
			chooseTakeMedicine,
			takeMedicine
		},
		data() {
			return {
				inItObj:{},//处方病人信息
				hideEle:true,
				prescribeScrollTop:0,//处方滚动
				prescribeOld: {
					prescribeScrollTop: 0
				},
				takeChoose:false,//取药方式是否展开
				showTake:false,	// 处方交易完成
			}
		},
		onLoad(e) {
			// 接收传参数显示内容
			if(Object.keys(e).length>0){
				let obj=JSON.parse(e.obj);
				if(obj.type==1){
					this.showTake=true;
				}
			}
			//监听子组件选择界面内容展示内容数据
			uni.$on('prePharmacy',(data)=>{
				if(data.type){
					this.$refs.takeMed.handelTake();
				}
			})
			uni.getLocation({
				type: 'wgs84',
				success: (res)=> {
					console.log('当前位置的经度：' + res.longitude);
					console.log('当前位置的纬度：' + res.latitude);
				}
			});
		},
		methods: {
			// 处方详情滚动
			scroll: function(e) {
				this.prescribeOld.prescribeScrollTop = e.detail.scrollTop;
			},
			//执行动画效果操作子组件takeMedicine（三种取药方式页面）调用执行动画的逻辑操作
			handelCloseDeatail(){
				// 保持动画执行效果不做过多使用
				this.$refs.medPage.animateShow=false;
				setTimeout(()=>{
					this.$refs.medPage.current=0;//关闭三种取药后重置到默认自取界面
					this.$refs.medPage.preDetailShow=true;//下次点击动画依旧可用恢复初始化
					this.takeChoose=false;//400毫秒动画执行完毕后进行隐藏
					this.$refs.medPage.animateShow=true;//下次点击动画依旧可用恢复初始化
				},400)
				// 关闭选择取药方式动画属性初始化
				this.$refs.takeMed.hide=false;
				this.$refs.takeMed.hideEle=true;
			}
		},
		onUnload() {
			uni.$off();//移除事件监听
		},
	}
</script>

<style>

</style>
