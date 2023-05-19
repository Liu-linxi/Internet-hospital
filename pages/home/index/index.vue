<template>
	<view class="min-page">
		<!-- 搜索框 -->
		<view class="main-bg-color rounded-bottom px-4 pb-16">
			<view class="border rounded-line border-white py-1 px-2 text-white d-flex a-center" @click="search">
				<image src="/static/icon/search.png" class="line-image"></image>
				<text class="text-letter1"> 请输入要搜索的科室、医院、医生</text>
			</view>
		</view>
		<!-- 模块模板 -->
		<view class="mx-4 py-3 pb-2 bg-white mt--13 rounded-lg shadow-custom d-flex a-center j-sa flex-wrap">
			<view @click="navigator(cate.url, $event)" class="d-flex flex-column text-center" style="width: 25%;" v-for="(cate,ind) in category" :key="ind">
				<view class="line-h0">
					<image style="width: 110rpx;height: 110rpx;" :src="cate.img"></image>
				</view>
				<text class="font-weight my-1 line-h-lg">{{cate.text}}</text>
			</view>
		</view>
		<!-- banner轮播图 -->
		<view class="mx-4 mt-2">
			<swiper @change="change" style="height: 220rpx;" :autoplay="true" :interval='10000' :circular='true'>
				<swiper-item v-for="(item, index) in swiperList" :key="index">
					<view class="swiper-item">
						<image :src="item.img" mode="widthFix"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 医院专栏 -->
		<view class="mx-2">
			<!-- 标题栏 -->
			<uni-section class="font-weight" :padding="false" title="互联网医院专区" titleFontSize="34rpx" @click="moreHos">
				<template v-slot:right>
					<view class="font d-flex a-center">
						<text class="mr-1">查看全部</text>
						<uni-icons type="forward" size="20"></uni-icons>
					</view>
				</template>
			</uni-section>
			<!-- 医院列表 -->
			<view class="mx-2">
				<view class="hospital-shadow rounded-md mb-3 d-flex a-center j-sb p-2" v-for="(li,ind) in 3" :key="ind">
					<view class="d-flex a-center w-70" @click="hosDetail(li)">
						<view class="line-h0">
							<image src="" class="doctor-image rounded-md main-bg-color" mode=""></image>
						</view>
						<view class="truncate ml-2">
							<view class="truncate font-weight">平顶山第一人民医院互联网医院</view>
							<view class="truncate font-sm line-h-sm">电话：0375-5195013</view>
							<view class="truncate font-sm">地址：平顶山新城区长安大道与育英路交叉口中国银行西侧</view>
						</view>
					</view>
					<view class="ml-2 border main--color font-weight input-border-color px-1 text-center rounded-lg w-20" @click="jumphos">
						进入互联网医院
					</view>
				</view>
			</view>
			
			
		</view>
		
		
		<!-- 医生专栏 -->
		<view class="mx-2 pb-2">
			<!-- 标题栏 -->
			<uni-section class="font-weight" :padding="false" title="热门医生" titleFontSize="34rpx" @click="moreDoc">
				<template v-slot:right>
					<view class="font d-flex a-center">
						<text class="mr-1">查看全部</text>
						<uni-icons type="forward" size="20"></uni-icons>
					</view>
				</template>
			</uni-section>
			<!-- 医生列表 -->
			<view class="mx-2 d-flex flex-wrap j-sb">
				<view class="w-45 mb-3 pl-2 pb-1 shadow-doctor-card rounded-big overflow-hidden" v-for="(doc,index) in 6" :key="index" @click="docDetail(doc)">
					<view class="d-flex j-sb">
						<view class="mt-2">
							<view class="font-big font-weight line-h-md">
								张青
							</view>
							<view class="line-h-md text-subheading truncate" >
								中医科
							</view>
							<view class="line-h-md text-subheading truncate">
								<text>副主任医师</text>
							</view>
						</view>
						<view class="main-bg-color">
							<image class="doctor-image" src="/static/home/doc1.png" mode=""></image>
						</view>
					</view>
					<view class="text-subheading pr-2">
						<view class="d-flex">
							<view class="text-nowrap" >擅长：</view>
							<view class="text-nowrap ellipsis" >慢性病张青专注于中医科张青专注于中医科张青专注于中医科张青专注于中医科</view>
						</view>
						<view class="d-flex">
							<view class="text-nowrap" >简介：</view>
							<view class="truncate ellipsis">张青专注于中医科，张青专注于中医科张青专注于中医科张青专注于中医科尤其是在糖尿病领尤其是在糖尿病领</view>
						</view>
					</view>
					<view class="pr-2 d-flex a-center j-sb">
						<grade rate="4.8" rateTotal="253"/>
						<view class="d-flex a-center">
							<image src="/static/icon/chat.png" style="width: 32rpx; height: 32rpx;" mode=""></image>
							<view class="text-subheading font-sm truncate">咨询量1234</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		
		
		
		<!-- 底部导航 -->
		<tabbar activeIndex="0" />
		<intelligent></intelligent>
	</view>
</template>

<script>
	// 引入静态数据
	import { category,swiperList } from './index.js'
	import intelligent from '@/components/intelligent/intelligent.vue';
	
	export default {
		components:{
			intelligent
		},
		data() {
			return {
				category,
				swiperList,
				current: 0
			}
		},
		onLoad() {
			console.log(this.$store.state.user)
		},
		methods: {
			// 顶部搜索点击事件
			search() {
				uni.navigateTo({
					url:'/pages/home/search/search'
				})
			},
			// 轮播图轮播事件
			change(e) {
				this.current = e.detail.current;
			},
			//模块跳转详情
			navigator(url) {
				uni.navigateTo({
					url
				})
			},
			// 查看全部医院
			moreHos(){
				uni.navigateTo({
					url:'/pages/home/hospitalList/hospitalList'
				})
			},
			// 医院详情
			hosDetail(e){
				uni.navigateTo({
					url:"/pages/home/hospitalDetail/hospitalDetail?obj="+e
				})
			},
			jumphos(){
				uni.showToast({
					title:"进入互联网医院",
					icon:"none"
				})
			},
			// 查看全部医生
			moreDoc(){
				uni.navigateTo({
					url:'/pages/home/docList/docList'
				})
			},
			docDetail(){
				uni.navigateTo({
					url:'/pages/home/consultation/consultation'
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
	::v-deep .uni-section .uni-section-header__content{
		font-weight: bold;
	}
	.ellipsis {
	  display: -webkit-box;
	  -webkit-box-orient: vertical;
	  -webkit-line-clamp: 2;
	  overflow: hidden;
	  text-overflow: ellipsis;
	  white-space: normal;
	}
</style>
