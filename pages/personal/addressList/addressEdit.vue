<template>
	<view class="pt-2">
		<view class="p-2 border rounded-lg mx-2">
			<uni-forms ref="form" :modelValue="formData" :rules="rules">
				<view class="">
					<uni-forms-item label="姓名" name="name">
						<input class="font" type="text" v-model="formData.name" placeholder="请输入姓名" />
					</uni-forms-item>
				</view>
				<view class="">
					<uni-forms-item label="手机号码" name="phone">
						<input class="font" type="text" maxlength="11" v-model="formData.phone" placeholder="请输入手机号"
							@input="binddata('phone',$event.detail.value)" />
					</uni-forms-item>
				</view>
				<view class="">
					<uni-forms-item label="地区" name="area">
						<!-- <input class="font" type="text" maxlength="11" v-model="formData.area" placeholder="请选择地区"  /> -->
						<picker @columnchange="bindPickerChange" :value="areaIndex" :range="areaArray"
							mode="multiSelector" @change="bindChange">
							<view class="mt-1" :style="{color:formData.area?'':'#888a88'}">{{formData.area||"请选择地区"}}
							</view>
						</picker>
					</uni-forms-item>
				</view>
				<view class="">
					<uni-forms-item label="详细地址" name="addressDetail">
						<input class="font" type="text" maxlength="50" v-model="formData.addressDetail"
							placeholder="请输入详细地址" />
					</uni-forms-item>
				</view>
			</uni-forms>
		</view>
		<view class="d-flex a-center j-sb border rounded-lg mx-2 pl-3 mt-3 py-1">
			设为默认收货地址
			<switch :checked="formData.static" color="#427CFC" style="transform:scale(0.7)" />
		</view>
		<view class="mt-4">
			<button class="main-bg-color rounded-circle mx-3 my-2" type="primary" @click="submit">保存</button>
			<button class="rounded-circle mx-3 mt-3" type="warn" @click="deleteObj">删除</button>
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
				rules,
				areaArray: [
					['亚洲', '欧洲'],
					['中国', '日本'],
					['北京', '上海', '广州']
				], //地区选择数组
				areaIndex: [0, 0, 0], //地区索引
				// 表单数据
				formData: {
					name: '',
					phone: '',
					area: '',
					addressDetail: '',
					static: false,
				},
			}
		},
		onLoad(e) {
			if (e.item) {
				console.log(e.item);
			}
		},
		methods: {
			// 触发提交表单
			submit() {
				this.$refs.form.validate().then(res => {
					console.log('表单数据信息：', this.formData);
					console.log('表单数据信息：', res);
					uni.showToast({
						title: "提交成功",
						icon: "none"
					})
					uni.navigateBack({
						delta: 1
					});
					const eventChannel = this.getOpenerEventChannel();
					eventChannel.emit('addressEditChange', {
						data: '测试触发修改地址'
					});
				}).catch(err => {
					console.log('表单错误信息：', err);
				})
			},
			// 删除
			deleteObj() {
				uni.showToast({
					title: "删除",
					icon: "none"
				})
			},
			bindChange() {
				this.formData.area = this.areaArray[0][this.areaIndex[0]] + this.areaArray[1][this.areaIndex[1]] + this
					.areaArray[2][this.areaIndex[2]];
			},
			//地区执行数据内容
			bindPickerChange: function(e) {
				console.log('修改的列为：' + e.detail.column + '，值为：' + e.detail.value)
				this.areaIndex[e.detail.column] = e.detail.value
				switch (e.detail.column) {
					case 0: //拖动第1列
						switch (this.areaIndex[0]) {
							case 0:
								this.areaArray[1] = ['中国', '日本']
								this.areaArray[2] = ['北京', '上海', '广州']
								break
							case 1:
								this.areaArray[1] = ['英国', '法国']
								this.areaArray[2] = ['伦敦', '曼彻斯特']
								break
						}
						this.areaIndex.splice(1, 1, 0)
						this.areaIndex.splice(2, 1, 0)
						break
					case 1: //拖动第2列
						switch (this.areaIndex[0]) { //判断第一列是什么
							case 0:
								switch (this.areaIndex[1]) {
									case 0:
										this.areaArray[2] = ['北京', '上海', '广州']
										break
									case 1:
										this.areaArray[2] = ['东京', '北海道']
										break
								}
								break
							case 1:
								switch (this.areaIndex[1]) {
									case 0:
										this.areaArray[2] = ['伦敦', '曼彻斯特']
										break
									case 1:
										this.areaArray[2] = ['巴黎', '马赛']
										break
								}
								break
						}
						this.areaIndex.splice(2, 1, 0)
						break
				}
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
		width: 180rpx !important;
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

	uni-button[type=warn] {
		background-color: #ee0a24;
	}
</style>
