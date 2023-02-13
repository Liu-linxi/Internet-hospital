<template>
	<view>
		<!-- 筛选列表 -->
		
		<view class="bg-white" style="position: fixed;width: 100%;z-index: 1;">
			<uni-segmented-control :current="active1" :values="activeList1" @clickItem="search1" styleType="text" activeColor="#427CFC"></uni-segmented-control>
			
			<view class="status mt-1">
				<uni-segmented-control :current="active2" :values="activeList2" @clickItem="search2" v-if="active1!=2" activeColor="#68DAB3" unchecked="#8B8B8B"></uni-segmented-control>
				<uni-segmented-control :current="active2" :values="activeList2s" @clickItem="search2" v-if="active1==2" activeColor="#68DAB3" unchecked="#8B8B8B"></uni-segmented-control>
			</view>
		</view>
		<view style="height: 150rpx;"></view>
		<!-- 订单列表 -->
		<orderListSon :dataList="4" :active="active1"></orderListSon>
		<uni-load-more :status="status" />
	</view>
</template>

<script>
	import orderListSon from "./components/orderListSon"
	export default {
		name: '',
		components: {
			orderListSon
		},
		data() {
			return {
				active1: 0, //大筛选条件
				activeList1: ['咨询订单', '购药订单', '医护上门'],
				active2: 0, //小筛选条件
				activeList2: ['全部', '未付款', '已付款', '配送中', '已完成', '已取消'],
				activeList2s: ['全部', '未付款', '已付款', '已接单', '已完成', '已取消'],
				status: 'more',//more loading noMore
			}
		},
		methods: {
			search1(e) {
				if (this.tabIndex != e.currentIndex) {
					this.active1 = e.currentIndex;
					this.active2 = 0;
				}
			},
			search2(e) {
				if (this.tabIndex != e.currentIndex) {
					this.active2 = e.currentIndex;
				}
			},
		},
		// 触底加载
		onReachBottom() {
			this.status="loading";
			setTimeout(()=>{
				this.status="noMore";
			},2000)
		},
	}
</script>

<style scoped lang="scss">
	.bg-white{
		::v-deep .segmented-control{
			border-bottom: 3rpx solid #F2F4F5;
			border-color: #F2F4F5 !important;
		}
	}

	.status {
		::v-deep  .segmented-control__item{
			border: none;
		}
		::v-deep .segmented-control{
			padding-bottom: 10rpx;
		}
		::v-deep .segmented-control{
			padding-right: 20rpx;
			padding-left: 20rpx;
		}
		::v-deep .segmented-control__item {
			border-radius: 10rpx;
		}
		::v-deep .segmented-control__text{
			padding: 20rpx 0;
		}
	}
</style>
