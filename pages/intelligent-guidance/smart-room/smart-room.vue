<template>
	<view>
		<view class="">
			<image src="@/static/intelligent-guidance/bg2.png" mode="widthFix"></image>
		</view>
		<view class="mt--4">
			<scroll-view scroll-y="true" class="scrollClass" :scroll-into-view="scrollInto" scroll-with-animation style="bottom: 100rpx;">
				<block v-for="(item,index) in list" :key="index">
					<view :id="'chat'+index" :class="index==list.length-1?'pb':''">
						<chat-bubble :item="item" :index="index" @backStep="backStep">
						</chat-bubble>
					</view>
				</block>
			</scroll-view>
		</view>
		<popup-region v-if="step==1" @stepNext="stepNext"></popup-region>
		<popup-parts v-if="step==2" @stepNext="stepNext"></popup-parts>
		<popup-symptom v-if="step==3" @stepNext="stepNext"></popup-symptom>
		<bottom-input @listPush="listPush" v-if="inputShow" ></bottom-input>
	</view>
</template>

<script>
	import {
		list
	} from './datalist.js';
	import chatBubble from '../components/chat-bubble.vue'
	import bottomInput from '../components/bottom-input.vue'
	import popupRegion from '../components/popup-region.vue'
	import popupParts from '../components/popup-parts.vue'
	import popupSymptom from '../components/popup-symptom.vue'
	export default {
		components: {
			chatBubble,
			bottomInput,
			popupRegion,
			popupParts,
			popupSymptom
		},
		data() {
			return {
				list,
				scrollInto: "",
				step:1,//1区域		2部位	3病症	
				inputShow:false 
			}
		},
		onLoad(query) {
			if(query?.part){
				this.partListPush(query)
				this.step=-1;
			}
		},
		onShow() {
			this.list.splice(2)
		},
		mounted() {
			uni.$on("lastStep",(bool)=>{
				this.inputShow=bool;
				this.step=4;
			})
		},
		methods: {
			stepNext(item){
				let step=item.step-1;
				this.listPush("self",item.posi,step)
				this.step=-1;
				uni.showLoading({
					mask:true,
					title:"加载中..."
				})
				setTimeout(()=>{
					if(step==1)this.listPush("wisdomBrain","请问您身体哪个部位不舒服？",step);
					if(step==2)this.listPush("wisdomBrain","请您选择症状",step);
					if(step==3)this.listPush("wisdomBrain","",step);
					uni.hideLoading()
					this.step=item.step;
				},500)
			},
			// 返回上一步
			backStep(step){
				this.inputShow=false;
				let index=this.list.findIndex((item)=>item.step==step);
				this.list.splice(index)
				this.step=step;
			},
			// 添加数据
			listPush(username,message,step=null,bool=false){
				this.list.push({username,message,step,createTime: Date.now()});
				//bool代表手动输入病症;
				if(!bool)return;
				this.inputShow=false;
				this.listPush("wisdomBrain","",3);
			},
			// 症状都没有手动输入
			lastStep(bool){
				console.log(typeof bool);
			},
			// 滚动到底部
			pageToBottom() {
				let lastIndex = this.list.length - 1
				if (lastIndex < 0) return;
				this.$nextTick(() => {
					this.scrollInto = 'chat' + lastIndex
				})
			},
			partListPush({area,part,sym}){
				uni.showLoading({
					mask:true,
					title:"加载中..."
				})
				setTimeout(()=>{
					this.listPush("self",area,"图区域")
					this.listPush("wisdomBrain","请问您身体哪个部位不舒服？",1);
					this.listPush("self",part,"图部位")
					this.listPush("wisdomBrain","请您选择症状",2);
					this.listPush("self",sym,"图症状")
					this.listPush("wisdomBrain","",3);
					uni.hideLoading()
				},500)
				
			},
		}
	}
</script>

<style scoped>
	.scrollClass {
		position: absolute;
		left: 0;
		top: 113rpx;
		right: 0;
		border-radius: 30upx 30upx 0 0;
		background-color: #ffffff;
		box-shadow: 0rpx -2rpx 2rpx 0rpx rgba(138, 138, 138, 1);
	}
</style>