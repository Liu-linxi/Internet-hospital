<template>
	<view>
		<view class="p-5 py-2 font-weight line-h-lgder">
			<view class="font-md ">
				等待问诊受理
			</view>
			<view class=" line-h-lgder">
				<text class="text-subheading mr-1">问诊方式：</text>
				图文问诊
			</view>
			<view class="line-h-lgder">
				<text class="text-subheading mr-1">问诊方式：</text>
				张三丰
			</view>
			<view class="line-h-lgder">
				<text class="text-subheading mr-1">问诊金额：</text>0
			</view>
			<view class="line-h-lgder">
				<text class="text-subheading mr-1">受理时间：</text>
				<text v-show="status!=1">2022-04-05</text>
			</view>
			<view class="d-flex">
				<view class="line-h-lgder text-nowrap mr-1">
					<text class="text-subheading mr-1">备</text>
					<text class="text-subheading ml-5">注：</text>
				</view>
				<view class="red" v-show="status==1">
					你好，您的问诊等待受理中。
				</view>
				<view class="red" v-show="status==2">
					您好，您的问诊已被医生受理,请及时查看。
				</view>
				<view class="red" v-show="status==3">
					你好，您的问诊超过24小时医生未接诊，已自动取消。
				</view>
			</view>
		</view>
		<divider></divider>
		<view class="mt-2 mx-3 d-flex j-sa">
			<button v-show="status==1" type="primary" class="rounded-lg w-42" @click="cancel">取消咨询</button>
			<button v-show="status==1" type="primary" class="rounded-lg w-42" @click="tipsDoc">提醒医生</button>
			<button v-show="status==2" type="primary" class="rounded-lg w-42" @click="intoRoom">进入诊室</button>
			<button v-show="status==3" type="primary" class="rounded-lg w-42" @click="assignAsk">再次问诊</button>
		</view>
		<cancel-dialog ref="dialogShow" @statusChange="statusChange"></cancel-dialog>
	</view>
</template>

<script>
	import cancelDialog from './cancelDialog';
	export default {
		components:{
			cancelDialog
		},
		data() {
			return {
				status: 0,
			}
		},
		onLoad(e) {
			// 接收参数 1待接诊2进行中3已完成或取消
			this.status = e.status||1;
		},
		methods: {
			//取消问诊
			cancel() {
				this.$refs.dialogShow.open();
				// uni.showToast({
				// 	icon: 'none',
				// 	title: "取消问诊"
				// })
			},
			// 提醒医生
			tipsDoc() {
				uni.showToast({
					icon: 'none',
					title: "提醒医生"
				})
			},
			// 进入诊室
			intoRoom() {
				uni.navigateTo({
					url:"/pages/publicPage/patient-chat/patient-chat"
				})
			},
			// 再次问诊
			assignAsk() {
				uni.showToast({
					icon: 'none',
					title: "再次问诊"
				})
			},
			statusChange(){
				this.status=3;
			}
		}
	}
</script>

<style scoped>
	::v-deep uni-button[type=primary] {
		background-color: #427CFC;
	}

	.red {
		color: #EF4940;
	}
</style>
