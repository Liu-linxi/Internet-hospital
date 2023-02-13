<template>
	<view>
		<view class="m-3">
			<!--标题-->
			<view class="text-center font-md line-h-md main--color font-weight">
			  {{item.title}}
			</view>
			<!--时间-->
			<view class="d-flex a-center j-sb font line-h-lg">
			  <view>
			      {{ item.num}}
			  </view>
			  <view>
			    {{ item.data }}
			  </view>
			</view>
			<view v-html="item.title"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item:{},
			}
		},
		onLoad(e) {
			this.item=JSON.parse(e.item);
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
