<template>
	<view>
		<!-- 在线咨询按钮 -->
		<view v-if="model==0">
			<!-- 自取选择状态按钮 -->
			<view class="position-fixed w-100 bottom-0 border-top py-3 pb-4 bg-white" v-if="stateType=='自取'">
				<view v-if="status==0" class="main-bg-color font-weight text-center rounded-md mx-5  line-h-big text-white" @click="toPay">
					去支付
				</view>
				<view v-if="status==1" class="main--color font-weight border text-center rounded-md mx-5  line-h-big " @click="toCancel">
					取消订单
				</view>
				<view v-show="status==2" class="d-flex a-center j-sb mx-5">
					<view class="w-46 main-bg-color font-weight text-center rounded-md line-h-big text-white"
						@click="toEvaluate">
						去评价
					</view>
					<view class="w-46 main-bg-color font-weight text-center rounded-md line-h-big text-white"
						@click="toConsult">
						再次咨询
					</view>
				</view>
				<view v-show="status==3"
					class="main-bg-color font-weight text-center rounded-md mx-5  line-h-big text-white" @click="toConsult">
					再次咨询
				</view>
			</view>
			<!-- 配送选择状态按钮 -->
			<view class="position-fixed w-100 bottom-0 border-top py-3 pb-4 bg-white" v-if="stateType=='配送'&&status!=1">
				<view v-if="status==0" class="main-bg-color font-weight text-center rounded-md mx-5  line-h-big text-white" @click="toPay">
					去支付
				</view>
				<view v-if="status==1" class="main--color font-weight border text-center rounded-md mx-5  line-h-big "
					@click="toCancel">
					取消订单
				</view>
				<view v-show="status==2" class="d-flex a-center j-sb mx-5">
					<view class="w-46 main-bg-color font-weight text-center rounded-md line-h-big text-white"
						@click="toEvaluate">
						去评价
					</view>
					<view class="w-46 main-bg-color font-weight text-center rounded-md line-h-big text-white"
						@click="toConsult">
						再次咨询
					</view>
				</view>
				<view v-show="status==3"
					class="main-bg-color font-weight text-center rounded-md mx-5  line-h-big text-white" @click="toConsult">
					再次咨询
				</view>
			</view>
		</view>
		<!-- 购药按钮 -->
		<view v-if="model==1">
			<view class="position-fixed w-100 bottom-0 border-top py-3 pb-4 bg-white"  v-if="stateType=='自取'">
				<view v-show="status==0" class="main-bg-color font-weight text-center rounded-md mx-5  line-h-big text-white" @click="toPay">
					去支付
				</view>
				<view v-show="status==1" class="main--color font-weight border text-center rounded-md mx-5  line-h-big " @click="toCancel">
					取消订单
				</view>
				<view v-show="status==2" class="d-flex a-center j-sb mx-5">
					<view class="w-46 main-bg-color font-weight text-center rounded-md line-h-big text-white"  @click="toEvaluate">
						申请售后
					</view>
					<view class="w-46 main-bg-color font-weight text-center rounded-md line-h-big text-white"  @click="toConsult">
						再次购买
					</view>
				</view>
				<view v-show="status==3" class="main-bg-color font-weight text-center rounded-md mx-5  line-h-big text-white" @click="toConsult">
					再次购买
				</view>
			</view>
			<!-- 配送选择状态按钮 -->
			<view class="position-fixed w-100 bottom-0 border-top py-3 pb-4 bg-white" v-if="stateType=='配送'&&status!=1">
				<view v-if="status==0" class="main-bg-color font-weight text-center rounded-md mx-5  line-h-big text-white" @click="toPay">
					去支付
				</view>
				<view v-if="status==1" class="main--color font-weight border text-center rounded-md mx-5  line-h-big " @click="toCancel">
					取消订单
				</view>
				<view v-show="status==2" class="d-flex a-center j-sb mx-5">
					<view class="w-46 main-bg-color font-weight text-center rounded-md line-h-big text-white"  @click="toEvaluate">
						申请售后
					</view>
					<view class="w-46 main-bg-color font-weight text-center rounded-md line-h-big text-white"  @click="toConsult">
						再次购买
					</view>
				</view>
				<view v-show="status==3" class="main-bg-color font-weight text-center rounded-md mx-5  line-h-big text-white" @click="toConsult">
					再次购买
				</view>
			</view>
		</view>
		<!-- 医护按钮 -->
		<view v-if="model==2">
			<view class="position-fixed w-100 bottom-0 border-top py-3 pb-4 bg-white">
				<view v-show="status==0" class="main-bg-color font-weight text-center rounded-md mx-5  line-h-big text-white" @click="toPay">
					去支付
				</view>
				<view v-show="status==1" class="main--color font-weight border text-center rounded-md mx-5  line-h-big " @click="toCancel">
					取消订单
				</view>
				<view v-show="status==2" class="d-flex a-center j-sb mx-5">
					<view class="w-46 main-bg-color font-weight text-center rounded-md line-h-big text-white"  @click="toEvaluate">
						去评价
					</view>
					<view class="w-46 main-bg-color font-weight text-center rounded-md line-h-big text-white"  @click="toConsult">
						再次预约
					</view>
				</view>
				<view v-show="status==3" class="main-bg-color font-weight text-center rounded-md mx-5  line-h-big text-white" @click="toConsult">
					再次预约
				</view>
			</view>
		</view>
	
	
	</view>
</template>

<script>
	export default {
		props:{
			stateType:{
				type:String,
				default:"自取",
			},
			status:{
				type:Number,
				default:0,
			},
			//0咨询 1购药 2医护
			model:{
				type:Number,
				default:0,
			},
		},
		data() {
			return {
				
			}
		},
		methods: {
			toPay(){
				this.$emit("toPay");
				// uni.showToast({
				// 	title:this.stateType+"去支付"
				// })
			},
			toCancel(){
				this.$emit("toCancel");
				// uni.showToast({
				// 	title:this.stateType+"取消订单"
				// })
			},
			toEvaluate(){
				this.$emit("toEvaluate");
				// uni.showToast({
				// 	title:this.stateType+"去评价"
				// })
			},
			toConsult(){
				this.$emit("toConsult");
				// uni.showToast({
				// 	title:this.stateType+"再次咨询"
				// })
			},
		},
	}
</script>

<style>
</style>
