<template>
	<view>
		<view class="mx-3 border-bottom d-flex a-center py-2">
			<view class="text-nowrap">
				问题类型
			</view>
			<picker @change="bindPickerChange" :value="typeIndex" :range="typeArray">
				<view class="ml-3" :style="{color:type?'':'#888a88'}">{{type||"请选择问题类型"}}</view>
			</picker>
		</view>
		<view class="mx-3 border-bottom d-flex a-center py-2">
			<view class="text-nowrap">
				问题类型
			</view>
			<view class="ml-3 w-100">
				<textarea v-model="despric" class="normal" auto-height placeholder-style="color:#888a88" maxlength="200" placeholder="请输入问题详情描述"/>
			</view>
		</view>
		<view class="mx-3 border-bottom d-flex a-center py-2">
			<view class="text-nowrap">
				问题类型
			</view>
			<view class="ml-3">
				<input type="text" v-model="phone" maxlength="11" placeholder="请输入电话">
			</view>
		</view>
		<button class="rounded-circle mx-3 mt-4 text-letter1" style="background-color: #427CFC;" type="primary" @click="submit">提交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				typeArray: ["支付", "挂号", "缴费", "预约", "医生"], //关系选择数组
				typeIndex: 0, //关系索引
				type:'',
				despric:'',
				phone:'',
			}
		},
		methods: {
			//关系执行数据内容
			bindPickerChange: function(e) {
				this.typeIndex = e.detail.value;
				this.type = this.typeArray[this.typeIndex];
			},
			submit(){
				uni.showToast({
					icon:'none',
					title:"提交"
				})
			},
		}
	}
</script>

<style scoped>
.normal{
	font-size: 28rpx;
	width: calc(100% - 20rpx);
	padding: 10rpx;
}
</style>
