<template>
	<view>
		<view class="mx-2 pt-2">
			<view class="hospital-shadow rounded-md mb-2 p-2 px-3 d-flex a-center j-sb" v-for="(li,index) in 1"
				:key="index">
				<view class="">
					<view class="d-flex a-center">
						<view class="font-weight">张三丰</view>
						<view class="relap">
							本人
						</view>
					</view>
					<view class="mt-1 text-subheading">
						{{idCardVague("112231245654544454")}}
					</view>
				</view>
				<view class="">
					<view class="text-center mr-2" @click="toggle(true)">
						<image src="/static/personalCenter/change.png" style="width: 55rpx;height: 55rpx;" mode="" >
						</image>
						<view class="line-h-sm font text-subheading ">
							切换就诊人
						</view>
					</view>
				</view>
			</view>
		</view>
		<choose-paint ref="paintId" @updataPay="updataPay"></choose-paint>
		
	</view>
</template>

<script>
	import {
		idCardVague
	} from "@/common/lib/filter"
	import choosePaint from './choose-paint.vue';
	export default {
		components:{
			choosePaint
		},
		data() {
			return {
				idCardVague,
			}
		},
		methods: {
			toggle(bool){
				this.$refs.paintId.toggle(bool)
			},
			updataPay(val){
				console.log(val)
			},
		}
	}
</script>

<style scoped>
	.relap {
		border: 2rpx solid #427CFC;
		line-height: 1;
		padding: 5rpx 10rpx;
		color: #427CFC;
		margin-left: 20rpx;
	}
</style>
