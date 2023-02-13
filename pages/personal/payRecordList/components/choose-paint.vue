<template>
	<view>
		<uni-popup ref="popup" type="bottom" background-color="#fff">
			<view class="text-center line-h-big border-bottom font-weight mt-2">
				切换就诊人
			</view>
			<radio-group @change="radioChange" class="line-h-big">
				<label v-for="(item, index) in paintList" :key="index" @click="toggle(false)">
					<view class="border-bottom line-h-big px-3 py-2">
						<view class="d-flex a-center j-sb line-h-md  ">
							<view class="">
								{{item.value}}
							</view>
							<view>
								<radio style="transform: scale(0.7) " :value="item.value" :checked="index === current" />
							</view>
						</view>
						<view class="d-flex a-center line-h-md j-sb">
							<view class="">
								身份证号：{{item.id}}
							</view>
							<view>
								关系：{{item.relap}}
							</view>
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
				paintList: [{
					value:"张三三",
					id:"1231112211111546878",
					relap:"本人",
					checked: 'true'
				},{
					value:"张三12",
					id:"1231112211111546878",
					relap:"本人",
				}],
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
				for (let i = 0; i < this.paintList.length; i++) {
					if (this.paintList[i].value === evt.detail.value) {
						this.current = i;
						this.$emit("updataPay",this.paintList[i].value)
						break;
					}
				}
			},
		}
	}
</script>

<style>
</style>