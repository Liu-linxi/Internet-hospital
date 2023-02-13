<template>
	<view class="min-page">
		<!-- 底部选项卡组件 -->
		<tabbar activeIndex="1" />
		<!-- 轮播图 -->
		<view class="mt-3">
			<bw-swiper :swiperList="swiperList" :swiperType="true" :autoplay="true" :indicatorDots="false"
				style="width:100%;" :w_h='2.3' @clickItem="detail"></bw-swiper>
		</view>
		<!-- 列表健康知识 -->
		<view class="mx-2 pb-2">
			<!-- 标题栏 -->
			<uni-section class="font-weight" :padding="false" title="健康知识普及" titleFontSize="34rpx">
				<template v-slot:right>
					<view class="font-md d-flex a-center" @click="healthList">
						<text class="mr-1 font">查看全部</text>
						<uni-icons type="forward" size="20"></uni-icons>
					</view>
				</template>
			</uni-section>
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
						<image class="rounded-big" style="width: 260rpx;height: 160rpx;"
							:src="item.img" mode=""></image>
					</view>
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
					text: '加油1'
				}, {
					img: '/static/health-column/banner2.png',
					text: '加油2'
				}, {
					img: '/static/health-column/banner1.png',
					text: '加油3'
				}],
				knowledgeList: [{
					title:"美国疫情为何快速蔓延？专家检讨：检测试剂有缺陷，测试人群少",
					num:"120",
					data:"2022-09-03",
					img:"/static/health-column/list1.png"
				}, {
					title:"纽约市长称若疫情恶化可效仿意大利“封城”，但一天后又改口",
					num:"120",
					data:"2022-09-03",
					img:"/static/health-column/list2.png"
				}, {
					title:"往武汉送海鲜确诊！浙江男司机冲医生怒吼求死：我从没这样煎熬",
					num:"120",
					data:"2022-09-03",
					img:"/static/health-column/list3.png"
				}]
			}
		},
		filters:{
			//截取字符串
			brief(val){
				if(val.length>36){
					return val.substr(0,36)+"..."
				}else{
					return val;
				}
			}
		},
		methods: {
			// 查看全部
			healthList(){
				uni.navigateTo({
					url:"/pages/health-column/healthList/healthList"
				})
			},
			// 列表详情点击
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
