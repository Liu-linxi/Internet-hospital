<template>
	<!-- 自取院内自取订单详情显示 -->
	<view class="">
		<view class="maxHiegh position-relative pt-2 ">
			<!-- 药房数据 -->
			<view class="mx-3">
				<pharmacy-list @handelDetailShow="handelDetailShow" :drugstore="1" :type="0"></pharmacy-list>
			</view>
			<scroll-view class="mainHeight" scroll-y="true">
				<view class="border rounded-big mx-4">
					<view  v-if="shouTips">
						<view class="px-2 text-letter1 line-md mt-1">
							请您明天18:00前取药
						</view>
						<view class="px-2 text-letter1 line-md mt-1"></view>
						<divider></divider>
					</view>
					<drug-purchase-card :drugList="3"></drug-purchase-card>
				</view>
				<view class="border rounded-big mt-3 px-3 mx-4" @click="toggle(true)">
					<view class="d-flex a-center j-sb py-2">
						<view class="d-flex a-center ">
							<image src="/static/icon/cart.png" class="icon-image-small" mode=""></image>
							<view class="ml-1">
								支付方式
							</view>
						</view>
						<view class="d-flex a-center">
							<view class="mr-1 main--color">
								{{payType}}
							</view>
							<uni-icons type="forward" color="#000000" size="16"></uni-icons>
						</view>
					</view>
				</view>
				<view class="border rounded-big mt-3 px-3 mx-4">
					<view class="d-flex a-center j-sb py-2">
						<view class="d-flex a-center ">
							<image src="/static/icon//ticket.png" class="icon-image-small" mode=""></image>
							<view class="ml-1">
								发票
							</view>
						</view>
						<view class="d-flex a-center">
							<picker class="mr-1 main--color" @change="bindPickerChange" :value="pickIndex" :range="pickArray">
								<view class="main--color">{{pickArray[pickIndex]}}</view>
							</picker>
							<uni-icons type="forward" color="#000000" size="16"></uni-icons>
						</view>
					</view>
				</view>
				<view class="mt-2 mx-4">
					备注信息
					<view class="border mt-1 p-2 rounded-big position-relative">
						<textarea v-model="textArea" maxlength="200" class="w-100 h-2"/>
						<view class="position-absolute bottom-0 right-0 text-subheading mr-1 mb-1 font">
							{{textLength}}/200
						</view>
					</view>
				</view>
				<view class="mt-2" style="background-color: #F2F4F5;height: 1.5vh;"></view>
				<view class="border-bottom px-4 py-1">
					<view class="d-flex a-center j-sb line-h-big">
						<view>小计</view>
						<view class="">￥225.20</view>
					</view>
					<view class="d-flex a-center j-sb line-h-big">
						<view>总计</view>
						<view class="main--color font-weight">￥225.20</view>
					</view>
				</view>
				<view style="height: 2vh;"></view>
			</scroll-view>
			<view class="position-absolute bottom-0 w-100 bg-white">
				<button type="primary" @click="pay" class="mx-3">确认支付</button>
			</view>
		</view>
		<!-- 支付方式弹层 -->
		<payment-method ref="payTypeMet" @updataPay="updataPay"></payment-method>
	</view>
</template>

<script>
	import drugPurchaseCard from "@/components/drug-purchase-card/drug-purchase-card"
	import pharmacyList from '@/components/pharmacy-list/pharmacy-list.vue';
	import paymentMethod from '@/components/payment-method/payment-method.vue';
	export default {
		components:{
			pharmacyList,
			drugPurchaseCard,
			paymentMethod
		},
		data() {
			return {
				payType: "微信支付",//支付方式
				pickArray: ['开发票', '不开发票'],//开发票选择数组
				pickIndex: 0,//发票索引
				textArea:"",//备注信息
				shouTips:null,//显示提示数据内容。
			}
		},
		mounted() {
			// 点击的是否为自取或其他
			uni.$on("currentWat",(res)=>{
				if(res==0){
					this.shouTips=true;
				}else{
					this.shouTips=false;
				}
			})
		},
		computed:{
			textLength(){
				return this.textArea.length;
			}
		},
		methods: {
			//是否开发票执行数据内容
			bindPickerChange: function(e) {
				this.pickIndex = e.detail.value
			},
			//选择数据显示内容
			handelDetailShow() {
				//关闭后返回药店列表显示
				uni.$emit('detailShow', true);
			},
			// 控制弹出支付方式
			toggle(bool) {
				this.$refs.payTypeMet.toggle(bool)
			},
			//传值支付方式选择结果
			updataPay(val){
				this.payType=val;
			},
			// 支付按钮
			pay() {
				uni.showToast({
					icon: "none",
					title: "支付",
				})
				uni.redirectTo ({
					url:"/pages/publicPage/payResult/payResult"
				})
			}
		}
	}
</script>

<style scoped>
	.maxHiegh {
		height: calc(73vh - 50rpx);
	}

	.mainHeight {
		height: calc(53vh - 80rpx);
	}

	::v-deep uni-button[type=primary] {
		background-color: #427CFC;
	}
</style>
