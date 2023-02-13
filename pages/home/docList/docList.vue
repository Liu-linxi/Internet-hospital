<template>
	<view class="">
		<divider states="1"/>
		<!-- 主内容列表 -->
		<view class="pb-16">
			<!-- 搜锁筛选-->
			<view class="d-flex mx-4 ml-2 a-center j-sb py-2">
				<view class="ml-4"  v-show="!searchShow">
					<view class="font-lg line-h-lg">
						医生
					</view>
					<view class="text-secondary line-h-md">
						找到您想问诊的医生
					</view>
				</view>
				<view class="animate__animated animate__lightSpeedInRight" v-show="searchShow">
					<uni-search-bar placeholder="请输入要问诊的医生" @confirm="search" @cancel="searchShow=false" maxlength="30" bgColor="#ffffff" radius="20">
						<view slot="searchIcon">
						</view>
						
					</uni-search-bar>
				</view>
				<view class="ml-2 text-nowrap">
					<image class="mr-2" style="width: 100rpx;height: 100rpx; " src="/static/home/docList/search.png" mode="" @click="searchShow=true"></image>
					<image @click="showDrawer" style="width: 100rpx;height: 100rpx; " src="/static/home/docList/setting.png" mode=""></image>
				</view>
			</view>
			
			<!-- 医生列表 -->
			<view class="mt-2 mx-4">
				<!-- 医生卡片 -->
				<view class="border rounded-big mb-4" :class="chooseIndex==index?'border-check':''" v-for="(li, index) in 10" :key="index" @click="chooseIndex=index">
					<!-- 上 -->
					<view class="p-2 pb-1">
						<view class="d-flex a-center">
							<image class="doctor-image rounded-md" src="/static/home/doc1.png" mode=""></image>
							<view class="ml-3">
								<view class="font-lg font-weight line-h-md">
									张青
								</view>
								<view class="text-subheading font-md d-flex a-center line-h-sm">
									中医科
									<grade rate="4.8" class="ml-2" rateTotal="253评论"/>
								</view>
							</view>
						</view>
						<view class="text-subheading line-h-lg">
							<text class="mr-2">问诊时间：</text>
							<text class="text-inquiries">8:30-12:00 下午2:30-18:00</text>
						</view>
					</view>
					<divider states="2"/>
					<!-- 下 -->
					<view class="d-flex a-center j-sb p-2">
						<image style="width: 130rpx; " src="/static/home/docList/inquiries.png" mode="widthFix"></image>
						<view class="main--color d-flex a-center" @click="docInfo">
							<text class="mr-1">医生简介</text>
							<uni-icons type="arrow-right" color="#427CFC" size="18"></uni-icons>
						</view>
					</view>
				</view>
			</view>
			<divider states="2"/>
		</view>
		<!-- 下一步按钮 -->
		<view class="position-fixed bottom-0 w-100 pt-1 pb-3 bg-white">
			<button class="rounded-md py-2 mx-4" type="primary" @click="next">下一步</button>
		</view>
		<!-- 弹出抽屉层 -->
		<uni-drawer ref="showRight" mode="right" :mask-click="false" :width="350">
			<scroll-view style="height: 100%;" scroll-y="true" class="bg-white">
				<view>
					<view class="p-4 py-2 d-flex a-center j-sb">
						<view class="font-big text-subheading font-weight">
							筛选（医生）
						</view>
						 <view class="" @click="closeDrawer">
							 <image class="close-image"  src="/static/home/docList/close.png" mode=""></image>
						 </view>
					</view>
					<view v-for="(li,index) in chooseList" :key="index">
						<view class="px-4 py-2 " >
							<view class="">
								{{li.name}}
							</view>
							<view class="d-flex my-2 a-center flex-wrap j-sb">
								<view v-show="index==0" class="w-48 bg-unchecked text-nowrap mb-2 rounded-md py-1 text-center" :class="ind==hosIndex?'bg-check':''" v-for="(hos,ind) in li.hosList" :key="ind" @click="hosIndex=ind">
									{{hos}}
								</view>
								<view  v-show="index==1" class="w-48 bg-unchecked text-nowrap mb-2 rounded-md py-1 text-center" v-for="(dep,inde) in li.dept" :key="inde" @click="deptIndex=inde" :class="inde==deptIndex?'bg-check':''">
									{{dep}}
								</view>
								
								<view class="text-nowrap mb-0 py-0  text-center" v-show="index==2" v-for="(img,imgInd) in li.imgList" :key="imgInd" @click="imgIndex=imgInd" >
									<image class="doctor-image" :src="imgIndex==imgInd?img.selectedIconPath:img.iconPath" mode=""></image>
								</view>
							</view>
						</view>
						<divider states="2"/>
					</view>
					<view class="py-2">
						<button class="rounded-md py-2 mx-4" type="primary" @click="screen">确定</button>
					</view>
				</view>
				
				
			</scroll-view>
		</uni-drawer>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				chooseIndex:0,
				chooseList:[{//抽屉数据
					name:"选择医院",
					hosList:["平顶山第一人民医院","郏县中医院","郏县妇幼保健院","平顶山微医医院"]
				},{
					name:"选择科室",
					dept:["内科","外科","儿科","神经科","一般护理","眼耳鼻喉科" ,"卫生保健科","中医","其它"],
				},{
					name:"问诊类型",
					imgList:[{
						iconPath: '/static/home/docList/ask1.png',
						selectedIconPath: '/static/home/docList/asked1.png',
					},{
						iconPath: '/static/home/docList/ask2.png',
						selectedIconPath: '/static/home/docList/asked2.png',
					},{
						iconPath: '/static/home/docList/ask3.png',
						selectedIconPath: '/static/home/docList/asked3.png',
					}]
				}],
				hosIndex:0,//医院数据
				deptIndex:0,//科室数据
				imgIndex:0,// 问诊类型
				deptList:[
					["内科","外科","儿科","神经科","一般护理","眼耳鼻喉科" ,"卫生保健科","中医","其它"],
					["内科","外科"],
					["儿科","神经科","一般护理","眼耳鼻喉科"],
					["外科","儿科","神经科","一般护理","眼耳鼻喉科" ,"卫生保健科"],
				],
				searchShow:false,
			};
		},
		watch: {
			hosIndex(newValue, oldValue) {
				this.chooseList[1].dept=this.deptList[newValue];
				this.deptIndex=0;
			}
		},
		onReachBottom(){
			uni.showToast({
				title: '触底加载',
				icon: 'none'
			})
		},
		methods:{
			// 展示抽屉筛选
			showDrawer() {
				this.hosIndex=0;//医院数据
				this.deptIndex=0;//科室数据
				this.imgIndex=0;// 问诊类型
				this.$refs.showRight.open();
			},
			// 关闭抽屉筛选
			closeDrawer() {
				this.$refs.showRight.close();
			},
			//下一步点击
			next(){
				uni.showToast({
					title: '下一步',
					icon: 'none'
				})
				this.docInfo();
			},
			docInfo(){
				uni.navigateTo({
					url:'/pages/home/consultation/consultation'
				})
			},
			//筛选
			screen(){
				uni.showToast({
					title: '筛选',
					icon: 'none'
				})
			},
			// 搜索
			search(res) {
				uni.showToast({
					title: '搜索：' + res.value,
					icon: 'none'
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	/deep/ .uni-searchbar__box{
		border: 2rpx solid #F2F6FE;
	}
</style>
