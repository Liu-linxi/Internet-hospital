<template>
	<view>
		<uni-popup ref="popup" type="bottom" background-color="#fff">
			<view class="mx-3 font-lg font-weight mt-2">
				选择支付方式
			</view>
			<view class="mx-3 text-subheading font">
				选择您支付方式
			</view>
			<radio-group @change="radioChange" class="px-3">
				<label v-for="(item, index) in payItems" :key="index" @click="toggle(false)">
					<view class="d-flex a-center j-sb border rounded-md mt-2 p-2">
						<view class="d-flex a-center" v-if="index<2">
							<image :src="item.img" class="icon-image" mode=""></image>
							<view class="ml-3">
								{{item.name}}
							</view>
						</view>
						<view class="d-flex a-center" v-else>
							<image :src="item.img" style="width: 70rpx;height: 55rpx;" mode=""></image>
							<view class="ml-2">
								{{item.name}}
							</view>
							<view class="ml-1">
								{{bankVague("5341121111241212452")}}
							</view>
						</view>
						<view>
							<radio :value="item.value" :checked="index === current" />
						</view>
					</view>
				</label>
			</radio-group>
			<view class="mt-5"></view>
		</uni-popup>
	</view>
</template>

<script>
	import {
		bankVague
	} from "@/common/lib/filter"
	export default {
		props: {
			drugList: {
				// type: Array,
			},
		},
		data() {
			return {
				bankVague,
				payItems: [{
						value: 'USA',
						name: '微信支付',
						img: "/static/order/wechat.png",
						checked: 'true'
					},
					{
						value: 'CHN',
						img: "/static/order/sb.png",
						name: '社保卡支付'
					},
					{
						value: 'BRA',
						img: "/static/order/bank.png",
						name: '银行卡支付'
					},
				],
				current: 0,//支付方式索引
			}
		},
		methods: {
			// 控制弹出支付方式
			toggle(bool) {
				if (bool) {
					this.$refs.popup.open()
				} else {
					this.$refs.popup.close()
				}
			},
			// 切换支付样式选择
			radioChange(evt) {
				for (let i = 0; i < this.payItems.length; i++) {
					if (this.payItems[i].value === evt.detail.value) {
						this.current = i;
						this.$emit("updataPay",this.payItems[i].name)
						break;
					}
				}
			},
		}
	}
</script>

<style>
</style>