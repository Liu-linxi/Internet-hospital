<template>
	<!-- 配送订单详情显示 -->
	<view class="">
		<view class="maxHiegh position-relative pt-2 ">
			<!-- 药房数据 -->
			<view class=" px-5 mb-2 py-1 border-bottom pb-2">
				<view class="d-flex a-center j-sb font-weight">
					<view>收货地址</view>
					<view class="main--color" @click="changeEdit">
						更改
					</view>
				</view>
				<view class="line-h-sm">
					张三
					<text class="ml-4">54454345445</text>
				</view>
				<view class="text-subheading d-flex a-center truncate2 line-h-sm mt-1">
					<uni-icons type="location" size="18" color="#99a6b8"></uni-icons>
					平顶山市中国银行XXXXXXXXXXXXX
				</view>
			</view>
			<scroll-view class="mainHeight" scroll-y="true">
				<view class="border rounded-big mx-4">
					<view class="px-2 text-letter1 line-md mt-1">
						订单将于明天18:00前送达
					</view>
					<view class="px-2 text-letter1 line-md mt-1"></view>
					<divider></divider>
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
							<picker class="mr-1 main--color" @change="bindPickerChange" :value="pickIndex"
								:range="pickArray">
								<view class="main--color">{{pickArray[pickIndex]}}</view>
							</picker>
							<uni-icons type="forward" color="#000000" size="16"></uni-icons>
						</view>
					</view>
				</view>
				<view class="mt-2 mx-4">
					备注信息
					<view class="border mt-1 p-2 rounded-big position-relative">
						<textarea v-model="textArea" maxlength="200" class="w-100 h-2" />
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
						<view>配送费</view>
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
		<!-- 支付方式 -->
		<payment-method ref="payTypeMeth" @updataPay="updataPay"></payment-method>
		<!-- 地址选择 -->
		<uni-popup ref="popupAdress" type="bottom" background-color="#fff" :is-mask-click ="false">
			<view style="padding: 3vh 0 1vh 0;">
				<scroll-view scroll-y="true" style="height: 50vh;">
					<address-manage @toEdit="toEdit" @editAddr="editAddr" :addList="7" :typeRadio="true"></address-manage>
				</scroll-view>
				<view class="pb-3 pt-2">
					<button type="primary" class="mx-4" @click="toEdit()">新增收货地址</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import drugPurchaseCard from "@/components/drug-purchase-card/drug-purchase-card"
	import paymentMethod from '@/components/payment-method/payment-method.vue';
	import addressManage from '@/components/address-manage/address-manage'
	export default {
		components: {
			drugPurchaseCard,
			paymentMethod,
			addressManage
		},
		data() {
			return {
				payType: "微信支付", //支付方式
				pickArray: ['开发票', '不开发票'], //开发票选择数组
				pickIndex: 0, //发票索引
				textArea: "", //备注信息
			}
		},
		computed: {
			textLength() {
				return this.textArea.length;
			}
		},
		methods: {
			//是否开发票执行数据内容
			bindPickerChange: function(e) {
				this.pickIndex = e.detail.value
			},
			// 控制弹出支付方式
			toggle(bool) {
				this.$refs.payTypeMeth.toggle(bool)
			},
			//传值支付方式选择结果
			updataPay(val) {
				this.payType = val;
			},
			// 支付按钮
			pay() {
				uni.showToast({
					icon: "none",
					title: "支付",
				})
			},
			// 更改地址
			changeEdit() {
				this.$refs.popupAdress.open()
			},
			// 新增地址或者修改地址
			toEdit(item) {
				uni.navigateTo({
					url: "/pages/personal/addressList/addressEdit?item=" + item,
					events: {
						// 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
						addressEditChange: (data)=> {
							this.$refs.popupAdress.close()
							console.log(data)
						},
					},
				})
			},
			// 选择切换内容
			editAddr(item) {
				console.log(item);
				this.$refs.popupAdress.close()
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

	::v-deep uni-view[name=mask] {
		top: -100vh !important;
		z-index: 9;
	}

	::v-deep .uni-popup [name=content] {
		border-radius: 50rpx 50rpx 0 0;
		overflow: hidden;
		z-index: 10;
	}
</style>
