<template>
	<view class="page bg-primary">
		<view class="m-header d-flex j-center flex-column text-white">
			<view class="login">登陆</view>
			<view class="welcome">欢迎使用互联网医院</view>
		</view>
		<uni-forms ref="form" :modelValue="form" :rules="formRule" class="m-form overflow-hidden bg-white" labelWidth="auto">
			<view class="label">手机号</view>
			<uni-forms-item class="item" name="phone">
				<uni-easyinput :styles="{borderColor: '#49B9AD'}" v-model="form.phone" placeholder="请输入手机号" />
			</uni-forms-item>
			<view class="label text-primary">获取验证码</view>
			<uni-forms-item name="code">
				<uni-easyinput :styles="{borderColor: '#49B9AD'}" v-model="form.code" placeholder="请输入验证码" />
			</uni-forms-item>
			<view class="b-protocol">
				<checkbox-group @change="change">
					<label>
						<checkbox value="true" :checked="protocolIsAgree" /><text>我已阅读并同意<navigator url="/pages/private-protocol/index" class="d-inline text-primary">《用户隐私政策》</navigator></text>
					</label>
				</checkbox-group>
			</view>
			<button class="submit bg-primary text-white font-weight" @click="login">登陆</button>
		</uni-forms>
	</view>
</template>

<script>
	import {checkPhone} from "@/common/lib/utils"
	
	export default {
		data() {
			return {
				formRule: {
					phone: {
						rules: [
							{required: true, errorMessage: "请输入手机号"}, 
							{validateFunction(rule, value, data, callbac) {
								if (checkPhone(value)) return true
								callback("请输入正确的手机号")
							}},
						]
					},
					code: {
						rules: [
							{required: true, errorMessage: "请输入验证码"}
						]
					}
				},
				protocolIsAgree: true,
				form: {
					phone: "",
					code: ""
				}
			}
		},
		methods: {
			change({detail: {value}}) {
				this.protocolIsAgree = !!value.length
			},
			login() {
				this.$refs.form.validate().then(res=>{
					console.log('表单数据信息：', res);
				}).catch(err =>{
					console.log('表单错误信息：', err);
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.page {
		background-image: url(../../static/login/bg.png);
		background-size: contain;
		background-position: top center;
		.m-header {
			height: 344upx;
			padding: 0 28upx;
			.login {
				font-size: 50upx;
			}
			.welcome {
				font-size: 28upx;
			}
		}
		.m-form {
			border-top-left-radius: 30upx;
			border-top-right-radius: 30upx;
			padding: 36upx;
			.item {
				padding-bottom: 36upx;
			}
			.label {
				font-size: 32upx;
				margin-bottom: 28upx;
			}
			.b-protocol {
				.protocol {
					
				}
			}
			.submit {
				margin-top: 80upx;
				height: 90rpx;
				font-size: 40upx;
				line-height: 90upx;
			}
		}
	}
</style>