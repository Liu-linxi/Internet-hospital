<template>
	<view class="">
		<template v-if="!typeRadio">
			<view class="d-flex a-center j-sb border-bottom px-4 py-2" v-for="(li,index) in addList" :key="index">
				<view class="">
					<view class="truncate2 text-subheading">
						河南省平顶山市新华区湖滨路街道
						<text v-show="li==1" class="ml-3 text-white font main-bg-color rounded-circle px-2"> 默认</text>
					</view>
					<view class=" truncate2 font-md">
						河南省平顶山市新华区湖滨路街道
					</view>
					<view class="text-subheading">
						王文斯
						<text class="ml-5"> 15012345645</text>
					</view>
				</view>
				<view class="" @click="toDetail(li)">
					<image src="/static/icon/edit.png" class="icon-image" mode=""></image>
				</view>
			</view>
		</template>
		<template v-else>
			<view>
				<radio-group @change="radioChange">
					<label class="d-flex a-center j-sb border-bottom px-3 py-2" v-for="(item, index) in addList" :key="index">
						<radio :value="item.toString()" :checked="index === current" />
						<view class="">
							<view class="truncate2 text-subheading">
								河南省平顶山市新华区湖滨路街道
								<text v-show="item==1" class="ml-3 text-white font main-bg-color rounded-circle px-2"> 默认</text>
							</view>
							<view class=" truncate2 font-md">
								河南省平顶山市新华区湖滨路街道
							</view>
							<view class="text-subheading">
								王文斯
								<text class="ml-5"> 15012345645</text>
							</view>
						</view>
						<view class="" @click.stop="toDetail(item)">
							<image src="/static/icon/edit.png" class="icon-image" mode=""></image>
						</view>
					</label>
				</radio-group>
			</view>

		</template>

	</view>
</template>

<script>
	export default {
		props: {
			// 数据列表
			addList: {
				// type:Array
			},
			//单选设置，
			typeRadio: {
				type: Boolean,
				default: false
			},
		},

		data() {
			return {
				current: 0
			}
		},
		methods: {
			toDetail(item) {
				this.$emit("toEdit", item)
			},
			radioChange: function(evt) {
				this.$emit("editAddr", evt.detail.value)
				// console.log(evt);
				// for (let i = 0; i < this.items.length; i++) {
				// 	if (this.items[i].value === evt.detail.value) {
				// 		this.current = i;
				// 		break;
				// 	}
				// }
			}
		},
	}
</script>

<style>
</style>
