<template>
	<view class="">
		<uni-popup ref="popup" :is-mask-click="false">
			<view class="bg-white rounded-big px-3 py-2" style="width: 80vw;">
				<view class="text-center red font-weight text-letter1 font-md">
					取消原因
				</view>
				<view class="d-flex a-center ml-2 mt-1" v-for="(li,index) in reason" :key="index" @click="reasonIndex=index">
					<image :src="reasonIndex==index?imged:img" class="icon-image-small" mode=""></image>
					<view class="ml-2" :class="reasonIndex==index?'text-inquiries':'text-subheading'">
						{{li}}
					</view>
				</view>
				<view class="w-100 mt-2">
					<textarea auto-height class="textareaCla" placeholder="请填写其他的原因,允许输入200字符" maxlength="200" placeholder-style="color:#99a6b8" :disabled="reasonIndex!=3" :class="reasonIndex==3?'blues':''" v-model="txt" />
				</view>
				<view class="w-30 rounded-big text-center text-white" :class="disablBtn?'main-bg-color':'disacolor'" style="margin: 30rpx auto 20rpx;" @click="close">
					确定
				</view>
			</view>
		</uni-popup>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: 0,
				img:"/static/icon/radio.png",
				imged:"/static/icon/radioed.png",
				reason:["不想咨询了。","等待时间较长，不需要了。","医生长时间未接诊。","其它："],
				reasonIndex:-1,
				disablBtn:false,
				txt:"",
			}
		},
		watch:{
			reasonIndex(val){
				if(val<3){
					this.disablBtn=true;
				}else{
					this.disablBtn=false;
				}
			},
			txt(val){
				if(val){
					this.disablBtn=true;
				}
			}
		},
		methods: {
			open() {
				this.$refs.popup.open()
			},
			close() {
				if(this.reasonIndex==3&&!this.txt){
					uni.showToast({
						icon:'none',
						title:"请输入其他原因"
					})
				}
				if(!this.disablBtn){
					return;
				}
				this.$refs.popup.close();
				this.$emit("statusChange");
			}
		}
	}
</script>

<style scoped>
	.red{
		color: #F13023;
	}
	.textareaCla{
		border:2rpx solid #98c2f6;
		padding: 10rpx;
		border-radius: 15rpx;
		width: 65vw;
		margin: 0 auto; 
		font-size: 28rpx;
	}
	.blues{
		border-color: #427CFC;
	}
	.disacolor{
		background-color: #98c2f6;
	}
</style>
