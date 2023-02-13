<template>
	<view class="page bg-primary">
		<uni-forms class="m-form overflow-hidden bg-white" :modelValue="form" labelWidth="auto" ref="form" :rules="formRule">
			<uni-forms-item class="item text-right" required label="姓名" name="name">
				<uni-easyinput v-model="form.name" :inputBorder="false" placeholder="请输入就诊人姓名" />
			</uni-forms-item>
			<uni-forms-item class="item text-right" label="身份证号" name="idCard">
				<uni-easyinput v-model="form.idCard" :inputBorder="false" placeholder="请输入身份证号码" />
			</uni-forms-item>
			<uni-forms-item class="item a-center" required label="性别" name="sex">
				<radio-group class="w-fit ml-auto" @change="change('sex', $event)">
					<label v-for="o in genderList" :key="o.val" class="mr-3"><radio :value="o.val" :checked="form.sex === o.val" />{{o.label}}</label>
				</radio-group>
			</uni-forms-item>
			<uni-forms-item class="item text-right" required label="出生日期" name="birthday">
				<uni-datetime-picker type="datetime" :border="false" placeholder="请选择出生日期" v-model="form.birthday" @change="selBirthday" />
			</uni-forms-item>
			<uni-forms-item class="item text-right" required label="联系电话" name="phone">
				<uni-easyinput v-model="form.phone" :inputBorder="false" placeholder="请输入联系电话" />
			</uni-forms-item>
			<uni-forms-item class="item" labelPos="top" required label="请描述您的病情:" name="medicalIntro">
				<uni-easyinput type="textarea" v-model="form.medicalIntro" placeholder="请输入您的病情" />
			</uni-forms-item>
			<uni-forms-item class="item" labelPos="top" required label="本次患病多久:" name="dateRange">
				<radio-group class="border rounded-md py-3 px-5" @change="change('dateRange', $event)">
					<label v-for="o in dateRangeList" :key="o.val" class="mr-3"><radio :value="o.val" :checked="form.dateRange === o.val" />{{o.label}}</label>
				</radio-group>
			</uni-forms-item>
			<uni-forms-item class="item a-center" label="是否有发热情况:" name="hasFever">
				<radio-group class="w-fit ml-auto" @change="change('hasFever', $event)">
					<label v-for="o in whetherList" :key="o.val" class="mr-3"><radio :value="o.val" :checked="form.hasFever === o.val" />{{o.label}}</label>
				</radio-group>
			</uni-forms-item>
			<uni-forms-item class="a-center" label="是否有过敏史:" name="hasAllergy">
				<radio-group class="w-fit ml-auto" @change="change('hasAllergy', $event)">
					<label v-for="o in whetherList" :key="o.val" class="mr-3"><radio :value="o.val" :checked="form.hasAllergy === o.val" />{{o.label}}</label>
				</radio-group>
			</uni-forms-item>
			<uni-forms-item class="item" name="hasAllergy">
				<uni-easyinput type="textarea" v-model="form.medicalIntro" placeholder="如果是，请描述您的过敏史，就诊经历等信息，方便医生诊断。" />
			</uni-forms-item>
			<uni-forms-item class="item a-center" label="是否去过医院就诊:" name="hasSee">
				<radio-group class="w-fit ml-auto" @change="change('hasSee', $event)">
					<label v-for="o in whetherList" :key="o.val" class="mr-3"><radio :value="o.val" :checked="form.hasSee === o.val" />{{o.label}}</label>
				</radio-group>
			</uni-forms-item>
			<uni-forms-item class="item a-center" label="是否动过手术:" name="hasSurgery">
				<radio-group class="w-fit ml-auto" @change="change('hasSurgery', $event)">
					<label v-for="o in whetherList" :key="o.val" class="mr-3"><radio :value="o.val" :checked="form.hasSurgery === o.val" />{{o.label}}</label>
				</radio-group>
			</uni-forms-item>
			<uni-forms-item labelPos="top" label="上传病例资料:" name="dateRange">
				<view class="text-danger">
					<view>1、根据相关规定，互联网仅支持线上复诊。</view>
					<view>2、请上传实体医院开具的常见病种诊断报告。</view>
					<view>3、如有慢性疾病同时上传相关慢病证名文件。</view>
				</view>
			</uni-forms-item>
			<uni-forms-item class="item">
				<!-- <uni-file-picker 
					v-model="form.imgs"  
					file-mediatype="image"
					mode="grid"
					file-extname="png,jpg"
					@progress="upProgress" 
					@success="upSuccess" 
					@fail="upFail" 
					@select="upSelect"
				></uni-file-picker> -->
			</uni-forms-item>
			<uni-forms-item>
				<view class="b-submit">
					<view class="protocol">提交即代表同意<text>《患者问诊服务协议》</text>和<text>《隐私政策》</text></view>
					<button class="submit" @click="submit">提交</button>
				</view>
			</uni-forms-item>
			<view class="footer bg-white">
				<view class="tit text-center">温馨提示</view>
				<view class="cont">
					<view>1、咨询有效时长为24小时，从医生接诊时开始计时；</view>
					<view>2、等待医生接诊，医生接诊前可随时退款。</view>
					<view>3、如果下单后医生24小时未回复，本次咨询自动取消，咨询费用将在7个工作日内按原路退回。</view>
				</view>
			</view>
		</uni-forms>
		<uni-popup ref="popup" :mask-click="false">
			<view class="m-popup box-border rounded-lg d-flex flex-column">
				<view class="title text-danger text-center flex-shrink">咨询服务提醒</view>
				<view class="cont overflow-scroll-y flex-1">
					您的咨询服务已提交，请您耐心等待。
					医生接诊后会及时通知您，请注意消息通知。或在"个人中心-待咨询"查看服务进度。
				</view>
				<button @click="next" class="btn text-white rounded-circle bg-primary">确定</button>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				formRule: {
					name: {
						rules: [
							{
								required: true,
								errorMessage: '请输入姓名',
							},
							{
								minLength: 3,
								maxLength: 5,
								errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符',
							},
						]
					}
				},
				genderList: [{label:"男", val: "男"}, {label:"女", val: "女"}],
				dateRangeList: [{label:"一周内", val: "一周内"}, {label:"一月内", val: "一月内"},{label:"半年内", val: "半年内"},{label:"半年以上", val: "半年以上"}],
				whetherList: [{label:"是", val: "是"}, {label:"否", val: "否"}],
				form: {
					name: "",
					idCard: "",
					sex: "男",
					birthday: "",
					medicalIntro: "",
					dateRange: "一周内",
					hasFever: "否",
					hasAllergy: "否",
					hasSee: "否",
					hasSurgery: "否",
					imgs: []
				}
			}
		},
		methods: {
			next() {
				uni.navigateTo({
					url: "/pages/publicPage/consultationDetails/consultationDetails?status=1",
					success:()=> {
						this.$refs.popup.close()
					}
				})
			},
			submit() {
				// this.$refs.popup.open('center');
				this.$refs.form.validate().then(res=>{
					console.log('表单数据信息：', res);
					this.$refs.popup.open('center')
				}).catch(err =>{
					console.log('表单错误信息：', err);
				})
			},
			change(name, {detail: {value}}) {
				console.log(name, value)
				this.form[name] = value
			},
			upProgress() {},
			upSuccess() {},
			upFail() {},
			upSelect() {}
		}
	}
</script>

<style scoped lang="scss">
	.page {
		.m-popup {
			width: calc(100vw - 92upx);
			background-color: #fff;
			padding: 0 32upx 32upx;
			.title {
				font-size: 32upx;
				font-weight: 700;
				line-height: 3;
			}
			.cont {
				padding: 16upx 0 32px 0;
				font-size: 26upx;
				white-space: pre-line;
			}
			.btn {
				width: 100%;
				height: 80upx;
				font-size: 24upx;
				line-height: 80upx;
			}
		}
		.m-form {
			border-top-left-radius: 30upx;
			border-top-right-radius: 30upx;
			padding: 36upx;
			.item {
				padding-bottom: 36upx;
				border-bottom: 1upx solid #CECECE;
			}
			.b-submit {
				.protocol {
					font-size: 28upx;
					text {
						color: #45B875;
					}
				}
				.submit {
					margin-top: 48upx;
					width: 470upx;
					height: 84upx;
					border: 4upx solid var(--primary);
					line-height: 76upx;
					background-color: #fff;
					font-size: 36upx;
				}
			}
			.footer {
				color: #B3B3B3;
				.tit {
					font-size: 28upx;
				}
				.cont {
					margin-top: 30upx;
					white-space: pre-wrap;
					font-size: 26upx;
				}
			}
		}
	}
</style>