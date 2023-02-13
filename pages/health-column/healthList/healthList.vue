<template>
	<!-- 列表健康知识 -->
	<view class="mx-2 mt-2">
		<!-- 列表内容 -->
		<view class="mx-2">
			<view class="d-flex a-center mb-2" v-for="(item,index) in knowledgeList" :key="index" @click="detail(item)">
				<view class="mr-3 d-flex flex-column j-sb" :class="item.title.length<13?'w-60':''">
					<view class="truncate3" :class="item.title.length>13?'line-h-md':''">
						{{item.title}}
					</view>
					<view class="d-flex a-center j-sb font-sm">
						<view class="d-flex a-center ">
							<uni-icons type="eye" size="16"></uni-icons>
							<text>{{item.num}}</text>
						</view>
						<view class="">
							{{item.data}}
						</view>
					</view>
				</view>
				<view class="">
					<image class="rounded-big" style="width: 260rpx;height: 160rpx;" :src="item.img" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import bwSwiper from '@/components/bw-swiper/bw-swiper.vue'

	export default {
		components: {
			bwSwiper
		},
		data() {
			return {
				swiperList: [{
					img: '/static/health-column/banner1.png',
					text: '加油'
				}, {
					img: '/static/health-column/banner2.png',
					text: '加油'
				}, {
					img: '/static/health-column/banner1.png',
					text: '加油'
				}],
				knowledgeList: [{
					title: "美国疫情为何快速蔓延？专家检讨：检测试剂有缺陷，测试人群少",
					num: "120",
					data: "2022-09-03",
					img: "/static/health-column/list1.png"
				}, {
					title: "纽约市长称若疫情恶化可效仿意大利“封城”，但一天后又改口",
					num: "120",
					data: "2022-09-03",
					img: "/static/health-column/list2.png"
				}, {
					title: "往武汉送海鲜确诊！浙江男司机冲医生怒吼求死：我从没这样煎熬",
					num: "120",
					data: "2022-09-03",
					img: "/static/health-column/list3.png"
				}]
			}
		},
		filters: {
			//截取字符串
			brief(val) {
				if (val.length > 36) {
					return val.substr(0, 36) + "..."
				} else {
					return val;
				}
			}
		},
		onReachBottom() {
			uni.showToast({
				title:"触底加载成功",
				icon:'none'
			})
		},
		methods: {
			detail(item){
				uni.navigateTo({
					url:"/pages/health-column/healthDetail/healthDetail?item="+JSON.stringify(item)
				})
			}
		}
	}
</script>

<style scoped>
	.min-page {
		height: calc(100vh - 270rpx);
		overflow: scroll;
	}

	::v-deep .uni-section .uni-section-header__content {
		font-weight: bold;
	}
</style>
