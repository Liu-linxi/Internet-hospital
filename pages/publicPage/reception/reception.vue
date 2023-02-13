<template>
	<view class="mx-3">
		<view class="user-shadow mt-3 rounded-md px-2 py-2" v-for="(li,index) in 15" :key="index" @click="toEvaluate(li)">
			<view class="d-flex a-center">
				<view class="line-h0">
					<image src="" class="rounded-md main-bg-color close-image" mode=""></image>
				</view>
				<view class="ml-2">
					<view class="font-weight">
						张三三
					</view>
					<view class="text-subheading">
						内科门诊 <text class="ml-2 font">主任医师</text>
					</view>
				</view>
			</view>
			<view class="ml-2 text-subheading mt-1">
				<view class="truncate2">
					咨询内容：特发性含铁血黄素沉着症
				</view>
				<view class="truncate2">
					咨询类型：图文咨询
				</view>
				<view class="d-flex a-center j-sb">
					<view class="line-h">
						咨询时间：2022-12-08
					</view>
					<view class="d-flex flex a-center text-white">
						<view class="main-bg-color font rounded-circle px-2" v-show="navitile=='待接诊'||navitile=='进行中'">
							查看
						</view>
						<view class="main-bg-color font rounded-circle px-2" v-show="navitile=='待评价'">
							待评价
						</view>
					</view>
				</view>
			</view>
		</view>
		<uni-load-more :status="status" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: 'more', //more loading noMore
				navitile:"",//导航标题
			}
		},
		onLoad(obj) {
			this.navitile=obj.title
		},
		onReady() {
			//修改导航页面
			uni.setNavigationBarTitle({
				title:this.navitile
			});
		},
		methods: {
			toEvaluate() {
				if(this.navitile=='待评价'){
					uni.navigateTo({
						url: "/pages/personal/evaluate/evaluate"
					})
				}else{
					let status=0;
					switch (this.navitile){
						case '进行中':
							status=2;
							break;
						case '已完成':
							status=3;
							break;
						default:
							status=1;
							break;
					}
					uni.navigateTo({
						url: "/pages/publicPage/consultationDetails/consultationDetails?status="+status
					})
				}
			}
		},
		onReachBottom() {
			uni.showToast({
				icon: 'none',
				title: "触底加载",
			})
			this.status = "loading";
			setTimeout(() => {
				this.status = "noMore";
			}, 2000)
		}
	}
</script>

<style>
</style>
