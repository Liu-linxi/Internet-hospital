<template>
	<view>
		<!-- 消息气泡 -->
		<view class="d-flex px-2 pt-2" :class="isSelf ? 'flex-row-reverse' : ''">
			<!-- 頭像 -->
			<image :src="isSelf?sex:samrtAva" style="flex-shrink: 0;" class="rounded-circle icon-lg"></image>
			<!-- 文本消息 -->
			<view class="">
				<view class=" px-2 py-1 rounded-lg mx-2" :class="isSelf ? 'pain' : 'docbg'" :style="isSelf ? 'margin-left:90rpx' : 'margin-right:90rpx'">
					<view  v-show="item.message">
						{{item.message}}
					</view>
					<view v-if="!item.message&&!isSelf" class="pb-2">
						<doc-card class="w-100"></doc-card>
					</view>
				</view>
				<view class="text-right mr-2 font-sm main--color" v-show="isSelf" @click="chooseBack">
					重新选择
				</view>
				<view class="font-sm main--color mt-1" v-show="!item.message&&!isSelf" >
					<uni-data-checkbox @change="change" class="ml-2" v-model="accurate" :localdata="accurateArray" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import docCard from "./doc-card.vue"
	import {
		getChatTime
	} from '@/common/lib/time.js';
	export default {
		components:{
			docCard
		},
		props: {
			item: Object,
			index: Number,
		},
		data() {
			return {
				accurate:0,
				accurateArray:  [{text: '准确',value: 1}, {text: '不准确',value: 0}], 
			}
		},
		methods:{
			change(e){
				console.log('e:',e);
			},
			chooseBack(){
				if(!this.item.step) return uni.showToast({icon:'none',title:"数据异常,稍候重试"})
				if(this.item.step=="图区域"||this.item.step=="图部位") return uni.navigateBack({delta:2});
				if(this.item.step=="图症状") return uni.navigateBack();
				this.$emit("backStep",this.item.step)
			},
		},
		computed: {
			// 是否是登录用户本人
			isSelf() {
				return this.item.username !== 'wisdomBrain' ? true : false;
			},
			sex() {
				if (this.$store.state.user.patInfo.gender == "女") {
					return "/static/icon/avatar1.png"
				} else {
					return "/static/icon/avatar.png"
				}
			},
			samrtAva() {
				return require("@/static/intelligent-guidance/avatar.png")
			},
			
		},
	}
</script>

<style scoped>
	.docbg {
		background-color: #F2F6FE;
	}
	.pain {
		background-color: #427CFC;
		color: #ffffff;
	}
</style>
