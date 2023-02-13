<template>
	<view>
		<!-- 时间 -->
		<view v-if="shortTime" class="py-1 d-flex a-center j-sa font-sm text-light-muted">
			{{shortTime}}
		</view>
		<!-- 消息气泡 -->
		<view class="d-flex px-2 my-2" :class="isSelf ? 'flex-row-reverse' : ''">
			<image :src="item.avatar ? item.avatar : '/static/icon/avatar.png'" style="flex-shrink: 0;"
				class="rounded-circle bg-secondary icon-lg"></image>
			<view class="d-flex a-center px-2 py-1 line-h-md rounded-lg mx-2" :class="isSelf ? 'text-right pain' : 'docbg'" :style="isSelf ? 'margin-left:120rpx' : 'margin-right:120rpx'" v-if="item.data">
				{{item.data}}
			</view>
			<view class="d-flex a-center rounded-lg overflow-hidden mx-2" :class="isSelf ? 'text-right pain' : 'docbg'" :style="isSelf ? 'margin-left:120rpx' : 'margin-right:120rpx'"  v-if="item.img">
				<image :src="item.img" style="width: 28vw;" mode="widthFix" @click="zoom=true"></image>
			</view>
		</view>
		<view class="uni-mask uni-picker-mask d-flex a-center" v-show="zoom" @click="zoom=false">
				<image :src="item.img" style="width: 100vw;" mode="widthFix" ></image>
		</view>
	</view>
</template>

<script>
	import {
		getChatTime
	} from '@/common/lib/time.js';
	export default {
		props: {
			item: Object,
			index: Number,
			pretime: [Number, String]
		},
		data() {
			return {
				zoom:false,
			}
		},
		computed: {
			// 是否是登录用户本人
			isSelf() {
				return this.item.user_id?true:false;
			},
			// 转化时间
			shortTime() {
				return getChatTime(this.item.create_time, this.pretime)
			}
		},
	}
</script>

<style scoped>
	.docbg{
		background-color: #F2F4F5;
	}
	.pain{
		background-color: #427CFC;
		color: #ffffff;
	}
</style>
