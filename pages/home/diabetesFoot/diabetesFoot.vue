<template>
	<view class="main-bg-color">
		<view class="bg-white pb-2">
			<view class="px-2">
				<uni-forms ref="form" :modelValue="formData" :rules="rules">
					<view class="border-bottom text-right">
						<uni-forms-item label="就诊人" required>
							<input class="font" type="text" v-model="formData.name" placeholder="请输入姓名" />
						</uni-forms-item>
					</view>
					<view class="border-bottom text-right">
						<uni-forms-item label="身份证号" required name="idCard">
							<input class="font" type="text" maxlength="18" v-model="formData.idCard" placeholder="请输入证件号码" @input="binddata('idCard',$event.detail.value)"/>
						</uni-forms-item>
					</view>
					<view class="border-bottom text-right right">
						<uni-forms-item label="性别" required>
							<view class="mt-1">
								<uni-data-checkbox class="ml-2" v-model="formData.gender" :localdata="sexArray" />
							</view>
						</uni-forms-item>
					</view>
					<!-- <view class="border-bottom text-right">
						<uni-forms-item label="出生日期" required name="birDate">
							<view class="mt-1 d-flex a-center j-end">
								<view class="mr-2" @click="dataDate=true" :style="{color:formData.birDate?'':'#888a88'}">
									{{formData.birDate||"请选择出生日期"}}
								</view>
								<image src="/static/icon/calendar.png" class="icon-image" mode=""></image>
							</view>
						</uni-forms-item>
					</view> -->
					<view class="border-bottom text-right">
						<uni-forms-item label="年龄" required name="age">
							<input class="font" type="text" maxlength="11" v-model="formData.age" placeholder="身份证输入完自动获取" disabled/>
						</uni-forms-item>
					</view>
					<view class="border-bottom text-right">
						<uni-forms-item label="联系电话" required name="phone">
							<input class="font" type="text" maxlength="11" v-model="formData.phone" placeholder="请输入联系电话"  @input="binddata('phone',$event.detail.value)" />
						</uni-forms-item>
					</view>
					<view class="border-bottom text-right">
						<uni-forms-item label="家庭住址" required name="familyAddress">
							<input class="font" type="text" maxlength="50" v-model="formData.familyAddress" placeholder="请输入家庭住址"/>
						</uni-forms-item>
					</view>
					<div class="px-1 pt-2" >
						<div class="">
							并发症情况：
						</div>
						<uni-easyinput type="textarea" v-model="formData.message" placeholder="请输入留言" maxlength="200"></uni-easyinput>
					</div>
					<view class="border-bottom width py-2" v-for="(li,index) in array1" :key="index">
						<div>
							{{li.title}}
						</div>
						<view class="pl-2">
							<uni-data-checkbox class="" v-model="li.choose" :localdata="li.chooseArray" />
						</view>
					</view>
					<div class="px-1 pt-2"  v-for="(li,indexs) in array2" >
						<div class="">
							{{li.title}}
						</div>
						<div class="border rounded-md mt-1">
							<div class="border-bottom pbrido"  :class="indexs<2?'width right':''" v-for="(item,ind) in li.chooseArray" :key="ind">
								<uni-forms-item :label="item.title" class="px-1" >
									<uni-data-checkbox v-model="item.choose" :localdata="item.chooseArray" />
								</uni-forms-item>
							</div>
						</div>
					</div>
					<div class="px-1 pt-2">
						<div class="">
							下肢情况:(可多选)
						</div>
						<div class="border rounded-md mt-1 downArray">
							<uni-data-checkbox multiple class="ml-2 py-1" v-model="down" :localdata="downArray" />
						</div>
					</div>
					<div class="px-1 pt-2" >
						<div class="">
							手术：
						</div>
						<div class="border rounded-md mt-1">
							<div class="border-bottom pbrido flend">
								<uni-forms-item label="手术:" class="px-1" >
									<uni-data-checkbox v-model="oper" :localdata="withArray" />
								</uni-forms-item>
							</div>
							<div class="border-bottom pbrido width flend" v-show="oper==1">
								<uni-forms-item label="接收手术肢体:" class="px-1" >
									<uni-data-checkbox v-model="operleg" :localdata="operlegArray" />
								</uni-forms-item>
							</div>
						</div>
					</div>
					<div class="px-1 pt-2">
						<div class="">
							截肢位置:
						</div>
						<div class="border rounded-md mt-1 downArray">
							<uni-data-checkbox class="ml-2 py-1" v-model="cutLeg" :localdata="cutArray" />
						</div>
					</div>
					<div class="px-1 pt-2" >
						<div class="">
							并发症情况：
						</div>
						<div class="border rounded-md mt-1">
							<div class="border-bottom pbrido width flend">
								<uni-forms-item label="是否患有肾病:" class="px-1" >
									<uni-data-checkbox v-model="nephroma" :localdata="withArray" />
								</uni-forms-item>
							</div>
							<div class="border-bottom pbrido flend" v-show="nephroma==1">
								<uni-forms-item label="确诊时间:" class="px-1" >
									<uni-data-checkbox v-model="contim" :localdata="timeArray" />
								</uni-forms-item>
							</div>
							<div class="border-bottom pbrido width flend" v-show="nephroma==1">
								<uni-forms-item label="是否做过透析:" class="px-1" >
									<uni-data-checkbox v-model="dialysis" :localdata="withArray" />
								</uni-forms-item>
							</div>
						</div>
					</div>
					<div class="px-1 pt-2" >
						<div class="">
							溃疡评定：
						</div>
						<div class="border rounded-md mt-1">
							<div class="border-bottom pbrido width flend">
								<uni-forms-item label="溃疡:" class="px-1" >
									<uni-data-checkbox v-model="ulcer" :localdata="withArray" />
								</uni-forms-item>
							</div>
							<div class="border-bottom pbrido flend" v-show="ulcer==1">
								<uni-forms-item label="溃疡数目:" class="px-1" >
									<uni-data-checkbox v-model="ulcerNum" :localdata="ulcerArray" />
								</uni-forms-item>
							</div>
						</div>
					</div>
					<div class="px-1" >
						<div class="border-bottom pbrido widths flend">
							<uni-forms-item label="糖尿病足预防知识是否了解:" class="px-1" >
								<uni-data-checkbox v-model="understand1" :localdata="withArray" />
							</uni-forms-item>
						</div>
						<div class="pbrido widths flend">
							<uni-forms-item label="糖尿病足预防知识是否了解:" class="px-1" >
								<uni-data-checkbox v-model="understand2" :localdata="withArray" />
							</uni-forms-item>
						</div>
					</div>
				</uni-forms>
			</view>
			<button  plain="true" class="rounded-big w-60 my-2" type="primary" @click="submit">提交</button>
		</view>
		<custom-date-picker :show="dataDate" :max="timestampToTime(new Date(),'{y}-{m}-{d}')" @cancel="cancel" @confirm="confirm" type="date"></custom-date-picker>
	</view>
</template>

<script>
	import { rules } from '@/common/lib/formValidation.js';
	import { parseTime ,timestampToTime} from "@/common/lib/time"
	import customDatePicker from '@/components/custom-date-picker/custom-date-picker';
	import{ getHospitalId,getAge,checkIdCard,regYuanToFen } from "@/common/lib/utils.js"
	import { array1,array2 } from "./data.js"
	export default {
		components: {
			customDatePicker,
		},
		data() {
			return {
				timestampToTime,
				sexArray:  [{text: '男',value: 0}, {text: '女',value: 1}], //性别
				array1,
				array2,
				dataDate: false,
				rules,
				// 表单数据
				formData: {
					age:'',
					name: '',//姓名
					idCard: '',//身份证
					gender: 0,//性别0男1女
					birDate: '',//生日
					phone: '',//手机
					familyAddress:'',
					message:''
				},
				down:[0],
				downArray:[{text: '无',value: 0}, {text: '麻木',value: 1}, {text: '袜套样感觉',value: 2}, {text: '疼痛',value: 3}, {text: '踩棉絮感',value: 4}, {text: '蚁行感',value: 5}, {text: '其他',value: 6}, {text: '静息痛',value: 7}, {text: '间歇性皱行',value: 8}],
				withArray: [{text: '是',value: 1}, {text: '否',value: 0}],
				oper: 0, //手术
				operleg: 0, //手术肢体
				operlegArray:[{text: '左侧',value: 0}, {text: '右侧',value: 1}],
				cutLeg: 0, //截肢位置
				cutArray: [{text: '无',value: 0}, {text: '足趾',value: 1}, {text: '足前段',value: 2}, {text: '踝以下',value: 3}, {text: '膝以下',value: 4}, {text: '膝以上',value: 5}, {text: '其他',value: 6}],
				nephroma: 0, //肾病
				contim: 0, //确诊时间
				timeArray:[{text: '1-5年',value: 0}, {text: '5-10年',value: 1}, {text: '其它',value: 2}],
				dialysis: 0, //透析
				ulcer: 0, //溃疡
				ulcerNum: 0, //溃疡数目
				ulcerArray:[{text: '单发',value: 0}, {text: '两处',value: 1}, {text: '多处',value: 2}],
				understand1: 0, //糖尿病足预防知识是否了解
				understand2: 0, //是否定期进行糖尿病足的筛查
				
			}
		},
		methods: {
			submit() {
				this.$refs.form.validate().then(res=>{
					this.suces()
					// console.log('表单数据信息：', res);
				}).catch(err =>{
					console.log('表单错误信息：', err);
					uni.showToast({
						icon:"none",
						title:"请填写必填项"
					})
				})
			},
			suces(){
				const chooseList = this.chooseFrom;
				console.log(chooseList)
				let obj = {
					name: this.formData.name,
					identityCard: this.formData.idCard,
					sex: this.formData.gender,
					dateOfBirth: this.formData.age,
					// age: this.formData.age,
					address: this.formData.familyAddress,
					mainSymptoms:this.formData.message,
					mobilePhone: this.formData.phone,
					dmTime: chooseList.data1,
					dmCircumstance: chooseList.data2,
					bloodSugar: chooseList.data3,
					mhHypertension: chooseList.data4,
					mhCoronaryHeart: chooseList.data5,
					mhBloodLipids: chooseList.data6,
					mhBloodVessels: chooseList.data7,
					mhThrombus: chooseList.data8,
					feetExamine: chooseList.data9,
					feetUlcer: chooseList.data10,
					feetLimp: chooseList.data11,
					llHueLeft: chooseList.data12,
					llHueRight: chooseList.data13,
					llTemperatureLeft: chooseList.data14,
					llTemperatureRight: chooseList.data15,
					lowerLimbs: this.down.toString(),
					toedotomySurgery: this.oper,
					surgicalLimbs: this.operleg,
					locationAmputation: this.cutLeg.toString(),
					nephropathy: this.nephroma,
					diagnosisTime: this.contim,
					dialysis: this.dialysis,
					anabrosis: this.ulcer,
					anabrosisAmount: this.ulcerNum,
					knowledge: this.understand1,
					screeningDiabetes: this.understand2,
				}
				console.log(obj)
				console.log(this.chooseFrom)
			},
			// 弹出日期选择器显示确认取消
			cancel(bool) {
				this.dataDate = bool;
			},
			confirm(res) {
				this.formData.birDate = res.value;
				this.dataDate = false;
			},
		},
		computed:{
			chooseFrom(){
				let obj={};
				let num=0;
				array1.map((item,index)=>{
					num=num+1;
					obj["data" + num] = item.choose;
					// obj["data"+num]=item.chooseArray[item.choose].text;
				})
				array2.map((item,index)=>{
					item.chooseArray.map((son,sonind)=>{
						num=num+1;
						obj["data" + num] = son.choose;
						// obj["data"+num]=son.chooseArray[son.choose].text;
					})
				})
				// num=num+1;
				// obj["data"+num]=this.downArray[this.down].text;
				// console.log(obj)
				return obj
			}
		},
		onLoad(e) {
			// let patInfo=this.$store.state.user.patInfo;
			// console.log("获取患者信息",patInfo)
			// for (let i in patInfo) {
			// 	if (i == "cardNo") {
			// 		patInfo[i] =patInfo[i].replace(/(^\s*)|(\s*$)/g, "");
			// 	}
			// }
			// this.formData.name=patInfo.patientName
			// this.formData.idCard=patInfo.idCardNr;
		},
		watch:{
			"formData.idCard"(val){
				if(val.length==18){
					let obj=checkIdCard(this.formData.idCard)
					console.log(obj.age);
					this.formData.age=obj.age;
					this.formData.gender=obj.sex=="男"?0:1;
					this.formData.birDate=obj.birthday;
					this.formData.address=obj.province;
				}
			},
		},
	}
</script>

<style scoped lang="scss">
	uni-input {
		display: inline;
	}
	
	.font {
		font-size: 28rpx;
	}
	.right ::v-deep .uni-data-checklist .checklist-group{
		justify-content: flex-end;
	}
	::v-deep .uni-forms-item__label {
		width: 160rpx !important;
		font-size: 28rpx !important;
		font-weight: 500;
		color: #000;
	}
	.width ::v-deep .uni-forms-item__label {
		width: 340rpx !important;
	}
	.widths ::v-deep .uni-forms-item__label {
		width: 380rpx !important;
	}
	.none ::v-deep .uni-forms-item__label {
		width: 0rpx !important;
	}
	.pbrido{
		::v-deep .uni-forms-item__content {
			padding-top: 10rpx;
		}
	}
	
	::v-deep .is-input-border uni-text {
		font-size: 40rpx !important;
	}
	.downArray ::v-deep .uni-data-checklist .checklist-group .checklist-box{
		width: 33.33%;
		margin-right: 0;
	}
	.flend{
		::v-deep .uni-data-checklist .checklist-group{
			justify-content: flex-end;
		}
		::v-deep .uni-data-checklist .checklist-group .checklist-box{
			margin-right: 10rpx;
			// margin-right: 0;
		}
	}
</style>