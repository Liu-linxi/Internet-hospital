<template>
	<view>
		<view class="p-2">
			<uni-forms ref="form" :modelValue="formData" :rules="rules">
				<view class="border-bottom">
					<uni-forms-item label="姓名" name="name">
						<input class="font" type="text" v-model="formData.name" placeholder="请输入姓名" />
					</uni-forms-item>
				</view>
				<view class="border-bottom">
					<uni-forms-item label="关系" name="relap">
						<picker @change="bindPickerChange" :value="relapIndex" :range="relapArray">
							<view class="mt-1" :style="{color:formData.relap?'':'#888a88'}">{{formData.relap||"请选择关系"}}
							</view>
						</picker>
					</uni-forms-item>
				</view>
				<view class="border-bottom">
					<uni-forms-item label="身份证号" name="idCard">
						<input class="font" type="text" maxlength="18" v-model="formData.idCard" placeholder="请输入身份证号"
							@input="binddata('idCard',$event.detail.value)" />
					</uni-forms-item>
				</view>
				<view class="border-bottom">
					<uni-forms-item label="手机号码" name="phone">
						<input class="font" type="text" maxlength="11" v-model="formData.phone" placeholder="请输入手机号" @input="binddata('phone',$event.detail.value)" />
					</uni-forms-item>
				</view>
				<view class="border-bottom">
					<uni-forms-item label="地址" name="address">
						<input class="font" type="text" maxlength="50" v-model="formData.address"
							placeholder="请输入地址(选填)" />
					</uni-forms-item>
				</view>
				<view class="border-bottom">
					<uni-forms-item label="设为默认就诊人" name="static">
						<switch :checked="formData.static" color="#427CFC" style="transform:scale(0.7)" />
					</uni-forms-item>
				</view>
				<view class="border-bottom">
					<uni-forms-item label="上传身份证正面" name="fontCard">
						<view class="my-2">
							<uni-file-picker limit="1" v-model="formData.fontCard" @select="select" @progress="progress"
								@success="success" @fail="fail"></uni-file-picker>
						</view>
					</uni-forms-item>
				</view>
				<view class="border-bottom">
					<uni-forms-item label="上传身份证反面" name="backCard">
						<view class="my-2">
							<uni-file-picker limit="1" v-model="formData.backCard"></uni-file-picker>
						</view>
					</uni-forms-item>
				</view>
				<!-- 	<uni-forms-item label="邮箱" name="email">
					<input class="font" v-model="formData.email" @input="binddata('email',$event.detail.value)"
						type="text" placeholder="请输入用户名" />
				</uni-forms-item> -->
			</uni-forms>
			<button class="main-bg-color rounded-circle mx-3 my-2" type="primary" @click="submit">添加</button>
		</view>
	</view>
</template>

<script>
	import {
		rules
	} from '@/common/lib/formValidation.js';
	export default {
		data() {
			return {
				relapArray: ["本人", "夫妻", "父母", "子女", "其他"], //关系选择数组
				relapIndex: 0, //关系索引
				rules,
				// 表单数据
				formData: {
					name: '',
					relap: '',
					idCard: '',
					phone: '',
					address: '',
					static: true,
				},
				
			}
		},
		methods: {
			// 触发提交表单
			submit() {
				this.$refs.form.validate().then(res => {
					console.log('表单数据信息：', res);
					uni.showToast({
						title:"提交成功",
						icon:"none"
					})
					uni.navigateBack({
						delta: 1
					});
				}).catch(err => {
					console.log('表单错误信息：', err);
				})
			},
			//关系执行数据内容
			bindPickerChange: function(e) {
				this.relapIndex = e.detail.value;
				this.formData.relap = this.relapArray[this.relapIndex];
			},
			// 获取上传状态
			select(e) {
				console.log('选择文件：', e)
			},
			// 获取上传进度
			progress(e) {
				console.log('上传进度：', e)
			},

			// 上传成功
			success(e) {
				console.log('上传成功')
			},

			// 上传失败
			fail(e) {
				console.log('上传失败：', e)
			}
		}
	}
</script>

<style scoped>
	uni-input {
		display: inline;
	}

	.font {
		font-size: 28rpx;
	}

	::v-deep .uni-forms-item__label[data-v-61dfc0d0] {
		width: 220rpx !important;
		font-size: 28rpx !important;
		font-weight: 500;
		color: #000;
	}

	::v-deep .is-input-border[data-v-abe12412] {
		border: none;
	}

	::v-deep .is-input-border uni-text {
		font-size: 40rpx !important;
	}
</style>
