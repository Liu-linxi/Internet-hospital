<template>
	<view class="main-bg-color">
		<view @click="$refs.btmipt.words=false">
			<view class="pt-1" style="height: 170rpx;">
				<view class="d-flex a-center mx-3">
					<view class="position-relative">
						<image src="/static/icon/manDoc.png" style="width: 110rpx;" mode="widthFix"></image>
						<view class="online">
						</view>
					</view>
					<view class=" ml-3">
						<view class="text-white font-md line-h-md">
							张青医生
						</view>
						<view style="color: #9EBAED;">
							在线
						</view>
					</view>
				</view>
			</view>
			<!-- 聊天列表 -->
			<scroll-view scroll-y="true" class="scrollClass" :scroll-into-view="scrollInto" scroll-with-animation :style="modelPheon?'bottom: 145rpx;':'bottom: 105rpx;'">
				<block v-for="(item,index) in list" :key="index">
					<view :id="'chat'+index" :class="index==list.length-1?'pb':''">
						<chat-bubble :item="item" :index="index" :pretime="index > 0 ? list[index-1].create_time : 0">
						</chat-bubble>
					</view>
				</block>
			</scroll-view>
		</view>
		<!-- 底部操作条 -->
		<bottom-input @submit="submit" ref="btmipt" :modelPheon="modelPheon"></bottom-input>
	</view>
</template>

<script>
	import {
		list
	} from './datalist.js';
	import chatBubble from './chat-bubble.vue'
	import bottomInput from './bottom-input.vue';
	export default {
		components: {
			chatBubble,
			bottomInput
		},
		data() {
			return {
				scrollInto: "",
				list,
				modelPheon:null,
			}
		},
		// 页面加载完成的时候
		onReady() {
			this.pageToBottom();
			this.modelPheon=uni.getSystemInfoSync().platform == 'ios';//获取机型号
		},
		methods: {
			// 发送
			submit(data) {
				console.log(data)
				let obj = {
					user_id: 2,
					avatar: "/static/icon/avatar.png",
					username: "昵称",
					type: "text",
					data: data.content,
					img:data.img,
					create_time: (new Date()).getTime()
				}
				this.list.push(obj)
				// 滚动到底部
				this.pageToBottom()
			},
			// 滚动到底部
			pageToBottom() {
				let lastIndex = this.list.length - 1
				if (lastIndex < 0) return;
				this.$nextTick(() => {
					this.scrollInto = 'chat' + lastIndex
				})
			}
		},
	}
</script>

<style scoped>
	.scrollClass {
		position: absolute;
		left: 0;
		top: 150rpx;
		right: 0;
		bottom: 105rpx;
		border-radius: 30upx 30upx 0 0;
		background-color: #ffffff;
	}
	.online{
		position: absolute;
		right: 0;
		bottom: 15rpx;
		width: 20rpx;
		height: 20rpx;
		background-color: #0CE07A;
		border: 4rpx solid #3FF3FF;
		border-radius: 50%;
	}
</style>
