<template>
	<view>
		<uni-forms ref="form" :modelValue="formData" :rules="rules">
			<view class="border-bottom">
				<uni-forms-item label="姓名" required name="name">
					<input class="font" type="text" v-model="formData.name" placeholder="请输入姓名" />
				</uni-forms-item>
			</view>
			<view class="border-bottom">
				<uni-forms-item label="证件类型" name="idType">
					<picker @change="idTypeChange" :value="idTypeIndex" :range="idTypeArray">
						<view class="mt-1">{{formData.idType}}</view>
					</picker>
				</uni-forms-item>
			</view>
			<view class="border-bottom" v-if="formData.idType=='居民身份证'">
				<uni-forms-item label="证件号码" required name="idCard">
					<input class="font" type="text" maxlength="18" v-model="formData.idCard" placeholder="请输入证件号码"
						@input="binddata('idCard',$event.detail.value)" />
				</uni-forms-item>
			</view>
			<view class="border-bottom" v-else>
				<uni-forms-item label="证件号码" required name="identiNum">
					<input class="font" type="text" maxlength="18" v-model="formData.identiNum" placeholder="请输入证件号码" />
				</uni-forms-item>
			</view>
			<view class="border-bottom">
				<uni-forms-item label="性别" required name="sex">
					<picker @change="sexChange" :value="sexIndex" :range="sexArray">
						<view class="mt-1" :style="{color:formData.sex?'':'#888a88'}">{{formData.sex||"请选择性别"}}
						</view>
					</picker>
				</uni-forms-item>
			</view>
			<view class="border-bottom">
				<uni-forms-item label="关系" required name="relap">
					<picker @change="bindPickerChange" :value="relapIndex" :range="relapArray">
						<view class="mt-1" :style="{color:formData.relap?'':'#888a88'}">{{formData.relap||"请选择关系"}}
						</view>
					</picker>
				</uni-forms-item>
			</view>
			<view class="border-bottom">
				<uni-forms-item label="出生日期" required name="birDate">
					<view class="mt-1" @click="dataDate=true" :style="{color:formData.relap?'':'#888a88'}">
						{{formData.birDate||"请选择出生日期"}}
					</view>
				</uni-forms-item>
			</view>

			<view class="border-bottom">
				<uni-forms-item label="民族" required name="nation">
					<picker @change="nationChange" :value="nationIndex" :range="nationArray">
						<view class="mt-1" :style="{color:formData.nation?'':'#888a88'}">{{formData.nation||"请选择民族"}}
						</view>
					</picker>
				</uni-forms-item>
			</view>
			<view class="border-bottom">
				<uni-forms-item label="家庭住址" name="address">
					<input class="font" type="text" maxlength="50" v-model="formData.address"
						placeholder="请输入家庭住址(选填)" />
				</uni-forms-item>
			</view>
			<view class="border-bottom">
				<uni-forms-item label="手机号码" required name="phone">
					<input class="font" type="text" maxlength="11" v-model="formData.phone" placeholder="请输入手机号"
						@input="binddata('phone',$event.detail.value)" />
				</uni-forms-item>
			</view>
			<view class="border-bottom ">
				<view class="pt-2 pb-3">
					<checkbox :checked="staticCheck" color="#427CFC" @click="staticCheck=!staticCheck">
						无身份证的新生儿患者可以填写出生日期
					</checkbox>
				</view>
			</view>
		</uni-forms>
		<button class="main-bg-color rounded-circle mx-3 my-2" type="primary" @click="submit">立即注册</button>
		<custom-date-picker :show="dataDate" :max="timestampToTime(new Date(),'{y}-{m}-{d}')" @cancel="cancel" @confirm="confirm" type="date"></custom-date-picker>
	</view>
</template>

<script>
	import {
		rules
	} from '@/common/lib/formValidation.js';
	import {timestampToTime} from "@/common/lib/time"
	import customDatePicker from '@/components/custom-date-picker/custom-date-picker';
	export default {
		components: {
			customDatePicker,
		},
		data() {
			return {
				timestampToTime,
				relapArray: ["本人", "夫妻", "父母", "子女", "其他"], //关系选择数组
				relapIndex: 0, //关系索引
				idTypeArray: ["居民身份证", "出生医学证明"], //性别
				idTypeIndex: 0,
				sexArray: ["男", "女"], //性别
				sexIndex: 0,
				nationArray: ["汉", "满", "其他"],
				nationIndex: 0,
				dataDate: false,
				rules,
				// 表单数据
				formData: {
					name: '',
					idType: '居民身份证',
					idCard: '',
					identiNum: '',
					sex: '',
					relap: '',
					birDate: '',
					nation: '',
					phone: '',
					address: '',
				},
				staticCheck: false,

			}
		},
		watch:{
			staticCheck(val){
				if(val){
					this.idTypeChange({
						detail:{
							value:1
						}
					});
				}else{
					this.idTypeChange({
						detail:{
							value:0
						}
					});
				}
			},
		},
		methods: {
			// 触发提交表单
			submit() {
				this.$refs.form.validate().then(res => {
					console.log('表单数据信息：', res);
					uni.showToast({
						title: "提交成功",
						icon: "none"
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
			//证件类型
			idTypeChange(e) {
				this.idTypeIndex = e.detail.value;
				if(this.idTypeIndex==0)this.staticCheck=false;
				this.formData.idType = this.idTypeArray[this.idTypeIndex];
				this.formDataidCard = '';
				this.formDataidentiNum = '';
			},
			// 性别选择
			sexChange(e) {
				this.sexIndex = e.detail.value;
				this.formData.sex = this.sexArray[this.sexIndex];
			},
			//民族选择
			nationChange(e) {
				this.nationIndex = e.detail.value;
				this.formData.nation = this.nationArray[this.nationIndex];
			},
			// 弹出日期选择器显示确认取消
			cancel(bool) {
				this.dataDate = bool;
			},
			confirm(res) {
				this.formData.birDate = res.value;
				this.dataDate = false;
			},
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
		width: 160rpx !important;
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
	::v-deep  uni-checkbox .uni-checkbox-input{
		width: 28rpx;
		height: 28rpx;
	}
	::v-deep uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked:before{
		font-size: 32rpx;
	}
</style>
